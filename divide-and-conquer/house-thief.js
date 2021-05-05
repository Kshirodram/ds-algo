/*
There are n houses build in a line, each of which contains some value in it. A thief is going to steal the maximal value of these houses, but he can’t steal in two adjacent houses because the owner of the stolen houses will tell his two neighbors left and right side. What is the maximum stolen value?
Examples: 
 

Input: hval[] = {6, 7, 1, 3, 8, 2, 4}
Output: 19

Explanation: The thief will steal 6, 1, 8 and 4 from the house.

Input: hval[] = {5, 3, 4, 11, 2}
Output: 16

Explanation: Thief will steal 5 and 11
*/
const maxAmountStolen = (housesNetWorth, currentIndex) => {
  if (currentIndex >= housesNetWorth.length) {
    return 0;
  }
  const stealCurrentHouse =
    housesNetWorth[currentIndex] +
    maxAmountStolen(housesNetWorth, currentIndex + 2);
  const skipCurrentHouse = maxAmountStolen(housesNetWorth, currentIndex + 1);
  return Math.max(stealCurrentHouse, skipCurrentHouse);
};

console.log(maxAmountStolen([6, 7, 1, 3, 8, 2, 4], 0)); // 19
