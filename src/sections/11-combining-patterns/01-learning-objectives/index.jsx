import { formatObjectives } from "@nss-workshops/nss-core";

const data = [
  {category: "Pattern Recognition", name: "Recognize common patterns in problem statements and identify appropriate data structures and algorithms", level: "Remember, Understand"},
  {category: "Data Structure Selection", name: "Choose the right data structure for specific problem requirements based on performance characteristics", level: "Apply"},
  {category: "Algorithm Integration", name: "Combine multiple algorithmic techniques (two pointers, sliding window, etc.) to solve complex problems", level: "Apply"},
  {category: "Performance Analysis", name: "Analyze trade-offs between space and time complexity when choosing between different approaches", level: "Apply"},
  {category: "Problem Solving", name: "Think aloud during problem-solving to demonstrate structured thinking", level: "Apply"},
  {category: "Code Quality", name: "Write clean, testable, and efficient solutions that follow best practices", level: "Apply"},
  {category: "Optimization", name: "Identify and implement optimizations when prompted by interviewers", level: "Apply"},
  {category: "Requirement Clarification", name: "Ask appropriate clarifying questions to understand problem requirements fully", level: "Apply"},
];

export default {
  id: "combining-objectives",
  title: "Learning Objectives",
  previousChapterId: null,
  nextChapterId: "combining-weather",
  content: `
## 🎯 What You Will Learn
  
This section focuses on integrating multiple data structures and algorithmic patterns to solve complex problems. 
By the end of this section, you will understand how to recognize patterns, choose appropriate data structures, and analyze trade-offs in real-world scenarios.
${formatObjectives(data)}`
  };