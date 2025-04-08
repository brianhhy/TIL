function solution(n) {
    var answer = [];
    while(n > 1){
        if(n % 2 == 0){
            answer.push(n);
            n = n / 2;
        } else{
            answer.push(n);
            n = (n*3) + 1;
        }
    }
    answer.push(1);
    return answer;
}