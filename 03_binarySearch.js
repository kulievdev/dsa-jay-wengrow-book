// must be ordered array

const binarySearch1 = (array, searchValue) => {
    let lowerBound = 0;
    let upperBound = array.length - 1;

    while (lowerBound <= upperBound) {
        let midpoint = Math.floor((upperBound + lowerBound) / 2);

        let valueAtMidpoint = array[midpoint];

        if (searchValue === valueAtMidpoint) {
            return midpoint;
        } else if (searchValue < valueAtMidpoint) {
            upperBound = midpoint - 1;
        } else if (searchValue > valueAtMidpoint) {
            lowerBound = midpoint + 1;
        }
    }
    return null;
};

console.log(
    binarySearch1([1, 3, 4, 5, 6, 7, 8, 10, 11, 13, 15, 17, 20, 22], 17)
);

// more simplified version

const binarySearch2 = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    let mid;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) return mid;

        arr[mid] > target ? (end = mid - 1) : (start = mid + 1);
    }

    return -1;
};

console.log(
    binarySearch2([1, 3, 4, 5, 6, 7, 8, 10, 11, 13, 15, 17, 20, 22], 17)
);
