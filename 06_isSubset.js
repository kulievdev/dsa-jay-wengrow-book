// Brut force approach

/*const isSubset = (arr1, arr2) => {
    let largerArr, smallerArr;
    if (arr1.length > arr2.length) {
        largerArr = arr1;
        smallerArr = arr2;
    } else {
        largerArr = arr2;
        smallerArr = arr1;
    }

    for (let i = 0; i < smallerArr.length; i++) {
        let foundMatch = false;
        for (let j = 0; j < largerArr.length; j++) {
            if (smallerArr[i] === largerArr[j]) {
                foundMatch = true;
                break;
            }
        }
        if (!foundMatch) return foundMatch;
    }

    return true;
}; */

// O(n * m)

function isSubset(array1, array2) {
    let hashTable = {};

    let largerArray;
    let smallerArray;

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
        if (!hashTable[num]) {
            return false;
        }
    }
    return true;
}

console.log(isSubset(["a", "b", "c", "d", "e", "f"], ["b", "d", "f"])); // true
console.log(isSubset(["a", "b", "c", "d", "e", "f"], ["b", "d", "f", "h"])); // false

// O(n)
