class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * Given the root of a binary tree, check whether
 * it is a mirror of itself. Symmetric around its center
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
  /**
   * @param {TreeNode} left
   * @param {TreeNode} right
   * @return {boolean}
   */
  const isSymmetricHelper = (left, right) => {
    if (!left || !right) {
      return left === right;
    }

    if (left.val !== right.val) {
      return false;
    }

    return (
      isSymmetricHelper(left.left, right.right) &&
      isSymmetricHelper(left.right, right.left)
    );
  };

  return !root || isSymmetricHelper(root.left, root.right);
}
