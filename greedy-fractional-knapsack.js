/*
Input: 
Items as (value, weight) pairs 
arr[] = [[60, 10], [100, 20], [120, 30]]
Knapsack Capacity, W = 50; 

Output: 
Maximum possible value = 240 
by taking items of weight 10 and 20 kg and 2/3 fraction 
of 30 kg. Hence total price will be 60+100+(2/3)(120) = 240
*/

const fractionalKnapsack = (input, maxCapacity) => {
  input.map((item) => {
    // 1st element is wt, 2nd is value/cost
    return item.push(parseFloat(item[1] / item[0]));
  });
  const sortedRatio = input.sort((a, b) => b[2] - a[2]);
  let length = sortedRatio.length;
  let weight = 0;
  let totalValue = 0;
  for (let i = 0; i < length; i++) {
    if (weight + input[i][0] <= maxCapacity) {
      weight += input[i][0];
      totalValue += input[i][1];
    } else {
      debugger;
      const fraction = (maxCapacity - weight) / input[i][0];
      totalValue += fraction * input[i][1];
    }
  }
  return totalValue;
};

console.log(
  fractionalKnapsack(
    [
      [20, 100],
      [30, 120],
      [10, 60],
    ],
    50
  )
);
