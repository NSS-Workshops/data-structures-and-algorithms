import { QUESTION_TYPES } from '@nss-workshops/nss-core';

export default [
  {
      type: QUESTION_TYPES.RADIO,
      questionJsx:<p>How many hours per week should you plan to dedicate to this course, and how are those hours divided?</p>,
      answers: [
        "10 hours total: 6 hours async + 4 hours live",
        "8 hours total: 2 hours async + 6 hours in-person",
        "4 hours total: all in Zoom",
        "12 hours total: 6 hours reading + 6 hours doing projects"
      ],
      correctAnswer: 0
  },
  {
      type: QUESTION_TYPES.RADIO,
      questionJsx:<p>When do pair programming sessions happen, and how should you let the team know if you’ll miss one?</p>,
      answers: [
        "At the start of each module; email if you’ll miss it",
        "During the second class of the week; give at least one weeks notice in Slack",
        "Anytime during the week; just let your pair know the day before",
        "After every quiz; notify your pair immediately if absent"
      ],
      correctAnswer: 1
  },
  {
      type: QUESTION_TYPES.RADIO,
      questionJsx:<p>What is the primary purpose of the GitHub repo you'll create for this course?</p>,
      answers: [
        "To share memes and course screenshots with your cohort  ",
        "To experiment with code challenges in your browser only",
        "To preserve your solutions, notes, and track progress with commits",
        "To submit weekly quizzes and attendance forms"
      ],
      correctAnswer: 2
  },
  {
      type: QUESTION_TYPES.RADIO,
      questionJsx:<p>Where can you find the Zoom link for your live class sessions?</p>,
      answers: [
        "It will be emailed before every session",
        "On your GitHub repo homepage",
        "Pinned at the top of your cohort’s Slack channel",
        "Only available in the course syllabus PDF"
      ],
      correctAnswer: 2
  },






  {
      type: QUESTION_TYPES.RADIO,
      questionJsx:<p>What happens if you don’t notify the team ahead of time that you’ll miss a class?</p>,
      answers: [
        "You’ll be charged a late fee",
        "You’ll automatically fail the weeks module",
        "You may still get paired and leave your partner without a collaborator",
        "You’ll need to email your pair separately to reschedule"
      ],
      correctAnswer: 2
  },
  {
      type: QUESTION_TYPES.RADIO,
      questionJsx:<p>What should you do immediately after completing each chapter or coding session?</p>,
      answers: [
        "Post your solution in Slack for review",
        "Write a blog post summarizing the topic",
        "Push your code and notes to your GitHub repo with a clear commit message",
        "Wait until the end of the week and push everything at once"
      ],
      correctAnswer: 2
  },
  {
      type: QUESTION_TYPES.RADIO,
      questionJsx:<p>During Day 1 of each weekly live session, how is class time typically divided?</p>,
      answers: [
        "Entirely pair programming",
        "Instructor-led walkthroughs, quizzes, discussions, live demonstrations, reviews, and collaborative group work",
        "Entirely quiz-based",
        "Free time to catch up on self-study work"
      ],
      correctAnswer: 1
  },
  {
      type: QUESTION_TYPES.RADIO,
      questionJsx:<p>If you have a question about the course content, logistics, or an assignment, where is the best place to ask it?</p>,
      answers: [
        "DM the instructor directly on Slack",
        "Post in the #help channel on Slack so others can benefit too",
        "Wait until the next live session to ask out loud",
        "Email support@datastructures.com"
      ],
      correctAnswer: 1
  },
  {
      type: QUESTION_TYPES.RADIO,
      questionJsx:<p>When and how will you receive your pairing assignment each week?</p>,
      answers: [
        "during the first class session each week, verbally from the instructor",
        "after the second class session each week, via an email message",
        "every Monday morning by email",
        "during your self-study time, in a GitHub issue"
      ],
      correctAnswer: 0
  },
];
