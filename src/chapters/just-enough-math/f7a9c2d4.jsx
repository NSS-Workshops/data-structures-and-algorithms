import Checkpoint, { QUESTION_TYPES } from "../../components/Checkpoint";
import image1 from "./images/f7a9c2d4-question-2.png";
import image2 from "./images/f7a9c2d4-question-5.png";

const questions = [
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>You are working for a company that analyzes website traffic patterns. You want to estimate how many people visit a website over some number of days. You know that about 200 people visit the website each day. Which of the following polynomials accurately describes the number of people that visit the website in d days?</p>,
    answers: [
      "200d",
      "200d + 1",
      "200d²",
      "200d² + 150"
    ],
    correctAnswer: 0
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>Consider the following graph: Graph of a polynomial. From left to right, the graph slopes down until it reaches 4 on the X axis, then slopes back up. Which of the following polynomial degree&apos;s is represented by the graph above?<br/><img width={700} src={image1} /></p>,
    answers: [
      "Second degree polynomial",
      "First degree polynomial", 
      "Third degree polynomial",
      "There&apos;s not enough information to determine the polynomial degree of the graph above"
    ],
    correctAnswer: 0
  },
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx: <p>Which of the following are polynomials? Choose all that apply.</p>,
    answers: [
      "2x² + 1",
      "x - 4",
      "5",
      "100 / x"
    ],
    correctAnswers: [0, 1, 2]
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>You are running benchmark tests against a program you developed as part of your work as an SDE. The program takes files of different sizes as input and takes several milliseconds to produce some output. A file of 2 megabytes runs in 5 milliseconds. A file of 3 megabytes takes 10 milliseconds. And a file of 4 megabytes runs in 17 milliseconds. Which of the following polynomials describes the growth rate of this problem? Let n represent the size of the input file in megabytes.</p>,
    answers: [
      "n² + 1",
      "n + 1",
      "2n + 1",
      "n"
    ],
    correctAnswer: 0
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>Consider the following graph: Graph of a polynomial. The graph is a straight line sloping upwards from left to right. The line intersects the Y axis at -4 and the X axis at 2. Which of the following polynomials is represented by the graph above?<br/><img width={700} src={image2} /></p>,
    answers: [
      "2x - 4",
      "2x² - 4",
      "-4x² + 2",
      "2x + 4"
    ],
    correctAnswer: 0
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>Which of the following expressions describes a faster rate of growth than the polynomial 6n² + 10?</p>,
    answers: [
      "n³ + 3",
      "7n - 3",
      "10x",
      "n² + 12"
    ],
    correctAnswer: 0
  }
];

export const polynomialsQuizChapter = {
  id: 'f7a9c2d4',
  title: 'Polynomials Quiz',
  sectionId: 'just-enough-math',
  previousChapterId: null,
  content: `
## Quiz: Polynomials

Test your understanding of polynomial concepts and their applications in algorithm analysis.
`,
  quiz: {
    component: () => <Checkpoint questions={questions}/>
  }
};