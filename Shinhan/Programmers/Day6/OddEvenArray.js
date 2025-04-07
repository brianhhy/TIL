function solution(num_list) {
    let odd = '';
    let even = '';
    
    for (var i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            even += num_list[i];
        } else {
            odd += num_list[i];
        }
    }

    let evenRes = parseInt(even);
    let oddRes = parseInt(odd);
    
    return evenRes + oddRes;
}
