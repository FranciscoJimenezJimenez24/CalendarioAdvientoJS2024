function drawRace(indices, length) {
    let races = [];
    for (let i = 0; i < indices.length; i++) {
        races.push(" ".repeat(indices.length - (i + 1)) + "~".repeat(length) + " /" + (i + 1) + "\n");
        let race = races[i].split("");
        if (indices[i] < 0) {
            race[((length + (indices.length - i)) + indices[i]) - 1] = "r";
        } else if (indices[i] > 0) {
            race[((indices.length - i) + indices[i]) - 1] = "r";
        }
        race = race.join("");
        races.pop();
        races.push(race);
    }
    return races.join("").slice(0, -1);
}