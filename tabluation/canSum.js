function canSum(target, nums) {
  const table = new Array(target + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target; i++) {
    if (table[i]) {
      for (let num of nums) {
        table[i + num] = true;
      }
    }
  }
  return table[target];
}

console.log(canSum(7, [2, 3]));