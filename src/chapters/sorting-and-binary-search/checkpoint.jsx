import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";

export const sortingAndBinarySearchCheckpointChapter = {
  id: 'sorting-and-binary-search-checkpoint',
  title: 'Checkpoint: Sorting and Binary Search',
  sectionId: 'sorting-and-binary-search',
  previousChapterId: 'sorting-and-binary-search-glossary',
  content: `
## Quiz: Sorting and Binary Search

Test your understanding of sorting algorithms and binary search.
`,
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();
        
        return (
          <main>
            <h2>Quiz: Sorting and Binary Search</h2>
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