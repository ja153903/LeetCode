/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let prev = nums[0];
  let start = 0;

  for (let i = 1; i <= nums.length; i++) {
    if (i === nums.length) {
      nums[start] = prev;
    } else if (prev !== nums[i]) {
      nums[start] = prev;
      start++;
      prev = nums[i];
    }
  }

  return start + 1;
}
