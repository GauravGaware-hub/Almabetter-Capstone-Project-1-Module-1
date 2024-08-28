// //Approach 1 
// function countOccurrences(str, char) {
//     // Write your code here
//     let count = 0;
//     for (const c of str) {
//         if (c === char) {
//             count++;
//         }
//     }
//     return count;
// }

// // Do not modify the below lines
// module.exports = { countOccurrences };

//Approach 2 

function countOccurrences(str, char) {

    if (char === "") {
        throw new Error("Character to search for cannot be an empty string.");
    }


    return str.split(char).length - 1;
}

// Do not modify the below lines
module.exports = { countOccurrences };


console.log(countOccurrences("hello", "l"))
console.log(countOccurrences('hello', 'a'))
console.log(countOccurrences('hello', ''))
