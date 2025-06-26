import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";

export const twoDArraysCheckpointChapter = {
  id: '2d-arrays-checkpoint',
  title: 'Checkpoint: 2D Arrays',
  sectionId: '2d-arrays',
  previousChapterId: '2d-arrays-glossary',
  content: `
## Quiz: 2D Arrays

Test your understanding of 2D arrays and matrix operations.
`,
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();
        
        return (
          <main>
            <h2>Quiz: 2D Arrays</h2>
            <form className="auto-graded-quiz">
              <div className="question" data-answer="">
                <p>Question placeholder - to be added later</p>
                <input type="text" required />
                <span className="feedback" />
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