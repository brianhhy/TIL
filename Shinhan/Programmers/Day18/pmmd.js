function solution(binomial) {
    var answer = 0;
    var arr = binomial.split(" ");
    var a = parseInt(arr[0]);
    var p = arr[1];
    var b = parseInt(arr[2]);

    if (p === "+") {
        answer = a + b;
    } else if (p === "-") {
        answer = a - b;
    } else if (p === "*") {
        answer = a * b;
    } else {
        answer = a / b;
    }

    return answer;
}
