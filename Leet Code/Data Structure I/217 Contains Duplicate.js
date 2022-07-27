// https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function (nums) {
  let set = new Set(nums);
  if (set.size !== nums.length) {
    return true;
  }
  return false;
};
