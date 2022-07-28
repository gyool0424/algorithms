// https://leetcode.com/problems/invert-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  function invert(root) {
    if (root) {
      let left = root.left;
      let right = root.right;
      root.left = right;
      root.right = left;
      invert(root.left);
      invert(root.right);
    }
  }
  invert(root);
  return root;
};
