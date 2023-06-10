/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
    let nearestInteger = 1;
    for(let i = 0;; i++){
        if(i ** 2 > x){
            nearestInteger = i - 1;
            break;
        }
    }
    return nearestInteger;
};