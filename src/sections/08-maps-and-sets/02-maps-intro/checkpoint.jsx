import { QUESTION_TYPES } from "@nss-workshops/nss-core";

export default [
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: (
      <div>
        <p>Consider this code snippet:</p>
        <pre style={{backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '5px'}}>
{`const patientMap = new Map();
const room1 = { floor: 3, number: 'A' };
const room2 = { floor: 3, number: 'A' };
patientMap.set(room1, 'Patient A');
patientMap.set(room2, 'Patient B');`}
        </pre>
        <p>True or False: The Map will contain only one entry because room1 and room2 have the same content.</p>
      </div>
    ),
    answers: [
      "True",
      "False"
    ],
    correctAnswer: 1,
    explanation: (
      <div>
        <p><strong>False.</strong> The Map will contain TWO entries. When using objects as keys in Maps, JavaScript compares them by <strong>reference</strong>, not by content. Even though room1 and room2 have identical properties (floor: 3, number: 'A'), they are different objects in memory, so they are treated as different keys. This is a crucial concept in healthcare systems where you might use patient objects or room objects as keys - each object instance is unique even if the data looks the same.</p>
      </div>
    )
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: (
      <div>
        <p>What is the average time complexity for Map operations like get, set, and has in healthcare systems?</p>
      </div>
    ),
    correctAnswer: "O(1)",
    explanation: (
      <div>
        <p>Map operations (get, set, has, delete) are O(1) constant time on average, making them ideal for healthcare systems where instant access to patient information can be life-critical.</p>
      </div>
    )
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: (
      <div>
        <p>In a patient records Map, the patient ID (like "P-2024-001") is called the _____, while the medical information is called the value.</p>
      </div>
    ),
    correctAnswer: "key",
    explanation: (
      <div>
        <p>In Map terminology, the patient ID is the <strong>key</strong> - the unique identifier used to access the associated medical information (the value). This key-value relationship enables instant patient record lookup.</p>
      </div>
    )
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: (
      <div>
        <p>True or False: JavaScript Maps preserve insertion order, but this behavior is not guaranteed in all programming languages that implement Map-like data structures.</p>
      </div>
    ),
    answers: [
      "True",
      "False"
    ],
    correctAnswer: 0,
    explanation: (
      <div>
        <p><strong>True.</strong> JavaScript Maps guarantee insertion order preservation - when you iterate through a Map, you'll get entries in the order they were added. However, this is not universal across all programming languages. For example, Python dictionaries only preserve insertion order as of Python 3.7+, and some other languages' hash map implementations do not preserve insertion order at all. This is an important consideration when working with Maps in other languages.</p>
      </div>
    )
  }
];