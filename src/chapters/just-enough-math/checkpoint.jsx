import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";

export const justEnoughMathCheckpointChapter = {
  id: 'just-enough-math-checkpoint',
  title: 'Checkpoint: Just Enough Math',
  sectionId: 'just-enough-math',
  previousChapterId: 'just-enough-math-glossary',
  content: `
## Quiz: Just Enough Math

Test your understanding of mathematical concepts for algorithms.
`,
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();
        
        return (
          <main>
            <h2>Quiz: Just Enough Math</h2>
            <form className="auto-graded-quiz">
                 <div className="question" data-answer="O(n)">
          <p>How do you write linear time complexity in Big O notation?</p>
          <label><input type="radio" name="q1" value="O(1)" /> O(1)</label><br />
          <label><input type="radio" name="q1" value="O(n)" /> O(n)</label><br />
          <label><input type="radio" name="q1" value="O(n^2)" /> O(n^2)</label>
          <div className="feedback"></div>
        </div>

        <div className="question" data-answer="O(1)">
          <p>How do you write constant time complexity in Big O notation?</p>
          <label><input type="radio" name="q2" value="O(1)" /> O(1)</label><br />
          <label><input type="radio" name="q2" value="O(n)" /> O(n)</label><br />
          <label><input type="radio" name="q2" value="O(n^2)" /> O(n^2)</label>
          <div className="feedback"></div>
        </div>

        <div className="question" data-answers="O(1),O(n),O(n^2),O(n^k)">
          <p>Which of the following are polynomial functions?</p>
          <label><input type="checkbox" value="O(1)" /> O(1)</label><br />
          <label><input type="checkbox" value="O(n)" /> O(n)</label><br />
          <label><input type="checkbox" value="O(n^2)" /> O(n^2)</label><br />
          <label><input type="checkbox" value="O(2^n)" /> O(2^n)</label><br />
          <label><input type="checkbox" value="O(n^k)" /> O(n^k)</label>
          <div className="feedback"></div>
        </div>

              <button  className="code-button test-button"  type="submit">Submit</button>
            </form>
          </main>
        );
      };
      
      return <CheckpointComponent />;
    }
  }
};