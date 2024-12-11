function decodeFilename(filename) {
    let first_ = filename.indexOf("_");
    let lastPoint = filename.lastIndexOf(".");
    return filename.substring(first_ + 1, lastPoint);
}