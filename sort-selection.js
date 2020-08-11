/*
Selection Sort:  loop through the input array linearly, selecting the first smallest element, 
and then swap it to the first position. Then you loop through the array again using a linear scan and 
get the second smallest element, swap it to the second position, and 
so on and so forth until your array is completely sorted
*/

const selectionSort = (arr, type = "asc") => {
  for (let i = 0; i < arr.length; i++) {
    let minOrMax = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (type === "asc" && arr[minOrMax] > arr[j]) {
        minOrMax = j;
      }
      if (type === "dsc" && arr[minOrMax] < arr[j]) {
        minOrMax = j;
      }
    }
    if (minOrMax !== i) {
      let tmp = arr[i];
      arr[i] = arr[minOrMax];
      arr[minOrMax] = tmp;
    }
  }
  return arr;
};

console.log(
  "ASC::",
  selectionSort([10, 30, 0, 20, 20, 100, 70, 90, 50, 80, 40, 60], "asc")
);
console.log(
  "DSC::",
  selectionSort([10, 30, 0, 20, 20, 100, 70, 90, 50, 80, 40, 60], "dsc")
);
