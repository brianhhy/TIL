let cards = [["Diamond", 3], ["Heart", "A"], ["Clover", "K"], ["Spade", 7], ["Heart", 3]];

function convertToPoint(card){
    const charToNumber = { A: 1, J: 11, Q: 12, K: 13 };
    const shapeToNumber = { Heart: 0, Diamond: 13, Clover: 13 * 2, Spade: 13 * 3 };

    const numberValue = typeof card[1] === "number" ? card[1] : charToNumber[card[1]];
    return shapeToNumber[card[0]] + numberValue;
}

function bubbleSort(array){
    let len = array.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (convertToPoint(array[j]) > convertToPoint(array[j + 1])) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Swap
            }
        }
    }
    return array;
}

console.log(bubbleSort(cards));
