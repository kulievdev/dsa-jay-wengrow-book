function worldBuilder(array) {
    let collection = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                collection.push(array[i] + array[j]);
            }
        }
    }
    return collection;
}

console.log(worldBuilder(["a", "b", "c", "d"])); // ['ab', 'ac', 'ad','ba', 'bc', 'bd','ca', 'cb', 'cd','da', 'db', 'dc']

// O(n^2)
