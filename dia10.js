function compile(instructions) {
    let comands = {}
    for (let i = 0; i < instructions.length; i++) {
        const instruction = instructions[i].split(" ");
        const command = instruction[0];
        const argument1 = instruction[1];
        const argument2 = instruction[2];

        switch (command) {
            case "INC":
                comands[argument1] = (comands[argument1] ?? 0) + 1;
                break;

            case "DEC":
                comands[argument1] = (comands[argument1] ?? 0) - 1;
                break;
            case "JMP":
                if ((comands[argument1] ?? 0) === 0) {
                    i = parseInt(argument2) - 1;
                }
                break;
            case "MOV":
                comands[argument2] = isNaN(argument1) ? comands[argument1] ?? 0 : parseInt(argument1);
                break;
        }
    }
    const entries = Object.entries(comands);
    return entries[entries.length - 1][1];
}

const instructions = [
    'MOV -1 C', // copia -1 al registro 'C',
    'INC C', // incrementa el valor del registro 'C'
    'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
    'MOV C A', // copia el registro 'C' al registro 'a',
    'INC A' // incrementa el valor del registro 'a'
]

console.log(compile(instructions)) // -> 2

console.log(compile(["INC C", "DEC B", "MOV C Y", "INC Y"]));
console.log(compile(["MOV 5 B", "DEC B", "MOV B A", "INC A"]));