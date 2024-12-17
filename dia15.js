function drawTable2(data) {
    const keys = Object.keys(data[0])
    const maxLength = keys.map(key =>
        Math.max(key.length, ...data.map(row => String(row[key]).length))
    );
    let table = "";
    for (let i = 0;i<maxLength.length; i++) {
        table += "+" + "-".repeat(maxLength[i] + 2)
    }
    table += "+\n";
    let accumulator = 0;
    for (const element of data) {
        for (const atribute in element) {
            table += "| " + (atribute.charAt(0).toUpperCase() + atribute.slice(1)) + " ".repeat((maxLength[accumulator] - atribute.length) + 1);
            accumulator++;
        }
        table += "|\n"
        accumulator = 0;
        break;
    }
    for (let i = 0;i<maxLength.length; i++) {
        table += "+" + "-".repeat(maxLength[i] + 2) 
    }
    table += "+\n";
    for (const element of data) {
        for (const atribute in element) {
            table += "| " + element[atribute] + " ".repeat((maxLength[accumulator] - element[atribute].toString().length) + 1)
            accumulator++;
        }
        accumulator = 0;
        table += "|\n"
    }
    for (let i = 0;i<maxLength.length; i++) {
        table += "+" + "-".repeat(maxLength[i] + 2)
    }
    table += "+";
    return table;
}

// console.log(drawTable([
//     { name: 'Alice', city: 'London' },
//     { name: 'Bob', city: 'Paris' },
//     { name: 'Charlie', city: 'New York' }
// ]))
console.log(drawTable2([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
]))