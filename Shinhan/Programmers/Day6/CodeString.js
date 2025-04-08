function solution(code) {   
    ret = '';
    mode = 0;
    
    for(i = 0;i<code.length;i++){
        if(code[i] === '1'){
            mode = 1-mode;
        }else{
            if(mode === 0){
                i % 2 === 0 ? ret += code[i] : code;
            }else{
                i % 2 === 1 ? ret += code[i] : code;
            }
        }
    }
    if (ret === "") {
  return "EMPTY";
} else {
  return ret;
}

}