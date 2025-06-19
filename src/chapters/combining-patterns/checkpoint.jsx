import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";

export const combiningPatternsCheckpointChapter = {
  id: 'combining-patterns-checkpoint',
  title: 'Checkpoint: Combining Patterns',
  sectionId: 'combining-patterns',
  previousChapterId: 'combining-patterns-glossary',
  content: `
## Quiz: Combining Patterns

Test your understanding of combining different algorithmic patterns.
`,
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();
        
        return (
          <main>
            <h2>Quiz: Combining Patterns</h2>
            <form className="auto-graded-quiz">
              <div className="question" data-answer="">
                <p>Question placeholder - to be added later</p>
                <input type="text" required />
                <span className="feedback" />
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