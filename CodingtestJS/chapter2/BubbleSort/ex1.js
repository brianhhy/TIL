function ex1(array) {
    let len = array.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (array[j].score > array[j + 1].score) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

let array = [{name : "혜진", score : 97}, {name : "철수", score : 85}, {name : "영희", score : 92}, {name : "민수", score : 88}, {name : "진수", score : 90}];
console.log(ex1(array));
