/*
Given the weights and profits of N items, put the items in a knapsack which has capacity C provided we cann't 
break the items into smaller units. Find out maximum profit from the items in the knapsack

Example:
   Items: [Mango, Apple, Banana, Orange]
   Profits: [31, 26, 72, 17]
   Weights: [3, 1, 5, 2]

   Max profits = Apple + Banana => 6 wt => 98 profit
*/

const maxProfit = (weights, profits, capacity, currentIndex) => {
  if (currentIndex >= profits.length || capacity <= 0 || currentIndex < 0 ) {
    return 0;
  }
  let profit1 = 0; 
  let profit2 = 0;
  if (weights[currentIndex] <= capacity) {
    profit1 =
      profits[currentIndex] +
      maxProfit(
        weights,
        profits,
        capacity - weights[currentIndex],
        currentIndex + 1
      );
  }
  profit2 = maxProfit(weights, profits, capacity, currentIndex + 1);
  console.log(profit1, profit2)
  return Math.max(profit1, profit2);
};

console.log(maxProfit([3, 1, 5, 2], [31, 26, 72, 17], 7, 0));
