import { TestResult } from "@nss-workshops/nss-core";

export const combinePatternsThree = {
  id: 'combine-patterns-three',
  title: 'Regional Evacuation Center',
  sectionId: 'combining-patterns',
  previousChapterId: 'combine-patterns-two',
  content: `
## ⏱️ Challenge: Regional Evacuation Center (Map of Queues)

In the Global Cooling emergency, each region has an evacuation center. Citizens line up in the order they arrive, and evacuations happen strictly first-come, first-served.

We'll use:
- A **Map** to track all regions
- Each region's evacuees stored in a **Queue** (proper Queue class implementation)

### 🎯 Requirements

Implement the following methods:

- \`arrive(region, name)\` → add the person to that region's queue
- \`evacuate(region)\` → remove and return the first person from that region's queue, or null if none
- \`nextInLine(region)\` → peek at the next person to be evacuated without removing them
- \`isEmpty(region)\` → return true if that region's queue is empty

### 🔄 Data Structure Strategy

**Map + Queue Pattern:**
1. **Queue Class**: Proper FIFO implementation with:
   - \`enqueue(item)\` to add at the back
   - \`dequeue()\` to remove from front (returns null if empty)
   - \`peek()\` to look at front without removing (returns null if empty)
   - \`isEmpty()\` to check if empty
2. **Map**: Key = region name, Value = Queue instance

### 📊 Algorithm Steps

1. **Queue Implementation**: Use the  Queue class
2. **EvacuationCenter**:
   - Use Map to store region → Queue mappings
   - Create new Queue instances for new regions
3. **Operations**:
   - \`arrive()\`: Get or create region's queue, then enqueue person
   - \`evacuate()\`: Dequeue from region's queue, return null if empty
   - \`nextInLine()\`: Peek at region's queue front
   - \`isEmpty()\`: Check if region's queue is empty

### 💡 Why This Works
- **Map**: O(1) lookup for any region
- **Queue Class**: Clean abstraction with proper FIFO semantics
- **Encapsulation**: Queue operations are clearly defined
- **Scalable**: Can handle any number of regions

### 🧪 Example Walkthrough
\`\`\`javascript
const evac = new EvacuationCenter();
evac.arrive("North", "Alice");
evac.arrive("North", "Bob");
evac.arrive("South", "Carlos");

evac.nextInLine("North");   // "Alice"
evac.evacuate("North");     // "Alice"
evac.evacuate("North");     // "Bob"
evac.evacuate("North");     // null (empty queue)
evac.isEmpty("South");      // false
\`\`\`

**Implementation Notes**
- A complete \`Queue\` class is provided for you to use
- Focus on implementing the \`EvacuationCenter\` class using the Queue
- Use \`Map\` for region tracking with Queue instances as values
- Handle edge cases: non-existent regions, empty queues

🔓 **Use the provided Queue class to implement EvacuationCenter below:**
`,
  exercise: {
    starterCode: `
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
`,
    solution: `
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
`,
    tests: [
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

            if (emptyPeek !== null) return new TestResult({ passed: false, message: "peek() on empty queue should return null" });
            if (emptyDequeue !== null) return new TestResult({ passed: false, message: "dequeue() on empty queue should return null" });
            if (isEmpty1 !== true) return new TestResult({ passed: false, message: "isEmpty() should return true for empty queue" });
            if (peek1 !== "First") return new TestResult({ passed: false, message: "peek() should return 'First' without removing it" });
            if (isEmpty2 !== false) return new TestResult({ passed: false, message: "isEmpty() should return false when queue has items" });
            if (dequeue1 !== "First") return new TestResult({ passed: false, message: "dequeue() should return 'First'" });
            if (peek2 !== "Second") return new TestResult({ passed: false, message: "peek() should return 'Second' after dequeuing 'First'" });
            if (dequeue2 !== "Second") return new TestResult({ passed: false, message: "dequeue() should return 'Second'" });
            if (isEmpty3 !== true) return new TestResult({ passed: false, message: "isEmpty() should return true after dequeuing all items" });
            if (dequeue3 !== null) return new TestResult({ passed: false, message: "dequeue() on empty queue should return null" });

            return new TestResult({ passed: true });
          } catch (e) {
            return new TestResult({ passed: false, message: e.message });
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

            if (nextNorth !== "Alice") return new TestResult({ passed: false, message: "nextInLine should return 'Alice' for North region" });
            if (evacuatedFirst !== "Alice") return new TestResult({ passed: false, message: "First evacuation should return 'Alice'" });
            if (evacuatedSecond !== "Bob") return new TestResult({ passed: false, message: "Second evacuation should return 'Bob'" });
            if (evacuatedThird !== null) return new TestResult({ passed: false, message: "Third evacuation should return null (empty queue)" });
            if (southEmpty !== false) return new TestResult({ passed: false, message: "South region should not be empty (Carlos is there)" });
            if (northEmpty !== true) return new TestResult({ passed: false, message: "North region should be empty after evacuating Alice and Bob" });

            return new TestResult({ passed: true });
          } catch (e) {
            return new TestResult({ passed: false, message: e.message });
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

            if (emptyEvacuation !== null) return new TestResult({ passed: false, message: "Evacuating from non-existent region should return null" });
            if (emptyNext !== null) return new TestResult({ passed: false, message: "nextInLine for non-existent region should return null" });
            if (emptyCheck !== true) return new TestResult({ passed: false, message: "Non-existent region should be considered empty" });
            if (eastNext !== "David") return new TestResult({ passed: false, message: "East region next should be 'David'" });
            if (westNext !== "Eve") return new TestResult({ passed: false, message: "West region next should be 'Eve'" });
            if (eastEvac !== "David") return new TestResult({ passed: false, message: "East evacuation should return 'David'" });
            if (westEvac !== "Eve") return new TestResult({ passed: false, message: "West evacuation should return 'Eve'" });
            if (eastAfter !== "Frank") return new TestResult({ passed: false, message: "After evacuating David, Frank should be next in East" });

            return new TestResult({ passed: true });
          } catch (e) {
            return new TestResult({ passed: false, message: e.message });
          }
        },
        message: "Test edge cases and multiple region management."
      }
    ]
  },
  quiz: null
}; 