/*
Given N, count the number of ways to express N as sum of 1, 3 and 4.

Examples:

Input :  N = 4
Output : 4 
Explanation: 1+1+1+1 
             1+3
             3+1 
             4 

Input : N = 5 
Output : 6
Explanation: 1 + 1 + 1 + 1 + 1
             1 + 4
             4 + 1
             1 + 1 + 3
             1 + 3 + 1
             3 + 1 + 1 
*/

function countWays(n) {
  if (n === 0 || n == 1 || n == 2) {
    return 1;
  }
  if (n == 3) {
    return 2;
  }
  const sub1 = countWays(n - 1);
  const sub3 = countWays(n - 3);
  const sub4 = countWays(n - 4);
  return sub1 + sub3 + sub4;
}

// second approach
function countWays1(n) {
  const arr = [];
  arr[0] = 1;
  arr[1] = 1;
  arr[2] = 1;
  arr[3] = 2;
  for (let i = 4; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 3] + arr[i - 4];
  }
  return arr[n];
}

console.log(countWays(5));
console.log(countWays1(5));