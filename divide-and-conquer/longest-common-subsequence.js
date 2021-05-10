/*
Given two strings s1 and s2, the task is to find the length of longest common 
subsequence present in both of them.

Examples:

Input: s1 = “ABCDGH”, s2 = “AEDFHR”
Output: 3

LCS for input Sequences “AGGTAB” and “GXTXAYB” is “GTAB” of length 4.

Input: s1 = “striver”, s2 = “raj”
Output: 1
*/

const findLCSLengthAux = (s1, s2, i1, i2) => {
  if (i1 === s1.length || i2 === s2.length) {
    //Base Case
    return 0;
  }

  let c1 = 0;
  let c2 = 0;
  let c3 = 0;
  if (s1[i1] === s2[i2]) {
    //If current character in both the string matches, then increase the index by 1 in both the strings.
    c3 = 1 + findLCSLengthAux(s1, s2, i1 + 1, i2 + 1);
  }
  c1 = findLCSLengthAux(s1, s2, i1, i2 + 1); //Increase index of 2nd String
  c2 = findLCSLengthAux(s1, s2, i1 + 1, i2); //Increase index of 1st String
  //console.log(c1, c2, c3);
  return Math.max(c3, c1, c2);
}; //end of method

console.log(findLCSLengthAux("houdini", "hdupti", 0, 0));
console.log(findLCSLengthAux("ABCDGH", "AEDFHR", 0, 0));
