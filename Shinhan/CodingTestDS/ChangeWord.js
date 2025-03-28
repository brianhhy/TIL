/*
 * 0 -> 알파벳 대문자 O, 괄호()
 * 1 -> 대문자 I
 * 2 -> Z, S, 7_
 * 3 -> E, B
 * 4 -> A
 * 5 -> Z, S
 * 6 -> b, G
 * 7 -> T, Y
 * 8 -> B, E3
 * 9 -> g, q
 * 
 * 다른 기호로 치환하지 않고 그대로 적어도 됨
 * 한 숫자가 서로 다른 기호로 치환될 수 있음
 * 단, 서로 다른 숫자가 같은 기호로 치환되지는 않음
 * 
 * 문자열이 담긴 배열 numstrs, 숫자로된 단어들이 담긴 words, 각 단어가 포함된 문자열은 몇개인지 return
 * 1 <= numstrs <= 100
 * 
 * 2랑 5(Z, S), 3이랑 8(B)
 * 
 * words를 2차원 배열로 바꾸고 words의 변경 가능한 모든 경우의 수를 저장. numstrs와 비교하여 같으면 result[i]++
 * 
 *  425
    2 * 3 * 4 - 4(2 * 2) 총 경우의 수 - 겹치는 경우의 수
    425, A25, 4Z5, 4S5, 47_5, 42Z, 42S, AZ5, AS5, A7_5, A2Z, A2S, 4ZS, 4SZ, 47_S, 47_Z, AZS, ASZ, AZ7_, AS7_

 * */

function Solution(numstrs, words){
    let result = [];

    


    for(let i =0;i<numstrs.length;i++){
        for (let j = 0;j<words.length;j++){
            
        }
    }
    return result;
}

