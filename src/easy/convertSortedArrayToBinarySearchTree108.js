class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
  if (nums.length === 0) {
    return null;
  }

  return sortedArrayToBSTHelper(nums, 0, nums.length - 1);
}

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {TreeNode}
 */
function sortedArrayToBSTHelper(nums, left, right) {
  if (left > right) {
    return null;
  }

  const mid = Math.floor((left + right) / 2);

  const root = new TreeNode(nums[mid]);

  root.left = sortedArrayToBSTHelper(nums, left, mid - 1);
  root.right = sortedArrayToBSTHelper(nums, mid + 1, right);

  return root;
}
