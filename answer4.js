function findMaxLength(nums) {
  const n = nums.length;
  const modifiedNums = nums.map((num) => (num === 0 ? -1 : num));
  const prefixSumMap = new Map();
  let maxLen = 0;
  let prefixSum = 0;

  prefixSumMap.set(0, -1);

  for (let i = 0; i < n; i++) {
    prefixSum += modifiedNums[i];

    if (!prefixSumMap.has(prefixSum)) {
      prefixSumMap.set(prefixSum, i);
    } else {
      maxLen = Math.max(maxLen, i - prefixSumMap.get(prefixSum));
    }
  }

  return maxLen;
}

// Test Example 1
const nums = [0, 1];
const output = findMaxLength(nums);
console.log(output); // Output: 2
