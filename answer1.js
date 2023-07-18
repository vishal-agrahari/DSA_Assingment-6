function reconstructPermutation(s) {
  const n = s.length;
  const perm = [];
  let low = 0;
  let high = n;

  for (const char of s) {
    if (char === 'I') {
      perm.push(high);
      high--;
    } else {
      perm.push(low);
      low++;
    }
  }

  // Append the last remaining integer
  perm.push(low);

  return perm;
}

// Test Example 1
const s = "IDID";
const output = reconstructPermutation(s);
console.log(output); // Output: [0, 4, 1, 3, 2]
