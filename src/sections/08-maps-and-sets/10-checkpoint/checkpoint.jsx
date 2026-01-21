import { QUESTION_TYPES } from "@nss-workshops/nss-core";

export default [
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: "What will be the size of this Set after all operations?\n\n```javascript\nconst mySet = new Set();\n\nmySet.add(\"apple\");\nmySet.add(\"banana\");\nmySet.add(\"apple\");   // duplicate\nmySet.add(\"cherry\");\nmySet.add(\"banana\");  // duplicate\n\nconsole.log(mySet.size);\n```",
    correctAnswer: "3",
    explanation: "The Set will have a size of **3**. Sets automatically prevent duplicates, so even though \"apple\" and \"banana\" are added twice, they only appear once in the Set. The final Set contains: apple, banana, cherry."
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: "What value will be logged when the same key is set multiple times in a Map?\n\n```javascript\nconst myMap = new Map();\n\nmyMap.set(\"status\", \"first\");\nmyMap.set(\"status\", \"second\");\nmyMap.set(\"status\", \"third\");\n\nconsole.log(myMap.get(\"status\"));\n```",
    correctAnswer: "third",
    explanation: "The output will be **\"third\"**. When you set the same key multiple times in a Map, the new value overwrites the previous value. Maps maintain unique keys, so the key \"status\" will only exist once with the most recently assigned value."
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: "What will this code output? (Consider reference vs value comparison)\n\n```javascript\nconst obj1 = { id: 1 };\nconst obj2 = { id: 1 };\n\nconst mySet = new Set();\nmySet.add(obj1);\nmySet.add(obj2);\n\nconsole.log(mySet.size === 1);\n```",
    correctAnswer: "false",
    explanation: "The output will be **false**. Even though obj1 and obj2 have the same content, they are different object references in memory. Sets use reference equality for objects, not value equality. Since obj1 and obj2 are different references, both are added to the Set, making the size 2, not 1."
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: "What is the average time complexity for Map operations like get(), set(), and has() in a well-implemented hash table?",
    correctAnswer: "O(1)",
    explanation: "Map operations (get, set, has, delete) are **O(1) constant time** on average when using a good hash function and proper load factor management. This makes Maps ideal for applications requiring fast lookups like patient records or emergency dispatch systems where every millisecond counts."
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: "What is the average time complexity for Set operations like add(), delete(), and has()?",
    correctAnswer: "O(1)",
    explanation: "Set operations are also **O(1) constant time** on average because Sets are typically implemented using hash tables internally. This constant-time performance is crucial for applications like allergy checking in medication safety systems."
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: "Which set operation would you use to find allergies that are common between two family members for genetic analysis?",
    correctAnswer: "intersection",
    explanation: "The **intersection** operation finds elements that exist in both sets, making it perfect for identifying common allergies between family members that might indicate genetic predisposition."
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: "What component of a hash table is responsible for converting keys into array indices?",
    correctAnswer: "Hash function",
    explanation: "The **hash function** converts keys into array indices. A good hash function distributes keys uniformly across the array to minimize collisions and maintain O(1) performance."
  },
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx: "What are the key differences between Maps and Sets?",
    answers: [
      "🗝️ Maps store key-value pairs",
      "🔒 Sets store unique values only",
      "⚡ Maps are faster than Sets",
      "🔄 Sets can have duplicate values",
      "📝 Maps allow duplicate values for different keys",
      "💾 Sets require more memory than Maps"
    ],
    correctAnswers: [0, 1, 4],
    // explanation: {
    //   "🗝️ Maps store key-value pairs": "✅ Correct — Maps associate keys with values for data retrieval.",
    //   "🔒 Sets store unique values only": "✅ Correct — Sets automatically prevent duplicates and only store unique values.",
    //   "⚡ Maps are faster than Sets": "❌ Incorrect — Both have similar O(1) performance; speed depends on implementation and use case.",
    //   "🔄 Sets can have duplicate values": "❌ Incorrect — Sets specifically prevent duplicates; that's their main feature.",
    //   "📝 Maps allow duplicate values for different keys": "✅ Correct — Different keys can map to the same value in a Map.",
    //   "💾 Sets require more memory than Maps": "❌ Incorrect — Sets typically use less memory since they don't store associated values."
    // }
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: "What collision resolution technique stores multiple key-value pairs at the same array index using a list or array?",
    correctAnswer: "Separate chaining",
    explanation: "**Separate chaining** handles collisions by storing multiple entries at the same array index using a linked list or array. When a collision occurs, the new entry is added to the list at that index."
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: "What is the typical load factor threshold (as a decimal) used to trigger dynamic resizing in hash tables?",
    correctAnswer: "0.75",
    explanation: "A load factor of **0.75 (75%)** is commonly used as the threshold for resizing hash tables. This balances memory usage with performance - keeping the table from becoming too crowded while not wasting excessive space."
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: "Which set operation would combine all allergies from multiple family members to create a comprehensive family allergy history?",
    correctAnswer: "union",
    explanation: "The **union** operation combines all unique values from multiple sets, making it perfect for creating a comprehensive family allergy history that includes all allergies from all family members without duplicates."
  }
];