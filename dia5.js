function organizeShoes(shoes) {
    let pairsShoes = [];
    for (let i = 0; i < shoes.length; i++) {
        for (let j = i; j < shoes.length; j++) {
            if (shoes[i].size == shoes[j].size && shoes[i].type != shoes[j].type) {
                pairsShoes.push(shoes[i].size)
                j = shoes.length;
                shoes.splice(j,1);
                shoes.splice(i,1);
                
            }
        }
    }
    return pairsShoes;
}