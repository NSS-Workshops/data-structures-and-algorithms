import { CodeExercise } from "@nss-workshops/nss-core";

const starterCode = `
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
`;

const solution = `
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
`;

const tests = [
  {
    name: "Queue class implementation",
    test: (code) => {
      try {
        const testCode = code + `
          const queue = new Queue();
          
          // Test empty queue
          const emptyPeek = queue.peek();
          const emptyDequeue = queue.dequeue();
          const isEmpty1 = queue.isEmpty();
          
          // Test enqueue and operations
          queue.enqueue("First");
          queue.enqueue("Second");
          
          const peek1 = queue.peek();
          const isEmpty2 = queue.isEmpty();
          const dequeue1 = queue.dequeue();
          const peek2 = queue.peek();
          const dequeue2 = queue.dequeue();
          const isEmpty3 = queue.isEmpty();
          const dequeue3 = queue.dequeue();

          return { emptyPeek, emptyDequeue, isEmpty1, peek1, isEmpty2, dequeue1, peek2, dequeue2, isEmpty3, dequeue3 };
        `;
        const { emptyPeek, emptyDequeue, isEmpty1, peek1, isEmpty2, dequeue1, peek2, dequeue2, isEmpty3, dequeue3 } = new Function(testCode)();

        if (emptyPeek !== null) return { passed: false, message: "peek() on empty queue should return null" };
        if (emptyDequeue !== null) return { passed: false, message: "dequeue() on empty queue should return null" };
        if (isEmpty1 !== true) return { passed: false, message: "isEmpty() should return true for empty queue" };
        if (peek1 !== "First") return { passed: false, message: "peek() should return 'First' without removing it" };
        if (isEmpty2 !== false) return { passed: false, message: "isEmpty() should return false when queue has items" };
        if (dequeue1 !== "First") return { passed: false, message: "dequeue() should return 'First'" };
        if (peek2 !== "Second") return { passed: false, message: "peek() should return 'Second' after dequeuing 'First'" };
        if (dequeue2 !== "Second") return { passed: false, message: "dequeue() should return 'Second'" };
        if (isEmpty3 !== true) return { passed: false, message: "isEmpty() should return true after dequeuing all items" };
        if (dequeue3 !== null) return { passed: false, message: "dequeue() on empty queue should return null" };

        return { passed: true };
      } catch (e) {
        return { passed: false, message: e.message };
      }
    },
    message: "Test Queue class FIFO operations."
  },
  {
    name: "EvacuationCenter with Queue integration",
    test: (code) => {
      try {
        const testCode = code + `
          const evac = new EvacuationCenter();
          evac.arrive("North", "Alice");
          evac.arrive("North", "Bob");
          evac.arrive("South", "Carlos");

          const nextNorth = evac.nextInLine("North");
          const evacuatedFirst = evac.evacuate("North");
          const evacuatedSecond = evac.evacuate("North");
          const evacuatedThird = evac.evacuate("North");
          const southEmpty = evac.isEmpty("South");
          const northEmpty = evac.isEmpty("North");

          return { nextNorth, evacuatedFirst, evacuatedSecond, evacuatedThird, southEmpty, northEmpty };
        `;
        const { nextNorth, evacuatedFirst, evacuatedSecond, evacuatedThird, southEmpty, northEmpty } = new Function(testCode)();

        if (nextNorth !== "Alice") return { passed: false, message: "nextInLine should return 'Alice' for North region" };
        if (evacuatedFirst !== "Alice") return { passed: false, message: "First evacuation should return 'Alice'" };
        if (evacuatedSecond !== "Bob") return { passed: false, message: "Second evacuation should return 'Bob'" };
        if (evacuatedThird !== null) return { passed: false, message: "Third evacuation should return null (empty queue)" };
        if (southEmpty !== false) return { passed: false, message: "South region should not be empty (Carlos is there)" };
        if (northEmpty !== true) return { passed: false, message: "North region should be empty after evacuating Alice and Bob" };

        return { passed: true };
      } catch (e) {
        return { passed: false, message: e.message };
      }
    },
    message: "Test EvacuationCenter with proper Queue instances."
  },
  {
    name: "Edge cases and multiple regions",
    test: (code) => {
      try {
        const testCode = code + `
          const evac = new EvacuationCenter();
          
          // Test empty region
          const emptyEvacuation = evac.evacuate("NonExistent");
          const emptyNext = evac.nextInLine("NonExistent");
          const emptyCheck = evac.isEmpty("NonExistent");
          
          // Test multiple regions
          evac.arrive("East", "David");
          evac.arrive("West", "Eve");
          evac.arrive("East", "Frank");
          
          const eastNext = evac.nextInLine("East");
          const westNext = evac.nextInLine("West");
          const eastEvac = evac.evacuate("East");
          const westEvac = evac.evacuate("West");
          const eastAfter = evac.nextInLine("East");

          return { emptyEvacuation, emptyNext, emptyCheck, eastNext, westNext, eastEvac, westEvac, eastAfter };
        `;
        const { emptyEvacuation, emptyNext, emptyCheck, eastNext, westNext, eastEvac, westEvac, eastAfter } = new Function(testCode)();

        if (emptyEvacuation !== null) return { passed: false, message: "Evacuating from non-existent region should return null" };
        if (emptyNext !== null) return { passed: false, message: "nextInLine for non-existent region should return null" };
        if (emptyCheck !== true) return { passed: false, message: "Non-existent region should be considered empty" };
        if (eastNext !== "David") return { passed: false, message: "East region next should be 'David'" };
        if (westNext !== "Eve") return { passed: false, message: "West region next should be 'Eve'" };
        if (eastEvac !== "David") return { passed: false, message: "East evacuation should return 'David'" };
        if (westEvac !== "Eve") return { passed: false, message: "West evacuation should return 'Eve'" };
        if (eastAfter !== "Frank") return { passed: false, message: "After evacuating David, Frank should be next in East" };

        return { passed: true };
      } catch (e) {
        return { passed: false, message: e.message };
      }
    },
    message: "Test edge cases and multiple region management."
  }
];

export default function RegionalEvacuationCenter() {
  return (
    <CodeExercise
      starterCode={starterCode}
      solution={solution}
      tests={tests}
    />
  );
}