/**
 * @param {string} s
 * @return {number}
 */
// Bruteforce with O(n^2)
var lengthLongestSubstring_brutforce = function (s) {
  let result = "";
  let max = 0,
    current_string = "",
    i,
    char,
    pos;

  for (let i = 0; i < s.length; i += 1) {
    char = s.charAt(i);
    pos = current_string.indexOf(char);
    if (pos !== -1) {
      let tempStr = "";
      for (let j = pos + 1; j < current_string.length; j++) {
        tempStr += current_string[j];
      }
      current_string = tempStr;
    }
    current_string += char;
    if (max < current_string.length) {
      max = current_string.length;
      result = current_string;
    }
  }
  return max;
};

// const lengthLongestSubstring = (str) => {
//   let max = 0;
//   let bPointer = 0;
//   const hashMap = [];

//   while (bPointer < str.length) {
//     if (hashMap.indexOf(str[bPointer]) === -1) {
//       console.log("1");
//       hashMap.push(str[bPointer]);
//       bPointer++;
//       const hashMapLength = hashMap.length;
//       if (max < hashMapLength) {
//         max = hashMapLength;
//       }
//     } else {
//       hashMap.shift();
//     }
//   }
//   return max;
// };

const lengthLongestSubstring = (str) => {
  let max = 0;
  let i = 0;
  let j = 0;
  const hashMap = new Map();

  while (i < str.length) {
    if (!hashMap.has(str[i])) {
      hashMap.set(str[i], true);
      i++;

      const hashMapLength = hashMap.size;
      if (max < hashMapLength) {
        max = hashMapLength;
      }
    } else {
      hashMap.delete(str[j]);
      j++;
    }
  }
  return max;
};
console.log(lengthLongestSubstring("abcabcbb")); // 3
console.log(lengthLongestSubstring("bbbbb")); // 1
console.log(lengthLongestSubstring("pwwkew")); // 3
