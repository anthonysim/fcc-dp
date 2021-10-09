function canSum(target, nums, memo = {}) {
  if (target in memo) return memo[target];
  if (target < 0) return false;
  if (target === 0) return true;

  for (let num of nums) {
    let result = canSum(target - num, nums, memo);
    if (result) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false;
}

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));