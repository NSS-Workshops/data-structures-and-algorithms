import { formatObjectives } from "@nss-workshops/nss-core";

const data = [
  { category: "Memory", module: "1", name: "Explain what a bit and a byte are and why computers use binary", level: "Remember, Understand" },
  { category: "Memory", module: "1", name: "Describe how RAM stores data as a numbered sequence of bytes", level: "Remember, Understand" },
  { category: "Memory", module: "1", name: "Explain what a memory address is and how the CPU uses it to locate data", level: "Remember, Understand" },
  { category: "Memory", module: "1", name: "Distinguish between storing a value directly and storing a reference to a value", level: "Understand" },
  { category: "Memory", module: "1", name: "Explain why primitive values and objects behave differently when assigned to variables in JavaScript", level: "Understand" },
  { category: "Memory", module: "1", name: "Explain why array index access can be calculated directly from an index, without searching", level: "Understand" },
];

export default {
  id: "what-is-memory-learning-objectives",
  title: "Learning Objectives",
  description: "Goals and outcomes for the What Is Memory? section.",
  previousChapterId: null,
  nextChapterId: "what-is-memory-binary",
  content: `## 🎯 What You Will Learn

This section builds the mental model behind how computers store and locate data. By the end, you will understand why the data structures you are about to study are designed the way they are.

${formatObjectives(data)}
`,
  exercises: [],
  quiz: null
}
