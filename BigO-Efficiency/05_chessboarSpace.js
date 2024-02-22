function chessboardSpace(numberOfGrains) {
    let chessboardSpaces = 1;
    let placedGrains = 1;

    while (placedGrains < numberOfGrains) {
        placedGrains *= 2;
        chessboardSpaces += 1;
    }

    return chessboardSpaces;
}

console.log(chessboardSpace(10)); // 5
console.log(chessboardSpace(25)); // 6

// O(Log N)
