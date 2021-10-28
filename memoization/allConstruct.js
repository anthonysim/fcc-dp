function allConstruct(target, wordDict, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  let res = [];

  for (let word of wordDict) {
    if (target.indexOf(word) === 0) {
      let suffixWays = allConstruct(target.slice(word.length), wordDict, memo);
      let targetWays = suffixWays.map(way => [word, ...way]);
      res.push(...targetWays);
    }
  }
  memo[target] = res;
  return memo[target];
};

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));