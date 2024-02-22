function averageOfEvenNumbers(array) {
    let sum = 0;
    let countOfEvenNumbers = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
            countOfEvenNumbers += 1;
        }
    }
    return sum / countOfEvenNumbers;
}

console.log(averageOfEvenNumbers([2, 4, 33, 71, 10])); // 5.333333333333333

// O(n)
