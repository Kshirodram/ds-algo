/*
Given a value V, if we want to make a change for V Rs, and we have an infinite supply of each of the denominations in Indian currency, i.e., we have an infinite supply of { 1, 2, 5, 10, 20, 50, 100, 500, 1000} valued coins/notes, what is the minimum number of coins and/or notes needed to make the change?

Examples:  

Input: V = 70
Output: 2
We need a 50 Rs note and a 20 Rs note.

Input: V = 121
Output: 3
We need a 100 Rs note, a 20 Rs note and a 1 Rs coin.
*/
const findMinNumCoin = (n) => {
  const denominations = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
  const result = [];
  let denominationsCount = denominations.length - 1;

  while (denominationsCount >= 0) {
    while (n >= denominations[denominationsCount]) {
      n -= denominations[denominationsCount];
      result.push(denominations[denominationsCount]);
    }
    denominationsCount--;
  }
  return result;
};

console.log(findMinNumCoin(2045));
