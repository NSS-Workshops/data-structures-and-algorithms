import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";

export const interviewReadinessCheckpointChapter = {
  id: 'interview-readiness-checkpoint',
  title: 'Checkpoint: Interview Readiness',
  sectionId: 'interview-readiness',
  previousChapterId: 'interview-readiness-glossary',
  content: `
## Quiz: Interview Readiness

Test your understanding of interview preparation and problem-solving strategies.
`,
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();
        
        return (
          <main>
            <h2>Quiz: Interview Readiness</h2>
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