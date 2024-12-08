function fixPackages(packages) {
    let arrayC = [];
    let arrayU = [];
    let contador = 0;
    for (let i = 0; i < packages.length; i++) {
        if (packages[i] == "(") {
            arrayC.push(i);
            contador++;
        } else if (packages[i] == ")") {
            arrayU.push(i);
        }
    }
    let maxLength = arrayC.reduce((maxLen, index) => { return Math.max(maxLen, index); }, 0);
    if ((arrayU.every(element => element > maxLength)) == false) {
        let firstElementC = arrayC.shift();
        let lastElementU = arrayU.pop();
        for (let i = 0; i < (contador - 1); i++) {
            let string = "";
            for (let j = arrayC[(contador - 1) - i] + 1; j <= arrayU[i] - 1; j++) {
                string += packages[j];
            }
            packages = packages.replace(string, string.split("").reverse().join(""));
        }
        let string = "";
        for (let i = firstElementC; i < lastElementU; i++) {
            string += packages[i];
        }
        packages = packages.replace(string, string.split("").reverse().join(""));
    } else {
        for (let i = 0; i < contador; i++) {
            let string = "";
            for (let j = arrayC[(contador - 1) - i] + 1; j <= arrayU[i] - 1; j++) {
                string += packages[j];
            }
            packages = packages.replace(string, string.split("").reverse().join(""));
        }
    }
    packages = packages.replaceAll("(", "");
    packages = packages.replaceAll(")", "");
    return packages;
}
console.log(fixPackages('a(cb)de'));
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

console.log(fixPackages('a(bc(def)g)h'));
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

console.log(fixPackages('abc(def(gh)i)jk'));
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

console.log(fixPackages('a(b(c))e'));
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"

console.log(fixPackages('ab(cd(ef)gh(ij)k)l')); // ➞ "abkjihgfedc"
