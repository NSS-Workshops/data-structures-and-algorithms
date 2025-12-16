import { QUESTION_TYPES } from '@nss-workshops/nss-core';

export default [
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx: <p>Which of the following scenarios could be implemented effectively using a JavaScript Array?</p>,
    answers: [
      "↩️ Undo feature that reverses the most recent user action",
      "🎯 List of recent scores where you frequently access the 2nd or 3rd most recent",
      "🌡️ Current temperature reading that updates periodically",
      "☎️ Call center where customers are served in the order they arrive",
      "📓 Daily journal entries saved by date, with occasional lookups by day number",
      "🛒 Shopping list where you add items in order and check them off as you shop"
    ],
    correctAnswers: [1, 4, 5],
    explanation: (
      <ul>
        <li><strong>Undo history:</strong> ❌ Incorrect — This is a classic <strong>Stack</strong> use case (LIFO).</li>
        <li><strong>Recent scores list:</strong> ✅ Correct — Arrays are great for ordered numeric data with index access.</li>
        <li><strong>Current temperature:</strong> ❌ Incorrect — A single <strong>variable</strong> is sufficient; no collection is needed.</li>
        <li><strong>Call center queue:</strong> ❌ Incorrect — A <strong>Queue</strong> models first-in, first-out behavior better.</li>
        <li><strong>Daily journal entries:</strong> ✅ Correct — Arrays allow ordered and indexed storage, perfect for sequential logs.</li>
        <li><strong>Shopping list:</strong> ✅ Correct — Arrays are ideal for simple ordered task or item lists.</li>
      </ul>
    )
  },
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx: <p>Choose the scenarios that could be implemented effectively using a JavaScript Array.</p>,
    answers: [
      "🔗 Wiki where each article links to many others and forms a web of connections",
      "🏆 A game leaderboard where scores are stored and sorted occasionally",
      "🔍 A search results page that shows the first 10 results and allows indexed pagination",
      "👤 A system that stores usernames and ensures each one is unique",
      "✅ A to-do list where you add tasks and check them off as you go",
      "🧑 The name of the currently logged-in user"
    ],
    correctAnswers: [1, 2, 4],
    explanation: (
      <ul>
        <li><strong>Wiki article backlinks:</strong> ❌ Incorrect — A <strong>Graph</strong> better models many-to-many relationships.</li>
        <li><strong>Leaderboard:</strong> ✅ Correct — Arrays are great for storing scores and sorting with `.sort()`.</li>
        <li><strong>Search results:</strong> ✅ Correct — Arrays support pagination and indexed lookup perfectly.</li>
        <li><strong>Username registry:</strong> ❌ Incorrect — A <strong>Set</strong> is better for enforcing uniqueness.</li>
        <li><strong>To-do list:</strong> ✅ Correct — Arrays are perfect for linear task tracking and ordered additions/removals.</li>
        <li><strong>Current user name:</strong> ❌ Incorrect — A simple <strong>string variable</strong> is enough here; no collection needed.</li>
      </ul>
    )
  },
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx: <p>In which of the following scenarios would a JavaScript Array be a reasonable choice?</p>,
    answers: [
      "🛒 Inventory system where each item is retrieved by its unique product ID",
      "📚 A reading list where you add books in order and sometimes rearrange them",
      "💬 A message log that shows messages in order and allows scrolling by position",
      "🎧 A playlist where songs are added to the end and played in order",
      "🎨 A user's selected favorite color stored for display",
      "🔍 A recent search history where users can clear and redo their last few searches"
    ],
    correctAnswers: [1, 2, 3],
    explanation: (
      <ul>
        <li><strong>Inventory by product ID:</strong> ❌ Incorrect — A <strong>Map</strong> or Object is better for key-based access.</li>
        <li><strong>Reading list:</strong> ✅ Correct — Arrays support ordering and occasional rearrangement.</li>
        <li><strong>Chat message log:</strong> ✅ Correct — Arrays are excellent for maintaining ordered, index-accessible records.</li>
        <li><strong>Song playlist:</strong> ✅ Correct — Arrays work well for ordered play queues.</li>
        <li><strong>Favorite color:</strong> ❌ Incorrect — This can be stored in a single <strong>string variable</strong>.</li>
        <li><strong>Recent user search history:</strong> ❌ Incorrect — A <strong>Stack</strong> (or two) handles undo/redo navigation better.</li>
      </ul>
    )
  }
];