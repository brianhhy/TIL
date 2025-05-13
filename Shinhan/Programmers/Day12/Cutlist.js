function solution(n, slicer, num_list) {
    var answer = [];
    if(n == 1){
        for(let i = 0; i<=slicer[1]; i++){
            answer.push(num_list[i]);
        }
    } else if(n == 2){
        for(let j = slicer[0]; j < num_list.length; j++){
            answer.push(num_list[j]);
        }
    } else if(n == 3){
        for(let k = slicer[0]; k <= slicer[1]; k++){
             answer.push(num_list[k]);
        }
    } else if(n == 4){
        for(let p = slicer[0]; p <= slicer[1]; p+=slicer[2]){
            answer.push(num_list[p]);
        }
    }
    return answer;
}