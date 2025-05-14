function solution(myString, pat) {
    let count = 0;
    let index = 0;

    while ((index = myString.indexOf(pat, index)) !== -1) {
        count++;
        index += 1;
    }

    return count;
}
