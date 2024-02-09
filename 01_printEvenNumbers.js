const printEvenNumbers1 = () => {
    number = 2;

    while (number <= 100) {
        if (number % 2 === 0) {
            console.log(number);
        }
        number++;
    }
};

printEvenNumbers1();

const printEvenNumbers2 = () => {
    number = 2;
    while (number <= 100) {
        console.log(number);
        number += 2;
    }
};

printEvenNumbers2();

// v2 runs faster because v1 takes 100 times to loop and v2 takes 50 times.
