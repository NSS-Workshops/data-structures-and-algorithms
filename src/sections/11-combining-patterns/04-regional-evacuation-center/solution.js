// Reference Solution
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
    if (!this.regions.has(region)) {
      this.regions.set(region, new Queue());
    }
    this.regions.get(region).enqueue(name);
  }

  evacuate(region) {
    if (!this.regions.has(region)) {
      return null;
    }
    return this.regions.get(region).dequeue();
  }

  nextInLine(region) {
    if (!this.regions.has(region)) {
      return null;
    }
    return this.regions.get(region).peek();
  }

  isEmpty(region) {
    if (!this.regions.has(region)) {
      return true;
    }
    return this.regions.get(region).isEmpty();
  }
}