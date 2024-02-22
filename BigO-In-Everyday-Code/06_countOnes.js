function countOnes(outerArray) {
    let count = 0;

    for (const innerArray of outerArray) {
        for (num of innerArray) {
            if (num === 1) {
                count += 1;
            }
        }
    }

    return count;
}

console.log(
    countOnes([
        [0, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 1],
        [1, 0]
    ])
); //7

// O(n)
