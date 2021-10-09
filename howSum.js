function howSum(target, nums, memo = {}) {
  if (target in memo) return memo[target];
  if (target < 0) return null;
  if (target === 0) return [];

  for (let num of nums) {
    let remainder = howSum(target - num, nums, memo);

    if (remainder !== null) {
      memo[target] = [...remainder, num];
      return memo[target];
    }
  }
  memo[target] = null;
  return null;
}

console.log(howSum(7, [2, 3])); // [ 3, 2, 2 ]
console.log(howSum(7, [5, 3, 4, 7])); // [ 4, 3 ]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [ 2, 2, 2, 2 ]
console.log(howSum(300, [7, 14])); // null