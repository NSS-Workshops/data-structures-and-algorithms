import { QUESTION_TYPES } from '../../../config.js';

export const questions = [
  {
    type: QUESTION_TYPES.CHECKBOX,
    question: 'Which of the following are ideal use cases for Maps in emergency dispatch systems?',
    options: [
      { value: 'Frequency counting for incident patterns', label: '📊 Frequency counting for incident patterns' },
      { value: 'Maintaining emergency call queue order', label: '📞 Maintaining emergency call queue order' },
      { value: 'Fast lookups for unit status', label: '🚑 Fast lookups for unit status' },
      { value: 'Storing unique equipment types only', label: '🛠️ Storing unique equipment types only' },
      { value: 'Caching expensive route calculations', label: '🗺️ Caching expensive route calculations' },
      { value: 'Preventing duplicate incident reports', label: '🚨 Preventing duplicate incident reports' }
    ],
    correctAnswers: ['Frequency counting for incident patterns', 'Fast lookups for unit status', 'Caching expensive route calculations'],
    explanation: `
    • **Frequency counting:** ✅ Correct — Maps excel at counting occurrences with key-value pairs.
    • **Call queue order:** ❌ Incorrect — This requires FIFO ordering (Queue), not key-value mapping.
    • **Fast lookups:** ✅ Correct — Maps provide O(1) access to unit information by ID.
    • **Unique equipment types:** ❌ Incorrect — This only needs uniqueness (Set), not key-value pairs.
    • **Caching calculations:** ✅ Correct — Maps store expensive computations for reuse.
    • **Preventing duplicates:** ❌ Incorrect — This is a Set use case for uniqueness.
    `
  },
  {
    type: QUESTION_TYPES.CHECKBOX,
    question: 'Which scenarios are best solved using Sets in emergency systems?',
    options: [
      { value: 'Preventing duplicate equipment assignments', label: '🛠️ Preventing duplicate equipment assignments' },
      { value: 'Storing unit ID to status mappings', label: '🚑 Storing unit ID to status mappings' },
      { value: 'Tracking unique incident locations', label: '📍 Tracking unique incident locations' },
      { value: 'Counting frequency of emergency types', label: '📊 Counting frequency of emergency types' },
      { value: 'Deduplicating emergency calls', label: '📞 Deduplicating emergency calls' },
      { value: 'Caching route calculations', label: '🗺️ Caching route calculations' }
    ],
    correctAnswers: ['Preventing duplicate equipment assignments', 'Tracking unique incident locations', 'Deduplicating emergency calls'],
    explanation: `
    • **Preventing duplicate equipment assignments:** ✅ Correct — Sets ensure each equipment item is assigned only once.
    • **Unit ID to status mappings:** ❌ Incorrect — This requires key-value pairs (Map), not just uniqueness.
    • **Tracking unique incident locations:** ✅ Correct — Sets automatically deduplicate location entries.
    • **Counting frequency of emergency types:** ❌ Incorrect — This needs counting (Map), not just uniqueness.
    • **Deduplicating emergency calls:** ✅ Correct — Sets prevent processing the same incident multiple times.
    • **Caching route calculations:** ❌ Incorrect — This requires storing computed values (Map), not just keys.
    `
  },
  {
    type: QUESTION_TYPES.TEXT,
    question: 'What is the average time complexity for Map operations like frequency counting and fast lookups in emergency dispatch systems?',
    correctAnswer: 'O(1)',
    explanation: `
    • **O(1) constant time:** ✅ Correct — Map operations (get, set, has) are O(1) on average, making them ideal for emergency systems where every second counts.
    • **Performance consistency:** This consistent performance regardless of data size is crucial for life-critical applications where response time cannot degrade as the system scales.
    • **Real-world impact:** In emergency dispatch, O(1) lookups mean unit status checks, incident details retrieval, and route cache access all happen instantly, directly contributing to faster response times.
    `
  }
];