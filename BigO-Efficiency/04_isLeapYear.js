function isLeapYear(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

console.log(isLeapYear(2022)); // false
console.log(isLeapYear(2020)); // true

// O(1) efficiency
