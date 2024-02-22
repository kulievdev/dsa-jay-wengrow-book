function isPalindrome(string) {
    let leftIndex = 0;
    let rightIndex = string.length - 1;

    const lowerCaseString = string.toLowerCase();

    //iterate until leftIndex reaches the middle of the array
    while (leftIndex < lowerCaseString.length / 2) {
        if (lowerCaseString[leftIndex] !== lowerCaseString[rightIndex]) {
            return false;
        }
        leftIndex++;
        rightIndex--;
    }
    return true;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("Civic")); // true
console.log(isPalindrome("kayak")); // true

console.log(isPalindrome("winter")); // false
console.log(isPalindrome("plane")); // false

// O(n)

function isPalindrome2(string) {
    return (
        string.toLowerCase().split(" ").reverse().join("") ===
        string.toLowerCase()
    );
}

console.log(isPalindrome2("Kayak")); // true
console.log(isPalindrome2("kayak")); // true
console.log(isPalindrome("moon")); // false
