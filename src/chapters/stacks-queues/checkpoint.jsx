import { Checkpoint, QUESTION_TYPES } from "@nss-workshops/nss-core";


const questions = [
  {
      type: QUESTION_TYPES.RADIO,
      questionJsx: <p>You&apos;re implementing an &quot;undo&quot; feature for a text editor. Users should be able to undo their most recent action first. Which data structure is most appropriate?</p>,
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
      questionJsx: <p>What is the time complexity of the <code>push()</code>, <code>pop()</code>, and <code>peek()</code> operations on a properly implemented stack?</p>,
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
      questionJsx: <p>A web server needs to process incoming requests in the order they arrive to ensure fairness. Which data structure should be used?</p>,
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
      questionJsx: <p>What is a key trade-off when implementing a queue using an array versus a linked list?</p>,
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
      questionJsx: <p>If you add elements A, B, C (in that order) to both a stack and a queue, then remove all elements, what order will they come out?</p>,
      answers: [
        "Stack: A, B, C | Queue: A, B, C",
        "Stack: C, B, A | Queue: A, B, C",
        "Stack: A, B, C | Queue: C, B, A",
        "Stack: C, B, A | Queue: C, B, A"
      ],
      correctAnswer: 1
  },
];


export const stacksQueuesCheckpointChapter = {
  id: 'stacks-queues-checkpoint',
  title: 'Checkpoint: Stacks and Queues',
  sectionId: 'stacks-queues',
  previousChapterId: 'stacks-queues-glossary',
  content: `
## Quiz: Stacks and Queues

Test your understanding of stacks and queues data structures, their operations, and when to use each one.
`,
  quiz: {
    component: () => <Checkpoint questions={questions}/>
  }
};