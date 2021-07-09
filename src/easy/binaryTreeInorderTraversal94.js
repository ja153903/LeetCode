class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
  const result = [];

  const helper = (node) => {
    if (node) {
      helper(node.left);
      result.push(node.val);
      helper(node.right);
    }
  };

  helper(root);

  return result;
}
