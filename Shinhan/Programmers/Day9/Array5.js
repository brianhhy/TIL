function solution(intStrs, k, s, l) {
    let answer = [];
    
    for (let i = 0; i < intStrs.length; i++) {

        let part = intStrs[i].substr(s, l);
        let num = parseInt(part);


        if (num > k) {
            answer.push(num);
        }
    }
    
    return answer;
}
