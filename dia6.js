function inBox(box) {
  if (box.some(element => element.includes("*")) && (!box[0].includes("*") && !box[box.length - 1].includes("*"))) {
    return !box.some((element) => element[0] == "*" || element[element.length - 1] == "*")
  } else {
    return false;
  }
}
function inBox(box) {
  let boolean = false;
  if (box[0].includes("*") || box[box.length - 1].includes("*")) {
    boolean = false;
  } else {
    if (!box.some(element => element.includes("*"))) {
      boolean = false;
    } else {
      for (let i = 1; i < box.length - 1; i++) {
        if (box[i][0] == "*" || box[i][box[i].length - 1] == "*") {
          boolean = false;
          i = box.length;
        }
      }
    }
  }
  return boolean;
}
function inBox(box) {
  let isInBox = false;
  if (!box.some(element => element.includes("*"))) {
    isInBox = false;
  } else {
    for (let i = 1; i < box.length - 1; i++) {
      if (box[i].includes("*")) {
        isInBox = true;
        if (box[i][0] == "*" || box[i][box[i].length - 1] == "*") {
          isInBox = false;
        }
        i = box.length;
      }
    }
  }
  return isInBox;
}
console.log(inBox([
  "###",
  "#*#",
  "###"
])); // -> true


console.log(inBox([
  "####",
  "#* #",
  "#  #",
  "####"
])) // ➞ true

console.log(inBox([
  "*####",
  "#   #",
  "#  #*",
  "####"
])) // ➞ false

console.log(inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
])); // -> false

console.log(inBox([
  "#*#",
  "###",
  "###"
])) // ->false