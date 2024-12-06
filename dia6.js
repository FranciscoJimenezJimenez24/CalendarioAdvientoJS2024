function inBox(box) {
    let perfect = true;
    if (box.some(element => element.includes("*") && (!box[0].includes("*") && !box[box.length - 1].includes("*")))) {
        box.map(
            (element) => {
                if (element[0] == "*" || element[element.length - 1] == "*") {
                    perfect = false;
                }
            }
        )
    } else {
        perfect = false;
    }
    return perfect;
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