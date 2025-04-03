function solution(my_string, overwrite_string, s) {
    let answer = '';

    for (let i = 0; i < s; i++) {
        answer += my_string[i];
    }

    answer += overwrite_string;

    for (let i = s + overwrite_string.length; i < my_string.length; i++) {
        answer += my_string[i];
    }

    return answer;
}
