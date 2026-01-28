class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

class EvacuationCenter {
  constructor() {
    this.regions = new Map(); // region -> Queue instance
  }

  arrive(region, name) {
    // TODO: Get or create queue for region, then enqueue person
  }

  evacuate(region) {
    // TODO: Dequeue from region's queue, return null if no queue or empty
  }

  nextInLine(region) {
    // TODO: Peek at region's queue front
  }

  isEmpty(region) {
    // TODO: Check if region's queue is empty
  }
}