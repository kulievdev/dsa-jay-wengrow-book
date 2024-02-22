// Linear search, also known as sequential search, is a simple search algorithm that checks every element in a list until it finds the target value or reaches the end of the list. It sequentially checks each element of the list until a match is found or the entire list has been searched.

// Here's how linear search works:

// 1. Start from the beginning of the list.
// 2. Compare the target value with each element of the list.
// 3. If a match is found, return the index of the element.
// 4. If the end of the list is reached without finding the target value, return -1 to indicate that the target is not in the list.

// Time Complexity - O(n)

// Linear search has a time complexity of O(n), where n is the number of elements in the list.

const linearSearch = (array, searchValue) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchValue) {
            return i;
        } else if (array[i] > searchValue) {
            break;
        }
    }
    return null;
};

console.log(linearSearch([3, 17, 75, 80, 202], 22));
