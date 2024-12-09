function fixPackages(packages) {
    let accumulator = packages.split("(").length - 1;
    while (accumulator > 0) {
        let c = packages.indexOf("(");
        let parenthesis = false;
        while (parenthesis == false) {
            for (let i = (c + 1); i < packages.length; i++) {
                if (packages[i] == "(") {
                    c = i;
                    i = packages.length;
                } else if (packages[i] == ")") {
                    let string = ""
                    for (let j = (c + 1); j < i; j++) {
                        string += packages[j];
                    }
                    packages = packages.slice(0, i) + packages.slice(i + 1);
                    packages = packages.slice(0, c) + packages.slice(c + 1);
                    packages = packages.replace(string, string.split("").reverse().join(""));
                    parenthesis = true;
                    i = packages.length;
                }
            }
        }
        accumulator--;
    }
    return packages;
}
function fixPackages(packages) {
    while (packages.includes("(")) {
        let lastC = packages.lastIndexOf("(")
        let firstU = packages.indexOf(")", lastC);
        let string = "";
        for (let j = lastC + 1; j < firstU; j++) {
            string += packages[j];
        }
        packages = packages.slice(0, firstU) + packages.slice(firstU + 1);
        packages = packages.slice(0, lastC) + packages.slice(lastC + 1);
        packages = packages.replace(string, string.split("").reverse().join(""));
    }
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
