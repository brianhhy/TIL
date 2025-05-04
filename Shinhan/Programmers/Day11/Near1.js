function solution(arr, idx) {
    var answer = 0;
    var key = [];
    for(let i = idx; i<arr.length;i++){
        if(arr[i] == 1){
            return i;
        }
    }
    return -1;
}