function drawTable(data) {
    let maxLengthHead = [0, 0];
    let maxLengthAtribute = [0, 0];
    let maxLength = [0, 0];
    let contador = 0;
    for (const element of data) {
        for (const atribute in element) {
            if (maxLengthHead[contador] < atribute.length){
                maxLengthHead[contador] = atribute.length;
            }
            if (maxLengthAtribute[contador] < element[atribute].toString().length){
                maxLengthAtribute[contador] = element[atribute].toString().length;
            }
            contador++;
        }
        contador = 0;
    }
    if (maxLengthHead[0] > maxLengthAtribute[0]) {
        maxLength[0] = maxLengthHead[0];
    } else {
        maxLength[0] = maxLengthAtribute[0];
    }
    if (maxLengthHead[1] > maxLengthAtribute[1]) {
        maxLength[1] = maxLengthHead[1];
    } else {
        maxLength[1] = maxLengthAtribute[1];
    }
    let table = "+" + "-".repeat(maxLength[0] + 2) + "+"+"-".repeat(maxLength[1] + 2) + "+\n";
    for (const element of data) {
        for (const atribute in element) {
            table += "| " + (atribute.charAt(0).toUpperCase() + atribute.slice(1)) + " ".repeat((maxLength[contador] - atribute.length) + 1);
            contador++;
        }
        contador = 0;
        break;
    }
    table += "|\n"+  "+" + "-".repeat(maxLength[0] + 2) + "+"+"-".repeat(maxLength[1] + 2) + "+\n";
    for (const element of data) {
        for (const atribute in element) {
            table += "| " + element[atribute] + " ".repeat((maxLength[contador] - element[atribute].toString().length)+1)
            contador++;
        }
        contador = 0;
        table += "|\n"
    }
    table += "+" + "-".repeat(maxLength[0] + 2) + "+"+"-".repeat(maxLength[1] + 2) + "+";
    return table;
}

console.log(drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
]))