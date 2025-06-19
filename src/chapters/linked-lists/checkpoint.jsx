import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";

export const linkedListsCheckpointChapter = {
  id: 'linked-lists-checkpoint',
  title: 'Checkpoint: Linked Lists',
  sectionId: 'linked-lists',
  previousChapterId: 'linked-lists-glossary',
  content: `
## Quiz: Linked Lists

Test your understanding of linked lists and node-based data structures.
`,
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();
        
        return (
          <main>
            <h2>Quiz: Linked Lists</h2>
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