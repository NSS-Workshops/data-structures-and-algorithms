// ==============================
// Exercise 1: Measure the Impact of Scale
// ==============================
function measureInsertionScale() {
  const sizes = [10, 100, 1000];

  sizes.forEach(size => {
    // Create an array of the specified size
    let testArray = Array.from({length: size}, (_, i) => `Order ${i + 1}`);

    // Measure performance by tracking operations
    const startTime = performance.now();
    testArray.splice(0, 0, "Priority Order");
    const endTime = performance.now();
    const duration = (endTime - startTime).toFixed(3);

    console.log(`Insert at beginning - ${size} orders: ${duration}ms`);
    console.log(`Array size after insertion: ${testArray.length}`);
    console.log(`Elements that had to shift: ${size}`);
    console.log("---");
  });
}

measureInsertionScale();

// ==============================
// Exercise 2: Analyze Deletion Performance Patterns
// ==============================
function analyzeDeletionPatterns() {
  const arraySize = 100;

  // Test deletion from beginning
  let array1 = Array.from({length: arraySize}, (_, i) => `Item ${i + 1}`);
  const elementsToShiftBeginning = arraySize - 1;
  const startTime1 = performance.now();
  array1.splice(0, 1);
  const endTime1 = performance.now();
  console.log(`Delete from beginning: ${(endTime1 - startTime1).toFixed(3)}ms`);
  console.log(`Elements shifted: ${elementsToShiftBeginning}`);
  console.log(`Remaining items: ${array1.length}`);
  console.log("---");

  // Test deletion from middle
  let array2 = Array.from({length: arraySize}, (_, i) => `Item ${i + 1}`);
  const middleIndex = Math.floor(arraySize / 2);
  const elementsToShiftMiddle = arraySize - middleIndex - 1;
  const startTime2 = performance.now();
  array2.splice(middleIndex, 1);
  const endTime2 = performance.now();
  console.log(`Delete from middle (index ${middleIndex}): ${(endTime2 - startTime2).toFixed(3)}ms`);
  console.log(`Elements shifted: ${elementsToShiftMiddle}`);
  console.log(`Remaining items: ${array2.length}`);
  console.log("---");

  // Test deletion from end
  let array3 = Array.from({length: arraySize}, (_, i) => `Item ${i + 1}`);
  const startTime3 = performance.now();
  array3.pop();
  const endTime3 = performance.now();
  console.log(`Delete from end: ${(endTime3 - startTime3).toFixed(3)}ms`);
  console.log(`Elements shifted: 0 (no shifting needed!)`);
  console.log(`Remaining items: ${array3.length}`);
}

analyzeDeletionPatterns();

// ==============================
// Exercise 3: Build an Efficient Order Management System
// ==============================
class EfficientOrderManager {
  constructor() {
    this.regularOrders = [];
    this.priorityOrders = [];
    this.completedCount = 0;
    this.operationCount = 0;
  }

  // Add a regular order (should be fast - O(1))
  addRegularOrder(order) {
    // Use push() for fast insertion
    this.regularOrders.push(order);
    this.operationCount++;
    console.log(`✅ Added regular order: ${order} (Fast O(1) operation #${this.operationCount})`);
  }

  // Add a priority order (separate queue for better performance)
  addPriorityOrder(order) {
    // Use push() even for priority orders, but in separate queue
    this.priorityOrders.push(`🚨 PRIORITY: ${order}`);
    this.operationCount++;
    console.log(`🚨 Added priority order: ${order} (Fast O(1) operation #${this.operationCount})`);
  }

  // Process next order (priority first, then regular)
  processNextOrder() {
    let nextOrder = null;
    let queueType = "";

    // Process priority orders first
    if (this.priorityOrders.length > 0) {
      nextOrder = this.priorityOrders.shift(); // Small queue, acceptable performance
      queueType = "priority";
    } else if (this.regularOrders.length > 0) {
      nextOrder = this.regularOrders.shift(); // Could be optimized further
      queueType = "regular";
    }

    if (nextOrder) {
      this.completedCount++;
      this.operationCount++;
      console.log(`🔄 Processing ${queueType} order: ${nextOrder} (Operation #${this.operationCount})`);
      return nextOrder;
    } else {
      console.log("❌ No orders to process");
      return null;
    }
  }

