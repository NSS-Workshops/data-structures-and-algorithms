import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";

export const introductionCheckpointChapter = {
  id: "introduction-checkpoint",
  title: "Checkpoint: Introduction",
  sectionId: "introduction",
  previousChapterId: "introduction",
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
              <div
                className="question"
                data-answer="10 hours total: 6 hours async + 4 hours live"
              >
                <p>
                  How many hours per week should you plan to dedicate to this
                  course, and how are those hours divided?
                </p>
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="10 hours total: 6 hours async + 4 hours live"
                  />{" "}
                  10 hours total: 6 hours async + 4 hours live
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="4 hours total: all in Zoom"
                  />{" "}
                  4 hours total: all in Zoom
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="8 hours total: 2 hours async + 6 hours in-person"
                  />{" "}
                  8 hours total: 2 hours async + 6 hours in-person
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q1"
                    value="12 hours total: 6 hours reading + 6 hours doing projects"
                  />{" "}
                  12 hours total: 6 hours reading + 6 hours doing projects
                </label>
                <div className="feedback"></div>
              </div>

              <div
                className="question"
                data-answer="During the second class of the week; give at least one week's notice in Slack"
              >
                <p>
                  When do pair programming sessions happen, and how should you
                  let the team know if you’ll miss one?
                </p>
                <label>
                  <input
                    type="radio"
                    name="q2"
                    value="At the start of each module; email if you’ll miss it"
                  />{" "}
                  At the start of each module; email if you’ll miss it
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q2"
                    value="During the second class of the week; give at least one week's notice in Slack"
                  />{" "}
                  During the second class of the week; give at least one weeks
                  notice in Slack
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q2"
                    value="Anytime during the week; just let your pair know the day before"
                  />{" "}
                  Anytime during the week; just let your pair know the day
                  before
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q2"
                    value="After every quiz; notify your pair immediately if absent"
                  />{" "}
                  After every quiz; notify your pair immediately if absent
                </label>
                <div className="feedback"></div>
              </div>

              <div
                className="question"
                data-answer="To preserve your solutions, notes, and track progress with commits"
              >
                <p>
                  What is the primary purpose of the GitHub repo you’ll create
                  for this course?
                </p>
                <label>
                  <input
                    type="radio"
                    name="q3"
                    value="To share memes and course screenshots with your cohort"
                  />{" "}
                  To share memes and course screenshots with your cohort
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q3"
                    value="To experiment with code challenges in your browser only"
                  />{" "}
                  To experiment with code challenges in your browser only
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q3"
                    value="To preserve your solutions, notes, and track progress with commits"
                  />{" "}
                  To preserve your solutions, notes, and track progress with
                  commits
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q3"
                    value="To submit weekly quizzes and attendance forms"
                  />{" "}
                  To submit weekly quizzes and attendance forms
                </label>
                <div className="feedback"></div>
              </div>

              <div
                className="question"
                data-answer="Pinned at the top of your cohort’s Slack channel"
              >
                <p>
                  Where can you find the Zoom link for your live class sessions?
                </p>
                <label>
                  <input
                    type="radio"
                    name="q6"
                    value="It will be emailed before every session"
                  />{" "}
                  It will be emailed before every session
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q6"
                    value="On your GitHub repo homepage"
                  />{" "}
                  On your GitHub repo homepage
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q6"
                    value="Pinned at the top of your cohort’s Slack channel"
                  />{" "}
                  Pinned at the top of your cohort’s Slack channel
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q6"
                    value="Only available in the course syllabus PDF"
                  />{" "}
                  Only available in the course syllabus PDF
                </label>
                <div className="feedback"></div>
              </div>
              <div
                className="question"
                data-answer="You may still get paired and leave your partner without a collaborator"
              >
                <p>
                  What happens if you don’t notify the team ahead of time that
                  you’ll miss a class?
                </p>
                <label>
                  <input
                    type="radio"
                    name="q8"
                    value="You’ll be charged a late fee"
                  />{" "}
                  You’ll be charged a late fee
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q8"
                    value="You’ll automatically fail the week's module"
                  />{" "}
                  You’ll automatically fail the weeks module
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q8"
                    value="You may still get paired and leave your partner without a collaborator"
                  />{" "}
                  You may still get paired and leave your partner without a
                  collaborator
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q8"
                    value="You’ll need to email your pair separately to reschedule"
                  />{" "}
                  You’ll need to email your pair separately to reschedule
                </label>
                <div className="feedback"></div>
              </div>

              <div
                className="question"
                data-answer="Push your code and notes to your GitHub repo with a clear commit message"
              >
                <p>
                  What should you do immediately after completing each chapter
                  or coding session?
                </p>
                <label>
                  <input
                    type="radio"
                    name="q9"
                    value="Post your solution in Slack for review"
                  />{" "}
                  Post your solution in Slack for review
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q9"
                    value="Write a blog post summarizing the topic"
                  />{" "}
                  Write a blog post summarizing the topic
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q9"
                    value="Push your code and notes to your GitHub repo with a clear commit message"
                  />{" "}
                  Push your code and notes to your GitHub repo with a clear
                  commit message
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q9"
                    value="Wait until the end of the week and push everything at once"
                  />{" "}
                  Wait until the end of the week and push everything at once
                </label>
                <div className="feedback"></div>
              </div>

              <div
                className="question"
                data-answer="Half an hour instructor-led session, half pair programming"
              >
                <p>
                  During Day 1 of each weekly live session, how is class time
                  typically divided?
                </p>
                <label>
                  <input
                    type="radio"
                    name="q10"
                    value="Entirely pair programming"
                  />{" "}
                  Entirely pair programming
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q10"
                    value="Half instructor-led session, half pair programming"
                  />{" "}
                  Half instructor-led session, half pair programming
                </label>
                <br />
                <label>
                  <input type="radio" name="q10" value="Entirely quiz-based" />{" "}
                  Entirely quiz-based
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q10"
                    value="Free time to catch up on self-study work"
                  />{" "}
                  Free time to catch up on self-study work
                </label>
                <div className="feedback"></div>
              </div>

              <div
                className="question"
                data-answer="Post in the #help channel on Slack so others can benefit too"
              >
                <p>
                  If you have a question about the course content, logistics, or
                  an assignment, where is the best place to ask it?
                </p>
                <label>
                  <input
                    type="radio"
                    name="q11"
                    value="DM the instructor directly on Slack"
                  />{" "}
                  DM the instructor directly on Slack
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q11"
                    value="Post in the #help channel on Slack so others can benefit too"
                  />{" "}
                  Post in the #help channel on Slack so others can benefit too
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q11"
                    value="Wait until the next live session to ask out loud"
                  />{" "}
                  Wait until the next live session to ask out loud
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q11"
                    value="Email support@datastructures.com"
                  />{" "}
                  Email support@datastructures.com
                </label>
                <div className="feedback"></div>
              </div>

              <div
                className="question"
                data-answer="After the second class session each week, via an email message"
              >
                <p>
                  When and how will you receive your pairing assignment each
                  week?
                </p>
                <label>
                  <input
                    type="radio"
                    name="q12"
                    value="During the first class session each week, verbally from the instructor"
                  />{" "}
                  During the first class session each week, verbally from the
                  instructor
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q12"
                    value="After the second class session each week, via an email message"
                  />{" "}
                  After the second class session each week, via an email message
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q12"
                    value="Every Monday morning by email"
                  />{" "}
                  Every Monday morning by email
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="q12"
                    value="During your self-study time, in a GitHub issue"
                  />{" "}
                  During your self-study time, in a GitHub issue
                </label>
                <div className="feedback"></div>
              </div>
              <button className="code-button test-button" type="submit">
                Submit
              </button>
            </form>
          </main>
        );
      };

      return <CheckpointComponent />;
    },
  },
};
