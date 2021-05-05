/** 
Input  : arr= [100, 200, 300, 400]
         k = 2
Output : 700

Input  : arr = [1, 4, 2, 10, 23, 3, 1, 0, 20]
         k = 4 
Output : 39
We get maximum sum by adding subarray {4, 2, 10, 23}
of size 4.

Input  : arr[2, 3]
         k = 3
Output : Invalid
There is no subarray of size 3 as size of whole
array is 2.
*/

// BRUTE FORCE APPROACH with O(n2)
const getMaxSumSubArrayOfSizeK = (arr, k) => {
  const arrSize = arr.length;
  let maxSum = 0;
  if (arrSize > 0 && k < arrSize) {
    for (let i = 0; i <= arrSize - k; i++) {
      let currentSum = 0;
      for (let j = i; j < i + k; j++) {
        currentSum += arr[j];
      }
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
    return maxSum;
  } else {
    return "Invalid Array";
  }
};

// console.log(getMaxSumSubArrayOfSizeK([100, 200, 300, 400], 2));
// console.log(getMaxSumSubArrayOfSizeK([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
// console.log(getMaxSumSubArrayOfSizeK([2, 3], 3));

// Sliding window with only delta calculation: O(n)
const getMaxSumSubArrayOfSizeK1 = (arr, k) => {
  const arrSize = arr.length;
  let maxSum = 0;
  if (arrSize > 0 && k < arrSize) {
    let currentSum = 0;
    for (let i = 0; i < k; i++) {
      currentSum += arr[i];
    }
    for (let j = k; j < arrSize; j++) {
      currentSum += arr[j] - arr[j - k];
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
    return maxSum;
  } else {
    return "Invalid Array";
  }
};

console.log(getMaxSumSubArrayOfSizeK1([100, 200, 300, 400], 2)); // 700
console.log(getMaxSumSubArrayOfSizeK1([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(getMaxSumSubArrayOfSizeK1([2, 3], 3));
