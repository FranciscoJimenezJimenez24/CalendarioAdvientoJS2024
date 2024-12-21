function treeHeight(tree) {
    if (tree == null) return 0;
    let left = tree.left != null ? treeHeight(tree.left) : 0;
    let right = tree.right != null ? treeHeight(tree.right) : 0;
    return Math.max(left, right) + 1;
}
function treeHeight(tree) {
    if (tree == null) return 0;
    let left = treeHeight(tree.left);
    let right = treeHeight(tree.right);
    return Math.max(left, right) + 1;
}
const tree = {
    value: '🎁',
    left: {
        value: '🎄',
        left: {
            value: '⭐',
            left: null,
            right: null
        },
        right: {
            value: '🎅',
            left: null,
            right: null
        }
    },
    right: {
        value: '❄️',
        left: null,
        right: {
            value: '🦌',
            left: null,
            right: null
        }
    }
}

// Representación gráfica del árbol:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Llamada a la función
console.log(treeHeight(tree));
// Devuelve: 3

const unbalancedTree = {
    value: '🎁',
    left: {
        value: '🎄',
        left: {
            value: '⭐',
            left: null,
            right: null
        },
        right: null
    },
    right: null
};

console.log(treeHeight(unbalancedTree)); // Devuelve: 3