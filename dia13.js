function isRobotBack(moves) {
    let x = 0; let y = 0;
    moves = moves.split("");
    for (let i = 0;i<moves.length;i++){
        if (moves[i] == "!"){
            moves[i] = moves[i]+moves[i+1];
            moves.splice(i+1,1); 
            switch (moves[i]){
                case "!L": moves[i]="R"; break;
                case "!R": moves[i]="L"; break;
                case "!D": moves[i]="U"; break;
                case "!U": moves[i]="D"; break;
            }
        }
    }
    for (let i = moves.length-1;i>=0;i--){
        if (moves[i] == "*"){
            moves[i] = moves[i]+moves[i+1];
            moves.splice(i+1,1); 
        }else if (moves[i] == "?"){
            if (moves[i-1] == moves[i+1]){
                moves[i] = moves[i+1];
                moves.splice(i-1,1);
                moves.splice(i,1); 
            }else{
                moves.splice(i+1,1); 
                moves.splice(i,1)
                moves.splice(i-1,1);
            }
        }
    }
    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case "L": x--;break;
            case "R": x++;break;
            case "D": y--;break;
            case "U": y++;break;
            case "*L": x -= 2; break;
            case "*R": x += 2; break;
            case "*D": y -= 2; break;
            case "*U": y += 2; break;
        }
    }
    if (x == 0 && y == 0){
        return true;
    }else{
        return [x,y];
    }
}

console.log(isRobotBack('R'))// [1, 0]
console.log(isRobotBack('RL'))  // true
console.log(isRobotBack('RLUD'))  // true
console.log(isRobotBack('*RU'))// [2, 1]
console.log(isRobotBack('R*U'))// [1, 2]
console.log(isRobotBack('LLL!R'))// [-4, 0]
console.log(isRobotBack('R?R'))// [1, 0]
console.log(isRobotBack('U?D'))  // true
console.log(isRobotBack('R!L')) // [2,0]
console.log(isRobotBack('U!D')) // [0,2]
console.log(isRobotBack('R?L'))  // true
console.log(isRobotBack('U?U')) // [0,1]
console.log(isRobotBack('*U?U')) // [0,2]
console.log(isRobotBack('U?D?U')) // true

// Ejemplos paso a paso:
console.log(isRobotBack('R!U?U')) // [1,0]
// 'R'  -> se mueve a la derecha 
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

console.log(isRobotBack('UU!U?D')) // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'