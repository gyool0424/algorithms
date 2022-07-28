// https://leetcode.com/problems/path-sum/

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let arr = [];
  function traverse(root, sum) {
    if (root) {
      sum += root.val;
      if (!root.left && !root.right) {
        arr.push(sum);
      }
      traverse(root.left, sum);
      traverse(root.right, sum);
    }
  }

  traverse(root, 0);
  return arr.includes(targetSum);
};
