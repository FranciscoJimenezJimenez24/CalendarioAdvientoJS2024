function inBox(box) {
    if (box.some(element => element.includes("*")) && (!box[0].includes("*") && !box[box.length - 1].includes("*"))) {
      return !box.some((element) => element[0] == "*" || element[element.length - 1] == "*")
    } else {
      return false;
    }
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