/**
 * @param {number} n
 * @return {number}
 */
let hash = {};
var climbStairs = function (n) {
  if (n < 2) return 1;
  if (hash[n]) return hash[n];
  else {
    hash[n] = climbStairs(n - 1) + climbStairs(n - 2);
    return hash[n];
  }
};
