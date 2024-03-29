/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  } else {
    return climbStairs(n - 1) + climbStairs(n - 2);
  }
};
