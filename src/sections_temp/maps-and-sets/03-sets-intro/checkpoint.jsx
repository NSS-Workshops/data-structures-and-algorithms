import { QUESTION_TYPES } from '../../../config.js';

export const questions = [
  {
    type: QUESTION_TYPES.RADIO,
    question: `Consider this code snippet:
const allergySet = new Set();
allergySet.add('Penicillin');
allergySet.add('Latex');
allergySet.add('Penicillin');
console.log(allergySet.size);

True or False: The Set will contain 2 unique allergies because Sets automatically prevent duplicates.`,
    options: [
      { value: 'true', label: 'True' },
      { value: 'false', label: 'False' }
    ],
    correctAnswer: 'true',
    explanation: 'True. The Set will contain exactly 2 unique allergies: \'Penicillin\' and \'Latex\'. When \'Penicillin\' is added the second time, the Set automatically ignores the duplicate because Sets only store unique values. This is why Sets are perfect for allergy tracking in healthcare systems - they prevent duplicate entries and ensure each allergy is only recorded once per patient, maintaining clean and accurate medical records.'
  },
  {
    type: QUESTION_TYPES.TEXT,
    question: 'What is the average time complexity for Set operations like add, has, and delete in patient safety systems?',
    correctAnswer: 'O(1)',
    explanation: 'Set operations (add, has, delete) are O(1) constant time on average, making them ideal for patient safety systems where instant allergy checking can prevent life-threatening reactions.'
  },
  {
    type: QUESTION_TYPES.TEXT,
    question: 'What does a Set automatically prevent that makes it perfect for allergy tracking? (One word)',
    correctAnswer: 'duplicates',
    explanation: 'Sets automatically prevent duplicates, ensuring each allergy is only listed once in a patient\'s record, which keeps the allergy list clean and prevents confusion during medication administration.'
  }
];