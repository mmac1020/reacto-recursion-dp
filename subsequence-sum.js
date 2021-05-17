// Kadane's Algo

const maxSubsequenceSum = (arr) => {
  let currentMax = (globalMax = arr[0]);

  for (let i = 0; i < arr.length; i++) {
    // see if current element increases max
    currentMax = Math.max(arr[i], currentMax + arr[i]);
    // see if current max is bigger than global max
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
