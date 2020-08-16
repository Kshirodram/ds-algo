let data = {
  value: 6,
  next: {
    value: 10,
    next: {
      value: 12,
      next: {
        value: 3,
        next: null,
      },
    },
  },
};

const reverseLinkedList = (linkedList) => {
  let node = linkedList;
  let previous = null;
  while (node) {
    temp = node.next;
    node.next = previous;
    previous = node;
    node = temp;
  }
  return previous;
};

console.log(JSON.stringify(reverseLinkedList(data)));
