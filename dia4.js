function createXmasTree(height, ornament) {
    let tree = "";
    let accumulator = 1;
    for (let i = 1; i <= height; i++) {
        tree += "_".repeat(height - i) + ornament.repeat(accumulator) + "_".repeat(height - i) + "\n";
        accumulator += 2;
    }
    tree += ("_".repeat(height - 1) + "#" + "_".repeat(height - 1) + "\n").repeat(2).slice(0, -1);
    return tree;
}
const tree = createXmasTree(5, '*')
console.log(tree)