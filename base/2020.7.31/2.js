var removeDuplicates = function(nums) {
    let start = 0;
    let max = nums.length;
    while(start < nums.length) {
        const next = start + 1;
        if (nums[start] === nums[next]) {
            nums.splice(start, 1);
            // start++
        } else {
            start++;
        }
    }
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])