
import { Checkpoint, QUESTION_TYPES } from "@nss-workshops/nss-core";

const questions = [
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: (
      <div>
        <p><strong>✅ Scenario Question #1: Call Center Queue System</strong></p>
        <p>You&apos;re building a call center system where:</p>
        <ul>
          <li>New callers are added to the end of the queue</li>
          <li>The next available agent always helps the caller at the front</li>
          <li>You expect frequent adds/removes, but never need to access a specific caller by index</li>
        </ul>
        <p>Which data structure is the best fit for this use case?</p>
      </div>
    ),
    answers: [
      "Singly Linked List (with tail pointer)",
      "Doubly Linked List", 
      "Circular Linked List",
      "Array",
      "Object / Map"
    ],
    correctAnswer: 0,
    explanation: (
      <div>
        <p><strong>✅ Correct Answer: A. Singly Linked List (with tail pointer)</strong></p>
        <p><strong>💡 Explanation of Each Option:</strong></p>
        <p><strong>A. Singly Linked List (with tail pointer) ✅</strong></p>
        <ul>
          <li>Best choice if you track both head and tail</li>
          <li>Efficient O(1) insert at end and remove from front</li>
          <li>Simple, minimal memory overhead</li>
        </ul>
        <p><strong>B. Doubly Linked List</strong></p>
        <ul>
          <li>Also supports fast insert/remove, but not needed here since you don&apos;t need to go backward</li>
          <li>More memory usage (prev pointer)</li>
        </ul>
        <p><strong>C. Circular Linked List</strong></p>
        <ul>
          <li>Useful for round-robin or looping queues</li>
          <li>Not needed in this linear queue case</li>
        </ul>
        <p><strong>D. Array</strong></p>
        <ul>
          <li>Adding to end is fast, but removing from front = O(n) (because all elements must shift)</li>
          <li>Becomes inefficient with large or frequent queues</li>
        </ul>
        <p><strong>E. Object / Map</strong></p>
        <ul>
          <li>Great for key-based lookups, not for maintaining ordered queues</li>
          <li>No efficient &quot;first in, first out&quot; behavior</li>
        </ul>
      </div>
    )
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: (
      <div>
        <p><strong>✅ Implementation Question #2: Building and Iterating a Linked List</strong></p>
        <p>You need to implement a function that creates a singly linked list from an array and then iterates through it to double each value. Which code correctly implements this?</p>
        <pre style={{backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '5px'}}>
{`class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}`}
        </pre>
      </div>
    ),
    answers: [
      <div key="a">
        <strong>A)</strong>
        <pre style={{backgroundColor: '#f8f9fa', padding: '12px', borderRadius: '6px', border: '1px solid #e9ecef', fontSize: '13px', lineHeight: '1.4', margin: '8px 0', overflow: 'auto', fontFamily: 'Monaco, Consolas, "Courier New", monospace'}}>
{`function buildAndDouble(arr) {
  // Build the linked list first
  let head = new Node(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  
  // Then iterate and double each value
  current = head;
  while (current) {
    current.data *= 2;
    current = current.next;
  }
  return head;
}`}
        </pre>
      </div>,
      <div key="b">
        <strong>B)</strong>
        <pre style={{backgroundColor: '#f8f9fa', padding: '12px', borderRadius: '6px', border: '1px solid #e9ecef', fontSize: '13px', lineHeight: '1.4', margin: '8px 0', overflow: 'auto', fontFamily: 'Monaco, Consolas, "Courier New", monospace'}}>
{`function buildAndDouble(arr) {
  let head = null;
  for (let i = 0; i < arr.length; i++) {
    let newNode = new Node(arr[i] * 2);
    newNode.next = head;
    head = newNode;
  }
  return head;
}`}
        </pre>
      </div>,
      <div key="c">
        <strong>C)</strong>
        <pre style={{backgroundColor: '#f8f9fa', padding: '12px', borderRadius: '6px', border: '1px solid #e9ecef', fontSize: '13px', lineHeight: '1.4', margin: '8px 0', overflow: 'auto', fontFamily: 'Monaco, Consolas, "Courier New", monospace'}}>
{`function buildAndDouble(arr) {
  let head = new Node(arr[0] * 2);
  for (let i = 1; i < arr.length; i++) {
    head.next = new Node(arr[i] * 2);
  }
  return head;
}`}
        </pre>
      </div>,
      <div key="d">
        <strong>D)</strong>
        <pre style={{backgroundColor: '#f8f9fa', padding: '12px', borderRadius: '6px', border: '1px solid #e9ecef', fontSize: '13px', lineHeight: '1.4', margin: '8px 0', overflow: 'auto', fontFamily: 'Monaco, Consolas, "Courier New", monospace'}}>
{`function buildAndDouble(arr) {
  let nodes = arr.map(val => new Node(val * 2));
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }
  return nodes[0];
}`}
        </pre>
      </div>
    ],
    correctAnswer: 0,
    explanation: (
      <div>
        <p><strong>✅ Correct Answer: A. First option</strong></p>
        <p><strong>💡 Explanation:</strong></p>
        <p><strong>A. Correct Implementation ✅</strong></p>
        <pre style={{backgroundColor: '#e8f5e8', padding: '10px', borderRadius: '5px', fontSize: '13px'}}>
{`function buildAndDouble(arr) {
  // Build the linked list first
  let head = new Node(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  
  // Then iterate and double each value
  current = head;
  while (current) {
    current.data *= 2;
    current = current.next;
  }
  return head;
}`}
        </pre>
        <ul>
          <li>Properly builds the linked list by linking nodes sequentially</li>
          <li>Correctly iterates through the list to perform the doubling operation</li>
          <li>Maintains original order and demonstrates proper traversal</li>
        </ul>
        
        <p><strong>B. Incorrect - Reverses Order</strong></p>
        <pre style={{backgroundColor: '#ffe6e6', padding: '10px', borderRadius: '5px', fontSize: '13px'}}>
{`function buildAndDouble(arr) {
  let head = null;
  for (let i = 0; i < arr.length; i++) {
    let newNode = new Node(arr[i] * 2);
    newNode.next = head;  // Prepends instead of appends
    head = newNode;
  }
  return head;
}`}
        </pre>
        <ul>
          <li>Builds the list in reverse order (prepending instead of appending)</li>
          <li>While it doubles values, the final order is backwards</li>
        </ul>
        
        <p><strong>C. Incorrect - Incomplete Linking</strong></p>
        <pre style={{backgroundColor: '#ffe6e6', padding: '10px', borderRadius: '5px', fontSize: '13px'}}>
{`function buildAndDouble(arr) {
  let head = new Node(arr[0] * 2);
  for (let i = 1; i < arr.length; i++) {
    head.next = new Node(arr[i] * 2);  // Overwrites previous
  }
  return head;
}`}
        </pre>
        <ul>
          <li>Only creates two nodes total (head and one next node)</li>
          <li>Overwrites head.next instead of properly chaining all nodes</li>
        </ul>
        
        <p><strong>D. Incorrect - Uses Built-in Methods</strong></p>
        <pre style={{backgroundColor: '#ffe6e6', padding: '10px', borderRadius: '5px', fontSize: '13px'}}>
{`function buildAndDouble(arr) {
  let nodes = arr.map(val => new Node(val * 2));  // Built-in method
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }
  return nodes[0];
}`}
        </pre>
        <ul>
          <li>Uses array.map() which violates &quot;without built-in libraries&quot; requirement</li>
          <li>Doesn&apos;t demonstrate manual iteration through the linked list</li>
        </ul>
      </div>
    )
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: (
      <div>
        <p><strong>✅ Question #3: Adding and Removing Elements - Time Complexity</strong></p>
        <p>You have a singly linked list and need to insert a new element at index 50 (0-based). You only have a reference to the head node. What operations are required and what&apos;s the time complexity?</p>
      </div>
    ),
    answers: [
      "Traverse to index 49, then insert - O(1) time complexity",
      "Traverse to index 50, then insert - O(n) time complexity",
      "Traverse to index 49, then insert - O(n) time complexity",
      "Direct access to index 50, then insert - O(1) time complexity"
    ],
    correctAnswer: 2,
    explanation: (
      <div>
        <p><strong>✅ Correct Answer: C. Traverse to index 49, then insert - O(n) time complexity</strong></p>
        <p><strong>💡 Explanation:</strong></p>
        <p><strong>Why traverse to index 49?</strong></p>
        <ul>
          <li>To insert at index 50, you need the node at index 49 (the previous node)</li>
          <li>Set newNode.next = previousNode.next</li>
          <li>Set previousNode.next = newNode</li>
        </ul>
        <p><strong>Why O(n) time complexity?</strong></p>
        <ul>
          <li>Linked lists don&apos;t support random access like arrays</li>
          <li>Must traverse from head through nodes 0, 1, 2... up to index 49</li>
          <li>In worst case, you traverse nearly the entire list</li>
          <li>This makes insertion/removal by index O(n), not O(1)</li>
        </ul>
        <p><strong>When is linked list insertion O(1)?</strong></p>
        <ul>
          <li>Only when you already have a reference to the insertion point</li>
          <li>Inserting at head is always O(1)</li>
          <li>Inserting at tail is O(1) if you maintain a tail pointer</li>
        </ul>
        <p><strong>Key Insight:</strong></p>
        <ul>
          <li>Arrays: O(1) access, O(n) insertion (due to shifting)</li>
          <li>Linked Lists: O(n) access, O(1) insertion (when you have the node reference)</li>
        </ul>
      </div>
    )
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: (
      <div>
        <p><strong>✅ Question #4: Linked List Types and Trade-offs</strong></p>
        <p>Compare these three scenarios and choose the statement that correctly matches each linked list type to its best use case:</p>
        <ul>
          <li><strong>Scenario A:</strong> Browser history (back/forward navigation)</li>
          <li><strong>Scenario B:</strong> Round-robin task scheduler</li>
          <li><strong>Scenario C:</strong> Simple queue (FIFO)</li>
        </ul>
      </div>
    ),
    answers: [
      "A: Singly Linked List, B: Circular Linked List, C: Doubly Linked List",
      "A: Doubly Linked List, B: Circular Linked List, C: Singly Linked List",
      "A: Circular Linked List, B: Doubly Linked List, C: Singly Linked List",
      "A: Doubly Linked List, B: Singly Linked List, C: Circular Linked List"
    ],
    correctAnswer: 1,
    explanation: (
      <div>
        <p><strong>✅ Correct Answer: B. A: Doubly Linked List, B: Circular Linked List, C: Singly Linked List</strong></p>
        <p><strong>💡 Detailed Analysis:</strong></p>
        
        <p><strong>Scenario A - Browser History: Doubly Linked List ✅</strong></p>
        <ul>
          <li>Need efficient backward navigation (back button)</li>
          <li>Need efficient forward navigation (forward button)</li>
          <li>Doubly linked list provides O(1) traversal in both directions</li>
          <li>Each node has prev and next pointers for bidirectional access</li>
        </ul>

        <p><strong>Scenario B - Round-robin Scheduler: Circular Linked List ✅</strong></p>
        <ul>
          <li>Tasks need to cycle continuously in a loop</li>
          <li>After the last task, automatically return to the first</li>
          <li>Circular structure eliminates need to check for end/restart</li>
          <li>Perfect for repeating, cyclical processes</li>
        </ul>

        <p><strong>Scenario C - Simple Queue (FIFO): Singly Linked List ✅</strong></p>
        <ul>
          <li>Only need to add at tail and remove from head</li>
          <li>No backward traversal needed</li>
          <li>Minimal memory overhead (no prev pointers)</li>
          <li>Simple and efficient for unidirectional processing</li>
        </ul>

        <p><strong>Key Trade-offs Summary:</strong></p>
        <ul>
          <li><strong>Memory:</strong> Singly &lt; Circular &lt; Doubly (pointer overhead)</li>
          <li><strong>Flexibility:</strong> Singly &lt; Circular &lt; Doubly (navigation options)</li>
          <li><strong>Complexity:</strong> Singly &lt; Circular &lt; Doubly (implementation difficulty)</li>
        </ul>
      </div>
    )
  }
];

export default {
  id: 'b4f7e9a2',
  title: 'Linked Lists Scenario Quiz',
  sectionId: 'linked-lists',
  previousChapterId: null,
  content: ``,
  quiz: {
    component: () => <Checkpoint questions={questions}/>
  }
};