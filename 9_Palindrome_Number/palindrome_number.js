/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    
    const x_array = String(x).split('');
    const x_array_reversed = x_array.reverse();
    let flg = true;
    for(let i = 0; i < x_array.length; i++){
        if(x_array[i] !== x_array_reversed[i]) flg = false;
    }
    return flg;
};