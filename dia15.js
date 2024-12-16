function drawTable(data) {
    let maxLength = 0;
    for (const element of data) {
        for (const atribute in element){
            if (maxLength < atribute.length){
                maxLength = atribute.length
            }
            if (element[atribute].length > maxLength){
                maxLength = element[atribute].length;
            }
        }
    }
    let table = ("+" + "-".repeat(maxLength+2)).repeat(2) + "+\n";
    for (const element of data) {
        for (const atribute in element){
            table += "| "+(atribute.charAt(0).toUpperCase() + atribute.slice(1))+" ".repeat((maxLength-atribute.length)+1);
        }
        break;
    }
    table += "|\n" + ("+" + "-".repeat(maxLength+2)).repeat(2) + "+\n";
    for (const element of data) {
        for (const atribute in element){
            if (isNaN(element[atribute])){
                table += "| "+element[atribute]+" ".repeat((maxLength-element[atribute].length)+1)
            }else{
                table += "| "+element[atribute]+" ".repeat((maxLength-(element[atribute]).toString.length))
            }
        }
        table += "|\n"
    }
    table += ("+" + "-".repeat(maxLength+2)).repeat(2)+"+";
    return table;
}

console.log(drawTable([
    { name: 'Alice', city: 'London' },
    // { name: 'Bob', city: 'Paris' },
    // { name: 'Charlie', city: 'New York' }
  ]))