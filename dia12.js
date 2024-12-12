function calculatePrice(ornaments) {
    let values = {
        "*": 1,
        "o": 5,
        "^": 10,
        "#": 50,
        "@": 100,
    }
    let total = 0;
    for (let i = 0; i <= ornaments.length - 1; i++) {
        if (ornaments[i] in values) {
            if (values[ornaments[i]] < values[ornaments[i + 1]]) {
                total += values[ornaments[i]] * -1
            } else {
                total += values[ornaments[i]]

            }
        } else {
            total = undefined;
            i = ornaments.length;
        }
    }
    return total;
}