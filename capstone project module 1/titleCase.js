//Approach 1 
// function titleCase(sentence) {
//     // write your code here
// const words = sentence.toLowerCase().split(' ');

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substring(1);
// }

// return words.join(' ');
// }

// // Do not modify the below lines
// module.exports = { titleCase };


//Approach 2 

function titleCase(sentence) {
    return sentence.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Do not modify the below lines
module.exports = { titleCase };

console.log(titleCase("hi my name is gaurav and i am using visual studio code editor"))

//Do not modify the below lines
module.exports { titleCase.js }
