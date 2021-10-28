function bestSum(target, nums, memo = {}) {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  let shortest = null;

  for (let num of nums) {
    let remainder = bestSum(target - num, nums, memo);
    if (remainder !== null) {
      let combo = [...remainder, num];

      if (shortest == null || combo.length < shortest.length) {
        shortest = combo;
      }
    }
  }
  memo[target] = shortest;
  return shortest;
}


console.log(bestSum(7, [5, 3, 4, 7])); // 7
console.log(bestSum(300, [25, 25, 25, 25])); // 7
