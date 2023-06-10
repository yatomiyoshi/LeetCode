/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
    const stringsArray = s.trim().split(' ');
    return stringsArray.at(-1).length;
};