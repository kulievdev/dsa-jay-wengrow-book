// This function finds the greatest product of three numbers from a given array. Array includes at least three numbers.

function largestProduct(array) {
    let largestProductSoFar = array[0] * array[1] * array[2];

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            for (let k = j + 1; k < array.length; k++) {
                if (array[i] * array[j] * array[k] > largestProductSoFar) {
                    largestProductSoFar = array[i] * array[j] * array[k];
                }
            }
        }
    }
    return largestProductSoFar;
}

console.log(largestProduct([2, 3, 5, 4])); // 60

// O(n^3)
