export const arrayTradeoffsChapter = {
  id: 'array-tradeoffs',
  title: 'The Hidden Costs: Understanding Array Performance Tradeoffs',
  sectionId: 'arrays-and-two-pointers',
  previousChapterId: 'array-core-operations',
  content: `
Six months have passed since Maya mastered the basics of array operations at The Daily Grind. Business is booming! So much so that Sarah has decided to expand - they're opening three new locations across the city. But with success comes new challenges that will teach Maya about the hidden costs of array operations.

## Part 1: The Scaling Problem - When Fast Operations Become Slow

Maya arrives at the flagship store to find Sarah looking stressed, staring at performance reports from their new automated ordering system.

"Maya, we have a problem," Sarah says, pointing to the screen. "Our ordering system worked perfectly when we had 50 orders per day. But now with 500 orders across four locations, customers are complaining about delays. The same operations that felt instant before are now taking noticeable time."

Maya looks puzzled. "But we're using the same array operations we always used. What changed?"

Sarah pulls up two side-by-side demonstrations on her laptop.

### The Small Scale Success Story

\`\`\`javascript
// Back when The Daily Grind was small and cozy
let smallCafeOrders = ["Latte", "Cappuccino", "Americano"];

// Adding a priority order felt instant
const startTime = performance.now();
smallCafeOrders.splice(0, 0, "VIP: Double Espresso");
const endTime = performance.now();
console.log(\`Small cafe priority insertion: \${(endTime - startTime).toFixed(3)}ms\`);

console.log("Small cafe queue:", smallCafeOrders);
// ["VIP: Double Espresso", "Latte", "Cappuccino", "Americano"]
\`\`\`

### The Large Scale Reality Check

\`\`\`javascript
// Now with the expanded business across four locations
let busyChainOrders = [];

// Simulate a busy day with 500 orders
for (let i = 1; i <= 500; i++) {
    busyChainOrders.push(\`Order \${i}: \${['Latte', 'Cappuccino', 'Americano', 'Mocha'][i % 4]}\`);
}

// The same priority insertion now takes much longer
const busyStartTime = performance.now();
busyChainOrders.splice(0, 0, "VIP: Double Espresso");
const busyEndTime = performance.now();
console.log(\`Busy chain priority insertion: \${(busyEndTime - busyStartTime).toFixed(3)}ms\`);

console.log(\`Queue size: \${busyChainOrders.length} orders\`);
\`\`\`

"See the difference?" Sarah asks. "The exact same operation - inserting at the beginning - went from virtually instant to noticeably slow. And that's just with 500 orders. Imagine when we hit 1000!"

### Understanding the Hidden Cost

Maya realizes what's happening. "It's because when we insert at the beginning, every single order after it has to shift one position to the right!"

Sarah nods. "Exactly! Let's visualize what happens behind the scenes."

\`\`\`javascript
// What happens during priority insertion in a large array
function visualizePriorityInsertion(orders, priorityOrder) {
    console.log("🔍 Behind the scenes of priority insertion:");
    console.log(\`Original queue has \${orders.length} orders\`);
    console.log("Step 1: Make space at the beginning");
    
    // Every element must shift right - this is the expensive part!
    console.log(\`Step 2: Shift ALL \${orders.length} existing orders one position right\`);
    console.log("Step 3: Insert the priority order at position 0");
    
    // The actual operation
    const insertStartTime = performance.now();
    orders.splice(0, 0, priorityOrder);
    const insertEndTime = performance.now();
    console.log(\`Priority insertion time: \${(insertEndTime - insertStartTime).toFixed(3)}ms\`);
    
    console.log(\`✅ Complete! Queue now has \${orders.length} orders\`);
    console.log(\`💰 Cost: Had to move \${orders.length - 1} orders to make room for 1 new order\`);
}

// Demonstrate with different queue sizes
let smallQueue = ["Order 1", "Order 2", "Order 3"];
let largeQueue = Array.from({length: 100}, (_, i) => \`Order \${i + 1}\`);

console.log("=== Small Queue Performance ===");
visualizePriorityInsertion([...smallQueue], "VIP Order");

console.log("\\n=== Large Queue Performance ===");
visualizePriorityInsertion([...largeQueue], "VIP Order");
\`\`\`

---
## ⏱️ **Maya's Scaling Challenge!** 
 - 🔓 Uncomment the below code section in the editor 👉:
\`\`\`js
// ==============================
// Exercise 1: Measure the Impact of Scale
// ==============================
\`\`\`

- Implement the required logic
 - Click \`Run Code\` 
 - Inspect \`📋 Console Output\` window for correctness!

---

## Part 2: The Deletion Dilemma - When Removing Orders Becomes Expensive

The next week, Maya discovers another performance issue. The new automated system needs to handle order cancellations, and customers are experiencing delays when canceling orders that were placed earlier in the queue.

"Let me show you what's happening," Sarah says, pulling up the cancellation system.

### The Cancellation Cascade Effect

\`\`\`javascript
// Maya's morning queue - a typical busy day
let morningQueue = [
    "Table 1: Cappuccino",
    "Table 2: Latte", 
    "Table 3: Americano",
    "Table 4: Mocha",
    "Table 5: Espresso",
    "Table 6: Flat White",
    "Table 7: Cortado",
    "Table 8: Macchiato"
];

console.log("Original queue:", morningQueue);
console.log(\`Queue length: \${morningQueue.length} orders\\n\`);

// Customer at Table 2 cancels their order (index 1)
console.log("❌ Table 2 cancels their Latte order");
console.log("What happens behind the scenes:");

console.log("Step 1: Remove the order at index 1");
console.log("Step 2: All orders after index 1 must shift LEFT to fill the gap");

const cancelStartTime = performance.now();
let cancelledOrder = morningQueue.splice(1, 1);
const cancelEndTime = performance.now();
console.log(\`Order cancellation time: \${(cancelEndTime - cancelStartTime).toFixed(3)}ms\`);

console.log(\`Cancelled order: \${cancelledOrder[0]}\`);
console.log("Updated queue:", morningQueue);
console.log(\`💰 Cost: Had to move \${morningQueue.length} orders to fill the gap left by 1 cancelled order\`);
\`\`\`

### The Domino Effect Visualization

Maya creates a function to show exactly what happens during deletions:

\`\`\`javascript
function demonstrateDeletionCost(orders, indexToDelete) {
    const originalLength = orders.length;
    const orderToDelete = orders[indexToDelete];
    
    console.log(\`\\n🎯 Deleting "\${orderToDelete}" at index \${indexToDelete}\`);
    console.log(\`Queue size: \${originalLength} orders\`);
    
    // Calculate how many orders need to shift
    const ordersToShift = originalLength - indexToDelete - 1;
    console.log(\`Orders that must shift left: \${ordersToShift}\`);
    
    // Show the shifting process
    if (ordersToShift > 0) {
        console.log("Shifting process:");
        for (let i = indexToDelete + 1; i < originalLength; i++) {
            console.log(\`  "\${orders[i]}" moves from index \${i} to index \${i - 1}\`);
        }
    }
    
    // Perform the actual deletion
    const deleteStartTime = performance.now();
    orders.splice(indexToDelete, 1);
    const deleteEndTime = performance.now();
    console.log(\`Deletion operation: \${(deleteEndTime - deleteStartTime).toFixed(3)}ms\`);
    
    console.log(\`✅ Deletion complete. New queue size: \${orders.length}\`);
    return orders;
}

// Test with different deletion positions
let testQueue1 = ["First", "Second", "Third", "Fourth", "Fifth"];
let testQueue2 = [...testQueue1];
let testQueue3 = [...testQueue1];

console.log("=== Deleting from BEGINNING (worst case) ===");
demonstrateDeletionCost(testQueue1, 0);

console.log("\\n=== Deleting from MIDDLE (average case) ===");
demonstrateDeletionCost(testQueue2, 2);

console.log("\\n=== Deleting from END (best case) ===");
demonstrateDeletionCost(testQueue3, 4);
\`\`\`

### The Performance Pattern Emerges

"Do you see the pattern, Maya?" Sarah asks.

Maya studies the output. "Yes! The closer to the beginning we delete, the more orders have to shift. Deleting from the end is fast because nothing needs to move!"

"Exactly! This is why we call it **O(n) time complexity** - the time it takes grows linearly with the number of elements that need to shift."

---
## ⏱️ **Maya's Deletion Detective Challenge!** 
 - 🔓 Uncomment the below code section in the editor 👉:
\`\`\`js
// ==============================
// Exercise 2: Analyze Deletion Performance Patterns
// ==============================
\`\`\`

- Implement the required logic
 - Click \`Run Code\` 
 - Inspect \`📋 Console Output\` window for correctness!

---

## Part 3: The Strategic Solution - Smart Design Choices

After understanding the performance costs, Maya and Sarah brainstorm solutions. "We can't avoid these operations entirely," Maya says, "but we can be smarter about when and how we use them."

### Strategy 1: End-Heavy Operations

\`\`\`javascript
// Maya's Smart Queue Management System
class SmartCoffeeQueue {
    constructor() {
        this.orders = [];
        this.completedOrders = [];
    }
    
    // FAST: Add regular orders to the end (O(1))
    addRegularOrder(order) {
        const startTime = performance.now();
        this.orders.push(order);
        const endTime = performance.now();
        console.log(\`✅ Added: \${order} (Fast operation - \${(endTime - startTime).toFixed(3)}ms)\`);
    }
    
    // FAST: Complete orders from the end when possible (O(1))
    completeLastOrder() {
        if (this.orders.length === 0) return null;
        
        const startTime = performance.now();
        const completed = this.orders.pop();
        const endTime = performance.now();
        
        this.completedOrders.push(completed);
        console.log(\`✅ Completed: \${completed} (Fast operation - \${(endTime - startTime).toFixed(3)}ms)\`);
        return completed;
    }
    
    // SLOW BUT NECESSARY: Priority orders (O(n))
    addPriorityOrder(order) {
        console.log("⚠️  Priority order - this will be slower with large queues");
        const startTime = performance.now();
        this.orders.unshift(\`🚨 PRIORITY: \${order}\`);
        const endTime = performance.now();
        console.log(\`✅ Added priority: \${order} (Slow operation - \${(endTime - startTime).toFixed(3)}ms)\`);
    }
    
    // SLOW BUT NECESSARY: Cancel specific order (O(n))
    cancelOrder(orderToCancel) {
        const index = this.orders.findIndex(order => order.includes(orderToCancel));
        if (index === -1) {
            console.log(\`❌ Order "\${orderToCancel}" not found\`);
            return false;
        }
        
        console.log(\`⚠️  Cancelling order at index \${index} - this will shift \${this.orders.length - index - 1} orders\`);
        const startTime = performance.now();
        const cancelled = this.orders.splice(index, 1);
        const endTime = performance.now();
        
        console.log(\`✅ Cancelled: \${cancelled[0]} (Slow operation - \${(endTime - startTime).toFixed(3)}ms)\`);
        return true;
    }
    
    // Show current queue status
    showStatus() {
        console.log(\`\\n📊 Queue Status:\`);
        console.log(\`   Pending orders: \${this.orders.length}\`);
        console.log(\`   Completed orders: \${this.completedOrders.length}\`);
        if (this.orders.length > 0) {
            console.log(\`   Next order: \${this.orders[0]}\`);
        }
    }
}
\`\`\`

---
## ⏱️ **Maya's Strategic Design Challenge!** 
 - 🔓 Uncomment the below code section in the editor 👉:
\`\`\`js
// ==============================
// Exercise 3: Build an Efficient Order Management System
// ==============================
\`\`\`

- Implement the required logic
 - Click \`Run Code\` 
 - Inspect \`📋 Console Output\` window for correctness!

---

## Part 4: Real-World Performance Testing - The Proof is in the Numbers

Maya decides to put her new understanding to the test by comparing different approaches with real performance measurements.

### The Great Performance Showdown

\`\`\`javascript
// Maya's Performance Testing Suite
class PerformanceTester {
    static testInsertionPerformance() {
        console.log("🏁 INSERTION PERFORMANCE TEST");
        console.log("=".repeat(50));
        
        const sizes = [10, 100, 1000, 5000];
        
        sizes.forEach(size => {
            console.log(\`\\n📊 Testing with \${size} orders:\`);
            
            // Test 1: Insert at beginning (worst case)
            let array1 = Array.from({length: size}, (_, i) => \`Order \${i + 1}\`);
            const beginStartTime = performance.now();
            array1.splice(0, 0, "Priority Order");
            const beginEndTime = performance.now();
            console.log(\`  Insert at beginning (\${size} orders): \${(beginEndTime - beginStartTime).toFixed(3)}ms\`);
            
            // Test 2: Insert at end (best case)
            let array2 = Array.from({length: size}, (_, i) => \`Order \${i + 1}\`);
            const endStartTime = performance.now();
            array2.push("New Order");
            const endEndTime = performance.now();
            console.log(\`  Insert at end (\${size} orders): \${(endEndTime - endStartTime).toFixed(3)}ms\`);
            
            // Test 3: Insert in middle (average case)
            let array3 = Array.from({length: size}, (_, i) => \`Order \${i + 1}\`);
            const middleIndex = Math.floor(size / 2);
            const middleStartTime = performance.now();
            array3.splice(middleIndex, 0, "Middle Order");
            const middleEndTime = performance.now();
            console.log(\`  Insert in middle (\${size} orders): \${(middleEndTime - middleStartTime).toFixed(3)}ms\`);
        });
    }
    
    static compareStrategies() {
        console.log("\\n\\n🏁 STRATEGY COMPARISON TEST");
        console.log("=".repeat(50));
        
        const orderCount = 1000;
        
        // Strategy 1: Naive approach (insert at beginning)
        console.log("\\n📈 Strategy 1: Naive Priority Insertion");
        let naiveArray = [];
        const naiveStartTime = performance.now();
        for (let i = 0; i < orderCount; i++) {
            if (i % 10 === 0) {
                // Every 10th order is priority (inserted at beginning)
                naiveArray.splice(0, 0, \`Priority Order \${i}\`);
            } else {
                naiveArray.push(\`Regular Order \${i}\`);
            }
        }
        const naiveEndTime = performance.now();
        console.log(\`Naive strategy total time: \${(naiveEndTime - naiveStartTime).toFixed(3)}ms\`);
        
        // Strategy 2: Smart approach (separate priority queue)
        console.log("\\n📈 Strategy 2: Separate Priority Queue");
        let regularQueue = [];
        let priorityQueue = [];
        const smartStartTime = performance.now();
        for (let i = 0; i < orderCount; i++) {
            if (i % 10 === 0) {
                priorityQueue.push(\`Priority Order \${i}\`);
            } else {
                regularQueue.push(\`Regular Order \${i}\`);
            }
        }
        const smartEndTime = performance.now();
        console.log(\`Smart strategy total time: \${(smartEndTime - smartStartTime).toFixed(3)}ms\`);
        
        console.log(\`\\n📊 Results:\`);
        console.log(\`   Naive approach: Single array with \${naiveArray.length} orders\`);
        console.log(\`   Smart approach: \${regularQueue.length} regular + \${priorityQueue.length} priority orders\`);
    }
}

// Run the performance tests
PerformanceTester.testInsertionPerformance();
PerformanceTester.compareStrategies();
\`\`\`

---
## ⏱️ **Maya's Performance Mastery Challenge!** 
 - 🔓 Uncomment the below code section in the editor 👉:
\`\`\`js
// ==============================
// Exercise 4: Design a Performance-Optimized System
// ==============================
\`\`\`

- Implement the required logic
 - Click \`Run Code\` 
 - Inspect \`📋 Console Output\` window for correctness!

---

## Maya's Journey Complete: From Naive to Strategic

As Maya finishes implementing her performance-optimized order management system, she reflects on how much her understanding has evolved.

### 🎯 **Key Insights from Maya's Performance Journey**

**Part 1: The Scale Reality**
- Operations that feel instant with small data can become noticeably slow with large data
- **O(1) operations** stay fast regardless of size: \`push()\`, \`pop()\`, \`array[index]\`
- **O(n) operations** get slower as data grows: \`unshift()\`, \`shift()\`, \`splice()\` in middle

**Part 2: The Hidden Costs**
- Inserting at the beginning requires shifting ALL existing elements
- Deleting from the beginning requires shifting ALL remaining elements  
- The closer to the beginning, the more expensive the operation

**Part 3: Strategic Solutions**
- Design systems to favor fast operations (\`push\`/\`pop\`) over slow ones
- Use separate data structures for different access patterns
- Batch operations when possible to reduce total shifting
- Consider Maps for fast lookups instead of \`indexOf()\`

**Part 4: Performance-Driven Design**
- Always measure real performance, not just theoretical complexity
- Small arrays: prioritize code readability
- Large arrays: design around performance constraints
- Very large arrays: consider alternative data structures entirely

### 🏆 **Maya's Professional Evolution**

Maya started by learning basic array operations without understanding their performance implications. Now she designs systems that:

1. **Anticipate scale** - considering how operations will perform with real-world data sizes
2. **Choose appropriate data structures** - using the right tool for each specific need
3. **Optimize for common cases** - making frequent operations fast, even if rare operations are slower
4. **Measure and validate** - testing actual performance rather than assuming

"The most important lesson," Maya tells the new hires, "is that there's no such thing as a 'fast' or 'slow' operation in isolation. It all depends on your data size, usage patterns, and performance requirements. A good developer thinks about these tradeoffs from day one."

Sarah nods approvingly. "Maya, you've learned to think like a systems architect. You're not just writing code that works - you're writing code that works well at scale. That's the difference between a junior and senior developer."

*Ready for the next challenge? Let's see how Maya applies this performance mindset to more advanced array techniques and algorithms...*
`,
  exercise: {
    starterCode: `
// ==============================
// Exercise 1: Measure the Impact of Scale
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Create a function that demonstrates how insertion performance changes with array size
// Test insertion at the beginning with arrays of size 10, 100, and 1000

// function measureInsertionScale() {
//   const sizes = [10, 100, 100000];
//
//   sizes.forEach(size => {
//     // Create an array of the specified size
//     let testArray = Array.from({length: size}, (_, i) => \`Order \${i + 1}\`);
//
//     // Measure performance by tracking operations
//     const startTime = performance.now();
//     testArray.splice(0, 0, "Priority Order");
//     const endTime = performance.now();
//     const duration = (endTime - startTime).toFixed(3);
//
//     console.log(\`Insert at beginning - \${size} orders: \${duration}ms\`);
//     console.log(\`Array size after insertion: \${testArray.length}\`);
//     console.log(\`Elements that had to shift: \${size}\`);
//     console.log("---");
//   });
// }

// measureInsertionScale();

// ==============================
// Exercise 2: Analyze Deletion Performance Patterns
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Create a function that shows how deletion position affects performance
// Delete from positions 0 (beginning), middle, and end of a 100-item array

// function analyzeDeletionPatterns() {
//   const arraySize = 100;
//
//   // Test deletion from beginning
//   let array1 = Array.from({length: arraySize}, (_, i) => \`Item \${i + 1}\`);
//   const elementsToShiftBeginning = arraySize - 1;
//   const startTime1 = performance.now();
//   array1.splice(0, 1);
//   const endTime1 = performance.now();
//   console.log(\`Delete from beginning: \${(endTime1 - startTime1).toFixed(3)}ms\`);
//   console.log(\`Elements shifted: \${elementsToShiftBeginning}\`);
//   console.log(\`Remaining items: \${array1.length}\`);
//   console.log("---");
//
//   // Test deletion from middle
//   let array2 = Array.from({length: arraySize}, (_, i) => \`Item \${i + 1}\`);
//   const middleIndex = Math.floor(arraySize / 2);
//   const elementsToShiftMiddle = arraySize - middleIndex - 1;
//   const startTime2 = performance.now();
//   array2.splice(middleIndex, 1);
//   const endTime2 = performance.now();
//   console.log(\`Delete from middle (index \${middleIndex}): \${(endTime2 - startTime2).toFixed(3)}ms\`);
//   console.log(\`Elements shifted: \${elementsToShiftMiddle}\`);
//   console.log(\`Remaining items: \${array2.length}\`);
//   console.log("---");
//
//   // Test deletion from end
//   let array3 = Array.from({length: arraySize}, (_, i) => \`Item \${i + 1}\`);
//   const startTime3 = performance.now();
//   array3.pop();
//   const endTime3 = performance.now();
//   console.log(\`Delete from end: \${(endTime3 - startTime3).toFixed(3)}ms\`);
//   console.log(\`Elements shifted: 0 (no shifting needed!)\`);
//   console.log(\`Remaining items: \${array3.length}\`);
// }

// analyzeDeletionPatterns();

// ==============================
// Exercise 3: Build an Efficient Order Management System
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Create a class that manages orders efficiently using Maya's strategies
// Implement methods for adding regular orders, priority orders, and processing orders

// class EfficientOrderManager {
//   constructor() {
//     this.regularOrders = [];
//     this.priorityOrders = [];
//     this.completedCount = 0;
//     this.operationCount = 0;
//   }
//
//   // Add a regular order (should be fast - O(1))
//   addRegularOrder(order) {
//     // Use push() for fast insertion
//     this.regularOrders.push(order);
//     this.operationCount++;
//     console.log(\`✅ Added regular order: \${order} (Fast O(1) operation #\${this.operationCount})\`);
//   }
//
//   // Add a priority order (separate queue for better performance)
//   addPriorityOrder(order) {
//     // Use push() even for priority orders, but in separate queue
//     this.priorityOrders.push(\`🚨 PRIORITY: \${order}\`);
//     this.operationCount++;
//     console.log(\`🚨 Added priority order: \${order} (Fast O(1) operation #\${this.operationCount})\`);
//   }
//
//   // Process next order (priority first, then regular)
//   processNextOrder() {
//     let nextOrder = null;
//     let queueType = "";
//
//     // Process priority orders first
//     if (this.priorityOrders.length > 0) {
//       nextOrder = this.priorityOrders.shift(); // Small queue, acceptable performance
//       queueType = "priority";
//     } else if (this.regularOrders.length > 0) {
//       nextOrder = this.regularOrders.shift(); // Could be optimized further
//       queueType = "regular";
//     }
//
//     if (nextOrder) {
//       this.completedCount++;
//       this.operationCount++;
//       console.log(\`🔄 Processing \${queueType} order: \${nextOrder} (Operation #\${this.operationCount})\`);
//       return nextOrder;
//     } else {
//       console.log("❌ No orders to process");
//       return null;
//     }
//   }
//
//   // Show current status with performance insights
//   showStatus() {
//     const totalPending = this.priorityOrders.length + this.regularOrders.length;
//     console.log(\`\\n📊 Queue Status:\`);
//     console.log(\`   Priority orders: \${this.priorityOrders.length}\`);
//     console.log(\`   Regular orders: \${this.regularOrders.length}\`);
//     console.log(\`   Total pending: \${totalPending}\`);
//     console.log(\`   Completed: \${this.completedCount}\`);
//     console.log(\`   Total operations: \${this.operationCount}\`);
//     console.log(\`   Efficiency: Using separate queues for O(1) insertions!\`);
//   }
// }

// // Test the efficient order manager
// console.log("🏪 Testing Maya's Efficient Order Management System");
// console.log("=".repeat(50));
// const manager = new EfficientOrderManager();
// manager.addRegularOrder("Latte");
// manager.addRegularOrder("Cappuccino");
// manager.addPriorityOrder("Double Espresso");
// manager.addRegularOrder("Americano");
// manager.showStatus();
// manager.processNextOrder(); // Should process priority first
// manager.processNextOrder(); // Then regular orders
// manager.showStatus();

// ==============================
// Exercise 4: Design a Performance-Optimized System
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Compare the performance of different approaches to handling 1000 orders
// Measure the time difference between naive and optimized approaches

// function compareOrderProcessingStrategies() {
//   const orderCount = 1000;
//
//   console.log("🏁 Comparing Order Processing Strategies");
//   console.log("=".repeat(50));
//
//   // Strategy 1: Naive approach - insert priority orders at beginning
//   console.log("\\n📈 Strategy 1: Naive Priority Insertion");
//   let naiveOrders = [];
//   let naiveShiftOperations = 0;
//   const naiveStartTime = performance.now();
//
//   for (let i = 0; i < orderCount; i++) {
//     if (i % 20 === 0) {
//       // Every 20th order is priority - inserted at beginning (slow!)
//       naiveOrders.splice(0, 0, \`Priority-\${i}\`);
//       naiveShiftOperations += naiveOrders.length - 1; // All existing elements shifted
//     } else {
//       naiveOrders.push(\`Regular-\${i}\`);
//     }
//   }
//
//   const naiveEndTime = performance.now();
//   const naiveDuration = (naiveEndTime - naiveStartTime).toFixed(3);
//   console.log(\`⏱️  Naive approach completed in: \${naiveDuration}ms\`);
//   console.log(\`📊 Final array size: \${naiveOrders.length}\`);
//   console.log(\`🔄 Total shift operations: ~\${naiveShiftOperations}\`);
//
//   // Strategy 2: Optimized approach - separate queues
//   console.log("\\n📈 Strategy 2: Separate Priority Queue");
//   let regularQueue = [];
//   let priorityQueue = [];
//   const optimizedStartTime = performance.now();
//
//   for (let i = 0; i < orderCount; i++) {
//     if (i % 20 === 0) {
//       // Priority orders go to separate queue (fast!)
//       priorityQueue.push(\`Priority-\${i}\`);
//     } else {
//       regularQueue.push(\`Regular-\${i}\`);
//     }
//   }
//
//   const optimizedEndTime = performance.now();
//   const optimizedDuration = (optimizedEndTime - optimizedStartTime).toFixed(3);
//   console.log(\`⏱️  Optimized approach completed in: \${optimizedDuration}ms\`);
//   console.log(\`📊 Regular queue: \${regularQueue.length}, Priority queue: \${priorityQueue.length}\`);
//   console.log(\`🔄 Total shift operations: 0 (all O(1) insertions!)\`);
//
//   // Performance comparison
//   const improvement = parseFloat(naiveDuration) > 0 ? ((parseFloat(naiveDuration) - parseFloat(optimizedDuration)) / parseFloat(naiveDuration) * 100).toFixed(1) : "N/A";
//   console.log(\`\\n🎯 Performance Comparison:\`);
//   console.log(\`   Naive approach: \${naiveDuration}ms with ~\${naiveShiftOperations} shifts\`);
//   console.log(\`   Optimized approach: \${optimizedDuration}ms with 0 shifts\`);
//   console.log(\`   Performance improvement: \${improvement}% faster!\`);
//   console.log(\`   Key insight: Separate queues eliminate expensive shift operations!\`);
// }

// compareOrderProcessingStrategies();
`
  }
};