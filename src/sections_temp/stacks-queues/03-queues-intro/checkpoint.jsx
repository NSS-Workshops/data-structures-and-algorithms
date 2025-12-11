import { useAutoGradeQuiz } from "@nss-workshops/nss-core";

export default function QueuesIntroCheckpoint() {
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
                Order doesn't matter for returns, Stack (LIFO) is fine.
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
}