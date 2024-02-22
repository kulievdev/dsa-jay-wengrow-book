// Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one element at a time. It is a comparison-based algorithm that works by repeatedly taking the next element from the unsorted part of the array and inserting it into its correct position within the sorted part of the array.

// Here's how the insertion sort algorithm typically works:

// 1. Start with the second element (index 1) and consider it as a key.
// 2. Compare this key with the elements to its left in the sorted part of the array.
// 3. Move the elements greater than the key one position to the right.
// 4. Insert the key into the correct position in the sorted part of the array.
// 5. Repeat steps 2-4 for each element in the array until the entire array is sorted.

// Time Complexity - O(n^2)

// The process is analogous to how a person might sort a hand of playing cards by repeatedly picking up a card and inserting it into its correct position among the already sorted cards.

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let tempValue = arr[i];
        let position = i - 1;
        while (position >= 0) {
            if (arr[position] > tempValue) {
                arr[position + 1] = arr[position];
                position = position - 1;
            } else {
                break;
            }
        }
        arr[position + 1] = tempValue;
    }
    return arr;
}

console.log(insertionSort([12, 11, 13, 5, 6])); // [ 5, 6, 11, 12, 13 ]
