import { TestResult } from "../../utils/test_utils";

export const codeExcerciseOneChapter = {
  id: '9dacc692',
  title: 'Module 6 - Code Excercise 1',
  sectionId: 'maps-and-sets',
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

Best of luck, and enjoy the practice! 🚀

## Problem: Character Frequency Count

Given a string, return a Map containing the frequency of each character in the string.

The function should count all characters including spaces and special characters.

### Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would you find the most/least frequent character?`,
  exercise: {
    starterCode:`/*
Problem: Character Frequency Count

Given a string, return a Map containing the frequency of each character in the string.
The function should count all characters including spaces and special characters.

Examples:
Input: "hello" → Output: Map { 'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1 }
Input: "aab" → Output: Map { 'a' => 2, 'b' => 1 }
Input: "hello world" → Output: Map { 'h' => 1, 'e' => 1, 'l' => 3, 'o' => 2, ' ' => 1, 'w' => 1, 'r' => 1, 'd' => 1 }

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would you find the most/least frequent character?
*/

function characterFrequency(str) {
  // Approach: Use a Map to store character frequencies
  // Iterate through string and increment count for each character
  // Map provides O(1) average time for get/set operations
  
  // Your code here
}`,
    solution:`/*
Problem: Character Frequency Count

Given a string, return a Map containing the frequency of each character in the string.
*/

function characterFrequency(str) {
  // Create a new Map to store character frequencies
  const frequencyMap = new Map();
  
  // Iterate through each character in the string
  for (let char of str) {
    // If character already exists in map, increment its count
    // Otherwise, set count to 1
    if (frequencyMap.has(char)) {
      frequencyMap.set(char, frequencyMap.get(char) + 1);
    } else {
      frequencyMap.set(char, 1);
    }
    
    // Alternative one-liner approach:
    // frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
  }
  
  return frequencyMap;
  
  // Time Complexity: O(n) - we iterate through the string once
  // Space Complexity: O(k) - where k is the number of unique characters
  // In worst case (all unique chars), k = n, so O(n)
}`,
    tests:[
      {
        name: "Basic character frequency counting",
        test: (code) => {
          try {
            const characterFrequency = new Function(`${code}; return characterFrequency;`)();
            
            const result1 = characterFrequency("hello");
            const result2 = characterFrequency("aab");
            
            // Check result1: "hello"
            const test1 = result1.get('h') === 1 && 
                         result1.get('e') === 1 && 
                         result1.get('l') === 2 && 
                         result1.get('o') === 1 &&
                         result1.size === 4;
            
            // Check result2: "aab"
            const test2 = result2.get('a') === 2 && 
                         result2.get('b') === 1 &&
                         result2.size === 2;
            
            if (test1 && test2) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Failed basic frequency counting. "hello" result: ${JSON.stringify([...result1])}, "aab" result: ${JSON.stringify([...result2])}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should correctly count character frequencies."
      },
      {
        name: "Handle spaces and special characters",
        test: (code) => {
          try {
            const characterFrequency = new Function(`${code}; return characterFrequency;`)();
            
            const result = characterFrequency("hello world!");
            
            const hasSpace = result.get(' ') === 1;
            const hasExclamation = result.get('!') === 1;
            const hasL = result.get('l') === 3; // 2 from "hello" + 1 from "world"
            const hasO = result.get('o') === 2; // 1 from "hello" + 1 from "world"
            
            if (hasSpace && hasExclamation && hasL && hasO) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Failed to handle spaces/special chars. Result: ${JSON.stringify([...result])}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should count spaces and special characters."
      },
      {
        name: "Handle edge cases",
        test: (code) => {
          try {
            const characterFrequency = new Function(`${code}; return characterFrequency;`)();
            
            const empty = characterFrequency("");
            const single = characterFrequency("a");
            const repeated = characterFrequency("aaaa");
            
            const test1 = empty.size === 0;
            const test2 = single.get('a') === 1 && single.size === 1;
            const test3 = repeated.get('a') === 4 && repeated.size === 1;
            
            if (test1 && test2 && test3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Edge cases failed. Empty: ${empty.size}, Single: ${JSON.stringify([...single])}, Repeated: ${JSON.stringify([...repeated])}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle empty strings, single characters, and repeated characters."
      },
      {
        name: "Return Map instance",
        test: (code) => {
          try {
            const characterFrequency = new Function(`${code}; return characterFrequency;`)();
            
            const result = characterFrequency("test");
            
            const isMap = result instanceof Map;
            const hasMapMethods = typeof result.get === 'function' && 
                                 typeof result.set === 'function' && 
                                 typeof result.has === 'function';
            
            if (isMap && hasMapMethods) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected Map instance, got ${typeof result}. isMap: ${isMap}, hasMapMethods: ${hasMapMethods}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should return a Map instance with proper Map methods."
      }
    ]
  }
};