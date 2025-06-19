import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";

export const arraysAndTwoPointersCheckpointChapter = {
  id: 'arrays-and-two-pointers-checkpoint',
  title: 'Checkpoint: Arrays and Two Pointers',
  sectionId: 'arrays-and-two-pointers',
  previousChapterId: 'arrays-and-two-pointers-glossary',
  content: `
## Quiz: Arrays and Two Pointers

Test your understanding of arrays and two pointers technique.
`,
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();
        
        return (
          <main>
            <h2>Quiz: Arrays and Two Pointers</h2>
            <form className="auto-graded-quiz">
              <div className="question" data-answer="">
                <p>Question placeholder - to be added later</p>
                <input type="text" required />
                <span className="feedback" />
              </div>

              <button className="code-button test-button"  type="submit">Submit</button>
            </form>
          </main>
        );
      };
      
      return <CheckpointComponent />;
    }
  }
};