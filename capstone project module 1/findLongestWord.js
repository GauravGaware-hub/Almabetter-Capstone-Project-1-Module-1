//Approach 1 
// function findLongestWord(sentence) {
//     // Write your code here
// const words = sentence.split(' ');
// let maxLength = 0;

// for (let i = 0; i < words.length; i++) {
//     const length = words[i].length;
//     if (length > maxLength) {
//         maxLength = length;
//     }
// }

// return maxLength;
// }

// // Do not modify the below lines
// module.exports = { findLongestWord };

//Approach 2 

function findLongestWord(sentence) {
    // Write your code here
const words = sentence.split(' ');
let longestWord = '';

for (const word of words) {
     
    if (word.length > longestWord.length) {
        longestWord = word;
    }
}

return {
    word: longestWord,
    length: longestWord.length
};
}

// Do not modify the below lines
module.exports = { findLongestWord };

console.log(findLongestWord("Coding is fun with fellow learners")) ;

//Do not modify the below lines
module.exports { findLongestWord.js }
