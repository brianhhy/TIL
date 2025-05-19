function solution(arr, k) {
  const result = [];
  const seen = new Set();

  for (let num of arr) {
    if (!seen.has(num)) {
      result.push(num);
      seen.add(num);
    }
    if (result.length === k) break;
  }

  while (result.length < k) {
    result.push(-1);
  }

  return result;
}
