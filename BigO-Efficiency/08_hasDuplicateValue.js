function hasDuplicateValue(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j && array[i] === array[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(hasDuplicateValue([1, 8, 9, 10, 8])); // true
console.log(hasDuplicateValue([1, 5, 9, 10, 8])); // false

// O(n^2)
