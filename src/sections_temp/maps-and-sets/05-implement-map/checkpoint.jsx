import { QUESTION_TYPES } from '../../../config.js';

export const questions = [
  {
    type: QUESTION_TYPES.CHECKBOX,
    question: 'Which components are essential for implementing a custom HashMap?',
    options: [
      { value: 'Hash function converts keys to array indices', label: '🔢 Hash function converts keys to array indices' },
      { value: 'Linked list for maintaining insertion order', label: '🔗 Linked list for maintaining insertion order' },
      { value: 'Separate chaining handles collisions', label: '⛓️ Separate chaining handles collisions' },
      { value: 'Binary search tree for sorted keys', label: '🌳 Binary search tree for sorted keys' },
      { value: 'Dynamic resizing maintains performance', label: '📈 Dynamic resizing maintains performance' },
      { value: 'Queue for processing operations', label: '📋 Queue for processing operations' }
    ],
    correctAnswers: ['Hash function converts keys to array indices', 'Separate chaining handles collisions', 'Dynamic resizing maintains performance'],
    explanation: `
    • **Hash function:** ✅ Correct — Essential for converting keys to array indices.
    • **Insertion order:** ❌ Incorrect — Not required for basic HashMap functionality.
    • **Separate chaining:** ✅ Correct — Handles collisions by storing multiple entries per bucket.
    • **Binary search tree:** ❌ Incorrect — Not needed for hash table implementation.
    • **Dynamic resizing:** ✅ Correct — Maintains O(1) performance as data grows.
    • **Queue:** ❌ Incorrect — Not part of hash table structure.
    `
  },
  {
    type: QUESTION_TYPES.TEXT,
    question: 'What is the average time complexity for hash table operations like set, get, and delete in a well-implemented HashMap?',
    correctAnswer: 'O(1)',
    explanation: 'Hash table operations are O(1) constant time on average when the hash function distributes keys well and the load factor is maintained. This makes HashMaps ideal for applications requiring fast lookups like patient records systems.'
  },
  {
    type: QUESTION_TYPES.RADIO,
    question: 'What is the load factor in a hash table?',
    options: [
      { value: 'ratio', label: 'The ratio of the number of stored elements to the total capacity of the hash table' },
      { value: 'threshold', label: 'The maximum number of elements that can be stored before resizing' },
      { value: 'collision', label: 'The number of collisions that occur during insertion operations' },
      { value: 'capacity', label: 'The total number of buckets available in the hash table array' }
    ],
    correctAnswer: 'ratio',
    explanation: 'The ratio of the number of stored elements to the total capacity of the hash table. The load factor is calculated as (number of elements) / (total capacity). For example, if a hash table has 12 elements stored in an array of size 16, the load factor is 12/16 = 0.75 or 75%. This metric is crucial for maintaining hash table performance - when the load factor gets too high (typically above 0.75), the hash table is resized to maintain efficient O(1) operations.'
  },
  {
    type: QUESTION_TYPES.RADIO,
    question: 'How can a Map\'s get() operation degrade from O(1) to O(n) time complexity?',
    options: [
      { value: 'collisions', label: 'When many keys hash to the same bucket, requiring a linear scan through the collision chain' },
      { value: 'resizing', label: 'When the hash table is being resized and all operations become slower' },
      { value: 'memory', label: 'When the system runs out of memory and has to use disk storage' },
      { value: 'sorting', label: 'When keys need to be sorted before they can be retrieved' }
    ],
    correctAnswer: 'collisions',
    explanation: 'When many keys hash to the same bucket, requiring a linear scan through the collision chain. In hash tables using separate chaining (like our CustomHashMap), collisions are handled by storing multiple key-value pairs in the same bucket using a linked list or array. When the hash function produces many collisions (due to poor distribution or high load factor), a single bucket might contain many entries. To find a specific key, the get() operation must scan through this entire chain linearly, resulting in O(n) time complexity in the worst case where all n keys hash to the same bucket. This is why good hash functions and proper load factor management are crucial for maintaining O(1) performance.'
  }
];