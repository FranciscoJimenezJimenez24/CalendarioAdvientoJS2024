function compile(instructions) {
    let comands = {}
    if (instructions[0].includes("MOV")) {
        comands[instructions[0].split(" ")[2]] = parseInt(instructions[0].split(" ")[1]);
    } else {
        comands[instructions[0].split(" ")[1]] = 0;
    }
    for (let i = 0; i < instructions.length; i++) {
        const instruction = instructions[i].split(" ");
        const command = instruction[0];
        const letter = instruction[1];
        const value = instruction[2];

        switch (command) {
            case "INC":
                if (letter in comands) {
                    comands[letter]++;
                } else {
                    comands[letter] = 1;
                }
                break;
            case "DEC":
                if (letter in comands) {
                    comands[letter]--;
                } else {
                    comands[letter] = -1;
                }
                break;
            case "JMP":
                if (letter in comands && comands[letter] === 0) {
                    i = parseInt(value) - 1; // Salto a la instrucción con índice value - 1
                }
                break;
            case "MOV":
                if (letter in comands) {
                    comands[instruction[2]] = comands[letter]; // Mover el valor de un registro a otro
                }
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