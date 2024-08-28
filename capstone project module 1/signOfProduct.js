//Logic Building Coding Questions

function signOfProduct(integers) {
    if (integers.length === 0) return 0;

    let product = 1;

    for (let i of integers) {
        if (i === 0) return 0;
        product *= i;
    }

    if (product > 0) {

    } else if (product < 0) {
        return -1;
    } else {
        return 0;
    }
}


console.log(signOfProduct([2, -3, 0, 4]))

//Do not modify the below lines
module.exports { signOfProduct.js }
