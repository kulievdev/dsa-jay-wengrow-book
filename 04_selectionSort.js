// Selection sort is another simple sorting algorithm that divides the input list into two parts: a sorted sublist and an unsorted sublist. Initially, the sorted sublist is empty, and the unsorted sublist contains all the elements of the input list. The algorithm repeatedly finds the minimum (or maximum) element from the unsorted sublist and moves it to the end of the sorted sublist. This process is repeated until the unsorted sublist becomes empty, and the sorted sublist contains all the elements in sorted order.

// Here's how selection sort works:

// 1. Start with an unsorted list of elements.
// 2. Find the minimum element in the unsorted sublist.
// 3. Swap the minimum element with the first element of the unsorted sublist.
// 4. Move the boundary between the sorted and unsorted sublists one element to the right.
// 5. Repeat steps 2-4 until the unsorted sublist becomes empty.

// Time Complexity - O(n^2)

// Selection sort has a time complexity of O(n^2), where n is the number of elements in the list. It is not the most efficient sorting algorithm, especially for large datasets, but it is easy to implement and understand.

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let lowestNumberIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[lowestNumberIndex]) {
                lowestNumberIndex = j;
            }
        }
        if (lowestNumberIndex != i) {
            let temp = array[i];

            array[i] = array[lowestNumberIndex];
            array[lowestNumberIndex] = temp;
        }
    }
    return array;
}

console.log(selectionSort([64, 25, 12, 22, 11])); // [ 11, 12, 22, 25, 64 ]
