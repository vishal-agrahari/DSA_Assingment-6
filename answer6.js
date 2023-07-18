function findOriginalArray(changed) {
  if (changed.length % 2 !== 0) {
    return [];
  }

  const freqMap = new Map();
  for (const num of changed) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const original = [];
  for (const num of changed) {
    if (freqMap.get(num) === 0) {
      continue;
    }
    const doubleValue = num * 2;
    if (freqMap.get(doubleValue) > 0) {
      original.push(num);
      freqMap.set(num, freqMap.get(num) - 1);
      freqMap.set(doubleValue, freqMap.get(doubleValue) - 1);
    } else {
      return [];
    }
  }

  return original;
}

// Test Example 1
const changed = [1, 3, 4, 2, 6, 8];
const output = findOriginalArray(changed);
console.log(output); // Output: [1, 3, 4] (or any other valid original array)
