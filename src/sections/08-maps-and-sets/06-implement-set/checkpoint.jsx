import { QUESTION_TYPES } from "@nss-workshops/nss-core";

export default [
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx: "Which scenarios are ideal use cases for Sets in healthcare applications?",
    answers: [
      "🏥 Membership testing for allergies",
      "📋 Storing patient ID to medical record mappings",
      "🚫 Preventing duplicate entries",
      "⏰ Maintaining appointment queue order",
      "🔢 Mathematical set operations",
      "💾 Caching expensive calculations"
    ],
    correctAnswers: [0, 2, 4],
    // explanation: {
    //   "🏥 Membership testing for allergies": "✅ Correct — Sets excel at O(1) \"does this exist?\" queries.",
    //   "📋 Storing patient ID to medical record mappings": "❌ Incorrect — This requires key-value pairs (Map).",
    //   "🚫 Preventing duplicate entries": "✅ Correct — Sets automatically ensure uniqueness.",
    //   "⏰ Maintaining appointment queue order": "❌ Incorrect — This requires ordered data structure (Queue).",
    //   "🔢 Mathematical set operations": "✅ Correct — Union, intersection, difference are Set operations.",
    //   "💾 Caching expensive calculations": "❌ Incorrect — This requires key-value storage (Map)."
    // }
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: "Which set operation would you use to find allergies that are common between two family members for genetic analysis?",
    correctAnswer: "intersection",
    explanation: "The **intersection** operation finds elements that exist in both sets, making it perfect for identifying common allergies between family members that might indicate genetic predisposition."
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: "What is the average time complexity for checking if a patient has a specific allergy using a hash-based Set implementation?",
    correctAnswer: "O(1)",
    explanation: "Hash-based Set operations like membership testing (has) are O(1) constant time on average, making them ideal for critical safety checks where every millisecond counts in preventing medication errors."
  }
];