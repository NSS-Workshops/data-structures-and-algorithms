import { TestResult } from "../../utils/test_utils";

export const codeExcerciseTwoChapter = {
  id: 'e49003dd',
  title: 'Module 6 - Code Excercise 2',
  sectionId: 'sliding-window',
  previousChapterId: null,
  content: `
  Hi 👋,
You'll be guiding your partner through the coding problem on the right side of your screen. 

⚠️ **Please do not share this URL / problem before class.**  
Revealing the question early defeats the purpose of simulating a real-world interview, where candidates do not know the problem in advance. Let's give your partner the chance to experience the challenge authentically.

🧠 **Before class:**  
Take time to study the problem. During the session, you'll have 90 minutes in your breakout room to run a mock interview with your partner. Be sure to take turns acting as the interviewer and interviewee.

🗣️ **As the interviewer, your responsibilities are:**
- Send this URL to your partner (copy and past the whole url and slack it directly to you partner)
- Briefly introduce the problem
- Never give away the answer
- Take notes and provide feedback
- Fill out this [feedback form](https://forms.gle/sXK3tJaGNEk52jm4A)

🗣️ **As the interviewee, your responsibilities are:**
- Ask clarifying questions
- Follow the steps in the [solving guide](https://forms.gle/sXK3tJaGNEk52jm4A):
    Step 1: Clarify
    Step 2: Plan
    Step 3: Implement
    Step 4: Test
    Step 5: Optimize

🪞 **After the first interview:**  
Leave 10–15 minutes to reflect, share feedback, and then switch roles.

Best of luck, and enjoy the practice! 🚀`,
  exercise: {
    starterCode:``,
    solution:``,
    tests:[
    {
        name: "Correct Syntax",
        test: (code) => {
          try {
            new Function(code)(); // Just check that it executes
            return new TestResult({ passed: true })
          } catch {
            return new TestResult({ passed: false });
          }
        },
        message: "Make sure your code runs without syntax or runtime errors."
      },
    ]
  }
};