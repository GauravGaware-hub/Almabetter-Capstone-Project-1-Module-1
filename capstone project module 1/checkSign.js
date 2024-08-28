//Logic Building Coding Questions

function checkSign(a, b, c) {
    let positiveCount = 0;
    let negativeCount = 0;

    if (a > 0) positiveCount++;
    if (a < 0) negativeCount++;
    
    if (b > 0) positiveCount++;
    if (b < 0) negativeCount++;
    
    if (c > 0) positiveCount++;
    if (c < 0) negativeCount++;

    if (positiveCount === 3) {
        return "+++";
    } else if (positiveCount === 2 && negativeCount === 1) {
        return "++-";
    } else if (positiveCount === 1 && negativeCount === 2) {
        return "+--";
    } else if (positiveCount === 0 && negativeCount === 3) {
        return "---";
    } else {
        return "Invalid input";
    }
}

console.log(checkSign(2, 5, 7))
