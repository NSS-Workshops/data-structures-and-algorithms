import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";

export const slidingWindowCheckpointChapter = {
  id: 'sliding-window-checkpoint',
  title: 'Checkpoint: Sliding Window',
  sectionId: 'sliding-window',
  previousChapterId: 'sliding-window-glossary',
  content: `
## Quiz: Sliding Window

Test your understanding of the sliding window technique.
`,
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();
        
        return (
          <main>
            <h2>Quiz: Sliding Window</h2>
            <form className="auto-graded-quiz">
              <div className="question" data-answer="">
                <p>Question placeholder - to be added later</p>
                <input type="text" required />
                <span className="feedback" />
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