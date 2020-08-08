// const test = {
//   val: 3,
//   left: {
//     val: 9,
//     right: null,
//     left: null,
//   },
//   right: {
//     val: 20,
//     left: {
//       val: 15,
//       left: null,
//       right: null,
//     },
//     right: {
//       val: 7,
//       left: null,
//       right: null,
//     },
//   },
// };

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
  const result = [];
  const queue = [];

  if (root !== null) {
    const hdNodes = {};
    queue.push({ node: root, distance: 0 });
    hdNodes[0] = [root.val];

    while (queue.length > 0) {
      const temp = queue.shift();
      if (temp.node.left !== null) {
        let tempCounter = temp.distance - 1;
        queue.push({ node: temp.node.left, distance: tempCounter });
        if (hdNodes[tempCounter]) {
          hdNodes[tempCounter].push(temp.node.left.val);
        } else {
          hdNodes[tempCounter] = [temp.node.left.val];
        }
      }
      if (temp.node.right !== null) {
        let tempCounter = temp.distance + 1;
        queue.push({ node: temp.node.right, distance: tempCounter });
        if (hdNodes[tempCounter]) {
          hdNodes[tempCounter].push(temp.node.right.val);
        } else {
          hdNodes[tempCounter] = [temp.node.right.val];
        }
      }
    }
    
    Object.keys(hdNodes)
      .sort((a, b) => a - b)
      .forEach((key) => {
        result.push(hdNodes[key]);
      });
    return result;
  }
};

verticalTraversal(test);
