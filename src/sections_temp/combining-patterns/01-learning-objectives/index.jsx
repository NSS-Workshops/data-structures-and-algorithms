import { formatObjectives } from "@nss-workshops/nss-core";

const data = [
  {category: "Pattern Recognition", module: "9", name: "Recognize common patterns in problem statements and identify appropriate data structures and algorithms", level: "Remember, Understand"},
  {category: "Data Structure Selection", module: "9", name: "Choose the right data structure for specific problem requirements based on performance characteristics", level: "Apply"},
  {category: "Algorithm Integration", module: "9", name: "Combine multiple algorithmic techniques (two pointers, sliding window, etc.) to solve complex problems", level: "Apply"},
  {category: "Performance Analysis", module: "9", name: "Analyze trade-offs between space and time complexity when choosing between different approaches", level: "Apply"},
  {category: "Problem Solving", module: "10", name: "Think aloud during problem-solving to demonstrate structured thinking", level: "Apply"},
  {category: "Code Quality", module: "10", name: "Write clean, testable, and efficient solutions that follow best practices", level: "Apply"},
  {category: "Optimization", module: "10", name: "Identify and implement optimizations when prompted by interviewers", level: "Apply"},
  {category: "Requirement Clarification", module: "10", name: "Ask appropriate clarifying questions to understand problem requirements fully", level: "Apply"},
];

export default function LearningObjectives() {
  return (
    <main>
      <h1>Learning Objectives</h1>
      
      <h2>🎯 What You Will Learn</h2>
      
      <p>
        This section focuses on integrating multiple data structures and algorithmic patterns to solve complex problems. 
        By the end of this section, you will understand how to recognize patterns, choose appropriate data structures, and analyze trade-offs in real-world scenarios.
      </p>
      
      <div dangerouslySetInnerHTML={{ __html: formatObjectives(data) }} />
    </main>
  );
}