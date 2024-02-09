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

// We are searching in an ordered array
