const merge = (arr1, arr2, order) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (arr1.length > i && arr2.length > j) {
    if (
      (order === "asc" && arr1[i] > arr2[j]) ||
      (order === "dsc" && arr1[i] < arr2[j])
    ) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }
  while (arr1.length > i) {
    result.push(arr1[i]);
    i++;
  }
  while (arr2.length > j) {
    result.push(arr2[j]);
    j++;
  }
  return result;
};
const mergeSort = (arr, order) => {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.ceil(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid), order);
  let right = mergeSort(arr.slice(mid), order);
  return merge(left, right, order);
};

console.log(
  "ASC::",
  mergeSort([10, 30, 0, 20, 20, 100, 70, 90, 50, 80, 40, 60, 110], "asc")
);

console.log(
  "DSC::",
  mergeSort([10, 30, 0, 20, 20, 100, 70, 90, 50, 80, 40, 60, 110], "dsc")
);
