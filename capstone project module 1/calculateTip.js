// function calculateTip(billAmount, tipPercentage) {
//     // Write your code here
//     const tipAmount = billAmount * tipPercentage;
//     const totalAmount = billAmount + tipAmount;
//     return number(totalAmount.toFixed(2));
// }

//correct code without errors

function calculateTip(billAmount, tipPercentage) {
    // Write your code here
    if (tipPercentage > 1) {
        tipPercentage = tipPercentage / 100
    }
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return totalAmount.toFixed(2);
}

console.log(calculateTip(60.75, 25))
console.log(calculateTip(60.75, 0.25))

//Do not modify the below lines
module.exports { calculateTip.js }
