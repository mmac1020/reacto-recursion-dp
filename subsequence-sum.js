// Kadane's Algo

// let arr3 = [-2, -3, 4, -1, 0, 5, -3]; // max = 8

const maxSubsequenceSum = (arr) => {
  let currentMax = arr[0];
  let globalMax = arr[0]

  for (let i = 1; i < arr.length; i++) {
    // see if current element increases max
    // currentMax = -2
    // Math.max(-3, -2 - 3)
    // currentMax = -3
    // Math.max(4, -3 + 4)
    // currentMax = 4
    // Math.max(-1, 4 - 1)
    // currentMax = 3
    // Math.max(5, 3 + 5)
    // currentMax = 8
    currentMax = Math.max(arr[i], currentMax + arr[i]);
    // see if current max is bigger than global max
    // globalMax = -2
    // Math.max(-3, -2)
    // globalMax = -2
    // Math.max(4, -2)
    // globalMax = 4
    // globalMax = Math.max(3, 4)
    // globalMax = 4
    // Math.max(8, 4)
    // globalMax = 8
    globalMax = Math.max(currentMax, globalMax);
  }

  return globalMax;
};

let arr1 = [-1, 3, 9, -6]; // max = 12
let arr2 = [-20, -1, -3, -6]; // max = -1
let arr3 = [-2, -3, 4, -1, 0, 5, -3]; // max = 8

console.log(maxSubsequenceSum(arr1));

console.log(maxSubsequenceSum(arr2));

console.log(maxSubsequenceSum(arr3));
