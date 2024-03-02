function intersection(array1, array2) {
    let largerArray;
    let smallerArray;
    let hashTable = {};
    let intersections = [];

    if (array1.length > array2.length) {
        largerArray = array1;
        smallerArray = array2;
    } else {
        largerArray = array2;
        smallerArray = array1;
    }

    for (const num of largerArray) {
        hashTable[num] = true;
    }

    for (const num of smallerArray) {
        if (hashTable[num]) {
            intersections.push(num);
        }
    }

    return intersections;
}

console.log(intersection([1, 2, 8, 10, 22, 36], [2, 4, 10, 77])); // [2, 10]

// O(n)
