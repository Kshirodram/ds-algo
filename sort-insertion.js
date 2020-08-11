/** 
Insertion Sort:  Insertion sort is a simple sorting algorithm that works similar to the way you sort 
playing cards in your hands. The array is virtually split into a sorted and an unsorted part. 
Values from the unsorted part are picked and placed at the correct position in the sorted part.
*/

const insertionSort = (arr, type = "asc") => {
  for (let i = 1; i < arr.length; i++) {
    let currentNumber = arr[i];
    let j = i;
    while (
      ((type === "asc" && arr[j - 1] > currentNumber) ||
        (type === "dsc" && arr[j - 1] < currentNumber)) &&
      j >= 0
    ) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = currentNumber;
  }
  return arr;
};

console.log(
  "ASC::",
  insertionSort([10, 30, 0, 20, 20, 100, 70, 90, 50, 80, 40, 60], "asc")
);
console.log(
  "DSC::",
  insertionSort([10, 30, 0, 20, 20, 100, 70, 90, 50, 80, 40, 60], "dsc")
);
