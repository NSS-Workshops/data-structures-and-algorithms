import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";

export const introductionCheckpointChapter = {
  id: 'introduction-checkpoint',
  title: 'Checkpoint: Introduction',
  sectionId: 'introduction',
  previousChapterId: 'introduction',
  content: `
## Quiz: Introduction

Test your understanding of the introduction concepts.
`,
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();
        
        return (
          <main>
            <h2>Quiz: Introduction</h2>
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