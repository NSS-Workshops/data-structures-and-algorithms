import { useAutoGradeQuiz } from "@nss-workshops/nss-core";

export const combiningPatternsCheckpointChapter = {
  id: 'combining-patterns-checkpoint',
  title: 'Final Self Assessment',
  sectionId: 'combining-patterns',
  previousChapterId: 'combine-patterns-four',
  content: null,
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();
        
        return (
          <main>
            <form className="auto-graded-quiz">
              {/* Big O and Algorithmic Thinking */}
              <div className="question" data-answer="O(log n)">
                <p>
                  <strong>Algorithmic Thinking:</strong> What is the time complexity of binary search on a sorted array of n elements?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  Binary search repeatedly divides the search space in half, leading to O(log n) time complexity.
                  This logarithmic performance makes it extremely efficient for searching large sorted datasets.
                </div>
              </div>

              {/* Arrays and Two Pointers */}
              <div className="question" data-answer="two-pointers">
                <p>
                  <strong>Array Patterns:</strong> Which algorithmic pattern is most efficient for finding pairs in a sorted array that sum to a target value?
                </p>
                <label>
                  <input type="radio" name="array-pattern" value="two-pointers" required />
                  Two pointers technique with O(n) time complexity
                </label>
                <br />
                <label>
                  <input type="radio" name="array-pattern" value="nested-loops" required />
                  Nested loops with O(n²) time complexity
                </label>
                <br />
                <label>
                  <input type="radio" name="array-pattern" value="binary-search" required />
                  Binary search for each element with O(n log n) time complexity
                </label>
                <br />
                <label>
                  <input type="radio" name="array-pattern" value="hash-map" required />
                  Hash map lookup with O(n) time and O(n) space complexity
                </label>
                <span className="feedback" />
                <div className="explanation">
                  The two pointers technique is optimal for sorted arrays: place one pointer at the start and one at the end,
                  then move them based on whether the current sum is too high or too low. This achieves O(n) time with O(1) space.
                </div>
              </div>

              {/* Sliding Window */}
              <div className="question" data-answer="windowSum">
                <p>
                  <strong>Sliding Window:</strong> Complete this sliding window implementation to find the maximum sum subarray of size k:
                </p>
                <pre><code>{`function maxSumSubarray(arr, k) {
  let maxSum = 0;
  let windowSum = 0;
  let left = 0;
  
  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right];
    
    if (right >= k - 1) {
      maxSum = Math.max(maxSum, _____);
      windowSum -= arr[left];
      left++;
    }
  }
  return maxSum;
}`}</code></pre>
                <p>What should be compared with maxSum?</p>
                <select required>
                  <option value="">Choose the correct variable...</option>
                  <option value="windowSum">windowSum</option>
                  <option value="arr[right]">arr[right]</option>
                  <option value="left">left</option>
                  <option value="right">right</option>
                </select>
                <span className="feedback" />
                <div className="explanation">
                  Sliding window maintains a subset of elements (the &quot;window&quot;) and efficiently updates the window state
                  as it moves through the array. We compare maxSum with windowSum to track the maximum sum found so far.
                  This achieves O(n) time complexity by avoiding recalculation.
                </div>
              </div>

              {/* 2D Arrays */}
              <div className="question" data-answers="Check bounds before accessing,Use nested loops for traversal,Consider different traversal patterns">
                <p>
                  <strong>2D Arrays:</strong> What are the key considerations when working with 2D arrays/matrices?
                </p>
                <label>
                  <input type="checkbox" value="Check bounds before accessing" />
                  🔍 Check bounds before accessing elements to avoid index errors
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Use nested loops for traversal" />
                  🔄 Use nested loops for systematic traversal of all elements
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Consider different traversal patterns" />
                  📐 Consider different traversal patterns (row-wise, column-wise, diagonal)
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Always use recursion for matrix operations" />
                  🔁 Always use recursion for matrix operations
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Store matrices as 1D arrays internally" />
                  📊 Store matrices as 1D arrays internally for better performance
                </label>
                <div className="feedback"></div>
                <div className="explanation">
                  Key considerations for 2D arrays include bounds checking (preventing index out of bounds errors),
                  using appropriate nested loop patterns for traversal, and understanding different traversal patterns
                  for different algorithms. Recursion and 1D storage are sometimes useful but not always necessary.
                </div>
              </div>

              {/* Linked Lists */}
              <div className="question" data-answer="dynamic-size">
                <p>
                  <strong>Linked Lists:</strong> What is the main advantage of linked lists over arrays?
                </p>
                <label>
                  <input type="radio" name="linked-list-advantage" value="dynamic-size" required />
                  Dynamic size - can grow and shrink during runtime
                </label>
                <br />
                <label>
                  <input type="radio" name="linked-list-advantage" value="random-access" required />
                  Random access - can access any element in O(1) time
                </label>
                <br />
                <label>
                  <input type="radio" name="linked-list-advantage" value="cache-friendly" required />
                  Cache-friendly - elements are stored contiguously in memory
                </label>
                <br />
                <label>
                  <input type="radio" name="linked-list-advantage" value="less-memory" required />
                  Less memory usage - no wasted space for unused elements
                </label>
                <span className="feedback" />
                <div className="explanation">
                  The main advantage of linked lists is dynamic size - they can grow and shrink during runtime without
                  declaring a fixed size upfront. Arrays have random access and are more cache-friendly, while linked
                  lists actually use more memory per element due to storing pointers.
                </div>
              </div>

              {/* Stacks and Queues */}
              <div className="question" data-answer="pop,push,dequeue,enqueue">
                <p>
                  <strong>Stacks & Queues:</strong> Complete the stack and queue implementations:
                </p>
                <pre><code>{`class Stack {
  constructor() { this.items = []; }
  
  _____() { return this.items.pop(); }      // Remove from top
  _____(item) { this.items.push(item); }    // Add to top
}

class Queue {
  constructor() { this.items = []; }
  
  _____() { return this.items.shift(); }    // Remove from front
  _____(item) { this.items.push(item); }    // Add to back
}`}</code></pre>
                <p>Fill in the method names (comma-separated): <input type="text" placeholder="enqueue,pop,push,dequeue," required /></p>
                <span className="feedback" />
                <div className="explanation">
                  Stacks follow LIFO (Last In, First Out) using pop() and push() methods.
                  Queues follow FIFO (First In, First Out) using dequeue() and enqueue() methods.
                  The correct answers are: pop, push, dequeue, enqueue.
                </div>
              </div>

              {/* Maps and Sets */}
              <div className="question" data-answer="hash-table">
                <p>
                  <strong>Maps & Sets:</strong> What underlying data structure typically implements Maps and Sets for O(1) average-case operations?
                </p>
                <label>
                  <input type="radio" name="map-implementation" value="hash-table" required />
                  Hash table with collision handling
                </label>
                <br />
                <label>
                  <input type="radio" name="map-implementation" value="binary-tree" required />
                  Binary search tree with balanced structure
                </label>
                <br />
                <label>
                  <input type="radio" name="map-implementation" value="linked-list" required />
                  Linked list with sequential search
                </label>
                <br />
                <label>
                  <input type="radio" name="map-implementation" value="sorted-array" required />
                  Sorted array with binary search
                </label>
                <span className="feedback" />
                <div className="explanation">
                  Hash tables provide O(1) average-case performance for Maps and Sets by using hash functions to convert
                  keys directly to array indices. Collision handling (like separate chaining) manages cases where
                  different keys hash to the same index.
                </div>
              </div>

              {/* Sorting and Binary Search */}
              <div className="question" data-answer="O(n log n)">
                <p>
                  <strong>Sorting:</strong> What is the time complexity of efficient comparison-based sorting algorithms like merge sort and heap sort?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  Efficient comparison-based sorting algorithms like merge sort, heap sort, and quicksort (average case)
                  have O(n log n) time complexity. This is optimal for comparison-based sorting - it&apos;s mathematically
                  proven that you cannot do better than O(n log n) when sorting by comparing elements.
                </div>
              </div>

              {/* Pattern Recognition */}
              <div className="question" data-answer="Map,Set,Array,LinkedList">
                <p>
                  <strong>Pattern Recognition:</strong> Choose the best data structure for each scenario:
                </p>
                <pre><code>{`// Fast key-value lookups
const userCache = new _____([
  ['user1', {name: 'Alice'}],
  ['user2', {name: 'Bob'}]
]);

// Unique items only
const uniqueIds = new _____([1, 2, 2, 3, 3, 4]);

// Indexed access needed
const temperatures = new _____([20, 22, 19, 25]);

// Frequent insertions/deletions from the front and back
class _____ {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}`}</code></pre>
                <p>Fill in the data structures (comma-separated): <input type="text" placeholder="LinkedList,Map,Set,Array" required /></p>
                <span className="feedback" />
                <div className="explanation">
                  Choose data structures based on operations: Map for fast lookups, Set for uniqueness,
                  Array for indexed access, LinkedList for dynamic insertion/deletion.
                  The correct answers are: Map, Set, Array, LinkedList.
                </div>
              </div>

              {/* Performance Trade-offs */}
              <div className="question" data-answer="O(n)">
                <p>
                  <strong>Performance Trade-offs:</strong> Complete this example of time vs space trade-off:
                </p>
                <pre><code>{`
function findDuplicates(arr) {
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }
  return duplicates; // Time: O(n²), Space: _____
}`}</code></pre>
                <p>What is the space complexity?</p>
                <select required>
                  <option value="">Choose the correct complexity...</option>
                  <option value="O(1)">O(1)</option>
                  <option value="O(n)">O(n)</option>
                  <option value="O(log n)">O(log n)</option>
                  <option value="O(n²)">O(n²)</option>
                </select>
                <span className="feedback" />
                <div className="explanation">
                  This uses O(n) extra space but O(n²) time with nested loops.
                </div>
              </div>

              <div className="question" data-answer="Map">
                <pre><code>{`class CoolingIntelligencePlatform {
  constructor() {
    this.stationData = new _____();        // Fast station lookups
    this.temperatureWindow = [];           // For sliding window analysis
    this.alertCache = new Map();           // Cache recent alerts
  }
  
  processTemperatureStream(readings) {
    // 1. Fast lookup of station metadata
    const station = this.stationData.get(readings.stationId);
    
    // 2. Sliding window for trend analysis
    this.updateWindow(readings.temperatures);
    
    // 3. Sort for percentile calculations
    const sorted = [...readings.temperatures].sort();
    
    // 4. Cache results to avoid recalculation
    this.alertCache.set(readings.stationId, this.analyzePattern(sorted));
  }
}`}</code></pre>
                <p>What data structure should be used for fast station lookups?</p>
                <select required>
                  <option value="">Choose the best data structure...</option>
                  <option value="Map">Map</option>
                  <option value="Array">Array</option>
                  <option value="Set">Set</option>
                  <option value="LinkedList">LinkedList</option>
                </select>
                <span className="feedback" />
                <div className="explanation">
                  Complex systems combine multiple specialized algorithms: Map for fast O(1) lookups, sliding window for real-time analysis,
                  sorting for data organization, and caching for performance. Each algorithm is optimized for its specific role.
                </div>
              </div>

              {/* Real-world Impact */}
              <div className="question" data-answer="divide-conquer">
                <p>
                  <strong>Real-world Impact:</strong> Why is the optimal time complexity for comparison-based sorting O(n log n)?
                </p>
                <label>
                  <input type="radio" name="sort-complexity" value="divide-conquer" required />
                  Divide-and-conquer algorithms split the problem into smaller subproblems, leading to O(n log n)
                </label>
                <br />
                <label>
                  <input type="radio" name="sort-complexity" value="nested-loops" required />
                  Sorting requires nested loops, which always results in O(n log n) complexity
                </label>
                <br />
                <label>
                  <input type="radio" name="sort-complexity" value="memory-limitation" required />
                  Memory limitations prevent faster sorting algorithms from being implemented
                </label>
                <br />
                <label>
                  <input type="radio" name="sort-complexity" value="comparison-limit" required />
                  The number of comparisons needed is limited by the hardware architecture
                </label>
                <span className="feedback" />
                <div className="explanation">
                  Efficient comparison-based sorting algorithms like merge sort and heap sort use divide-and-conquer strategies.
                  They recursively split the problem into smaller subproblems (log n levels) and process each level in O(n) time,
                  resulting in O(n log n) total complexity. This is mathematically proven to be optimal for comparison-based sorting.
                </div>
              </div>

              <button className="code-button test-button" type="submit">
                Complete Final Assessment
              </button>
            </form>
          </main>
        );
      };
      
      return <CheckpointComponent />;
    }
  }
};