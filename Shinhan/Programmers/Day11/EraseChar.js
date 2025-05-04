function solution(my_string, indices) {
    // 인덱스를 오름차순으로 정렬
    indices.sort((a, b) => a - b);

    // 문자열을 배열로 변환
    let arr = my_string.split("");

    // 인덱스에 해당하는 요소를 제거 (뒤에서부터 제거해야 앞 인덱스가 영향을 안 받음)
    for (let i = indices.length - 1; i >= 0; i--) {
        arr.splice(indices[i], 1);
    }

    // 다시 문자열로 결합
    return arr.join("");
}
