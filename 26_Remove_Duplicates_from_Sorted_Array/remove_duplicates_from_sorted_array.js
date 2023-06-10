/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {

    const originalLength = nums.length;

    // 配列を後ろから確認
    for(let i = 1; i < originalLength; i++){
        if(nums[originalLength - i] === nums[originalLength - i - 1]) nums.splice(originalLength - i, 1);
    }
    
    return nums.length;
};