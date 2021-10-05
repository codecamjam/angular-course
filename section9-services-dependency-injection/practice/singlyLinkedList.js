class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

class LinkedList {
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
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return null;
    let curr = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = curr;
      while (curr.next) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.length -= 1;
    return curr;
  }

  shift() {
    if (!this.head) return null;
    let oldHead = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
    }
    this.length -= 1;
    return oldHead;
  }

  unshift(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length += 1;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let curr = this.head;
    let i = 0;

    while (i !== idx) {
      curr = curr.next;
      i += 1;
    }

    return curr;
  }

  set(val, idx) {
    if (idx < 0 || idx >= this.length) return null;

    let i = 0;
    let curr = this.head;

    while (i !== idx) {
      curr = curr.next;
      i += 1;
    }

    curr.val = val;

    return this;
  }

  insert(val, idx) {
    if (idx < 0 || idx > this.length) return null;

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let i = 0;
    let curr = this.head;
    let prev = curr;

    while (i !== idx) {
      prev = curr;
      curr = curr.next;
      i += 1;
    }
    const node = new Node(val);
    node.next = curr;
    prev.next = node;
    this.length += 1;
    return this;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    let i = 0;
    let curr = this.head;
    let prev = curr;

    while (i !== idx) {
      prev = curr;
      curr = curr.next;
      i += 1;
    }

    prev.next = curr.next;
    curr.next = null;
    this.length -= 1;
    return curr;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = node;
    let prev = null;

    while (next) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new LinkedList();
list.push("1");
list.push("2");
list.push("3");
list.push("4");
// console.log(list.shift());
// console.log(list);
// list.reverse();
// list.print();
// console.log(list.get(1));
// list.print();
// console.log(list.pop());
// console.log(list);
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
// list.print();
// const removed = list.remove(0);
// console.log(removed);
list.reverse();
// list.set(9, 50);
list.print();
