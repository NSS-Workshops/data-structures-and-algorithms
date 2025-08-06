/**
 * Utility functions for formatting structured content
 */

/**
 * Get a formatted markup string based on an array of content
 * @param {String} data The array of content, each an object with term, definition, and week properties
 * @returns {String} The formatted markup string
 */
export function formatGlossary(data) {
    let output = `| Term | Definition |
|------|------------|`;

    data.forEach(d => {
        output += `
| ${d.term} |  ${d.definition} |`
    });

    return output;
}

/**
 * Get a formatted markup string based on an array of content
 * @param {String} data The array of content, each an object with category, module, name and level
 * @returns {String} The formatted markup string
 */
export function formatObjectives(data) {
    let output = `| Category | Learning Objective Name | Bloom Level |
|----------|------------------------|-------------|`;
    
    data.forEach(d => {
        output += `
| ${d.category} | ${d.name} | ${d.level} |`;
    });

    return output;
}


/**
 * Get a formatted markup string based on an array of content
 * @param {String} data The object for a quiz with a header and an array of questions
 * @returns {String} The formatted markup string
 */
export function formatQuiz(data) {
    let output = `<main>
            <h2>Quiz: Just Enough Math</h2>
            <form className="auto-graded-quiz">
                 <div className="question" data-answer="O(n)">
          <p>How do you write linear time complexity in Big O notation?</p>
          <label><input type="radio" name="q1" value="O(1)" /> O(1)</label><br />
          <label><input type="radio" name="q1" value="O(n)" /> O(n)</label><br />
          <label><input type="radio" name="q1" value="O(n^2)" /> O(n^2)</label>
          <div className="feedback"></div>
        </div>

        <div className="question" data-answer="O(1)">
          <p>How do you write constant time complexity in Big O notation?</p>
          <label><input type="radio" name="q2" value="O(1)" /> O(1)</label><br />
          <label><input type="radio" name="q2" value="O(n)" /> O(n)</label><br />
          <label><input type="radio" name="q2" value="O(n^2)" /> O(n^2)</label>
          <div className="feedback"></div>
        </div>

        <div className="question" data-answers="O(1),O(n),O(n^2),O(n^k)">
          <p>Which of the following are polynomial functions?</p>
          <label><input type="checkbox" value="O(1)" /> O(1)</label><br />
          <label><input type="checkbox" value="O(n)" /> O(n)</label><br />
          <label><input type="checkbox" value="O(n^2)" /> O(n^2)</label><br />
          <label><input type="checkbox" value="O(2^n)" /> O(2^n)</label><br />
          <label><input type="checkbox" value="O(n^k)" /> O(n^k)</label>
          <div className="feedback"></div>
        </div>

              <button  className="code-button test-button"  type="submit">Submit</button>
            </form>
    </main>`;

    return output;
}