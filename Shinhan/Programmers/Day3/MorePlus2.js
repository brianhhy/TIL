function solution(a, b) {
    var ab = parseInt(a.toString() + b.toString());
    var c = 2 * a * b;
    
    return ab >= c ? ab : c
}