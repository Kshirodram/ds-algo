/*
Bubble Sort / Sinking Sort: Repeatedly steps through the list to be sorted and compares each pairs of adjacent items
  and swap them if they in wrong orders
*/

const input = [10, 30, 0, 20, 20, 100, 70, 90, 50, 80, 40, 60];

const bubbleSort = (input, type = "asc") => {
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = 0; j < input.length - i - 1; j++) {
      if (
        (type === "asc" && input[j] < input[j + 1]) ||
        (type === "dsc" && input[j] > input[j + 1])
      ) {
        const temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
      }
    }
  }
  return input;
};

console.log("ASC::", bubbleSort(input, "dsc"));
console.log("DSC::", bubbleSort(input, "asc"));
