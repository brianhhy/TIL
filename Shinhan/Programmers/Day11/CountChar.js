function solution(my_string) {
    const answer = new Array(52).fill(0);

    for (let i = 0; i < my_string.length; i++) {
        const ch = my_string[i];
        const code = ch.charCodeAt(0);

        if (code >= 65 && code <= 90) {
            answer[code - 65]++;
        } else if (code >= 97 && code <= 122) {
            answer[code - 97 + 26]++;
        }
    }

    return answer;
}
