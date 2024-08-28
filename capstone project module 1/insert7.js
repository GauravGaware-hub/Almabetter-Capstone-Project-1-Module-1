//Logic Building Coding Questions

function insert7(input) {
    let result = '';
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        
        result += char;
        
        if (char !== ' ') {
            count++;
        }
        
        if (count === 6) {
            result += '7';
            count = 0; 
        }
    }

    return result;
}

console.log(insert7("Hello World and Universe!"));
console.log(insert7("Full Stack Web Development")); 