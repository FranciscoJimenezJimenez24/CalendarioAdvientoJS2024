function compile(instructions) {
    let number = instructions[0].includes("MOV") ? parseInt(instructions[0].split(' ')[1].trim()) : 0;
    let letter = "";
    if (number >= 0 && instructions[0].includes("MOV")) {
        letter = instructions[0][6];
    } else if (number < 0 && instructions[0].includes("MOV")) {
        letter = instructions[0][7];
    } else {
        letter = instructions[0][4];
    }
    for (let i = 0; i < instructions.length; i++) {
        switch (instructions[i].substring(0, 3)) {
            case "INC":
                if (letter == instructions[i][4]) {
                    number++;
                }
                break;
            case "DEC":
                if (letter == instructions[i][4]) {
                    number--;
                }
                break;
            case "JMP":
                if (letter == instructions[i][4]) {
                    i = number == 0 ? i = parseInt(instructions[i][6]) - 1 : i = i;
                }
                break;
            case "MOV":
                if (letter == instructions[i][4]) {
                    letter = instructions[i][6];
                }
        }
    }
    return number;
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