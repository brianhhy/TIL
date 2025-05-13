function solution(x1, x2, x3, x4) {
    var answer;
    if((x1 == true || x2 == true) && (x3 == true || x4 == true)){
        answer = true;
    } else
        answer = false;
    return answer;
}