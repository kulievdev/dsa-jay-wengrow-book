function sample(array) {
    const first = array[0];
    const middle = array[Math.floor(array.length / 2)];
    const last = array[array.length - 1];

    return [first, middle, last];
}

console.log(sample([2, 10, 20, 22, 12, 39])); // [ 2, 22, 39 ]

// O(1)
