/*
  Given string s1 and s2 convert s2 to s1 by deleting, inserting and replacing the characters
  and find the min number edit poeration need to transform the string.
  Examples: 

  Input: s1=catch s2 = carch
  Output: 1
  Explanation: just replace r with t

  Input:  s1=table s2=tbres
  Output: 3
  Explanation: insert a on second position
               replace r with l
               delete s
*/

const findMinNumOperation = (s1, s2, i1, i2) => {
  if (i1 == s1.length) {
    // if we have reached the end of s1, then insert all the remaining characters of s2
    return s2.length - i2;
  }

  if (i2 == s2.length) {
    // if we have reached the end of s2, then delete all the remaining characters of s1
    return s1.length - i1;
  }

  if (s1[i1] == s2[i2]) {
    // If the strings have a matching character, recursively match for the remaining lengths.
    return findMinNumOperation(s1, s2, i1 + 1, i2 + 1);
  }

  const deleteCount = 1 + findMinNumOperation(s1, s2, i1 + 1, i2);
  const insertCount = 1 + findMinNumOperation(s1, s2, i1, i2 + 1);
  const replaceCount = 1 + findMinNumOperation(s1, s2, i1 + 1, i2 + 1);
  console.log(deleteCount, insertCount, replaceCount);
  return Math.min(deleteCount, insertCount, replaceCount);
};

// console.log(findMinNumOperation("table", "tbres", 0, 0));
 console.log(findMinNumOperation("catch", "carch", 0, 0));
//console.log(findMinNumOperation("abc", "abc", 0, 0));
