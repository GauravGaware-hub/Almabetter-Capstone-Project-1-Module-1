//Logic Building Coding Questions 

function shortestDistance(wordsDict, word1, word2) {
    let index1 = -1;
    let index2 = -1;
    let minDist = Infinity;

    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] === word1) {
            index1 = i;
            if (index2 !== -1) {
                minDist = Math.min(minDist, Math.abs(index1 - index2));
            }
        }
        if (wordsDict[i] === word2) {
            index2 = i;
            if (index1 !== -1) {
                minDist = Math.min(minDist, Math.abs(index2 - index1));
            }
        }
    }

    return minDist;
}

console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "makes")); 
console.log(shortestDistance(["apple", "banana", "cherry", "apple", "date", "banana", "fig"], "apple", "fig")); 
