import { formatObjectives } from "../../utils/format_utils";

const data = [
  {category: "Interview Skills", module: "10", name: "Solve problems end-to-end under time constraints while explaining your thought process", level: "Apply"},
  {category: "Communication", module: "10", name: "Explain code implementations and trade-offs clearly to interviewers", level: "Apply"},
  {category: "Problem Solving", module: "10", name: "Think aloud during problem-solving to demonstrate structured thinking", level: "Apply"},
  {category: "Code Quality", module: "10", name: "Write clean, testable, and efficient solutions that follow best practices", level: "Apply"},
  {category: "Optimization", module: "10", name: "Identify and implement optimizations when prompted by interviewers", level: "Apply"},
  {category: "Requirement Clarification", module: "10", name: "Ask appropriate clarifying questions to understand problem requirements fully", level: "Apply"},
  {category: "Testing & Validation", module: "10", name: "Validate solutions with test cases and handle edge cases appropriately", level: "Apply"},
  {category: "Time Management", module: "10", name: "Manage time effectively during coding interviews to complete solutions", level: "Apply"},
];

export const interviewReadinessLearningObjectivesChapter = {
  id: 'interview-readiness-learning-objectives',
  title: 'Learning Objectives',
  sectionId: 'interview-readiness',
  previousChapterId: null,
  content: `# Learning Objectives: Interview Readiness & Recap

## 🎯 What You Will Learn

This section focuses on applying all your knowledge in interview settings and real-world scenarios. By the end of this section, you will be prepared to tackle technical interviews with confidence and demonstrate your problem-solving skills effectively.

${formatObjectives(data)}
`,
  exercise: null
};