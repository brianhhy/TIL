function solution(myStr) {
  // 정규식을 사용해 'a', 'b', 'c'를 기준으로 나눔
  const parts = myStr.split(/[abc]/);

  // 빈 문자열 제거
  const filtered = parts.filter(part => part.length > 0);

  // 결과가 없으면 ["EMPTY"], 아니면 필터링된 배열 반환
  return filtered.length > 0 ? filtered : ["EMPTY"];
}
