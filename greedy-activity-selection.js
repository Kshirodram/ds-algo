/*
Maximum number of activities performed by a single person given a person can have one activity at a time

Input: [[0,6], [3,4], [1,2], [5,8], [5,7], [8,9]]
Output: [1,2], [3,4], [5,7], [8,9]
*/

const activitySelection = (activitiesArray) => {
  const sortedActivities = activitiesArray.sort((a, b) => a[1] - b[1]);
  const arrLength = sortedActivities.length;
  let previousActivity = sortedActivities[0];
  const result = [previousActivity];
  for (let i = 1; i < arrLength; i++) {
    if (sortedActivities[i][0] >= previousActivity[1]) {
      result.push(sortedActivities[i]);
      previousActivity = sortedActivities[i];
    }
  }

  return result;
};

console.log(
  "result::",
  activitySelection([
    [0, 6],
    [3, 4],
    [1, 2],
    [5, 8],
    [5, 7],
    [8, 9],
  ])
);
