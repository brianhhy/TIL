function solution(arr, queries) {
    var answer = [];
    
    for(let i = 0; i<queries.length; i++){
        var start = queries[i][0];
        var end = queries[i][1];
        for(let j = start; j<=end; j++){
            arr[j] += 1;
        } 
    }
    return arr;
}