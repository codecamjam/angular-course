class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  print() {
    const arr = [];
    let pointer = this.head;
    let i = 0;
    while (i < this.length) {
      arr.push(pointer.val);
      pointer = pointer.next;
      i++;
    }
    console.log(arr);
  }

  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return null;
    let oldTail = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.tail.prev;
      prev.next = null;
      this.tail.prev = null;
      this.tail = prev;
    }

    this.length -= 1;
    return oldTail;
  }

  shift() {
    if (!this.head) return null;
    const oldHead = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length -= 1;
    return oldHead;
  }

  unshift(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else if (this.head === this.tail) {
      this.head = node;
      this.head.next = this.tail;
      this.tail.prev = this.head;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length += 1;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let i = idx < this.length / 2 ? 0 : this.length - 1;

    while (i !== idx) {
      let;
    }
  }
}

const list = new DoublyLinkedList();
list.push("1");
list.push("2");
list.push("3");
// console.log(list.pop());
// console.log(list);
list.unshift("0");
// console.log(list.shift());
// console.log(list);
// list.reverse();
// list.print();
// console.log(list.get(1));
// list.print();
// console.log(list.pop());
console.log(list);
// list.print();
// list.pop();
// list.print();
// list.pop();
// list.print();
// list.pop();
// console.log(list.unshift("HI"));
// console.log(list.get(2).val);
// console.log(list.set("bam", 2));
// list.insert("bear", 5);
// const removed = list.remove(0);
// console.log(removed);
// list.reverse();
// list.set(9, 50);
list.print();
