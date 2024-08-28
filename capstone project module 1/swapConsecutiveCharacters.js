//Logic Buildig Coding Questions

function swapConsecutiveCharacters(s) {
    let swapped = '';
    
    for (let i = 0; i < s.length; i += 2) {
        if (i + 1 < s.length) {
            swapped += s[i + 1] + s[i];
        } else {
            swapped += s[i];
        }
    }

    return swapped;
}

console.log(swapConsecutiveCharacters("abcdef")); 
console.log(swapConsecutiveCharacters("AlmaBetter")); 

//Do not modify the below lines
module.exports { swapConsecutiveCharacters.js }
