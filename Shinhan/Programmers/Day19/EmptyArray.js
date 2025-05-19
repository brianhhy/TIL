function solution(arr, flag) {
    var answer = [];
    for(let i = 0; i < arr.length; i++) {
        if(flag[i] === true) {
            for(let j = 0; j < arr[i] * 2; j++) {
                answer.push(arr[i]);
            }
        } else {
            answer.splice(-arr[i], arr[i]); // 마지막에서 arr[i]개 제거
        }
    }
    return answer;
}
