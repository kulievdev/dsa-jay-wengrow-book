function median(array) {
    const middle = Math.floor(array.length / 2);

    // If array has even amount of numbers: Finding the median of a set of numbers when there is an even count of numbers involves taking the average of the two middle numbers.
    if (array.length % 2 === 0) {
        return array[middle - 1] + array[middle] / 2;
    } else {
        return array[middle];
    }
}

console.log(median([10, 26, 38, 100, 188])); // 25
console.log(median([2, 6, 25, 120, 160, 180, 248, 300])); // 200

// O(1)
