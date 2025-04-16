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
 * ["ZASSETE", "S4Z537B", "7_ASZEYB"] 2455373
 * numstrs = ["ZASSETE","S4Z537B","7_ASZEYB"]
 * wordss = ["2455373","425", "373", "378"]
 * result = [3,2,3,2]
 * 1. 각 숫자는 정해진 방식에 따라 비슷한 모양의 다른 기호로 치환해서 적습니다.
   1-1. 이때, 다른 기호로 치환하지 않고 그대로 적어도 됩니다.
   2. 한 숫자가 서로 다른 기호로 치환될 수 있습니다.
   3. 단, 서로 다른 숫자가 같은 기호로 치환되지는 않습니다.
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

    const digitToChars = {
      '0': ['0', 'O', '(', ')'],
      '1': ['1', 'I'],
      '2': ['2', 'Z', 'S', '7_'],
      '3': ['3', 'E', 'B'],
      '4': ['4', 'A'],
      '5': ['5', 'Z', 'S'],
      '6': ['6', 'b', 'G'],
      '7': ['7', 'T', 'Y'],
      '8': ['8', 'B', 'E3'],
      '9': ['9', 'g', 'q'],
    };
    
    // 가능한 변형 문자열을 백트래킹으로 생성
    function generateWordPatterns(word) {
      const results = [];
    
      function backtrack(i, path, usedChars, usedMap) {
        if (i === word.length) {
          results.push(path.join(''));
          return;
        }
    
        const digit = word[i];
        for (const ch of digitToChars[digit]) {
          if (usedMap[ch] && usedMap[ch] !== digit) continue;
          if (!usedMap[ch] && Object.values(usedMap).includes(digit) && usedChars.has(ch)) continue;
    
          const prevMap = usedMap[ch];
          usedMap[ch] = digit;
          usedChars.add(ch);
          path.push(ch);
    
          backtrack(i + 1, path, usedChars, usedMap);
    
          path.pop();
          if (!prevMap) {
            delete usedMap[ch];
            usedChars.delete(ch);
          }
        }
      }
    
      backtrack(0, [], new Set(), {});
      return results;
    }
    
    // 메인 로직
    function solution(numstrs, words) {
      const result = [];
    
      for (const word of words) {
        const patterns = generateWordPatterns(word);
        let count = 0;
    
        for (const numstr of numstrs) {
          if (patterns.some(p => numstr.includes(p))) {
            count += 1;
          }
        }
    
        result.push(count);
      }
    
      return result;
    }
    
    // ✅ 테스트
    const numstrs = ["ZASSETE", "S4Z537B", "7_ASZEYB"];
    const words = ["2455373", "425", "373", "378"];
    
    console.log(solution(numstrs, words));  // [3, 2, 3, 2]
    
    

