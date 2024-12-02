function createFrame(names) {
    let maxLength = 0;
    names.forEach(name => {
        if (maxLength < name.length) {
            maxLength = name.length;
        }
    })
    let framework = "*".repeat(maxLength + 4) + "\n";
    names.forEach(name => {
        framework += "* " + name + " ".repeat((maxLength - name.length) + 1) + "*\n";
    })
    framework += "*".repeat(maxLength + 4);
    return framework;
}

createFrame(["midu"]);

