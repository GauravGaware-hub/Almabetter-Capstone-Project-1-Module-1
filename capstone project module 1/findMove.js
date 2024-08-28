//Logic Building Coding Questions

function findMove(s) {
    let results = [];

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '+' && s[i + 1] === '+') {
            let newState = s.slice(0, i) + '--' + s.slice(i + 2);
            results.push(newState);
        }
    }

    return results;
}

console.log(findMove("++++"));  
console.log(findMove("++-++")); 

//Do not modify the below lines
module.exports { findMove.js }
