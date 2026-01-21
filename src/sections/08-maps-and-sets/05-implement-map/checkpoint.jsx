import { QUESTION_TYPES } from "@nss-workshops/nss-core";

export default [
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx: 'Which components are essential for implementing a custom HashMap?',
    answers: [
      '🔢 Hash function converts keys to array indices',
      '🔗 Linked list for maintaining insertion order',
      '⛓️ Separate chaining handles collisions',
      '🌳 Binary search tree for sorted keys',
      '📈 Dynamic resizing maintains performance',
      '📋 Queue for processing operations'
    ],
    correctAnswers: [0, 2, 4],
    // explanation: {
    //   '🔢 Hash function converts keys to array indices': '✅ Correct — Essential for converting keys to array indices.',
    //   '🔗 Linked list for maintaining insertion order': '❌ Incorrect — Not required for basic HashMap functionality.',
    //   '⛓️ Separate chaining handles collisions': '✅ Correct — Handles collisions by storing multiple entries per bucket.',
    //   '🌳 Binary search tree for sorted keys': '❌ Incorrect — Not needed for hash table implementation.',
    //   '📈 Dynamic resizing maintains performance': '✅ Correct — Maintains O(1) performance as data grows.',
    //   '📋 Queue for processing operations': '❌ Incorrect — Not part of hash table structure.'
    // }
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: 'What is the average time complexity for hash table operations like set, get, and delete in a well-implemented HashMap?',
    correctAnswer: 'O(1)',
    explanation: 'Hash table operations are O(1) constant time on average when the hash function distributes keys well and the load factor is maintained. This makes HashMaps ideal for applications requiring fast lookups like patient records systems.'
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: 'What is the load factor in a hash table?',
    answers: [
      'The ratio of the number of stored elements to the total capacity of the hash table',
      'The maximum number of elements that can be stored before resizing',
      'The number of collisions that occur during insertion operations',
      'The total number of buckets available in the hash table array'
    ],
    correctAnswer: [0],
    explanation: 'The load factor is the ratio of the number of stored elements to the total capacity of the hash table. It is calculated as (number of elements) / (total capacity). For example, if a hash table has 12 elements stored in an array of size 16, the load factor is 12/16 = 0.75 or 75%. This metric is crucial for maintaining hash table performance - when the load factor gets too high (typically above 0.75), the hash table is resized to maintain efficient O(1) operations.'
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: 'How can a Map\'s get() operation degrade from O(1) to O(n) time complexity?',
    answers: [
      'When many keys hash to the same bucket, requiring a linear scan through the collision chain',
      'When the hash table is being resized and all operations become slower',
      'When the system runs out of memory and has to use disk storage',
      'When keys need to be sorted before they can be retrieved'
    ],
    correctAnswer: [0],
    explanation: 'When many keys hash to the same bucket, requiring a linear scan through the collision chain. In hash tables using separate chaining, collisions are handled by storing multiple key-value pairs in the same bucket using a linked list or array. When the hash function produces many collisions, a single bucket might contain many entries. To find a specific key, the get() operation must scan through this entire chain linearly, resulting in O(n) time complexity in the worst case where all keys hash to the same bucket.'
  }
];