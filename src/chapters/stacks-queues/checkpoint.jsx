import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";

export const stacksQueuesCheckpointChapter = {
  id: 'stacks-queues-checkpoint',
  title: 'Checkpoint: Stacks and Queues',
  sectionId: 'stacks-queues',
  previousChapterId: 'stacks-queues-glossary',
  content: `
## Quiz: Stacks and Queues

Test your understanding of stacks and queues data structures, their operations, and when to use each one.
`,
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();
        
        return (
          <main>
            <h2>Quiz: Stacks and Queues</h2>
            <form className="auto-graded-quiz">
              {/* Q1: Stack vs Queue behavior */}
              <div className="question" data-answer="Stack">
                <p>You&apos;re implementing an &quot;undo&quot; feature for a text editor. Users should be able to undo their most recent action first. Which data structure is most appropriate?</p>
                <label><input type="radio" name="q0" value="Stack" /> Stack (LIFO)</label><br />
                <label><input type="radio" name="q0" value="Queue" /> Queue (FIFO)</label><br />
                <label><input type="radio" name="q0" value="Array" /> Array with random access</label><br />
                <label><input type="radio" name="q0" value="Linked List" /> Linked List</label>
                <div className="feedback"></div>
              </div>

              {/* Q2: Big O for stack operations */}
              <div className="question" data-answer="O(1)">
                <p>What is the time complexity of the <code>push()</code>, <code>pop()</code>, and <code>peek()</code> operations on a properly implemented stack?</p>
                <label><input type="radio" name="q1" value="O(1)" /> O(1) - Constant time</label><br />
                <label><input type="radio" name="q1" value="O(n)" /> O(n) - Linear time</label><br />
                <label><input type="radio" name="q1" value="O(log n)" /> O(log n) - Logarithmic time</label><br />
                <label><input type="radio" name="q1" value="O(n^2)" /> O(n²) - Quadratic time</label>
                <div className="feedback"></div>
              </div>

              {/* Q3: Queue use case */}
              <div className="question" data-answer="Queue">
                <p>A web server needs to process incoming requests in the order they arrive to ensure fairness. Which data structure should be used?</p>
                <label><input type="radio" name="q2" value="Stack" /> Stack - Process most recent requests first</label><br />
                <label><input type="radio" name="q2" value="Queue" /> Queue - Process requests in arrival order</label><br />
                <label><input type="radio" name="q2" value="Priority Queue" /> Priority Queue - Process by importance</label><br />
                <label><input type="radio" name="q2" value="Hash Map" /> Hash Map - Process by request ID</label>
                <div className="feedback"></div>
              </div>

              {/* Q4: Queue implementation trade-offs */}
              <div className="question" data-answer="Array-based queues may require O(n) dequeue operations">
                <p>What is a key trade-off when implementing a queue using an array versus a linked list?</p>
                <label><input type="radio" name="q3" value="Array-based queues use more memory" /> Array-based queues use more memory</label><br />
                <label><input type="radio" name="q3" value="Linked list queues are always slower" /> Linked list queues are always slower</label><br />
                <label><input type="radio" name="q3" value="Array-based queues may require O(n) dequeue operations" /> Array-based queues may require O(n) dequeue operations</label><br />
                <label><input type="radio" name="q3" value="Linked list queues cannot implement FIFO" /> Linked list queues cannot implement FIFO</label>
                <div className="feedback"></div>
              </div>

              {/* Q5: LIFO vs FIFO principles */}
              <div className="question" data-answer="Stack: C, B, A | Queue: A, B, C">
                <p>If you add elements A, B, C (in that order) to both a stack and a queue, then remove all elements, what order will they come out?</p>
                <label><input type="radio" name="q4" value="Stack: A, B, C | Queue: A, B, C" /> Stack: A, B, C | Queue: A, B, C</label><br />
                <label><input type="radio" name="q4" value="Stack: C, B, A | Queue: A, B, C" /> Stack: C, B, A | Queue: A, B, C</label><br />
                <label><input type="radio" name="q4" value="Stack: A, B, C | Queue: C, B, A" /> Stack: A, B, C | Queue: C, B, A</label><br />
                <label><input type="radio" name="q4" value="Stack: C, B, A | Queue: C, B, A" /> Stack: C, B, A | Queue: C, B, A</label>
                <div className="feedback"></div>
              </div>

              <button className="code-button test-button" type="submit">Submit</button>
            </form>
          </main>
        );
      };
      
      return <CheckpointComponent />;
    }
  }
};