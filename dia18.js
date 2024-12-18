function findInAgenda(agenda, phone) {
  let phones = [];
  let names = [];
  let addresses = [];
  for (let i = 0; i < agenda.length; i++) {
    let actualCharacter = agenda[i];
    switch (actualCharacter) {
      case "+":
        let space = agenda.indexOf(" ", i);
        let enter = agenda.indexOf("\n", i);
        space = (space == -1) ? agenda.length : space
        enter = (enter == -1) ? agenda.length : enter
        if (space > enter) {
          phones.push(agenda.substring(i, enter))
          i = enter;
        } else {
          phones.push(agenda.substring(i, space))
          i = space;
        }
        break;
      case "<":
        let less = agenda.indexOf(">", i);
        names.push(agenda.substring(i + 1, less));
        i = less;
        break;
    }
    if (/[A-Z]/.test(actualCharacter)) {
      let more = agenda.indexOf("<", i);
      let sum = agenda.indexOf("+", i);
      more = (more == -1) ? agenda.length : more
      sum = (sum == -1) ? agenda.length : sum
      let lastCharacter = 0;
      if (more > sum) {
        lastCharacter = sum
      } else if (more < sum) {
        lastCharacter = more
      } else {
        lastCharacter = agenda.length;
      }
      addresses.push(agenda.substring(i, lastCharacter))
      i = lastCharacter - 1;
    }
  }
  let numberOfPhones = phones.filter(number => number.includes(phone));
  if (numberOfPhones.length == 1) {
    let position = phones.indexOf(numberOfPhones[0]);
    return { name: names[position], address: (addresses[position]).trim() }
  }
  return null;
}
function findInAgenda2(agenda, phone) {
  let enters = agenda.split('\n');
  let result = null
  for (let i = 0; i < enters.length; i++) {
    if (enters[i].includes(phone)) {
      let name = enters[i].substring(enters[i].indexOf("<") + 1, enters[i].indexOf(">"));
      let lineSinName = enters[i].replace(enters[i].substring(enters[i].indexOf("<") , enters[i].indexOf(">")+1),"");
      let address = lineSinName.split(' ').filter(element => !element.includes("+")).join(" ");
      result = { name: name, address: address.trim() };
      break;
    }
  }
  return Object.keys(result).length > 0? result : null;
}
function findInAgenda(agenda, phone) {
  let enters = agenda.split('\n');
  let result = {};
  let accumulator = 0;
  for (let i = 0; i < enters.length; i++) {
    if (enters[i].includes(phone)) {
      accumulator++;
      let startName = enters[i].indexOf('<') + 1;
      let endName = enters[i].indexOf('>');
      let name = enters[i].substring(startName, endName);
      let lineWithoutName = enters[i].slice(0, startName - 1) + enters[i].slice(endName + 1);
      let address = lineWithoutName.split(' ').filter(element => !element.includes("+")).join(' ').trim();
      result = { name, address };
    }
  }

  return accumulator === 1 ? result : null;
}
const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

console.log(findInAgenda2(agenda, '34-600-123-456'))
// { name: "Juan Perez", address: "Calle Gran Via 12" }

console.log(findInAgenda2(agenda, '600-987'))
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

console.log(findInAgenda2(agenda, '111'))
// null
// Explanation: No results

console.log(findInAgenda2(agenda, '1'))
// null
// Explanation: Too many results