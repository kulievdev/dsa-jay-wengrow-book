// Both the needle and haystack are strings. For example, if the needle is "def" and the haystack is "abcdefghi", the needle is contained somewhere in the haystack, as "def" is a substring of "abcdefghi". However, if the needle is "dd" it cannot be found in the haystack of "abcdefghi".

// This function returns true or false, depending on whether the needle can be found in the haystack.

function findNeedle(needle, haystack) {
    let needleStartIndex = 0;

    while (needleStartIndex <= haystack.length - needle.length) {
        if (needle[0] === haystack[needleStartIndex]) {
            let needleOffset = 0;

            while (needleOffset < needle.length) {
                if (
                    needle[needleOffset] !==
                    haystack[needleStartIndex + needleOffset]
                ) {
                    break;
                } else if (needleOffset == needle.length - 1) {
                    return true;
                }
                needleOffset += 1;
            }
        }
        needleStartIndex += 1;
    }
    return false;
}

console.log(findNeedle("def", "abcdefghi")); // true
console.log(findNeedle("dd", "abcdefghi")); // false

// O(n * m)

// Here's a step-by-step explanation of the provided function:

// findNeedle(needle, haystack) is a function that takes two parameters: needle, which represents the substring to search for, and haystack, which represents the larger string to search within.

// needleStartIndex is initialized to 0. This variable keeps track of the starting index within the haystack where the current potential match of the needle begins.

// The function enters a while loop that continues as long as needleStartIndex is less than or equal to the difference between the length of the haystack and the length of the needle. This loop ensures that we don't try to search beyond the end of the haystack.

// Within the loop, the function checks if the first character of the needle (needle[0]) matches the character in the haystack at the current needleStartIndex. If they match, it enters another loop to check the subsequent characters of the needle against the corresponding characters in the haystack.

// The inner loop iterates over each character in the needle (needleOffset) and compares it to the corresponding character in the haystack starting from needleStartIndex. If there's a mismatch at any point, it breaks out of the loop. If all characters match until the end of the needle, it means the needle is found, and the function returns true.

// If the inner loop completes without finding a mismatch and reaches the end of the needle, the function returns true.

// If the outer loop completes without finding the needle anywhere in the haystack, the function returns false.

// The function logs the results of calling findNeedle with example inputs "def" and "abcdefghi", and "dd" and "abcdefghi" to demonstrate its behavior.
