function solution(my_string, is_suffix) {
    let suffixes = [];
    for (let i = 0; i < my_string.length; i++) {
        suffixes.push(my_string.slice(i));
    }
    return suffixes.includes(is_suffix) ? 1 : 0;
}
