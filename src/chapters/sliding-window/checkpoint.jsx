import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";

export const slidingWindowCheckpointChapter = {
  id: 'sliding-window-checkpoint',
  title: 'Checkpoint: Sliding Window',
  sectionId: 'sliding-window',
  previousChapterId: 'sliding-window-glossary',
  content: `
## Quiz: Sliding Window

Test your understanding of the sliding window technique, focusing on financial applications, implementation details, and time complexity analysis.
`,
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();
        
        return (
          <main>
            <h2>Quiz: Sliding Window</h2>
            <form className="auto-graded-quiz">
              
              <div className="question" data-answer="O(n)">
                <p>What is the time complexity of the sliding window approach for calculating a 20-day moving average on n days of stock price data?</p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  The sliding window approach has <strong>O(n)</strong> time complexity. We make one pass through the data, performing constant-time operations (one subtraction and one addition) for each window slide. This is much better than the naive O(n×k) approach that recalculates the sum for each window.
                </div>
              </div>

              <div className="question" data-answer="windowSum = windowSum - prices[i - k] + prices[i]">
                <p>Complete this sliding window code for calculating moving averages:</p>
                <pre><code className="language-javascript">{`for (let i = k; i < prices.length; i++) {
  // Update window sum here
  _________________________;
  averages.push(windowSum / k);
}`}</code></pre>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  <strong>windowSum = windowSum - prices[i - k] + prices[i]</strong> is correct. We subtract the price leaving the window (prices[i - k]) and add the price entering the window (prices[i]). This maintains the running sum efficiently without recalculating the entire window.
                </div>
              </div>

              <div className="question" data-answer="variable">
                <p>Which type of sliding window should you use for problems like &quot;find the longest trading period with at least 15% return&quot;?</p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  You should use a <strong>variable-size</strong> sliding window (two-pointer technique). This approach expands and contracts the window based on performance conditions, making it perfect for optimization problems where you&apos;re looking for the best trading period of flexible length.
                </div>
              </div>

              <div className="question" data-answer="Map">
                <p>When tracking dynamic categories (like sectors or currencies) in portfolio analysis, what JavaScript data structure is most appropriate for frequency counting?</p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  A <strong>Map</strong> is most appropriate for tracking dynamic categories. Maps handle unknown keys efficiently, provide better performance for frequent additions/deletions, and make it easy to delete keys when their count reaches zero, preventing memory leaks in financial analysis applications.
                </div>
              </div>

              <div className="question" data-answer="fixed">
                <p>When calculating a 30-day rolling volatility for risk management, which type of sliding window should you use?</p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  You should use a <strong>fixed-size</strong> sliding window because volatility calculations require a consistent time period (30 days). The window size remains constant as it slides through the price data, making it perfect for this type of financial risk indicator.
                </div>
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