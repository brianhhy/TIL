function solution(a, b, c) {
    if(a===b && b===c && a===c ){
        res = (a+b+c) * (a*a + b*b + c*c) * (a*a*a + b*b*b + c*c*c);
    }
    else if (a === b || a === c || b === c){
        res = (a+b+c) * (a*a + b*b + c*c);
    }  else{
        res = a+b+c;
    }
    return res;
    
}