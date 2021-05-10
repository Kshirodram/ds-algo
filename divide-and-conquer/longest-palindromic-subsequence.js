/*
Given a string s, find the longest palindromic subsequence's length in s.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

 

Example 1:

Input: s = "bbbab"
Output: 4
Explanation: One possible longest palindromic subsequence is "bbbb".
Example 2:

Input: s = "cbbd"
Output: 2
Explanation: One possible longest palindromic subsequence is "bb".
*/

function LPSAux(st, startIndex, endIndex) {
  if (startIndex > endIndex) {
    //BASE CASE - If we have traversed more than 1/2 of string then return 0 as we dont need to process it
    return 0;
  }
  if (startIndex == endIndex) {
    //BASE CASE - If both the index are at same position then its a palindrome as its 1 character.
    return 1;
  }
  let count1 = 0;
  let Count3 = 0;
  let Count2 = 0;
  if (st[startIndex] == st[endIndex]) {
    //CASE#1 - If index pointed characters matches then we add 2 to the existing known palindrome length
    count1 = 2 + LPSAux(st, startIndex + 1, endIndex - 1);
  }
  Count2 = LPSAux(st, startIndex + 1, endIndex); //CASE#2 - Skip one element from beginning
  Count3 = LPSAux(st, startIndex, endIndex - 1); //CASE#3 - Skip one element from end
  return Math.max(count1, Count2, Count3);
}

console.log(LPSAux("bbbab", 0, 4));
