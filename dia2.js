// function createFrame(names) {
//     let maxLength = 0;
//     names.forEach(name => {
//         if (maxLength < name.length) {
//             maxLength = name.length;
//         }
//     })
//     let framework = "*".repeat(maxLength + 4) + "\n";
//     names.forEach(name => {
//         framework += "* " + name + " ".repeat((maxLength - name.length) + 1) + "*\n";
//     })
//     framework += "*".repeat(maxLength + 4);
//     return framework;
// }

function createFrame(names) {
    let maxLength = names.reduce((name1, name2) => Math.max(name1.length, name2.length), names[0]);
    let framework = "*".repeat(maxLength + 4) + "\n";
    names.forEach(name => {
        framework += "* " + name + " ".repeat((maxLength - name.length) + 1) + "*\n";
    })
    framework += "*".repeat(maxLength + 4);
    return framework;
}

function createFrame(names) {
    let maxLength = names.reduce((maxLen, name) => { return Math.max(maxLen, name.length);}, 0); 
    let framework = "*".repeat(maxLength + 4) + "\n";
    names.forEach(name => {
        framework += "* " + name + " ".repeat((maxLength - name.length) + 1) + "*\n";
    })
    framework += "*".repeat(maxLength + 4);
    return framework;
  }

console.log(maxLength(["a","bb","ccc"]));


