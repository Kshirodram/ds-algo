/*
Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Example 1:
Input: [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.

Example 2:
Input: [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.

Example 3:
Input: [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
*/
const eraseOverlapIntervals = (intervals) => {
  if (intervals.length <= 1) {
    return 0;
  }
  const sortedInterval = intervals.sort((a, b) => a[1] - b[1]);
  console.log(sortedInterval);
  let minNumInterval = 0;
  let lastValidIntervalIndex = 0;
  for (let i = 1; i < sortedInterval.length; i++) {
    if (sortedInterval[i][0] < sortedInterval[lastValidIntervalIndex][1]) {
      minNumInterval++;
    } else {
      lastValidIntervalIndex = i;
    }
  }
  return minNumInterval;
};

console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]));
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]]));
console.log(eraseOverlapIntervals([[1,2],[2,3]]));
console.log(
  eraseOverlapIntervals([
    [1, 100],
    [11, 22],
    [1, 11],
    [2, 12],
  ])
);
