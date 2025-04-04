function solution(a, b) {
    var ab = parseInt(a.toString() + b.toString());
    var ba = parseInt(b.toString() + a.toString());
    
    return ab >= ba ? ab : ba
}
