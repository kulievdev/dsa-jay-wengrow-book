function twoNumberProducts(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            newArray.push(array[i] * array[j]);
        }
    }
    return newArray;
}

console.log(twoNumberProducts([1, 2, 3, 4, 5])); // [2,  3,  4,  5,  6,8, 10, 12, 15, 20]

// O(n^2)

function twoNumberProductsMultipleData(array1, array2) {
    const newArray = [];

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            newArray.push(array1[i] * array2[j]);
        }
    }
    return newArray;
}

console.log(twoNumberProductsMultipleData([1, 2, 3], [10, 100, 1000]));

// [10, 100, 1000, 20, 200, 2000, 30, 300, 3000];

// O (n * m)
