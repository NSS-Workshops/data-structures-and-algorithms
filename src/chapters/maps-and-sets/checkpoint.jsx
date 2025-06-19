import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";

export const mapsAndSetsCheckpointChapter = {
  id: 'maps-and-sets-checkpoint',
  title: 'Checkpoint: Maps and Sets',
  sectionId: 'maps-and-sets',
  previousChapterId: 'maps-and-sets-glossary',
  content: `
## Quiz: Maps and Sets

Test your understanding of maps and sets data structures.
`,
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();
        
        return (
          <main>
            <h2>Quiz: Maps and Sets</h2>
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