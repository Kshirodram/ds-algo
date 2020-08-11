const test = {
  val: 0,
  left: {
    val: 2,
    left: {
      val: 3,
      left: {
        val: 4,
        left: null,
        right: {
          val: 7,
          left: { val: 10, left: null, right: null },
          right: { val: 8, left: null, right: null },
        },
      },
      right: {
        val: 5,
        left: {
          val: 6,
          left: { val: 11, left: null, right: null },
          right: { val: 9, left: null, right: null },
        },
        right: null,
      },
    },
    right: null,
  },
  right: { val: 1, left: null, right: null },
};

var verticalTraversal = function (root) {
  // dfs or bfs but calculate the coordinates while running it
  // using bfs we won't have to use the Y values to sort (?)
  // left goes to X-1, Y-1, right goes to X+1, Y-1
  let stack = [{ ...root, x: 0, y: 0 }];

  let xCoordMap = {};

  const addNode = (val, x, y) => {
    // if the key, 'x', already exists, push it
    // if it doesn't, make a new array
    if (xCoordMap[`${x}`]) {
      xCoordMap[`${x}`].push({ val, y });
    } else {
      xCoordMap[`${x}`] = [{ val, y }];
    }
  };

  while (stack.length > 0) {
    const currNode = stack.pop();

    addNode(currNode.val, currNode.x, currNode.y);

    if (currNode.left) {
      stack.push({ ...currNode.left, x: currNode.x - 1, y: currNode.y - 1 });
    }

    if (currNode.right) {
      stack.push({ ...currNode.right, x: currNode.x + 1, y: currNode.y - 1 });
    }
  }

  // we have an object with numbered keys and arrays of values
  const sortedKeys = Object.keys(xCoordMap).sort(
    (a, b) => Number(a) - Number(b)
  );
  const vertArrays = sortedKeys.map((key) => {
    // sort the array then return it with only vals, not x and y
    // sort by y first, then by value if y's are the same
    xCoordMap[key]
      .sort((a, b) => b.y - a.y)
      .sort((a, b) => {
        if (a.y === b.y) return a.val - b.val;
        return 0;
      });
    return xCoordMap[key].map((obj) => obj.val);
  });
  return vertArrays;
};

console.log(verticalTraversal(test));
