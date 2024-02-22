// Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm gets its name from the way smaller elements "bubble" to the top of the list with each iteration.

// Here's a basic outline of how the bubble sort algorithm works:

// Start at the beginning of the list.
// Compare the first two elements. If the first element is greater than the second element, swap them.
// Move to the next pair of elements (second and third), and repeat the comparison and swapping process.
// Continue this process until you reach the end of the list.
// After the first pass, the largest element will be at the end of the list.

// Time Complexity - O(n^2)

// Repeat steps 1-5 for the remaining elements (excluding the last one) until the entire list is sorted.

function bubbleSort(array) {
    let unsortedUntilIndex = array.length - 1;
    let sorted = false;

    while (!sorted) {
        sorted = true; // Assume the array is sorted until a swap is made
        for (let i = 0; i < unsortedUntilIndex; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]]; // Swap elements
                sorted = false; // Since a swap was made, the array is not fully sorted
            }
        }
        unsortedUntilIndex -= 1;
    }
    return array;
}

console.log(bubbleSort([65, 55, 45, 35, 25, 15, 10])); // [10, 15, 25, 35, 45, 55, 65]
