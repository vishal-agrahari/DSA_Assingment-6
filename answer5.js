function minProductSum(nums1, nums2) {
  nums1.sort((a, b) => a - b); // Sort nums1 in ascending order
  nums2.sort((a, b) => b - a); // Sort nums2 in descending order

  let minProductSum = 0;
  const n = nums1.length;

  for (let i = 0; i < n; i++) {
    minProductSum += nums1[i] * nums2[i];
  }

  return minProductSum;
}

// Test Example 1
const nums1 = [5, 3, 4, 2];
const nums2 = [4, 2, 2, 5];
const output = minProductSum(nums1, nums2);
console.log(output); // Output: 40
