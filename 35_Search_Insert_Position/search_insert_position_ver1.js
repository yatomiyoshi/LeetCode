/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {

    // 引数の配列が変更されるので良くない
    //nums.push(target);
    for(let i = 0; i < nums.length; i++){
        if(nums[i] >= target){
            return i;
        }
    }

    // 以下のようにする
    return nums.length;
};