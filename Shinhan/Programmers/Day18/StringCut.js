function solution(myString) {
    var answer = myString.split("x").filter(str => str !== "");
    answer.sort();
    return answer;
}
