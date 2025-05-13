function solution(my_string, indices) {

    indices.sort((a, b) => a - b);


    let arr = my_string.split("");


    for (let i = indices.length - 1; i >= 0; i--) {
        arr.splice(indices[i], 1);
    }

    return arr.join("");
}
