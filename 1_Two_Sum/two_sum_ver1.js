/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    
    let indices = [];

    nums.forEach((num, index) => {
        const search_num_index = nums.indexOf(target - num);
        if(search_num_index !== -1 && index !== search_num_index) indices = [index, search_num_index];
    });

    return indices;
};