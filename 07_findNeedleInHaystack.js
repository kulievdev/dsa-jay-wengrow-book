// Both the needle and haystack are strings. For example, if the needle is "def" and the haystack is "abcdefghi", the needle is contained somewhere in the haystack, as "def" is a substring of "abcdefghi". However, if the needle is "dd" it cannot be found in the haystack of "abcdefghi".

// This function returns true or false, depending on whether the needle can be found in the haystack.

const findNeedleInHaystack = (needle, haystack) => {
    let isNeedleThere = false;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            for (let j = 0; j < needle.length; j++) {
                if (needle[j] === haystack[i + j]) {
                    isNeedleThere = true;
                } else {
                    isNeedleThere = false;
                    break;
                }
            }
            if (isNeedleThere) return isNeedleThere;
        }
    }
    return isNeedleThere;
};

console.log(findNeedle("def", "abcdefghi")); // true
console.log(findNeedle("dd", "abcdefghi")); // false

// O(n * m)
