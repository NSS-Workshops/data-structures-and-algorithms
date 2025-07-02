import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";

export const queuesIntroChapter = {
  id: "queues-intro",
  title: "Introduction to Queues - The Hold Request System",
  sectionId: "stacks-queues",
  previousChapterId: "stacks-intro",
  content: `
## A Busy Saturday Morning

Alex arrived at Willowbrook Library early on Saturday morning, still buzzing with excitement from yesterday's lesson about stacks. The weekend always brought more patrons, and Alex was eager to learn more about the library's systems.

Maya was already at the circulation desk, reviewing a list on her computer screen. "Perfect timing, Alex," she said with a smile. "Today we're going to explore a completely different system - one where fairness is absolutely crucial."

"What do you mean?" Alex asked, hanging up their jacket.

"Remember yesterday how we processed book returns? The last book in was the first one out - LIFO. But imagine if we handled patron requests that way." Maya's eyes twinkled with mischief. "What if the person who just walked in got helped before someone who'd been waiting for twenty minutes?"

Alex's eyes widened. "That would be terrible! People would be so frustrated."

"Exactly. So for situations where fairness matters - where we need to serve people in the order they arrived - we use a completely different principle called **FIFO**: First In, First Out. And the data structure that implements FIFO is called a **queue**."

## The Popular Book Problem

Just then, Sam Thompson burst through the library doors, looking slightly frazzled. "Maya! We have a situation. Mrs. Patterson is here asking about 'The Seven Husbands of Evelyn Hugo' - she says she's been waiting for weeks. But I just promised it to Mr. Chen who just walked in!"

Maya sighed knowingly. "Ah, the classic queue management problem. Alex, this is the perfect teachable moment. Sam, bring me the hold request list for that book."

Sam hurried to the computer and pulled up the digital hold list. "Here it is," he said, pointing to the screen.

Maya turned the monitor so Alex could see:

\`\`\`
Hold Requests for "The Seven Husbands of Evelyn Hugo"
═══════════════════════════════════════════════════════
1. Mrs. Patterson    (Requested: March 15, 2024)  ← Front
2. Dr. Williams      (Requested: March 18, 2024)
3. Sarah Kim         (Requested: March 22, 2024)
4. Mr. Rodriguez     (Requested: March 25, 2024)
5. Mr. Chen          (Requested: March 28, 2024)  ← Back
\`\`\`

"Now Alex," Maya said, "if we were using a stack system like our book returns, who would get the book first?"

Alex looked at the list. "If it were LIFO... Mr. Chen, since he requested it most recently?"

"Right! But is that fair?"

"No way!" Alex exclaimed. "Mrs. Patterson has been waiting almost two weeks longer!"

"Exactly. This is why we use a **queue** for hold requests. In a queue, the **first person in** is the **first person out** - FIFO. Mrs. Patterson requested the book first, so she gets it first. That's fair."

## Understanding Queue Structure

Maya drew a simple diagram on a piece of paper:

\`\`\`
Queue: Hold Requests (FIFO - First In, First Out)

Front                                           Back
┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│Mrs.Patterson│→ │Dr. Williams │→ │  Sarah Kim  │→ │Mr.Rodriguez │→ │  Mr. Chen   │
└─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘
      ↑                                                                      ↑
   Next to be                                                           Last to join
   served (dequeue)                                                     (enqueue)
\`\`\`

"See how this is different from our book stack?" Maya asked. "In a stack, we only worked with the top. But in a queue, we have two ends that matter:"

- **Front**: Where people leave the queue (get served)
- **Back**: Where people join the queue (make requests)

"It's like a line at the grocery store," Alex realized. "New people join at the back, and people get served from the front."

"Perfect analogy!" Maya beamed. "And just like a grocery store line, it would be unfair to serve people in any other order."

## Queue Operations in Action

### Enqueue: Adding New Hold Requests

As if on cue, a teenager approached the desk. "Excuse me," she said politely, "I'd like to place a hold on 'The Seven Husbands of Evelyn Hugo' too."

"Of course!" Maya said, turning to Alex. "This is called **enqueue** - adding someone to the back of the queue. Alex, would you like to add Emma to our hold list?"

Alex nodded and typed Emma's information into the system. The list now showed:

\`\`\`
Hold Requests for "The Seven Husbands of Evelyn Hugo"
═══════════════════════════════════════════════════════
1. Mrs. Patterson    (Requested: March 15, 2024)  ← Front
2. Dr. Williams      (Requested: March 18, 2024)
3. Sarah Kim         (Requested: March 22, 2024)
4. Mr. Rodriguez     (Requested: March 25, 2024)
5. Mr. Chen          (Requested: March 28, 2024)
6. Emma Thompson     (Requested: March 30, 2024)  ← Back (just added)
\`\`\`

"Notice how Emma goes to the back of the line," Maya pointed out. "That's the enqueue operation - we always add new elements to the back of the queue."

### Dequeue: Fulfilling Hold Requests

Just then, Maya's phone rang. After a brief conversation, she smiled. "Great news! The book just came back. Now we can fulfill the first hold request."

Maya pulled up Mrs. Patterson's contact information. "Alex, watch what happens when we fulfill a hold request. This is called **dequeue** - removing someone from the front of the queue."

After calling Mrs. Patterson and setting the book aside for her, Maya updated the system:

\`\`\`
Hold Requests for "The Seven Husbands of Evelyn Hugo" (After Dequeue)
═══════════════════════════════════════════════════════
1. Dr. Williams      (Requested: March 18, 2024)  ← Front (now first)
2. Sarah Kim         (Requested: March 22, 2024)
3. Mr. Rodriguez     (Requested: March 25, 2024)
4. Mr. Chen          (Requested: March 28, 2024)
5. Emma Thompson     (Requested: March 30, 2024)  ← Back
\`\`\`

"See how Dr. Williams is now at the front?" Maya asked. "When we dequeue Mrs. Patterson, everyone else moves up one position. Dr. Williams will be the next person to get the book when it's returned again."

### Peek: Checking Who's Next

Sam looked at the screen curiously. "So Dr. Williams is definitely next?"

"Let me show you how to check," Maya said. "This is called **peek** or **front** - looking at who's at the front of the queue without removing them."

She pointed to Dr. Williams' entry. "Peek lets us see who's next without actually processing their request yet. Maybe we want to check if they still want the book, or see if their contact information is current."

## The Fairness Principle

Alex was starting to understand the pattern. "So with stacks, we didn't care about the order because all the books needed to be processed anyway. But with queues, the order matters because it affects fairness."

"Exactly!" Maya said. "Let me give you another example. Imagine if our library's printer worked like a stack instead of a queue."

She walked over to the printer, which had a small display showing the print queue:

\`\`\`
Print Queue:
1. Maya's Report (submitted 9:00 AM)     ← Front
2. Sam's Flyers (submitted 9:15 AM)
3. Alex's Schedule (submitted 9:30 AM)   ← Back
\`\`\`

"If this were a stack," Maya explained, "Alex's schedule would print first, then Sam's flyers, then my report. But I submitted mine first - that wouldn't be fair, would it?"

"No," Alex agreed. "You should get your printout first since you requested it first."

"Right! That's why printers use queues. First job in, first job out. It's fair and predictable."

## Queue Operations Summary

Maya pulled out her notepad again and sketched the key operations:

### Core Queue Operations

**Enqueue (Adding a hold request)**
- Adds an element to the back of the queue
- Time Complexity: O(1) - always fast
- Example: Emma joining the hold list

**Dequeue (Fulfilling a hold request)**
- Removes and returns the front element from the queue
- Time Complexity: O(1) for linked list implementation, O(n) for simple array
- Returns an error if the queue is empty
- Example: Mrs. Patterson getting her book

**Peek/Front (Checking who's next)**
- Returns the front element without removing it
- Time Complexity: O(1) - quick check
- Returns an error if the queue is empty
- Example: Seeing that Dr. Williams is next

**isEmpty (Checking if anyone is waiting)**
- Checks if the queue has any elements
- Time Complexity: O(1) - quick check
- Example: Seeing if there are any pending hold requests

**Size (Counting the requests)**
- Returns the number of elements in the queue
- Time Complexity: O(1) - if we keep track
- Example: Knowing how many people are waiting

## Why Queue Efficiency Matters

"Here's something important to understand about queues," Maya said, tapping her pen thoughtfully. "The dequeue operation can be tricky depending on how we implement the queue."

She drew two diagrams:

\`\`\`
Simple Array Queue (Inefficient):
[Mrs.P][Dr.W][Sarah][Mr.R][Mr.C][Emma]
 ↑ Remove from front (dequeue)
                                    ↑ Add to back (enqueue)

When we dequeue Mrs.P, everyone shifts left:
[Dr.W][Sarah][Mr.R][Mr.C][Emma][    ]
\`\`\`

"If we use a simple array and remove from the front, we have to shift everyone else over. That's O(n) time - slow!"

\`\`\`
Better Queue Implementation:
Front pointer → [Dr.W][Sarah][Mr.R][Mr.C][Emma] ← Back pointer

When we dequeue, just move the front pointer:
        Front → [Sarah][Mr.R][Mr.C][Emma] ← Back
\`\`\`

"But with a smarter implementation - like using pointers or a linked list - we can make dequeue O(1) too. That's much faster!"

Alex nodded. "So the choice of implementation affects performance, just like with stacks?"

"Exactly. Tomorrow we'll explore different ways to implement both stacks and queues, and you'll see the trade-offs."

## Real-World Queue Applications

As the morning rush began to pick up, Maya pointed out other queues in action around the library:

### 1. Patron Service Line
"Look at our reference desk," Maya said. "People naturally form a line - that's a queue. First person in line gets helped first."

### 2. Computer Reservation System
"Our public computers use a queue too. When all computers are busy, people can join a waiting list. The first person to sign up gets the next available computer."

### 3. Event Registration
"Remember our book club registration? We had limited spots, so we used a queue. First to register, first to get a spot. Fair and simple."

### 4. Interlibrary Loan Requests
"When we request books from other libraries, those requests go into a queue at the lending library. They process requests in the order received."

## Comparing Stacks and Queues

As they took a short break, Alex reflected on the two days of learning. "So stacks and queues are like opposites?"

Maya smiled. "In some ways, yes. Let me show you the key differences:"

| Aspect | Stack (LIFO) | Queue (FIFO) |
|--------|--------------|--------------|
| **Access Points** | One end (top) | Two ends (front & back) |
| **Add Operation** | Push to top | Enqueue to back |
| **Remove Operation** | Pop from top | Dequeue from front |
| **Order** | Last In, First Out | First In, First Out |
| **Use When** | Order doesn't matter or you want LIFO | Fairness/order matters |
| **Examples** | Book returns, undo systems | Hold requests, print jobs |

"The key is choosing the right tool for the job," Maya explained. "When fairness matters, use a queue. When you need LIFO behavior or order doesn't matter, use a stack."

## Sam's Learning Moment

Sam, who had been quietly listening, suddenly spoke up. "Wait, I think I made a mistake earlier. I told Mr. Chen he could have the book, but he should be last in the queue, right?"

"That's right," Maya said gently. "It's a common mistake when you're learning. The important thing is that you recognized it. What should we do?"

Sam thought for a moment. "Call Mr. Chen and explain that Mrs. Patterson was first in line, so she gets the book first. Then let him know he's fifth in the queue."

"Perfect!" Maya beamed. "That's exactly right. And this is why understanding data structures matters - it helps us make fair, consistent decisions."

## Looking Ahead

As the morning lesson concluded, Alex felt confident about the difference between stacks and queues. "So tomorrow we'll learn how to actually build these systems?"

"Exactly," Maya said. "We'll start by creating a digital version of our book return cart - implementing a stack class. Then we'll build a proper hold request system - implementing a queue class."

"Will we write actual code?" Alex asked excitedly.

"Absolutely. You'll see how the concepts we've learned translate into working programs. And you'll discover why some implementations are better than others."

Sam grinned. "I can't wait to build a system that won't let me accidentally promise books to the wrong people!"

Maya laughed. "That's exactly the kind of problem good data structures solve, Sam. They help us avoid mistakes and ensure fairness."

## Key Takeaways

By the end of their second day, Alex had learned that:

- **Queues follow FIFO (First In, First Out)** - like people waiting in line
- **Queue operations work at both ends** - enqueue at back, dequeue from front
- **Fairness is the key principle** - first to request, first to receive
- **Enqueue adds to the back** - like joining the end of a line
- **Dequeue removes from the front** - like being served first in line
- **Peek looks at the front without removing** - like seeing who's next
- **Implementation affects performance** - simple arrays can be slow for dequeue
- **Real-world applications include** hold systems, print queues, service lines
- **Choose the right structure** - stacks for LIFO, queues for fairness

The hold request system had revealed the power and importance of queues. What started as a simple question about book fairness had opened up a whole new way of thinking about organizing and processing information.

"Maya," Alex said as they prepared for the lunch break, "I never realized how much computer science was involved in running a library."

Maya's smile was warm and knowing. "That's the beautiful thing about this work, Alex. Every system we use, every process we follow, has been carefully designed to be fair, efficient, and reliable. Tomorrow, you'll learn how to build these systems yourself."

As Alex headed to lunch, they couldn't help but notice the queue forming at the café counter, and smiled, understanding now why everyone waited patiently in line instead of crowding around the register. The principles of computer science were everywhere, making life more organized and fair for everyone.`,
  exercise: {},
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();

        return (
          <main>
            <h2>Queues Introduction Questions</h2>
            <form className="auto-graded-quiz">
              <div
                className="question"
                data-answers="Hold request system for popular books,Computer reservation waiting list,Event registration with limited capacity"
              >
                <p>
                  Which of the following scenarios require a Queue (FIFO) data
                  structure to ensure fairness?
                </p>

                <label>
                  <input type="checkbox" value="Book return processing cart" />{" "}
                  📚 Book return processing cart
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Hold request system for popular books"
                  />{" "}
                  📖 Hold request system for popular books
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Computer reservation waiting list"
                  />{" "}
                  💻 Computer reservation waiting list
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Undo system in text editor" />{" "}
                  ↩️ Undo system in text editor
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Event registration with limited capacity"
                  />{" "}
                  🎫 Event registration with limited capacity
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Browser history navigation" />{" "}
                  🌐 Browser history navigation
                </label>
                <div className="feedback"></div>
                <div className="explanation">
                  <ul>
                    <li>
                      <strong>Book return processing:</strong> ❌ Incorrect —
                      Order doesnt matter for returns, Stack (LIFO) is fine.
                    </li>
                    <li>
                      <strong>Hold request system:</strong> ✅ Correct — First
                      to request should be first to receive (fairness).
                    </li>
                    <li>
                      <strong>Computer reservation:</strong> ✅ Correct — First
                      to sign up should get next available computer.
                    </li>
                    <li>
                      <strong>Undo system:</strong> ❌ Incorrect — Should undo
                      most recent action first (LIFO/Stack).
                    </li>
                    <li>
                      <strong>Event registration:</strong> ✅ Correct — First to
                      register should get priority for limited spots.
                    </li>
                    <li>
                      <strong>Browser history:</strong> ❌ Incorrect — Back
                      button goes to most recent page (LIFO/Stack).
                    </li>
                  </ul>
                </div>
              </div>

              <div className="question" data-answer="Front">
                <p>In a queue, elements are removed from which end?</p>
                <label>
                  <input type="radio" name="q1" value="Front" /> Front
                </label>
                <br />
                <label>
                  <input type="radio" name="q1" value="Back" /> Back
                </label>
                <br />
                <label>
                  <input type="radio" name="q1" value="Middle" /> Middle
                </label>
                <br />
                <label>
                  <input type="radio" name="q1" value="Any position" /> Any
                  position
                </label>
                <div className="feedback"></div>
                <div className="explanation">
                  In a queue, elements are always removed from the{" "}
                  <strong>front</strong> (dequeue operation) and added to the{" "}
                  <strong>back</strong> (enqueue operation). This maintains FIFO
                  (First In, First Out) order.
                </div>
              </div>

              <div className="question" data-answer="FIFO">
                <p>
                  What does the acronym that describes queue behavior stand for?
                  (Enter the 4-letter acronym)
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  FIFO stands for "First In, First Out" - the fundamental
                  principle of queue behavior where the first element added is
                  the first one to be removed, ensuring fairness.
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
