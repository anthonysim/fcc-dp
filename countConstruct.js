function countConstruct(target, wordDict, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let totalCount = 0;

  for (let word of wordDict) {
    if (target.indexOf(word) === 0) {
      let numWays = countConstruct(target.slice(word.length), wordDict, memo);
      totalCount += numWays;
    }
  }
  memo[target] = totalCount;
  return memo[target];
};

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true