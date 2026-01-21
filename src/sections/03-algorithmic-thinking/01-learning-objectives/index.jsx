import { formatObjectives } from "@nss-workshops/nss-core";

const data = [
  {category: "BigO", module: "1", name: "Define and Describe Big O Notation", level: "Remember, Understand"},
  {category: "BigO", module: "1", name: "Know the difference between Time and Space complexity", level: "Remember, Understand"},
  {category: "BigO", module: "1", name: "Know what constants are and why we can drop them from Big O notation", level: "Remember, Understand"},
  {category: "BigO", module: "1", name: "Analyze simple code snippets and determine their time and space complexity using Big O", level: "Apply"},
  {category: "BigO", module: "1", name: "Order common complexities from best to worst O(1) < O(log n) < O(n) < O(n log n) < O(n²)", level: "Remember, Understand"},
  {category: "BigO", module: "1", name: "Choose or write more efficient code based on Big O trade-offs", level: "Apply"},
  {category: "BigO", module: "1", name: "Explain the time complexity of common operations (insert, lookup, delete) on Arrays, Lists Maps, Stacks, Queues and Sets", level: "Apply"},
  {category: "Problem Solving", module: "1", name: "Recall the 5 steps of the Algorithm solving guide: Clarify > Plan > Implement > Test > Optimize", level: "Remember, Understand"},
  {category: "Problem Solving", module: "1", name: "Solve a problem using the 5 steps of the Algorithm solving guide: Clarify > Plan > Implement > Test > Optimize", level: "Apply"},
];

export default {
    id: "algorithmic-thinking-learning-objectives",
    title: "Learning Objectives",
    description: "Goals and outcomes for the Algorithmic Thinking & Big-O section.",
    previousChapterId: null,
    nextChapterId: "what-is-algorithm",
    content: `## 🎯 What You Will Learn

This section covers the fundamental concepts of algorithmic thinking and performance analysis. By the end of this section, you will have mastered the core skills needed to analyze and optimize code.

${formatObjectives(data)}
`,
    exercises: [],
    quiz: null
}