function intersection(array1, array2) {
    const result = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                result.push(array1[i]);
                break;
            }
        }
    }
    return result;
}

console.log(intersection([3, 1, 4, 2], [4, 5, 3, 6])); // [3, 4]

// O(n * m)
