function inBox(box) {
    let out = false;
    if (box.some(element => element.includes("*"))){
        let i = 0;
        while (i < box.length && !out) {
            let j = 0;
            if (i == 0 || i == box.length - 1) {
                if (box[i].includes("*")) {
                    out = true;
                }
            }else{
                while (j < box[i].length && !out) {
                    if (j == 0 || j == box[i].length - 1) {
                        if (box[i][j] == "*") {
                            out = true;
                        }
                    }
                    j++;
                }
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