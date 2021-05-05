/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
*/
const isValid = (str) => {
  const strLength = str.length;
  console.log(strLength);
  if (strLength > 0) {
    const parenthesisStack = [];
    for (let i = 0; i < strLength; i++) {
      if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
        parenthesisStack.push(str[i]);
      } else {
        const parenthesisStackLength = parenthesisStack.length;
        if ( str[i] === ')' && parenthesisStack[parenthesisStackLength - 1] !== '(') return false;
        if ( str[i] === '}' && parenthesisStack[parenthesisStackLength - 1] !== '{') return false;
        if ( str[i] === ']' && parenthesisStack[parenthesisStackLength - 1] !== '[') return false;
        parenthesisStack.splice(-1, 1);
      }
    }
   
    return parenthesisStack.length === 0;
  } else {
    throw new Error("Invalid input string, str lenght should be > 0");
  }
};

console.log(isValid("(({[(((1)-2)+3)-3]/3}-3)"));