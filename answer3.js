function validMountainArray(arr) {
  const n = arr.length;
  
  if (n < 3) {
    return false;
  }
  
  let peakIndex = -1;
  
  for (let i = 1; i < n - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      peakIndex = i;
      break;
    }
  }

  if (peakIndex === -1 || peakIndex === 0 || peakIndex === n - 1) {
    return false;
  }
  
  return true;
}

// Test Example 1
const arr = [2, 1];
const output = validMountainArray(arr);
console.log(output); // Output: false
