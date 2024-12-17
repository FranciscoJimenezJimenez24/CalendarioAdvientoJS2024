function detectBombs(grid) {
    let numberBombs = []
    for (let i = 0; i < grid.length; i++) {
        let bombsPosition = []
        for (let j = 0; j < grid[i].length; j++) {
            let bombs = 0;
            grid[i - 1]?.[j - 1] == true ? bombs++ : bombs = bombs;
            grid[i - 1]?.[j] == true ? bombs++ : bombs = bombs;
            grid[i - 1]?.[j + 1] == true ? bombs++ : bombs = bombs;
            grid[i]?.[j - 1] == true ? bombs++ : bombs = bombs;
            grid[i]?.[j + 1] == true ? bombs++ : bombs = bombs;
            grid[i + 1]?.[j - 1] == true ? bombs++ : bombs = bombs;
            grid[i + 1]?.[j] == true ? bombs++ : bombs = bombs;
            grid[i + 1]?.[j + 1] == true ? bombs++ : bombs = bombs;
            bombsPosition.push(bombs);
        }
        numberBombs.push(bombsPosition);
    }
    return numberBombs;
}

console.log(detectBombs([
    [true, true],
    [true, true],
    [false, false]
]))