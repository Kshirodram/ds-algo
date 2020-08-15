/*
Quick Sort:  loop through the input array linearly, selecting the first smallest element, 
and then swap it to the first position. Then you loop through the array again using a linear scan and 
get the second smallest element, swap it to the second position, and 
so on and so forth until your array is completely sorted
*/

const pivot = (arr, start = 0, end = arr.length + 1) => {
  const swap = (list, a, b) => ([list[a], list[b]] = [list[b], list[a]]);

  let pivot = arr[start],
    pointer = start;

  for (let i = start; i < arr.length; i++) {
    if (arr[i] < pivot) {
      pointer++;
      swap(arr, pointer, i);
    }
  }
  swap(arr, start, pointer);

  return pointer;
};

const quickSort = (arr, start = 0, end = arr.length) => {
  let pivotIndex = pivot(arr, start, end);

  if (start >= end) return arr;
  quickSort(arr, start, pivotIndex);
  quickSort(arr, pivotIndex + 1, end);

  return arr;
};

console.log(
  "ASC::",
  quickSort([10, 30, 0, 20, 20, 100, 110, 70, 90, 50, 80, 40, 60])
);
