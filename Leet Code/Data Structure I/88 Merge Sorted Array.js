// https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);
};

// var merge = function (nums1, m, nums2, n) {
//     var insertPos = m + n - 1;
//     m--; n--;
//     while (n >= 0) {
//         nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
//     }
// };
