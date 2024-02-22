function selectAStrings(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i].startsWith("a")) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(selectAStrings(["apple", "orange", "banana", "axe", "avatar"])); // [ 'apple', 'axe', 'avatar' ]

// O (N)
