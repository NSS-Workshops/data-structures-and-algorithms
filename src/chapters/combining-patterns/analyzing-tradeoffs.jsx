import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";
import { TestResult } from "../../utils/test_utils";

export const analyzingTradeoffsChapter = {
  id: 'analyzing-tradeoffs',
  title: 'Performance Under Pressure - Analyzing Trade-offs in Climate Systems',
  sectionId: 'combining-patterns',
  previousChapterId: 'choosing-data-structures',
  content: `

## The Crisis Moment

Dr. Maya Patel's phone buzzed urgently at 3:47 AM. The message from the National Weather Service was stark: "Polar Vortex collapse imminent. Unprecedented cold front approaching populated areas. Need immediate cooling model predictions. Current system too slow - taking 6 hours for critical forecasts. Lives at stake from extreme cold."

Maya rushed to the Global Climate Research Institute, where she found Dr. James Chen already at his workstation, surrounded by performance monitoring dashboards showing alarming red indicators. The climate prediction system they had built was buckling under the pressure of emergency demand.

"Maya, we have a serious problem," James said, his voice tense with urgency. "Our beautiful AI model selection system works perfectly for normal research loads, but when we need it most—during cooling emergencies—it's too slow. We're facing the classic computer science challenge: **performance trade-offs under real-world pressure**."

## The Performance Crisis

Maya studied the monitoring dashboards, seeing the bottlenecks clearly. "Look at these metrics," she said, pointing to various charts:

- **Model search queries**: 10,000+ per minute (normal: 100 per minute)
- **Database response time**: 15 seconds (normal: 0.1 seconds)
- **Memory usage**: 95% (normal: 30%)
- **Cache hit rate**: 12% (normal: 85%)
- **Concurrent users**: 5,000 (normal: 50)

"This is exactly why understanding trade-offs is crucial," James explained to the emergency response team that had gathered. "Every data structure choice, every algorithm decision, every optimization we make involves trade-offs. Today, we're going to learn how to analyze these trade-offs and make systems that perform when it matters most."

## Understanding Performance Trade-offs

Maya pulled up a whiteboard and began sketching. "In computer science, we constantly face trade-offs. Let's analyze the key ones affecting our climate system:

### 1. **Time vs. Space Complexity**
- **Faster searches** → More memory for indexes
- **Smaller memory footprint** → Slower query processing
- **Real-world impact**: During cooling emergencies, we need speed over memory efficiency

### 2. **Consistency vs. Availability**
- **Perfect data consistency** → System locks during updates
- **High availability** → Temporary data inconsistencies
- **Real-world impact**: Polar vortex forecasts need availability over perfect consistency

### 3. **Simplicity vs. Performance**
- **Simple, maintainable code** → May not handle peak loads
- **Highly optimized code** → Complex, harder to debug
- **Real-world impact**: Emergency cooling systems need performance, but must be reliable

### 4. **Read vs. Write Optimization**
- **Fast reads** → Slower writes, more storage
- **Fast writes** → Slower reads, less storage
- **Real-world impact**: Cooling data is read-heavy during emergencies"

## ⏱️ Challenge 1: Performance Profiler

James opened a coding environment. "Let's build a performance profiler that helps us identify bottlenecks in our climate systems. This will teach you how to measure and analyze trade-offs systematically."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement the \`PerformanceProfiler\` class
- Track timing, memory usage, and operation counts
- Identify bottlenecks and suggest optimizations
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge teaches you how to measure performance scientifically," Maya explained. "You can't optimize what you can't measure."

## The Memory vs. Speed Trade-off

After completing the profiler, James pulled up memory usage charts. "Look at this classic trade-off in our model search system. We can choose between three approaches:

### Approach 1: Minimal Memory (Current System)
\`\`\`javascript
// Search models by scanning all data each time
function findModels(criteria) {
  const results = [];
  for (const model of allModels) {
    if (matchesCriteria(model, criteria)) {
      results.push(model);
    }
  }
  return results; // O(n) time, O(1) extra space
}
\`\`\`

### Approach 2: Pre-computed Indexes (High Memory)
\`\`\`javascript
// Maintain indexes for every possible search criteria
class OptimizedSearch {
  constructor() {
    this.categoryIndex = new Map();     // 50MB
    this.algorithmIndex = new Map();    // 30MB
    this.performanceIndex = new Map();  // 40MB
    this.datasetIndex = new Map();      // 60MB
    this.combinedIndexes = new Map();   // 200MB
    // Total: ~380MB extra memory
  }
  
  findModels(criteria) {
    return this.combinedIndexes.get(criteriaKey); // O(1) time
  }
}
\`\`\`

### Approach 3: Smart Caching (Balanced)
\`\`\`javascript
// Cache frequently accessed searches, compute others on demand
class SmartCachedSearch {
  constructor() {
    this.frequentSearchCache = new Map(); // 50MB
    this.recentResultsCache = new Map();  // 30MB
    // Total: ~80MB extra memory
  }
  
  findModels(criteria) {
    // Check cache first, compute if needed
    // O(1) for cached, O(n) for new searches
  }
}
\`\`\`

"During the polar vortex emergency, we need Approach 2," Maya concluded. "We trade memory for speed because lives depend on fast cold weather predictions."

## ⏱️ Challenge 2: Adaptive Performance System

"Let's build a system that can adapt its performance characteristics based on current load," James announced, opening another challenge.

🔓 **Uncomment the below code section in the editor 👉:**
- Implement the \`AdaptiveClimateSystem\` class
- Switch between performance modes based on load
- Balance memory usage and response time dynamically
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge demonstrates how to build systems that make trade-off decisions automatically," Maya noted. "The system monitors its own performance and adapts accordingly."

## Concurrency Trade-offs: Handling the Storm

As the team worked, James pulled up another critical issue. "During cooling emergencies, we have thousands of scientists accessing the system simultaneously. This creates concurrency challenges with their own trade-offs."

### The Concurrency Dilemma

"Consider our cooling model update process," Maya explained, drawing a timeline:

\`\`\`
Normal Operation (50 users):
User 1: Read cooling model → Process → Update (2 seconds)
User 2: Read cooling model → Process → Update (2 seconds)
No conflicts, simple locking works fine

Emergency Operation (5000 users):
Users 1-5000: All trying to read/update cooling models simultaneously
Simple locking → 5000 * 2 seconds = 2.8 hours total wait time!
\`\`\`

### Trade-off Solutions

"We have several options, each with trade-offs:

#### Option 1: Pessimistic Locking (Safe but Slow)
- **Pros**: Data consistency guaranteed
- **Cons**: Terrible performance under load
- **Use case**: Critical financial transactions

#### Option 2: Optimistic Locking (Fast but Complex)
- **Pros**: High concurrency, good performance
- **Cons**: Retry logic needed, potential conflicts
- **Use case**: Most web applications

#### Option 3: Read Replicas (Fast Reads, Complex Writes)
- **Pros**: Unlimited read scalability
- **Cons**: Write complexity, eventual consistency
- **Use case**: Our climate data system!

#### Option 4: Event Sourcing (Audit Trail, High Complexity)
- **Pros**: Complete history, high availability
- **Cons**: Complex implementation, storage overhead
- **Use case**: Financial systems, critical infrastructure"

## ⏱️ Challenge 3: Concurrency Manager

"Let's implement a concurrency manager that handles high-load scenarios intelligently," Maya said, opening the final challenge.

🔓 **Uncomment the below code section in the editor 👉:**
- Implement the \`ConcurrencyManager\` class
- Handle read/write conflicts with different strategies
- Provide performance metrics for different approaches
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

## Real-World Impact: The Hurricane Response

As the team completed their challenges, Maya received an update from the National Weather Service. "The optimizations we just implemented have reduced our model query time from 6 hours to 12 minutes. Cold weather emergency warnings can now be issued 5 hours earlier, potentially saving thousands of lives from hypothermia and cold-related deaths."

James pulled up the updated performance dashboard:

- **Model search queries**: 10,000+ per minute ✅ (was failing)
- **Database response time**: 0.3 seconds ✅ (was 15 seconds)
- **Memory usage**: 75% ✅ (was 95%)
- **Cache hit rate**: 92% ✅ (was 12%)
- **Concurrent users**: 5,000 ✅ (now supported)

### The Trade-offs We Made

"Let's review the specific trade-offs that saved the day," Maya explained:

#### 1. **Memory for Speed**
- **Decision**: Increased memory usage by 400MB
- **Benefit**: 50x faster query response
- **Justification**: During cooling emergencies, speed saves lives

#### 2. **Complexity for Reliability**
- **Decision**: Implemented adaptive load balancing
- **Cost**: 2x more complex codebase
- **Benefit**: System handles 100x normal load during polar events

#### 3. **Storage for Availability**
- **Decision**: Added read replicas in 3 regions
- **Cost**: 3x storage requirements
- **Benefit**: System stays online during regional cooling events

#### 4. **Consistency for Performance**
- **Decision**: Accept 30-second data lag
- **Risk**: Slightly outdated cooling information
- **Benefit**: System remains responsive under extreme cold weather load

## Trade-off Analysis Framework

Maya presented their systematic approach to analyzing trade-offs:

### Step 1: **Identify Constraints**
- What are the hard limits? (Memory, CPU, Network, Time)
- What are the requirements? (Accuracy, Speed, Availability)
- What are the consequences of failure?

### Step 2: **Measure Current Performance**
- Baseline metrics under normal conditions
- Stress test under peak conditions
- Identify specific bottlenecks

### Step 3: **Evaluate Options**
- List all possible approaches
- Quantify costs and benefits of each
- Consider implementation complexity

### Step 4: **Make Informed Decisions**
- Choose based on actual requirements, not assumptions
- Document the reasoning for future reference
- Plan for monitoring and adjustment

### Step 5: **Monitor and Adapt**
- Continuously measure performance
- Be ready to adjust trade-offs as requirements change
- Learn from real-world usage patterns

## The Bigger Picture: Climate Science Impact

As the emergency response wound down, James reflected on their work. "Today we learned that performance optimization isn't just about making code faster—it's about understanding the real-world impact of our technical decisions."

Maya nodded. "Every millisecond we save in climate model processing could mean earlier warnings for extreme weather events. Every megabyte of memory we optimize efficiently could allow us to run more detailed climate simulations. Every concurrency improvement could help more scientists collaborate on urgent research."

### Success Stories from Their Optimizations

"Our trade-off analysis has had measurable impact," James shared:

- **Hurricane Katrina 2.0 Simulation**: Reduced processing time from 3 days to 4 hours
- **Arctic Ice Loss Predictions**: Enabled real-time updates instead of weekly reports
- **Global Temperature Modeling**: Increased model resolution by 10x with same hardware
- **Extreme Weather Alerts**: Reduced false positive rate by 40% through better data processing

## Looking Ahead: The Final Integration

Maya looked ahead to their final challenge. "Tomorrow, we'll put everything together—pattern recognition, data structure selection, and performance optimization—to build a comprehensive climate monitoring and AI system that can handle real-world complexity."

"You'll see how all these concepts integrate in a system that processes millions of data points, serves thousands of users, and helps humanity understand and respond to climate change," James added.

The team left feeling accomplished and energized, knowing they had just learned skills that directly contribute to addressing one of humanity's greatest challenges. They had moved beyond theoretical computer science to practical problem-solving that saves lives and protects the planet.`,
  exercise: {
    starterCode: `/*
Performance Trade-offs Analysis Challenge

Dr. Maya and Dr. James need your help optimizing the climate system for emergency loads.
You'll implement three systems that demonstrate different performance trade-offs and
learn how to make informed decisions about system optimization.

Key Concepts:
- Time vs. Space complexity trade-offs
- Concurrency and scalability challenges
- Performance profiling and bottleneck identification
- Adaptive systems that adjust to load
*/

// ⏱️ Challenge 1: Performance Profiler
// 🔓 Uncomment the below code section and implement the required logic:

/*
class PerformanceProfiler {
  constructor() {
    // TODO: Initialize tracking structures
    // Hint: Use Maps for operation timing, Arrays for history, counters for statistics
  }
  
  startOperation(operationName) {
    // TODO: Start timing an operation
    // Record start time and operation details
    // Return operation ID for later reference
  }
  
  endOperation(operationId) {
    // TODO: End timing an operation
    // Calculate duration and update statistics
    // Return performance metrics for this operation
  }
  
  profileFunction(functionName, func, ...args) {
    // TODO: Profile a function execution
    // Measure execution time, memory usage (if possible), and return value
    // Return: { result, executionTime, operationName }
  }
  
  getBottlenecks(threshold = 1000) {
    // TODO: Identify operations slower than threshold (ms)
    // Return array of slow operations with their average times
    // Sort by average execution time (slowest first)
  }
  
  getPerformanceReport() {
    // TODO: Generate comprehensive performance report
    // Return: {
    //   totalOperations: number,
    //   averageTime: number,
    //   slowestOperation: string,
    //   fastestOperation: string,
    //   bottlenecks: array
    // }
  }
  
  reset() {
    // TODO: Clear all performance data
  }
}
*/

// ⏱️ Challenge 2: Adaptive Performance System
// 🔓 Uncomment the below code section and implement the required logic:

/*
class AdaptiveClimateSystem {
  constructor() {
    // TODO: Initialize system with different performance modes
    // Modes: 'normal', 'high_load', 'emergency'
    // Each mode has different memory/speed trade-offs
  }
  
  setPerformanceMode(mode) {
    // TODO: Switch between performance modes
    // 'normal': balanced approach
    // 'high_load': favor speed over memory
    // 'emergency': maximum speed, ignore memory constraints
  }
  
  processClimateData(data) {
    // TODO: Process data using current performance mode
    // Normal: standard processing with moderate caching
    // High Load: aggressive caching, parallel processing
    // Emergency: pre-computed results, maximum parallelization
    // Return processed data and performance metrics
  }
  
  monitorLoad() {
    // TODO: Monitor current system load
    // Track: active operations, memory usage, response times
    // Return load metrics and recommend mode changes
  }
  
  autoAdjustMode() {
    // TODO: Automatically adjust performance mode based on load
    // Switch to higher performance modes when load increases
    // Return to normal mode when load decreases
  }
  
  getSystemMetrics() {
    // TODO: Return current system performance metrics
    // Include: current mode, memory usage, operation count, average response time
  }
}
*/

// ⏱️ Challenge 3: Concurrency Manager
// 🔓 Uncomment the below code section and implement the required logic:

/*
class ConcurrencyManager {
  constructor() {
    // TODO: Initialize concurrency control structures
    // Hint: Use Maps for locks, Sets for active operations, queues for waiting operations
  }
  
  acquireLock(resourceId, operationType = 'read') {
    // TODO: Acquire lock for a resource
    // Support 'read' and 'write' operations
    // Multiple readers allowed, exclusive writers
    // Return lock token or null if unavailable
  }
  
  releaseLock(lockToken) {
    // TODO: Release a previously acquired lock
    // Update lock state and notify waiting operations
    // Return success/failure status
  }
  
  executeWithLock(resourceId, operationType, operation) {
    // TODO: Execute operation with automatic lock management
    // Acquire lock, execute operation, release lock
    // Handle errors and ensure lock is always released
    // Return operation result and timing information
  }
  
  getContentionMetrics() {
    // TODO: Return concurrency contention metrics
    // Include: active locks, waiting operations, average wait time
    // Help identify concurrency bottlenecks
  }
  
  simulateHighLoad(operationCount, readWriteRatio = 0.8) {
    // TODO: Simulate high concurrency load for testing
    // Create multiple concurrent operations (readWriteRatio = fraction that are reads)
    // Measure performance under load
    // Return performance statistics
  }
}
*/`,
    solution: `/*
Performance Trade-offs Analysis - Complete Solution

This solution demonstrates how to analyze and optimize performance trade-offs
in climate monitoring systems under emergency conditions.
*/

class PerformanceProfiler {
  constructor() {
    this.operations = new Map(); // operationId -> operation data
    this.operationStats = new Map(); // operationName -> statistics
    this.operationHistory = []; // chronological history
    this.nextOperationId = 1;
  }
  
  startOperation(operationName) {
    const operationId = this.nextOperationId++;
    const startTime = performance.now();
    
    this.operations.set(operationId, {
      id: operationId,
      name: operationName,
      startTime: startTime,
      endTime: null,
      duration: null
    });
    
    return operationId;
  }
  
  endOperation(operationId) {
    const operation = this.operations.get(operationId);
    if (!operation) {
      return null;
    }
    
    const endTime = performance.now();
    const duration = endTime - operation.startTime;
    
    operation.endTime = endTime;
    operation.duration = duration;
    
    // Update statistics
    if (!this.operationStats.has(operation.name)) {
      this.operationStats.set(operation.name, {
        count: 0,
        totalTime: 0,
        minTime: Infinity,
        maxTime: 0,
        averageTime: 0
      });
    }
    
    const stats = this.operationStats.get(operation.name);
    stats.count++;
    stats.totalTime += duration;
    stats.minTime = Math.min(stats.minTime, duration);
    stats.maxTime = Math.max(stats.maxTime, duration);
    stats.averageTime = stats.totalTime / stats.count;
    
    // Add to history
    this.operationHistory.push({
      name: operation.name,
      duration: duration,
      timestamp: endTime
    });
    
    return {
      operationName: operation.name,
      duration: duration,
      averageTime: stats.averageTime
    };
  }
  
  profileFunction(functionName, func, ...args) {
    const operationId = this.startOperation(functionName);
    const startTime = performance.now();
    
    try {
      const result = func(...args);
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      
      this.endOperation(operationId);
      
      return {
        result: result,
        executionTime: executionTime,
        operationName: functionName
      };
    } catch (error) {
      this.endOperation(operationId);
      throw error;
    }
  }
  
  getBottlenecks(threshold = 1000) {
    const bottlenecks = [];
    
    for (const [operationName, stats] of this.operationStats) {
      if (stats.averageTime > threshold) {
        bottlenecks.push({
          operationName: operationName,
          averageTime: stats.averageTime,
          maxTime: stats.maxTime,
          count: stats.count
        });
      }
    }
    
    return bottlenecks.sort((a, b) => b.averageTime - a.averageTime);
  }
  
  getPerformanceReport() {
    if (this.operationStats.size === 0) {
      return {
        totalOperations: 0,
        averageTime: 0,
        slowestOperation: null,
        fastestOperation: null,
        bottlenecks: []
      };
    }
    
    let totalOps = 0;
    let totalTime = 0;
    let slowestOp = null;
    let fastestOp = null;
    let slowestTime = 0;
    let fastestTime = Infinity;
    
    for (const [operationName, stats] of this.operationStats) {
      totalOps += stats.count;
      totalTime += stats.totalTime;
      
      if (stats.averageTime > slowestTime) {
        slowestTime = stats.averageTime;
        slowestOp = operationName;
      }
      
      if (stats.averageTime < fastestTime) {
        fastestTime = stats.averageTime;
        fastestOp = operationName;
      }
    }
    
    return {
      totalOperations: totalOps,
      averageTime: totalTime / totalOps,
      slowestOperation: slowestOp,
      fastestOperation: fastestOp,
      bottlenecks: this.getBottlenecks()
    };
  }
  
  reset() {
    this.operations.clear();
    this.operationStats.clear();
    this.operationHistory = [];
    this.nextOperationId = 1;
  }
}

class AdaptiveClimateSystem {
  constructor() {
    this.currentMode = 'normal';
    this.cache = new Map();
    this.precomputedResults = new Map();
    this.loadMetrics = {
      activeOperations: 0,
      memoryUsage: 0,
      averageResponseTime: 0
    };
    this.operationHistory = [];
  }
  
  setPerformanceMode(mode) {
    const validModes = ['normal', 'high_load', 'emergency'];
    if (!validModes.includes(mode)) {
      throw new Error(\`Invalid mode: \${mode}\`);
    }
    
    const previousMode = this.currentMode;
    this.currentMode = mode;
    
    // Adjust system behavior based on mode
    switch (mode) {
      case 'normal':
        this.cache.clear(); // Use moderate caching
        break;
      case 'high_load':
        // Keep existing cache, increase cache size limit
        break;
      case 'emergency':
        // Precompute common results
        this.precomputeEmergencyResults();
        break;
    }
    
    return { previousMode, newMode: mode };
  }
  
  precomputeEmergencyResults() {
    // Simulate precomputing common climate data results
    const commonQueries = [
      'hurricane_prediction',
      'temperature_forecast',
      'precipitation_model'
    ];
    
    for (const query of commonQueries) {
      this.precomputedResults.set(query, {
        result: \`Precomputed result for \${query}\`,
        timestamp: Date.now()
      });
    }
  }
  
  processClimateData(data) {
    const startTime = performance.now();
    this.loadMetrics.activeOperations++;
    
    let result;
    let processingMethod;
    
    try {
      switch (this.currentMode) {
        case 'normal':
          result = this.normalProcessing(data);
          processingMethod = 'normal';
          break;
        case 'high_load':
          result = this.highLoadProcessing(data);
          processingMethod = 'high_load';
          break;
        case 'emergency':
          result = this.emergencyProcessing(data);
          processingMethod = 'emergency';
          break;
      }
      
      const endTime = performance.now();
      const processingTime = endTime - startTime;
      
      // Update metrics
      this.operationHistory.push({
        processingTime,
        mode: this.currentMode,
        timestamp: endTime
      });
      
      // Keep only recent history
      if (this.operationHistory.length > 100) {
        this.operationHistory.shift();
      }
      
      return {
        result,
        processingTime,
        processingMethod,
        mode: this.currentMode
      };
    } finally {
      this.loadMetrics.activeOperations--;
    }
  }
  
  normalProcessing(data) {
    // Simulate normal processing with moderate caching
    const cacheKey = JSON.stringify(data).substring(0, 50);
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }
    
    // Simulate processing delay
    const result = \`Processed: \${JSON.stringify(data)}\`;
    this.cache.set(cacheKey, result);
    
    return result;
  }
  
  highLoadProcessing(data) {
    // Aggressive caching and parallel processing simulation
    const cacheKey = JSON.stringify(data).substring(0, 50);
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }
    
    // Simulate faster processing with more resources
    const result = \`High-load processed: \${JSON.stringify(data)}\`;
    this.cache.set(cacheKey, result);
    
    return result;
  }
  
  emergencyProcessing(data) {
    // Use precomputed results when possible
    const dataType = data.type || 'unknown';
    
    if (this.precomputedResults.has(dataType)) {
      const precomputed = this.precomputedResults.get(dataType);
      return \`Emergency (precomputed): \${precomputed.result}\`;
    }
    
    // Fallback to high-load processing
    return \`Emergency (computed): \${this.highLoadProcessing(data)}\`;
  }
  
  monitorLoad() {
    // Calculate average response time from recent history
    const recentOps = this.operationHistory.slice(-20);
    const avgResponseTime = recentOps.length > 0 
      ? recentOps.reduce((sum, op) => sum + op.processingTime, 0) / recentOps.length
      : 0;
    
    this.loadMetrics.averageResponseTime = avgResponseTime;
    this.loadMetrics.memoryUsage = this.cache.size + this.precomputedResults.size;
    
    // Recommend mode based on load
    let recommendedMode = 'normal';
    if (avgResponseTime > 100) {
      recommendedMode = 'high_load';
    }
    if (avgResponseTime > 500 || this.loadMetrics.activeOperations > 10) {
      recommendedMode = 'emergency';
    }
    
    return {
      ...this.loadMetrics,
      recommendedMode,
      currentMode: this.currentMode
    };
  }
  
  autoAdjustMode() {
    const loadInfo = this.monitorLoad();
    const currentMode = this.currentMode;
    
    if (loadInfo.recommendedMode !== currentMode) {
      this.setPerformanceMode(loadInfo.recommendedMode);
      return {
        adjusted: true,
        previousMode: currentMode,
        newMode: loadInfo.recommendedMode,
        reason: \`Load metrics suggested mode change\`
      };
    }
    
    return {
      adjusted: false,
      currentMode: currentMode,
      reason: 'No adjustment needed'
    };
  }
  
  getSystemMetrics() {
    return {
      currentMode: this.currentMode,
      memoryUsage: this.loadMetrics.memoryUsage,
      activeOperations: this.loadMetrics.activeOperations,
      averageResponseTime: this.loadMetrics.averageResponseTime,
      cacheSize: this.cache.size,
      precomputedResults: this.precomputedResults.size,
      recentOperations: this.operationHistory.length
    };
  }
}

class ConcurrencyManager {
  constructor() {
    this.locks = new Map(); // resourceId -> lock info
    this.waitingOperations = new Map(); // resourceId -> queue of waiting operations
    this.activeLocks = new Set(); // set of active lock tokens
    this.lockCounter = 1;
    this.contentionStats = {
      totalLockRequests: 0,
      totalWaitTime: 0,
      activeReaders: 0,
      activeWriters: 0
    };
  }
  
  acquireLock(resourceId, operationType = 'read') {
    this.contentionStats.totalLockRequests++;
    
    const lockToken = \`lock_\${this.lockCounter++}\`;
    const requestTime = performance.now();
    
    // Check if resource is available
    const currentLock = this.locks.get(resourceId);
    
    if (!currentLock) {
      // Resource is free, grant lock immediately
      this.locks.set(resourceId, {
        type: operationType,
        tokens: new Set([lockToken]),
        grantedAt: requestTime
      });
      
      this.activeLocks.add(lockToken);
      
      if (operationType === 'read') {
        this.contentionStats.activeReaders++;
      } else {
        this.contentionStats.activeWriters++;
      }
      
      return {
        token: lockToken,
        resourceId: resourceId,
        operationType: operationType,
        waitTime: 0
      };
    }
    
    // Check compatibility
    const canGrant = (currentLock.type === 'read' && operationType === 'read');
    
    if (canGrant) {
      // Add to existing read lock
      currentLock.tokens.add(lockToken);
      this.activeLocks.add(lockToken);
      this.contentionStats.activeReaders++;
      
      return {
        token: lockToken,
        resourceId: resourceId,
        operationType: operationType,
        waitTime: 0
      };
    }
    
    // Cannot grant immediately, would need to implement waiting queue
    // For this exercise, return null to indicate unavailable
    return null;
  }
  
  releaseLock(lockToken) {
    if (!this.activeLocks.has(lockToken)) {
      return { success: false, reason: 'Invalid lock token' };
    }
    
    // Find the resource for this lock token
    let targetResource = null;
    let targetLock = null;
    
    for (const [resourceId, lockInfo] of this.locks) {
      if (lockInfo.tokens.has(lockToken)) {
        targetResource = resourceId;
        targetLock = lockInfo;
        break;
      }
    }
    
    if (!targetResource) {
      return { success: false, reason: 'Lock token not found' };
    }
    // Remove token from lock
    targetLock.tokens.delete(lockToken);
    this.activeLocks.delete(lockToken);
    
    // Update stats
    if (targetLock.type === 'read') {
      this.contentionStats.activeReaders--;
    } else {
      this.contentionStats.activeWriters--;
    }
    
    // If no more tokens, remove the lock entirely
    if (targetLock.tokens.size === 0) {
      this.locks.delete(targetResource);
    }
    
    return { success: true, resourceId: targetResource };
  }
  
  executeWithLock(resourceId, operationType, operation) {
    const startTime = performance.now();
    const lockResult = this.acquireLock(resourceId, operationType);
    
    if (!lockResult) {
      return {
        success: false,
        error: 'Could not acquire lock',
        waitTime: 0,
        executionTime: 0
      };
    }
    
    try {
      const result = operation();
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      
      this.releaseLock(lockResult.token);
      
      return {
        success: true,
        result: result,
        waitTime: lockResult.waitTime,
        executionTime: executionTime
      };
    } catch (error) {
      this.releaseLock(lockResult.token);
      throw error;
    }
  }
  
  getContentionMetrics() {
    const avgWaitTime = this.contentionStats.totalLockRequests > 0
      ? this.contentionStats.totalWaitTime / this.contentionStats.totalLockRequests
      : 0;
    
    return {
      totalLockRequests: this.contentionStats.totalLockRequests,
      averageWaitTime: avgWaitTime,
      activeLocks: this.activeLocks.size,
      activeReaders: this.contentionStats.activeReaders,
      activeWriters: this.contentionStats.activeWriters,
      lockedResources: this.locks.size
    };
  }
  
  simulateHighLoad(operationCount, readWriteRatio = 0.8) {
    const results = [];
    const startTime = performance.now();
    
    // Create multiple concurrent operations
    for (let i = 0; i < operationCount; i++) {
      const isRead = Math.random() < readWriteRatio;
      const operationType = isRead ? 'read' : 'write';
      const resourceId = \`resource_\${Math.floor(Math.random() * 5) + 1}\`; // 5 different resources
      
      const operation = () => {
        // Simulate work
        const workTime = Math.random() * 10 + 5; // 5-15ms of work
        const workStart = performance.now();
        while (performance.now() - workStart < workTime) {
          // Busy wait to simulate work
        }
        return \`Operation \${i} completed\`;
      };
      
      const result = this.executeWithLock(resourceId, operationType, operation);
      results.push({
        operationId: i,
        operationType,
        resourceId,
        ...result
      });
    }
    
    const endTime = performance.now();
    const totalTime = endTime - startTime;
    
    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;
    const avgExecutionTime = results
      .filter(r => r.success)
      .reduce((sum, r) => sum + r.executionTime, 0) / successful;
    
    return {
      totalOperations: operationCount,
      successful: successful,
      failed: failed,
      totalTime: totalTime,
      averageExecutionTime: avgExecutionTime,
      throughput: successful / (totalTime / 1000), // operations per second
      contentionMetrics: this.getContentionMetrics()
    };
  }
}`,
    tests: [
      {
        name: "Test PerformanceProfiler timing and bottleneck detection",
        test: (code) => {
          try {
            const testCode = code + `
            // Test PerformanceProfiler
            const profiler = new PerformanceProfiler();
            
            // Profile some operations
            const op1 = profiler.startOperation('fast_operation');
            // Simulate fast operation
            profiler.endOperation(op1);
            
            const op2 = profiler.startOperation('slow_operation');
            // Simulate slow operation with busy wait
            const start = performance.now();
            while (performance.now() - start < 50) {} // 50ms delay
            profiler.endOperation(op2);
            
            // Profile a function
            const testFunc = () => {
              const start = performance.now();
              while (performance.now() - start < 20) {} // 20ms delay
              return 'test result';
            };
            
            const funcResult = profiler.profileFunction('test_function', testFunc);
            
            const bottlenecks = profiler.getBottlenecks(10); // Operations slower than 10ms
            const report = profiler.getPerformanceReport();
            
            return {
              funcResult: funcResult,
              bottlenecks: bottlenecks,
              report: report,
              hasSlowOperation: bottlenecks.some(b => b.operationName === 'slow_operation')
            };
            `;
            
            const result = new Function(testCode)();
            
            if (!result.funcResult || result.funcResult.result !== 'test result') {
              return new TestResult({ passed: false, message: "Function profiling not working" });
            }
            
            if (!result.hasSlowOperation) {
              return new TestResult({ passed: false, message: "Bottleneck detection not working" });
            }
            
            if (!result.report || result.report.totalOperations < 3) {
              return new TestResult({ passed: false, message: "Performance report not working" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "PerformanceProfiler should track operation timing and identify bottlenecks."
      },
      {
        name: "Test AdaptiveClimateSystem mode switching and performance",
        test: (code) => {
          try {
            const testCode = code + `
            // Test AdaptiveClimateSystem
            const system = new AdaptiveClimateSystem();
            
            // Test normal mode
            const normalResult = system.processClimateData({ type: 'temperature', value: 25 });
            
            // Switch to emergency mode
            system.setPerformanceMode('emergency');
            const emergencyResult = system.processClimateData({ type: 'hurricane_prediction', value: 'category_5' });
            
            // Test load monitoring
            const loadMetrics = system.monitorLoad();
            
            // Test auto adjustment
            const adjustment = system.autoAdjustMode();
            
            const systemMetrics = system.getSystemMetrics();
            
            return {
              normalResult: normalResult,
              emergencyResult: emergencyResult,
              loadMetrics: loadMetrics,
              systemMetrics: systemMetrics,
              hasPrecomputedResults: systemMetrics.precomputedResults > 0
            };
            `;
            
            const result = new Function(testCode)();
            
            if (!result.normalResult || !result.normalResult.result) {
              return new TestResult({ passed: false, message: "Normal processing not working" });
            }
            
            if (!result.emergencyResult || !result.emergencyResult.result.includes('Emergency')) {
              return new TestResult({ passed: false, message: "Emergency mode processing not working" });
            }
            
            if (!result.hasPrecomputedResults) {
              return new TestResult({ passed: false, message: "Emergency mode precomputation not working" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "AdaptiveClimateSystem should switch modes and optimize performance accordingly."
      },
      {
        name: "Test ConcurrencyManager lock management and contention",
        test: (code) => {
          try {
            const testCode = code + `
            // Test ConcurrencyManager
            const manager = new ConcurrencyManager();
            
            // Test basic lock acquisition
            const readLock1 = manager.acquireLock('resource1', 'read');
            const readLock2 = manager.acquireLock('resource1', 'read'); // Should succeed (multiple readers)
            const writeLock = manager.acquireLock('resource1', 'write'); // Should fail (writer blocked by readers)
            
            // Test lock release
            const release1 = manager.releaseLock(readLock1.token);
            const release2 = manager.releaseLock(readLock2.token);
            
            // Test operation execution with lock
            const operation = () => 'operation completed';
            const execResult = manager.executeWithLock('resource2', 'write', operation);
            
            // Test contention metrics
            const metrics = manager.getContentionMetrics();
            
            // Test high load simulation
            const loadTest = manager.simulateHighLoad(10, 0.7);
            
            return {
              readLock1: readLock1,
              readLock2: readLock2,
              writeLock: writeLock,
              execResult: execResult,
              metrics: metrics,
              loadTest: loadTest,
              multipleReadersAllowed: readLock1 && readLock2,
              writerBlocked: !writeLock
            };
            `;
            
            const result = new Function(testCode)();
            
            if (!result.multipleReadersAllowed) {
              return new TestResult({ passed: false, message: "Multiple readers should be allowed" });
            }
            
            if (!result.writerBlocked) {
              return new TestResult({ passed: false, message: "Writer should be blocked by existing readers" });
            }
            
            if (!result.execResult || !result.execResult.success) {
              return new TestResult({ passed: false, message: "Operation execution with lock not working" });
            }
            
            if (!result.loadTest || result.loadTest.totalOperations !== 10) {
              return new TestResult({ passed: false, message: "High load simulation not working" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "ConcurrencyManager should handle read/write locks and measure contention."
      }
    ]
  },
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();

        return (
          <main>
            <h2>Performance Trade-offs Analysis</h2>
            <form className="auto-graded-quiz">
              <div
                className="question"
                data-answer="Memory for speed during emergencies"
              >
                <p>
                  What was the key trade-off made to optimize the climate system for hurricane emergency response?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  During the hurricane emergency, the team chose to use 400MB more memory to achieve 50x faster
                  query response times. This trade-off was justified because during emergencies, speed saves lives
                  and the additional memory cost is acceptable.
                </div>
              </div>

              <div className="question" data-answer="readers-writers">
                <p>
                  What concurrency pattern allows multiple simultaneous read operations but exclusive write operations?
                </p>
                <label>
                  <input type="radio" name="concurrency-pattern" value="readers-writers" required />
                  Readers-writers pattern with shared read locks and exclusive write locks
                </label>
                <br />
                <label>
                  <input type="radio" name="concurrency-pattern" value="mutex" required />
                  Mutual exclusion with single-threaded access only
                </label>
                <br />
                <label>
                  <input type="radio" name="concurrency-pattern" value="optimistic" required />
                  Optimistic locking with conflict detection and retry
                </label>
                <br />
                <label>
                  <input type="radio" name="concurrency-pattern" value="event-sourcing" required />
                  Event sourcing with append-only operations
                </label>
                <span className="feedback" />
                <div className="explanation">
                  The readers-writers pattern allows multiple concurrent read operations (since reads don&apos;t
                  modify data) while ensuring write operations have exclusive access to prevent data corruption.
                  This is ideal for systems with many more reads than writes, like climate data systems.
                </div>
              </div>

              <button className="code-button test-button" type="submit">
                Submit
              </button>
            </form>
          </main>
        );
      };

      return <CheckpointComponent />;
    },
  },
};
    