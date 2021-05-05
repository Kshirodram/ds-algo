/*
Create a tree from  a given arr
*/

// Node class
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const queue = [];
    // root is null then node will
    // be added to the tree and made root.
    if (this.root === null) {
      this.root = new Node(val);
    } else {
      queue.push(this.root);
    }
    while (queue.length) {
      const node = queue.shift();
      if (node.left === null) {
        node.left = new Node(val);
        break;
      }
      if (node.right === null) {
        node.right = new Node(val);
        break;
      }
      queue.push(node.left);
      queue.push(node.right);
    }
  }
}

const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(null);
tree.insert(1);
tree.insert(null);
console.log(JSON.stringify(tree));
