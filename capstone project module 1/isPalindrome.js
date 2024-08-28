// function isPalindrome(str) {
//     // Write your code here
//     const cleanedStr = str.replace(/[^a-z0-9]/g, "");
//     const reversedStr = cleanedStr.split("").reverse().join("");
//     return cleanedStr === reversedStr;
// }

//correct code without errors

function isPalindrome(str) {
    // Write your code here
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}

console.log(isPalindrome("madam"))
console.log(isPalindrome("hello"))
console.log(isPalindrome("@#$%^&*"))

//Do not modify the below lines
module.exports { isPalindrome.js }
