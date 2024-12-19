function distributeWeight(weight) {
  let boxes = [];
  while (weight > 0) {
    while (weight >= 10) {
      weight -= 10;
      boxes.push(10);
    }
    while (weight >= 5) {
      weight -= 5;
      boxes.push(5);
    }
    while (weight >= 2) {
      weight -= 2;
      boxes.push(2);
    }
    while (weight >= 1) {
      weight -= 1;
      boxes.push(1);
    }
  }
  boxes.sort((a, b) => a - b);
  let presents = "";
  for (let i = 0; i < boxes.length; i++) {
    switch (boxes[i]) {
      case 1:
        presents += " _ \n|_|";
        break;
      case 2:
        if (boxes[i - 1] == boxes[i]) {
          presents += "\n|___|";
        } else if (boxes[i - 1] < boxes[i]) {
          presents += " ___\n|___|".substring((boxes[i - 1]) + 2, " ___ \n|___|".length);
        } else {
          presents += " ___ \n|___|";
        }
        break;
      case 5:
        if (boxes[i - 1] == boxes[i]) {
          presents += "\n|     |\n|_____|";
        } else if (boxes[i - 1] < boxes[i]) {
          if (boxes[i - 1] % 2 == 0) {
            presents += " _____\n|     |\n|_____|".substring((boxes[i - 1] + 3), " _____ \n|     |\n|_____|".length);
          } else {
            presents += " _____\n|     |\n|_____|".substring((boxes[i - 1] + 2), " _____ \n|     |\n|_____|".length);
          }
        } else {
          presents += " _____ \n|     |\n|_____|";
        }
        break;
      case 10:
        if (boxes[i - 1] == boxes[i]) {
          presents += "\n|         |\n|_________|";
        } else if (boxes[i - 1] < boxes[i]) {
          presents += " _________\n|         |\n|_________|".substring((boxes[i - 1]) + 2, " _________ \n|         |\n|_________|".length);
        } else {
          presents += " _________ \n|         |\n|_________|";
        }
        break;
    }
  }
  return presents;
}
console.log(distributeWeight(1))
// Devuelve:
//  _
// |_|

console.log(distributeWeight(2))
// Devuelve:
//  ___
// |___|

console.log(distributeWeight(3))
// Devuelve:
//  _
// |_|_
// |___|

console.log(distributeWeight(4))
// Devuelve:
//  ___
// |___|
// |___|

console.log(distributeWeight(5))
// Devuelve:
//  _____
// |     |
// |_____|

distributeWeight(6)
// Devuelve:
//  _
// |_|___
// |     |
// |_____|