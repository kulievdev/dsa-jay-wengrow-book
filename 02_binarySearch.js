// Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item until you've narrowed down the possible locations to just one.

// Here's how binary search works:

// 1. Start with the entire sorted list.
// 2. Divide the list in half and check if the middle element is equal to the target.
// 3. If the middle element is equal to the target, return its index.
// 4. If the middle element is greater than the target, repeat the process on the left half of the list.
// 5. If the middle element is less than the target, repeat the process on the right half of the list.
// 6. Continue this process until the target is found or the search space is empty.

// Time Complexity - O(log n)

// Binary search is a very efficient algorithm with a time complexity of O(log n), where n is the number of elements in the list.

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
    return -1;
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
