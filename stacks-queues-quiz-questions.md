# Stacks and Queues - Recall Practice Quiz Questions

## Stacks Introduction Questions

<div className="question" data-answers="Undo feature that reverses the most recent user action,Browser back button navigation,Function call management in programming">
<p>Which of the following scenarios are best implemented using a Stack (LIFO) data structure?</p>

<label><input type="checkbox" value="Undo feature that reverses the most recent user action" /> ↩️ Undo feature that reverses the most recent user action</label><br />
<label><input type="checkbox" value="Hold request system for library books" /> 📚 Hold request system for library books</label><br />
<label><input type="checkbox" value="Browser back button navigation" /> 🌐 Browser back button navigation</label><br />
<label><input type="checkbox" value="Print job queue at the library" /> 🖨️ Print job queue at the library</label><br />
<label><input type="checkbox" value="Function call management in programming" /> 💻 Function call management in programming</label><br />
<label><input type="checkbox" value="Customer service line" /> ☎️ Customer service line</label>
<div className="feedback"></div>
<div className="explanation">
  <ul>
    <li><strong>Undo feature:</strong> ✅ Correct — Perfect LIFO use case where the last action is the first to be undone.</li>
    <li><strong>Hold request system:</strong> ❌ Incorrect — This requires FIFO (Queue) for fairness.</li>
    <li><strong>Browser back button:</strong> ✅ Correct — Last visited page is first to return to (LIFO).</li>
    <li><strong>Print job queue:</strong> ❌ Incorrect — Print jobs should be processed in order (FIFO).</li>
    <li><strong>Function call management:</strong> ✅ Correct — Function calls follow LIFO pattern in call stack.</li>
    <li><strong>Customer service line:</strong> ❌ Incorrect — Should be first-come, first-served (FIFO).</li>
  </ul>
</div>
</div>

<div className="question" data-answer="O(1)">
<p>What is the time complexity of push, pop, and peek operations in an array-based stack implementation?</p>
<input type="text" required />
<span className="feedback" />
<div className="explanation">
  All stack operations (push, pop, peek) are O(1) constant time because they only work with the top element. No shifting or searching through other elements is required.
</div>
</div>

<div className="question" data-answer="LIFO">
<p>What does the acronym that describes stack behavior stand for? (Enter the 4-letter acronym)</p>
<input type="text" required />
<span className="feedback" />
<div className="explanation">
  LIFO stands for "Last In, First Out" - the fundamental principle of stack behavior where the most recently added element is the first one to be removed.
</div>
</div>

## Queues Introduction Questions

<div className="question" data-answers="Hold request system for popular books,Computer reservation waiting list,Event registration with limited capacity">
<p>Which of the following scenarios require a Queue (FIFO) data structure to ensure fairness?</p>

<label><input type="checkbox" value="Book return processing cart" /> 📚 Book return processing cart</label><br />
<label><input type="checkbox" value="Hold request system for popular books" /> 📖 Hold request system for popular books</label><br />
<label><input type="checkbox" value="Computer reservation waiting list" /> 💻 Computer reservation waiting list</label><br />
<label><input type="checkbox" value="Undo system in text editor" /> ↩️ Undo system in text editor</label><br />
<label><input type="checkbox" value="Event registration with limited capacity" /> 🎫 Event registration with limited capacity</label><br />
<label><input type="checkbox" value="Browser history navigation" /> 🌐 Browser history navigation</label>
<div className="feedback"></div>
<div className="explanation">
  <ul>
    <li><strong>Book return processing:</strong> ❌ Incorrect — Order doesn't matter for returns, Stack (LIFO) is fine.</li>
    <li><strong>Hold request system:</strong> ✅ Correct — First to request should be first to receive (fairness).</li>
    <li><strong>Computer reservation:</strong> ✅ Correct — First to sign up should get next available computer.</li>
    <li><strong>Undo system:</strong> ❌ Incorrect — Should undo most recent action first (LIFO/Stack).</li>
    <li><strong>Event registration:</strong> ✅ Correct — First to register should get priority for limited spots.</li>
    <li><strong>Browser history:</strong> ❌ Incorrect — Back button goes to most recent page (LIFO/Stack).</li>
  </ul>
</div>
</div>

