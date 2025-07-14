import Checkpoint, { QUESTION_TYPES } from "../../components/Checkpoint";

const questionJsx3 = <><p>Which of these methods performs better as <code>n</code> gets large?</p>
          <pre>{`public int addUpToFirst(int n) {
    int total = 0;
    for (int i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

public int addUpToSecond(int n) {
    return n * (n + 1) / 2;
}`}</pre></>

const questionJsx4 = <><p>What is the <em>runtime</em> complexity of this algorithm?</p>
          <pre><code>{`public int example(int[] array) {
  int total = 0;
  for (int i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}`}</code></pre></>

const questionJsx5 = <><p>What is the <em>space</em> complexity of this algorithm?</p>
          <pre><code>{`public int example(int[] array) {
  int total = 0;
  for (int i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}`}</code></pre></>

const questions = [
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx:<p>How do you write constant time complexity in Big O notation?</p>,
    answers: [
      "O(1)",
      "O(n)",
      "O(n^2)"
    ],
    correctAnswer: 0
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx:<p>How do you write linear time complexity in Big O notation?</p>,
    answers: [
      "O(1)",
      "O(n)",
      "O(n^2)"
    ],
    correctAnswer: 1
  },
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx:<p>Which of the following are polynomial functions?</p>,
    answers: [
      "O(1)",
      "O(n)",
      "O(n^2)",
      "O(2^n)",
      "O(n^k)"
    ],
    correctAnswers: [0,1,2,3,4]
  },
  {
      type: QUESTION_TYPES.NUMBER,
      questionJsx:<p>If an O(1) task takes 10s for n = 10, how long for n = 1,000,000?</p>,
      correctAnswer: 10
  },
  {
      type: QUESTION_TYPES.NUMBER,
      questionJsx:<p>If an O(n) task takes 10s for n = 10, how long for n = 1,000,000?</p>,
      correctAnswer: 1000000
  },
  {
      type: QUESTION_TYPES.RADIO,
      questionJsx: questionJsx3,
      answers: [
        "addUpToFirst",
        "addUpToSecond"
      ],
      correctAnswer: 1
  },
  {
      type: QUESTION_TYPES.RADIO,
      questionJsx:questionJsx4,
      answers: [
        "O(1)",
        "O(n)",
        "O(n^2)",
        "O(n^m)"
      ],
      correctAnswer: 1
  },
  {
      type: QUESTION_TYPES.RADIO,
      questionJsx:questionJsx5,
      answers: [
        "O(1)",
        "O(n)",
        "O(n^2)",
        "O(n^m)"
      ],
      correctAnswer: 0
  }
];


export const algorithmicThinkingCheckpointChapter = {
  id: 'algorithmic-thinking-checkpoint',
  title: 'Checkpoint: Algorithmic Thinking',
  sectionId: 'algorithmic-thinking',
  previousChapterId: 'algorithmic-thinking-glossary',
  content: `
Test your understanding of Big O notation and algorithmic thinking concepts.
`,
  quiz: {
    component: () => <Checkpoint questions={questions}/>
  }
};