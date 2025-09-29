import { formatGlossary } from "@nss-workshops/nss-core";

const data = [
  // Core Sliding Window Concepts
  { term: "Sliding Window", definition: "A computational technique that maintains a 'window' (contiguous subarray) that slides through financial time-series data to efficiently calculate indicators like moving averages and volatility measures.", week: "7"},
  { term: "Fixed-Size Window", definition: "A sliding window where the size remains constant, perfect for financial indicators like 20-day moving averages or 30-day volatility calculations.", week: "7"},
  { term: "Variable-Size Window", definition: "A sliding window that can grow or shrink based on conditions, ideal for finding optimal trading periods or performance thresholds in financial analysis.", week: "7"},
  { term: "Window State", definition: "The aggregated information maintained about the current window, such as sum, count, or frequency maps used in portfolio analysis and risk calculations.", week: "7"},
  
  // Financial Applications
  { term: "Moving Average", definition: "A financial indicator calculated using fixed-size sliding windows to smooth price data over a specific period, commonly used in technical analysis.", week: "7"},
  { term: "Rolling Volatility", definition: "A risk measure calculated using sliding windows to determine price variability over consecutive time periods, essential for portfolio risk management.", week: "7"},
  { term: "Time-Series Analysis", definition: "The analysis of financial data points collected over time, where sliding window techniques enable efficient calculation of indicators and patterns.", week: "7"},
  
  // Technical Concepts
  { term: "Two Pointers", definition: "A technique using left and right pointers to define variable-size window boundaries, commonly used in optimization problems for finding optimal trading periods.", week: "7"},
  { term: "Frequency Counter", definition: "A data structure (Map or object) that tracks occurrences of elements within the current window, useful for portfolio composition analysis.", week: "7"},
  { term: "Running Calculation", definition: "Maintaining aggregate values (like sum or variance) as the window moves, rather than recalculating from scratch - the key optimization in sliding window techniques.", week: "7"},
  
  // Performance and Complexity
  { term: "Time Complexity Optimization", definition: "Sliding window reduces complexity from O(n×k) to O(n) by avoiding redundant calculations, crucial for real-time financial data processing.", week: "7"},
  { term: "Contiguous Subarray", definition: "A sequence of adjacent elements in financial time-series data, which sliding window techniques process efficiently for indicators and analysis.", week: "7"},
  
  // Problem Types
  { term: "Portfolio Optimization", definition: "Using variable-size sliding windows to find optimal investment periods or asset allocation strategies that meet specific performance criteria.", week: "7"},
  { term: "Risk Management", definition: "Application of sliding window techniques to calculate rolling risk metrics like volatility, drawdown, and correlation for financial decision-making.", week: "7"},
];

export const glossaryChapter = {
  id: 'sliding-window-glossary',
  title: 'Glossary: Sliding Window',
  sectionId: 'sliding-window',
  previousChapterId: 'sliding-window-supplemental-materials',
  content: `## Glossary: Sliding Window

This glossary contains important terms and concepts related to the sliding window technique in financial analysis. Understanding these terms will help you communicate effectively about algorithms and data structures during interviews and technical discussions.

${formatGlossary(data)}
`,
  exercise: null
};