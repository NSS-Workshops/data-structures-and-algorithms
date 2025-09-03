import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";

export const combiningPatternsCheckpointChapter = {
  id: 'combining-patterns-checkpoint',
  title: 'Final Self Assessment: Data Structures & Algorithms',
  sectionId: 'combining-patterns',
  previousChapterId: 'solving-complex-problems',
  content: null,
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();
        
        return (
          <main>
            <p className="assessment-intro">
              This comprehensive assessment covers all major concepts from the course.
              Take your time and demonstrate your understanding of data structures, algorithms,
              and their real-world applications.
            </p>
            
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
              <div className="question" data-answer="Sliding window maintains a subset of elements and efficiently updates as the window moves">
                <p>
                  <strong>Sliding Window:</strong> Explain how the sliding window pattern works and why it&apos;s efficient for analyzing subarrays.
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  Sliding window maintains a subset of elements (the &quot;window&quot;) and efficiently updates the window state
                  as it moves through the array. Instead of recalculating everything for each position, it adds new elements
                  and removes old ones, achieving O(n) time complexity for problems that would otherwise be O(n²).
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
              <div className="question" data-answer="Stack uses LIFO (Last In, First Out), Queue uses FIFO (First In, First Out)">
                <p>
                  <strong>Stacks & Queues:</strong> What is the key difference between stack and queue data structures?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  Stacks follow LIFO (Last In, First Out) - the most recently added element is removed first, like a stack of plates.
                  Queues follow FIFO (First In, First Out) - the first element added is the first removed, like a line of people waiting.
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
              <div className="question" data-answer="Analyze the problem requirements and choose data structures that optimize for the most frequent operations">
                <p>
                  <strong>Pattern Recognition:</strong> How do you choose the right data structure for a specific problem?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  Choose data structures by analyzing the problem requirements: What operations will be performed most frequently?
                  Do you need fast lookups (Maps), unique collections (Sets), ordered data (Arrays), or dynamic insertion/deletion (Linked Lists)?
                  Optimize for your most common operations while considering trade-offs in time and space complexity.
                </div>
              </div>

              {/* Performance Trade-offs */}
              <div className="question" data-answer="time-space">
                <p>
                  <strong>Performance Trade-offs:</strong> What is the most common trade-off in algorithm and data structure design?
                </p>
                <label>
                  <input type="radio" name="tradeoff" value="time-space" required />
                  Time complexity vs. Space complexity (speed vs. memory usage)
                </label>
                <br />
                <label>
                  <input type="radio" name="tradeoff" value="simplicity-performance" required />
                  Code simplicity vs. Performance optimization
                </label>
                <br />
                <label>
                  <input type="radio" name="tradeoff" value="read-write" required />
                  Read performance vs. Write performance
                </label>
                <br />
                <label>
                  <input type="radio" name="tradeoff" value="consistency-availability" required />
                  Data consistency vs. System availability
                </label>
                <span className="feedback" />
                <div className="explanation">
                  The most fundamental trade-off is time vs. space complexity - you can often make algorithms faster by using more memory
                  (like caching or precomputed results) or save memory by accepting slower performance. Understanding this trade-off
                  is crucial for making informed design decisions.
                </div>
              </div>

              {/* Climate AI Integration */}
              <div className="question" data-answer="Multiple specialized algorithms working together, each optimized for specific tasks">
                <p>
                  <strong>System Integration:</strong> In the Global Cooling Intelligence Platform, what makes the system more powerful than using a single algorithm?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  Complex systems like GCIP use multiple specialized algorithms working together - sliding windows for real-time cooling analysis,
                  hash tables for fast lookups, sorting for data organization, pattern recognition for cooling anomaly detection, and caching for performance.
                  Each algorithm is optimized for its specific role, creating a system more powerful than any single approach.
                </div>
              </div>

              {/* Real-world Impact */}
              <div className="question" data-answers="Faster cooling predictions save lives,Better algorithms enable more accurate models,Efficient systems can process more data,Optimized performance supports global scale">
                <p>
                  <strong>Real-world Impact:</strong> How do data structures and algorithms contribute to addressing global cooling challenges?
                </p>
                <label>
                  <input type="checkbox" value="Faster cooling predictions save lives" />
                  ⚡ Faster cooling predictions enable earlier cold weather warnings and save lives
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Better algorithms enable more accurate models" />
                  🎯 Better algorithms enable more accurate cooling models and predictions
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Efficient systems can process more data" />
                  📊 Efficient systems can process more sensor data for comprehensive cooling monitoring
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Optimized performance supports global scale" />
                  🌍 Optimized performance supports global-scale cooling monitoring systems
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Algorithms automatically solve global cooling" />
                  🤖 Algorithms automatically solve global cooling without human intervention
                </label>
                <div className="feedback"></div>
                <div className="explanation">
                  Data structures and algorithms are tools that amplify human efforts to address global cooling challenges. They enable faster,
                  more accurate predictions, support processing of massive datasets, and allow global-scale monitoring systems.
                  However, they are tools that support human decision-making rather than automatically solving complex problems.
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