/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  let result = [];

  let n1 = 0,
    n2 = 0;

  while (n1 < m && n2 < n) {
    if (nums1[n1] < nums2[n2]) {
      result.push(nums1[n1]);
      n1++;
    } else {
      result.push(nums2[n2]);
      n2++;
    }
  }

  while (n1 < m) {
    result.push(nums1[n1]);
    n1++;
  }

  while (n2 < n) {
    result.push(nums2[n2]);
    n2++;
  }

  result.forEach((value, index) => {
    nums1[index] = value;
  });
}
