function solution(my_string, queries) {
    let arr = my_string.split('');
  
    for (let [s, e] of queries) {
  
      let reversed = arr.slice(s, e + 1).reverse();
      arr.splice(s, e - s + 1, ...reversed);
    }
  
    return arr.join('');
  }
  