<div className="question" data-answer="Front">
<p>In a queue, elements are removed from which end?</p>
<label><input type="radio" name="q1" value="Front" /> Front</label><br />
<label><input type="radio" name="q1" value="Back" /> Back</label><br />
<label><input type="radio" name="q1" value="Middle" /> Middle</label><br />
<label><input type="radio" name="q1" value="Any position" /> Any position</label>
<div className="feedback"></div>
<div className="explanation">
  In a queue, elements are always removed from the <strong>front</strong> (dequeue operation) and added to the <strong>back</strong> (enqueue operation). This maintains FIFO (First In, First Out) order.
</div>
</div>

<div className="question" data-answer="FIFO">
<p>What does the acronym that describes queue behavior stand for? (Enter the 4-letter acronym)</p>
<input type="text" required />
<span className="feedback" />
<div className="explanation">
  FIFO stands for "First In, First Out" - the fundamental principle of queue behavior where the first element added is the first one to be removed, ensuring fairness.
</div>
</div>

## Implementation Tradeoffs Questions

<div className="question" data-answers="Performance requirements,Team capabilities and experience,Scalability needs">
<p>According to the board meeting discussion, which factors should be considered when choosing between simple and optimized data structure implementations?</p>

<label><input type="checkbox" value="Performance requirements" /> ⚡ Performance requirements</label><br />
<label><input type="checkbox" value="Code aesthetics and style" /> 🎨 Code aesthetics and style</label><br />
<label><input type="checkbox" value="Team capabilities and experience" /> 👥 Team capabilities and experience</label><br />
<label><input type="checkbox" value="Programming language preference" /> 💻 Programming language preference</label><br />
<label><input type="checkbox" value="Scalability needs" /> 📈 Scalability needs</label><br />
<label><input type="checkbox" value="Personal coding preferences" /> 👤 Personal coding preferences</label>
<div className="feedback"></div>
<div className="explanation">
  <ul>
    <li><strong>Performance requirements:</strong> ✅ Correct — Critical factor in choosing implementation approach.</li>
    <li><strong>Code aesthetics:</strong> ❌ Incorrect — While important, not a primary technical decision factor.</li>
    <li><strong>Team capabilities:</strong> ✅ Correct — Team must be able to implement and maintain the solution.</li>
    <li><strong>Language preference:</strong> ❌ Incorrect — Implementation choice is more important than language.</li>
    <li><strong>Scalability needs:</strong> ✅ Correct — Must consider future growth and performance requirements.</li>
    <li><strong>Personal preferences:</strong> ❌ Incorrect — Decisions should be based on objective technical criteria.</li>
  </ul>
</div>
</div>

<div className="question" data-answer="37.5">
<p>According to the performance comparison chart, how many seconds would it take to process 5000 requests using a simple array queue implementation?</p>
<input type="number" step="0.1" required />
<span className="feedback" />
<div className="explanation">
  Based on the performance chart, simple array queue processing time grows quadratically. For 5000 requests, it would take 37.5 seconds, while optimized implementations take only 8ms.
</div>
</div>

<div className="question" data-answer="Circular Array Queue">
<p>Which queue implementation was recommended by Maya for the new library branch?</p>
<label><input type="radio" name="q2" value="Simple Array Queue" /> Simple Array Queue</label><br />
<label><input type="radio" name="q2" value="Circular Array Queue" /> Circular Array Queue</label><br />
<label><input type="radio" name="q2" value="Linked List Queue" /> Linked List Queue</label><br />
<label><input type="radio" name="q2" value="Database Queue" /> Database Queue</label>
<div className="feedback"></div>
<div className="explanation">
  Maya recommended the <strong>Circular Array Queue</strong> as it provides the optimal balance of performance (O(1) operations), moderate complexity, and manageable maintenance requirements for the library's needs.
</div>
</div>

## Implement Stack Questions

<div className="question" data-answers="push() adds to end of array,pop() removes from end of array,No shifting of elements needed">
<p>Why is an array-based stack implementation efficient in JavaScript?</p>

