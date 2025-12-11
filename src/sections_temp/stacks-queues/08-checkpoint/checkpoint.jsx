import { QUESTION_TYPES } from "@nss-workshops/nss-core";

export const questions = [
  {
    type: QUESTION_TYPES.RADIO,
    question: "You're implementing an \"undo\" feature for a text editor. Users should be able to undo their most recent action first. Which data structure is most appropriate?",
    answers: [
      "Stack",
      "Queue",
      "Array with random access",
      "Linked List"
    ],
    correctAnswer: 0
  },
  {
    type: QUESTION_TYPES.RADIO,
    question: "What is the time complexity of the push(), pop(), and peek() operations on a properly implemented stack?",
    answers: [
      "O(1) - Constant time",
      "O(n) - Linear time",
      "O(log n) - Logarithmic time",
      "O(n²) - Quadratic time"
    ],
    correctAnswer: 0
  },
  {
    type: QUESTION_TYPES.RADIO,
    question: "A web server needs to process incoming requests in the order they arrive to ensure fairness. Which data structure should be used?",
    answers: [
      "Stack - Process most recent requests first",
      "Queue - Process requests in arrival order",
      "Priority Queue - Process by importance",
      "Hash Map - Process by request ID"
    ],
    correctAnswer: 1
  },
  {
    type: QUESTION_TYPES.RADIO,
    question: "What is a key trade-off when implementing a queue using an array versus a linked list?",
    answers: [
      "Array-based queues use more memory",
      "Linked list queues are always slower",
      "Array-based queues may require O(n) dequeue operations",
      "Linked list queues cannot implement FIFO"
    ],
    correctAnswer: 2
  },
  {
    type: QUESTION_TYPES.RADIO,
    question: "If you add elements A, B, C (in that order) to both a stack and a queue, then remove all elements, what order will they come out?",
    answers: [
      "Stack: A, B, C | Queue: A, B, C",
      "Stack: C, B, A | Queue: A, B, C",
      "Stack: A, B, C | Queue: C, B, A",
      "Stack: C, B, A | Queue: C, B, A"
    ],
    correctAnswer: 1
  }
];