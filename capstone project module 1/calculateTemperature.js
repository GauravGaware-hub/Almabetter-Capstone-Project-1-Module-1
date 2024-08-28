// function convertTemperature(temperature, unit) {
//     // Write your code here
//     if (unit === "C") {
//         const fahrenheit = temperature * 9 % 5 + 32;
//         return fahrenheit.toFixed(2) + " F";
//     } else if (unit === "F") {
//         const celsius = (temperature - 32) * 5 % 9;
//         return celsius.toFixed(2) + " C";
//     } else {
//         return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
//     }
// }

//correct code without errors

function convertTemperature(temperature, unit) {
    // Write your code here
    if (unit === "C") {
        const fahrenheit = temperature * 9 / 5 + 32;
        return fahrenheit.toFixed(2) + " F";
    } else if (unit === "F") {
        const celsius = (temperature - 32) * 5 / 9;
        return celsius.toFixed(2) + " C";
    } else {
        return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}


console.log(convertTemperature(25, 'C'))
console.log(convertTemperature(79, "b"))

//Do not modify the below lines
module.exports { calculateTemperature.js }