  // Show current status with performance insights
  showStatus() {
    const totalPending = this.priorityOrders.length + this.regularOrders.length;
    console.log(`\n📊 Queue Status:`);
    console.log(`   Priority orders: ${this.priorityOrders.length}`);
    console.log(`   Regular orders: ${this.regularOrders.length}`);
    console.log(`   Total pending: ${totalPending}`);
    console.log(`   Completed: ${this.completedCount}`);
    console.log(`   Total operations: ${this.operationCount}`);
    console.log(`   Efficiency: Using separate queues for O(1) insertions!`);
  }
}

// Test the efficient order manager
console.log("🏪 Testing Maya's Efficient Order Management System");
console.log("=".repeat(50));
const manager = new EfficientOrderManager();
manager.addRegularOrder("Latte");
manager.addRegularOrder("Cappuccino");
manager.addPriorityOrder("Double Espresso");
manager.addRegularOrder("Americano");
manager.showStatus();
manager.processNextOrder(); // Should process priority first
manager.processNextOrder(); // Then regular orders
manager.showStatus();

// ==============================
// Exercise 4: Design a Performance-Optimized System
// ==============================
function compareOrderProcessingStrategies() {
  const orderCount = 1000;

  console.log("🏁 Comparing Order Processing Strategies");
  console.log("=".repeat(50));

  // Strategy 1: Naive approach - insert priority orders at beginning
  console.log("\n📈 Strategy 1: Naive Priority Insertion");
  let naiveOrders = [];
  let naiveShiftOperations = 0;
  const naiveStartTime = performance.now();

  for (let i = 0; i < orderCount; i++) {
    if (i % 20 === 0) {
      // Every 20th order is priority - inserted at beginning (slow!)
      naiveOrders.splice(0, 0, `Priority-${i}`);
      naiveShiftOperations += naiveOrders.length - 1; // All existing elements shifted
    } else {
      naiveOrders.push(`Regular-${i}`);
    }
  }

  const naiveEndTime = performance.now();
  const naiveDuration = (naiveEndTime - naiveStartTime).toFixed(3);
  console.log(`⏱️  Naive approach completed in: ${naiveDuration}ms`);
  console.log(`📊 Final array size: ${naiveOrders.length}`);
  console.log(`🔄 Total shift operations: ~${naiveShiftOperations}`);

  // Strategy 2: Optimized approach - separate queues
  console.log("\n📈 Strategy 2: Separate Priority Queue");
  let regularQueue = [];
  let priorityQueue = [];
  const optimizedStartTime = performance.now();

  for (let i = 0; i < orderCount; i++) {
    if (i % 20 === 0) {
      // Priority orders go to separate queue (fast!)
      priorityQueue.push(`Priority-${i}`);
    } else {
      regularQueue.push(`Regular-${i}`);
    }
  }

  const optimizedEndTime = performance.now();
  const optimizedDuration = (optimizedEndTime - optimizedStartTime).toFixed(3);
  console.log(`⏱️  Optimized approach completed in: ${optimizedDuration}ms`);
  console.log(`📊 Regular queue: ${regularQueue.length}, Priority queue: ${priorityQueue.length}`);
  console.log(`🔄 Total shift operations: 0 (all O(1) insertions!)`);

  // Performance comparison
  const improvement = parseFloat(naiveDuration) > 0 ? ((parseFloat(naiveDuration) - parseFloat(optimizedDuration)) / parseFloat(naiveDuration) * 100).toFixed(1) : "N/A";
  console.log(`\n🎯 Performance Comparison:`);
  console.log(`   Naive approach: ${naiveDuration}ms with ~${naiveShiftOperations} shifts`);
  console.log(`   Optimized approach: ${optimizedDuration}ms with 0 shifts`);
  console.log(`   Performance improvement: ${improvement}% faster!`);
  console.log(`   Key insight: Separate queues eliminate expensive shift operations!`);
}

compareOrderProcessingStrategies();