<label><input type="checkbox" value="push() adds to end of array" /> ➕ push() adds to end of array</label><br />
<label><input type="checkbox" value="Arrays automatically sort elements" /> 🔄 Arrays automatically sort elements</label><br />
<label><input type="checkbox" value="pop() removes from end of array" /> ➖ pop() removes from end of array</label><br />
<label><input type="checkbox" value="Arrays have unlimited capacity" /> ♾️ Arrays have unlimited capacity</label><br />
<label><input type="checkbox" value="No shifting of elements needed" /> 🚫 No shifting of elements needed</label><br />
<label><input type="checkbox" value="JavaScript optimizes array operations" /> ⚡ JavaScript optimizes array operations</label>
<div className="feedback"></div>
<div className="explanation">
  <ul>
    <li><strong>push() adds to end:</strong> ✅ Correct — Adding to end is O(1) operation.</li>
    <li><strong>Arrays sort automatically:</strong> ❌ Incorrect — Arrays don't automatically sort.</li>
    <li><strong>pop() removes from end:</strong> ✅ Correct — Removing from end is O(1) operation.</li>
    <li><strong>Unlimited capacity:</strong> ❌ Incorrect — Arrays have memory limits.</li>
    <li><strong>No shifting needed:</strong> ✅ Correct — Only working with one end eliminates shifting.</li>
    <li><strong>JavaScript optimization:</strong> ❌ Incorrect — Efficiency comes from algorithm, not language optimization.</li>
  </ul>
</div>
</div>

<div className="question" data-answer="null">
<p>In the BookCart implementation, what does the processNextBook() method return when the cart is empty?</p>
<input type="text" required />
<span className="feedback" />
<div className="explanation">
  The processNextBook() method returns <strong>null</strong> when the cart is empty, providing a clear indication that no book was available to process while avoiding errors.
</div>
</div>

<div className="question" data-answer="peek">
<p>What is the name of the stack operation that allows you to look at the top element without removing it?</p>
<input type="text" required />
<span className="feedback" />
<div className="explanation">
  The <strong>peek</strong> operation (also called "top") allows you to examine the top element of the stack without removing it, useful for checking what's next without disturbing the stack's state.
</div>
</div>

## Implement Queue Questions

<div className="question" data-answers="Simple array shift() is O(n) operation,All elements must be moved when dequeuing,Performance degrades with queue size">
<p>Why is the simple array implementation of a queue inefficient for large datasets?</p>

<label><input type="checkbox" value="Simple array shift() is O(n) operation" /> 🐌 Simple array shift() is O(n) operation</label><br />
<label><input type="checkbox" value="Arrays cannot store objects" /> 📦 Arrays cannot store objects</label><br />
<label><input type="checkbox" value="All elements must be moved when dequeuing" /> ↔️ All elements must be moved when dequeuing</label><br />
<label><input type="checkbox" value="JavaScript arrays are inherently slow" /> 💻 JavaScript arrays are inherently slow</label><br />
<label><input type="checkbox" value="Performance degrades with queue size" /> 📉 Performance degrades with queue size</label><br />
<label><input type="checkbox" value="Memory usage is too high" /> 💾 Memory usage is too high</label>
<div className="feedback"></div>
<div className="explanation">
  <ul>
    <li><strong>shift() is O(n):</strong> ✅ Correct — shift() must move all remaining elements left.</li>
    <li><strong>Cannot store objects:</strong> ❌ Incorrect — Arrays can store any data type.</li>
    <li><strong>Elements must be moved:</strong> ✅ Correct — Dequeue requires shifting all elements.</li>
    <li><strong>JavaScript arrays slow:</strong> ❌ Incorrect — Arrays are efficient for appropriate operations.</li>
    <li><strong>Performance degrades:</strong> ✅ Correct — O(n) operations get slower as queue grows.</li>
    <li><strong>High memory usage:</strong> ❌ Incorrect — Memory isn't the primary issue, it's the shifting.</li>
  </ul>
</div>
</div>

<div className="question" data-answer="Modular arithmetic">
<p>What mathematical concept is used in circular queue implementation to wrap around when reaching the end of the array?</p>
<input type="text" required />
<span className="feedback" />
<div className="explanation">
  <strong>Modular arithmetic</strong> (using the % operator) is used to wrap around when the rear or front pointer reaches the end of the array, creating the "circular" behavior.
</div>
</div>

<div className="question" data-answer="O(1)">
<p>What is the time complexity of enqueue and dequeue operations in a properly implemented circular array queue?</p>
<input type="text" required />
<span className="feedback" />
<div className="explanation">
  Both enqueue and dequeue operations in a circular array queue are <strong>O(1)</strong> constant time because they only involve updating pointers and don't require shifting elements.
</div>
</div>