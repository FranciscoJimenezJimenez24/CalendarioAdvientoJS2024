function organizeShoes(shoes) {
    let pairsShoes = [];
    shoes.map(
        (shoei, i) => {
            shoes.map(
                (shoej, j) => {
                    if (shoei.size == shoej.size && shoei.type != shoej.type) {
                        pairsShoes.push(shoei.size);
                        shoes.splice(j, 1);
                        shoes.splice(i, 1);
                    }
                }
            )
        }
    );
    return pairsShoes;
}

const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
];

console.log(organizeShoes(shoes));
// [38, 42]

const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
];

console.log(organizeShoes(shoes2));
// [38, 38]
