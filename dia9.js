function moveTrain(board, mov) {
    let result = ""
    for (let i = 0; i < board.length; i++) {
        if (board[i].includes("@")) {
            let locomotive = board[i].indexOf("@");
            if (locomotive + 1 == board[i].length && mov == "R") {
                result = "crash";
            } else {
                if (i + 1 == board.length && mov == "D") {
                    result = "crash";
                } else {
                    if (i - 1 == -1 && mov == "U") {
                        result = "crash";
                    } else {
                        if (locomotive - 1 == -1 && mov == "L") {
                            result = "crash";
                        } else {
                            switch (mov) {
                                case "L":
                                    switch (board[i][locomotive - 1]) {
                                        case "·":
                                            result = "none";
                                            break;
                                        case "*":
                                            result = "eat";
                                            break;
                                        case "o":
                                            result = "crash";
                                            break;
                                    }
                                    break;
                                case "R":
                                    switch (board[i][locomotive + 1]) {
                                        case "·":
                                            result = "none";
                                            break;
                                        case "*":
                                            result = "eat";
                                            break;
                                        case "o":
                                            result = "crash";
                                            break;
                                    }
                                    break;
                                case "U":
                                    switch (board[i - 1][locomotive]) {
                                        case "·":
                                            result = "none";
                                            break;
                                        case "*":
                                            result = "eat";
                                            break;
                                        case "o":
                                            result = "crash";
                                            break;
                                    }
                                    break;
                                case "D":
                                    switch (board[i + 1][locomotive]) {
                                        case "·":
                                            result = "none";
                                            break;
                                        case "*":
                                            result = "eat";
                                            break;
                                        case "o":
                                            result = "crash";
                                            break;
                                    }
                                    break;
                            }
                        }
                    }
                }
            }
            i = board.length;
        }
    }
    return result;
}

const board = ['·····', '*····', '@····', 'o····', 'o····']

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha