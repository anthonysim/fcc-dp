function countConstruct(target, wordDict, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordDict) {
    if (target.indexOf(word) === 0) {
      let suffix = target.slice(word.length);
      if (countConstruct(suffix, wordDict, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true