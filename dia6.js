function inBox(box) {
    let out = false;
    let exists = false;
    let i = 0;
    while (i < box.length && !exists) {
        if (i == 0 || i == box.length - 1) {
            if (box[i].includes("*")) {
                i = box.length;
            }
        } else {
            if (box[i].includes("*")) {
                exists = true;
            }
        }
        i++;
    }
    i = 0;
    if (exists) {
        while (i < box.length && !out) {
            let j = 0;
            while (j < box[i].length && !out) {
                if (j == 0 || j == box[i].length - 1) {
                    if (box[i][j] == "*") {
                        out = true;
                    }
                }
                j++;
            }
            i++;
        }
        if (out) {
            return false;
        } else {
            return true;
        }
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