import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";

export const stacksQueuesCheckpointChapter = {
  id: 'stacks-queues-checkpoint',
  title: 'Checkpoint: Stacks and Queues',
  sectionId: 'stacks-queues',
  previousChapterId: 'stacks-queues-glossary',
  content: `
## Quiz: Stacks and Queues

Test your understanding of stacks and queues data structures.
`,
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();
        
        return (
          <main>
            <h2>Quiz: Stacks and Queues</h2>
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