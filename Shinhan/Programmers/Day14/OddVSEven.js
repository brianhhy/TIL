function solution(num_list) {
    var answer = 0;
    var tmp1 = 0
    var tmp2 = 0;
    
    for(let i = 0; i<num_list.length;i++){
        if(i%2 == 0){
            tmp1 += num_list[i];
        } else{
            tmp2 += num_list[i];
        }
        answer= Math.max(tmp1, tmp2);
    }
    
    return answer;
}