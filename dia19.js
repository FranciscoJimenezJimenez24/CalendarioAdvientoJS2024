function distributeWeight(weight) {
    let boxes = [];
    while (weight > 0){
      while (weight>=10){
        weight -= 10;
        boxes.push(10); 
      }
      while (weight>=5){
        weight -= 5;
        boxes.push(5); 
      }
      while (weight>=2){
        weight -= 2;
        boxes.push(2); 
      }
      while (weight>=1){
        weight -= 1;
        boxes.push(1); 
      }
    }
    boxes.sort((a,b) => a-b);
    let presents = "";
    for (let i = 0;i<boxes.length;i++){
      switch (boxes[i]){
        case 1:
          presents+=" _ \n|_|";
          break;
        case 2:
          presents+=" ___ \n|___|";
          break;
        case 5:
          presents+=" _____ \n|     |\n|_____|";
          break;
        case 10:
          presents+=" _________ \n|         |\n|_________|";
          break;
      }
    }
  
    return presents;
  }
        