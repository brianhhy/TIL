function solution(num_list) {
    var answer = 0;
    var gop = 1;
    if(num_list.length >=11){
        for(let i = 0; i<num_list.length;i++){
            answer += num_list[i];
        }      
    } else{
        for(let j = 0; j<num_list.length;j++){
            gop *= num_list[j];
        }
    }
    return num_list.length >=11 ? answer : gop
}