function multiplySparseMatrices(mat1, mat2) {
  const m = mat1.length;
  const k = mat1[0].length; // Number of columns in mat1
  const n = mat2[0].length;

  // Initialize the result matrix with zeros
  const result = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum = 0;

      for (let x = 0; x < k; x++) {
        if (mat1[i][x] !== 0 && mat2[x][j] !== 0) {
          sum += mat1[i][x] * mat2[x][j];
        }
      }

      result[i][j] = sum;
    }
  }

  return result;
}

// Test Example 1
const mat1 = [
  [1, 0, 0],
  [-1, 0, 3]
];

const mat2 = [
  [7, 0, 0],
  [0, 0, 0],
  [0, 0, 1]
];

const output = multiplySparseMatrices(mat1, mat2);
console.log(output);
// Output: [[7, 0, 0], [-7, 0, 3]]
