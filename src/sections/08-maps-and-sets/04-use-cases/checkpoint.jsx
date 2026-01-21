import { QUESTION_TYPES } from "@nss-workshops/nss-core";

export default [
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx: 'Which of the following are ideal use cases for Maps in emergency dispatch systems?',
    answers: [
      '📊 Frequency counting for incident patterns',
      '📞 Maintaining emergency call queue order',
      '🚑 Fast lookups for unit status',
      '🛠️ Storing unique equipment types only',
      '🗺️ Caching expensive route calculations',
      '🚨 Preventing duplicate incident reports'
    ],
    correctAnswers: [0, 2, 4],
    // explanation: {
    //   '📊 Frequency counting for incident patterns': '✅ Correct — Maps excel at counting occurrences with key-value pairs.',
    //   '📞 Maintaining emergency call queue order': '❌ Incorrect — This requires FIFO ordering (Queue), not key-value mapping.',
    //   '🚑 Fast lookups for unit status': '✅ Correct — Maps provide O(1) access to unit information by ID.',
    //   '🛠️ Storing unique equipment types only': '❌ Incorrect — This only needs uniqueness (Set), not key-value pairs.',
    //   '🗺️ Caching expensive route calculations': '✅ Correct — Maps store expensive computations for reuse.',
    //   '🚨 Preventing duplicate incident reports': '❌ Incorrect — This is a Set use case for uniqueness.'
    // }
  },
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx: 'Which scenarios are best solved using Sets in emergency systems?',
    answers: [
      '🛠️ Preventing duplicate equipment assignments',
      '🚑 Storing unit ID to status mappings',
      '📍 Tracking unique incident locations',
      '📊 Counting frequency of emergency types',
      '📞 Deduplicating emergency calls',
      '🗺️ Caching route calculations'
    ],
    correctAnswers: [0, 2, 4],
    // explanation: {
    //   '🛠️ Preventing duplicate equipment assignments': '✅ Correct — Sets ensure each equipment item is assigned only once.',
    //   '🚑 Storing unit ID to status mappings': '❌ Incorrect — This requires key-value pairs (Map), not just uniqueness.',
    //   '📍 Tracking unique incident locations': '✅ Correct — Sets automatically deduplicate location entries.',
    //   '📊 Counting frequency of emergency types': '❌ Incorrect — This needs counting (Map), not just uniqueness.',
    //   '📞 Deduplicating emergency calls': '✅ Correct — Sets prevent processing the same incident multiple times.',
    //   '🗺️ Caching route calculations': '❌ Incorrect — This requires storing computed values (Map), not just keys.'
    // }
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: 'What is the average time complexity for Map operations like frequency counting and fast lookups in emergency dispatch systems?',
    correctAnswer: 'O(1)',
    explanation: 'Map operations (get, set, has) are O(1) on average, making them ideal for emergency systems where every second counts. This consistent performance regardless of data size is crucial for life-critical applications where response time cannot degrade as the system scales.'
  }
];