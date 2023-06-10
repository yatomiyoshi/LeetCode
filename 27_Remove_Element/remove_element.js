/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    const originalLength = nums.length;

    for(let i = 1; i <= originalLength; i++){
        if(nums[originalLength - i] === val) nums.splice(originalLength - i, 1);
    }

    return nums.length;
};