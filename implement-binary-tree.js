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
  delete(val) {
    if (this.root === null) return;

    if (this.root.left === null && this.root.right === null) {
      if (this.root.val === val) {
        this.root = null;
        return;
      } else return;
    }
    const queue = [this.root];
    let tmpNode = null;
    let nodeToBeDeleted = null;
    while (queue.length) {
      tmpNode = queue.shift();

      if (tmpNode.val === val) {
        nodeToBeDeleted = tmpNode;
      }
      if (tmpNode.left != null) {
        queue.push(tmpNode.left);
      }

      if (tmpNode.right != null) {
        queue.push(tmpNode.right);
      }
    }
    if (nodeToBeDeleted !== null) {
      const val = tmpNode.val;
      this.deleteDeepest(this.root, tmpNode);
      nodeToBeDeleted.val = val;
    }
  }

  deleteDeepest(root, deepestNode) {
    const q = [];
    q.push(root);
    let temp = null;
    // Do level order traversal until last node
    while (q.length) {
      temp = q.shift();

      if (temp == deepestNode) {
        temp = null;
        return;
      }
      if (temp.right != null) {
        if (temp.right == deepestNode) {
          temp.right = null;
          return;
        } else q.push(temp.right);
      }

      if (temp.left != null) {
        if (temp.left == deepestNode) {
          temp.left = null;
          return;
        } else q.push(temp.left);
      }
    }
  }

  deepestNode() {
    let tmpNode = null;
    if (this.root === null) {
      return null;
    }
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      tmpNode = queue.shift();
      if (tmpNode.left !== null) {
        queue.push(tmpNode.left);
      }
      if (tmpNode.right !== null) {
        queue.push(tmpNode.right);
      }
    }
    return tmpNode;
  }
  preOrder() {}
  inOrder() {}
  postOrder() {}
  levelOrder() {}
}

const tree = new BinaryTree();
tree.insert(20);
tree.insert(100);
tree.insert(3);
tree.insert(50);
tree.insert(15);
tree.insert(250);
tree.insert(35);
tree.insert(222);
console.log(JSON.stringify(tree));

//tree.delete(222);
console.log(tree.deepestNode());
console.log(tree.delete(20));
console.log(JSON.stringify(tree));
console.log(tree.delete(3));
console.log(JSON.stringify(tree));
