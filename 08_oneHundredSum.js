// A "100-sum array" meets the following criteria:

// Its first and last numbers add up to 100.
// Its second and second-to-last numbers add up to 100.
// Its third and third-to-last numbers add up to 100, and so on.

function oneHundredSum(array) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while (leftIndex < array.length / 2) {
        if (array[leftIndex] + array[rightIndex] !== 100) {
            return false;
        }
        leftIndex++;
        rightIndex--;
    }
    return true;
}

console.log(oneHundredSum([50, 50, 50, 50, 50, 50])); // true
console.log(oneHundredSum([10, 50, 50, 20])); // false
