/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  let i = 0;
  let j = nums.length;

  while (i < j) {
    const mid = Math.floor((i + j) / 2.0);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      i = mid + 1;
    } else {
      j = mid;
    }
  }

  return i;
}
