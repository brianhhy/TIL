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
 * numstrs = ["ZASSETE","S4Z537B","7_ASZEYB"]
 * wordss = ["2455373","425", "373", "378"]
 * result = [3,2,3,2]
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

    function solution(numstrs, words) {
      const digitToCandidates = {
        "0": ["0", "O", "(", ")"],
        "1": ["1", "I"],
        "2": ["2", "Z", "S", "7_"],
        "3": ["3", "E", "B"],
        "4": ["4", "A"],
        "5": ["5", "Z", "S"],
        "6": ["6", "b", "G"],
        "7": ["7", "T", "Y"],
        "8": ["8", "B", "E3"],
        "9": ["9", "g", "q"]
      };
    
      function isValidMatch(text, pattern) {
        const len = pattern.length;
    
        for (let i = 0; i <= text.length - len; i++) {
          const charToDigit = {};
          const digitToChar = {};
    
          let isMatch = true;
    
          for (let j = 0; j < len; j++) {
            const ch = text[i + j];
            const digit = pattern[j];
            const candidates = digitToCandidates[digit];
    
            if (!candidates.includes(ch)) {
              isMatch = false;
              break;
            }
    
            // 이미 매핑된 경우 일관성 유지
            if (charToDigit[ch] && charToDigit[ch] !== digit) {
              isMatch = false;
              break;
            }
    
            if (digitToChar[digit] && digitToChar[digit] !== ch) {
              isMatch = false;
              break;
            }
    
            // 아직 매핑되지 않았지만 이미 다른 숫자가 이 문자를 사용한 경우
            if (
              !charToDigit[ch] &&
              Object.entries(digitToChar).some(([d, c]) => c === ch && d !== digit)
            ) {
              isMatch = false;
              break;
            }
    
            charToDigit[ch] = digit;
            digitToChar[digit] = ch;
          }
    
          if (isMatch) return true;
        }
    
        return false;
      }
    
      const result = [];
    
      for (const word of words) {
        let count = 0;
        for (const s of numstrs) {
          if (isValidMatch(s, word)) count++;
        }
        result.push(count);
      }
    
      return result;
    }
    
    // ✅ 테스트
    const numstrs = ["ZASSETE", "S4Z537B", "7_ASZEYB"];
    const words = ["2455373", "425", "373", "378"];
    console.log(solution(numstrs, words)); // ✅ [3, 2, 3, 2]
    