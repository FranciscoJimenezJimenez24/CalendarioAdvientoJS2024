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
        presents += boxes[i - 1] < boxes[i] ? " ___ \n|___|".substring(3, " ___ \n|___|".length) : " ___ \n|___|";
        break;
      case 5:
        presents += boxes[i - 1] < boxes[i] ? " _____ \n|     |\n|_____|".substring(6, " _____ \n|     |\n|_____|".length) : " _____ \n|     |\n|_____|";
        break;
      case 10:
        presents += boxes[i - 1] < boxes[i] ? " _________ \n|         |\n|_________|".substring(11, " _________ \n|         |\n|_________|".length) : " _________ \n|         |\n|_________|";
        break;
    }
  }

  return presents;
}
