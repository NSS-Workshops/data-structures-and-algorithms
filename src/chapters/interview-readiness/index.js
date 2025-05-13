/**
 * Interview Readiness chapters
 * This section focuses on preparing for technical interviews with practice problems,
 * mock interviews, and strategies for effective communication.
 */

export const interviewReadinessChapters = [
  {
    id: "solving-problems-end-to-end",
    title: "Solving Problems End-to-End",
    sectionId: "interview-readiness",
    description: "Learn how to approach and solve technical problems under constraints",
    previousChapterId: null,
    nextChapterId: "explaining-code-tradeoffs",
    content: () => import("./solving-problems-end-to-end.js"),
  },
  {
    id: "explaining-code-tradeoffs",
    title: "Explaining Code and Tradeoffs",
    sectionId: "interview-readiness",
    description: "Techniques for clearly communicating your solution and its tradeoffs",
    previousChapterId: "solving-problems-end-to-end",
    nextChapterId: "thinking-aloud",
    content: () => import("./explaining-code-tradeoffs.js"),
  },
  {
    id: "thinking-aloud",
    title: "Thinking Aloud and Clarifying Requirements",
    sectionId: "interview-readiness",
    description: "Strategies for verbalizing your thought process and asking clarifying questions",
    previousChapterId: "explaining-code-tradeoffs",
    nextChapterId: "clean-solutions",
    content: () => import("./thinking-aloud.js"),
  },
  {
    id: "clean-solutions",
    title: "Clean, Testable, Efficient Solutions",
    sectionId: "interview-readiness",
    description: "Writing code that is clean, testable, and optimized for performance",
    previousChapterId: "thinking-aloud",
    nextChapterId: "interview-readiness-glossary",
    content: () => import("./clean-solutions.js"),
  },
  {
    id: "interview-readiness-glossary",
    title: "Glossary: Interview Readiness",
    sectionId: "interview-readiness",
    description: "Key terms and concepts for technical interviews",
    previousChapterId: "clean-solutions",
    nextChapterId: null,
    content: () => import("./glossary.js"),
  }
];