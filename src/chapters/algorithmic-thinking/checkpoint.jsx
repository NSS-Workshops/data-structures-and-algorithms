import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";

export const algorithmicThinkingCheckpointChapter = {
  id: 'algorithmic-thinking-checkpoint',
  title: 'Checkpoint: Algorithmic Thinking',
  sectionId: 'algorithmic-thinking',
  previousChapterId: 'algorithmic-thinking-glossary',
  content: `
Test your understanding of Big O notation and algorithmic thinking concepts.
`,
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();
        return (
          <main>
            <h2>Quiz: Intro to Big O</h2>
            <form className="auto-graded-quiz">
              <div className="question" data-answer="10">
                <p>If an O(1) task takes 10s for n = 10, how long for n = 1,000,000?</p>
                <input type="number" required />
                <span className="feedback" />
              </div>

              <div className="question" data-answer="1000000">
                <p>If an O(n) task takes 10s for n = 10, how long for n = 1,000,000?</p>
                <input type="number" required />
                <span className="feedback" />
              </div>

                <div className="question" data-answer="`addUpToSecond`">
                <p>Which of these methods performs better as <code>n</code> gets large?</p>
          <pre>{`public int addUpToFirst(int n) {
    int total = 0;
    for (int i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

public int addUpToSecond(int n) {
    return n * (n + 1) / 2;
}`}</pre>
                <label><input type="radio" name="q0" value="`addUpToFirst`" /> `addUpToFirst`</label><br />
                <label><input type="radio" name="q0" value="`addUpToSecond`" /> `addUpToSecond`</label>
                <div className="feedback"></div>
              </div>

                     <div className="question" data-answer="O(n)">
          <p>What is the <em>runtime</em> complexity of this algorithm?</p>
          <pre><code>{`public int example(int[] array) {
  int total = 0;
  for (int i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}`}</code></pre>
          <label><input type="radio" name="q1" value="O(1)" /> O(1)</label><br />
          <label><input type="radio" name="q1" value="O(n)" /> O(n)</label><br />
          <label><input type="radio" name="q1" value="O(n^2)" /> O(n^2)</label><br />
          <label><input type="radio" name="q1" value="O(n*m)" /> O(n*m)</label>
          <div className="feedback"></div>
        </div>

        {/* Q2 space linear */}
        <div className="question" data-answer="O(1)">
          <p>What is the <em>space</em> complexity of this algorithm?</p>
          <pre><code>{`public int example(int[] array) {
  int total = 0;
  for (int i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}`}</code></pre>
          <label><input type="radio" name="q2" value="O(1)" /> O(1)</label><br />
          <label><input type="radio" name="q2" value="O(n)" /> O(n)</label><br />
          <label><input type="radio" name="q2" value="O(n^2)" /> O(n^2)</label><br />
          <label><input type="radio" name="q2" value="O(n*m)" /> O(n*m)</label>
          <div className="feedback"></div>
        </div>

<div className="question" data-answer="B">
  <p>What is the space complexity of the following function?</p>
  <pre>{`function doubleValues(arr) {
  let result = [];

  for (let num of arr) {
    result.push(num * 2);
  }

  return result;
}`}</pre>
  <label><input type="radio" name="q2" value="A" /> A. O(1)</label><br />
  <label><input type="radio" name="q2" value="B" /> B. O(n)</label><br />
  <label><input type="radio" name="q2" value="C" /> C. O(2n)</label><br />
  <label><input type="radio" name="q2" value="D" /> D. O(n²)</label>
  <div className="feedback"></div>
</div>

              <button  className="code-button test-button" type="submit">Submit</button>
            </form>
          </main>
        );
      };
      
      return <CheckpointComponent />;
    }
  }
};