import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";
import { TestResult } from "../../utils/test_utils";

export const nodeBasedTraversalChapter = {
  id: 'node-based-traversal',
  title: 'Playlist Traversal and Song Manipulation',
  sectionId: 'linked-lists',
  previousChapterId: 'linked-list-tradeoffs',
  content: `
## Alex's Advanced Playlist Operations

A week had passed since Alex first learned about linked lists through Jordan's music playlist system. The basic concepts were solid, but now Maya had a new challenge that would push Alex's understanding to the next level.

"Alex," Maya said, settling down with her morning coffee, "Jordan's playlist system has been a huge success with our library patrons. But now they're asking for more sophisticated features."

Alex looked up from their work, intrigued. "What kind of features?"

Maya pulled out a tablet showing user feedback. "People want to be able to search through playlists, rearrange songs dynamically, and even create smart playlists that can modify themselves. All of these require advanced traversal techniques."

Jordan joined them, looking excited but slightly overwhelmed. "I've been trying to implement these features, but I keep running into problems. I think I need to understand how to properly navigate and manipulate linked structures."

"Perfect timing," Maya smiled. "Today we're going to explore the art of playlist traversal - how to efficiently move through, search, and modify linked lists."

## The Foundation: Basic Playlist Traversal

Maya started by reviewing the fundamental traversal pattern they'd learned:

\`\`\`javascript
class SongNode {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration; // in seconds
    this.next = null;
  }
  
  toString() {
    const minutes = Math.floor(this.duration / 60);
    const seconds = this.duration % 60;
    return \`\${this.title} - \${this.artist} (\${minutes}:\${seconds.toString().padStart(2, '0')})\`;
  }
}

// Basic traversal pattern
function displayPlaylist(head) {
  console.log("🎵 Current Playlist:");
  let current = head;
  let position = 1;
  
  while (current !== null) {
    console.log(\`\${position}. \${current.toString()}\`);
    current = current.next; // Move to next song
    position++;
  }
  
  if (position === 1) {
    console.log("📭 Playlist is empty");
  }
}
\`\`\`

"This is the foundation," Maya explained. "Every advanced operation builds on this basic pattern of following the \`next\` pointers."

Alex nodded. "So we start at the head and follow the chain until we reach null."

"Exactly. But now let's see how we can use this pattern to solve more complex problems."

## Searching Through Playlists

Jordan showed them the first challenge: "Users want to search for songs by title, artist, or even duration. How do we efficiently search through a linked playlist?"

Maya demonstrated the search pattern:

\`\`\`javascript
// Search by title
function findSongByTitle(head, targetTitle) {
  let current = head;
  let position = 0;
  
  while (current !== null) {
    if (current.title.toLowerCase() === targetTitle.toLowerCase()) {
      console.log(\`🎯 Found "\${targetTitle}" at position \${position + 1}\`);
      return { song: current, position };
    }
    
    current = current.next;
    position++;
  }
  
  console.log(\`❌ Song "\${targetTitle}" not found in playlist\`);
  return null;
}

// Search by artist
function findSongsByArtist(head, targetArtist) {
  let current = head;
  let position = 0;
  const foundSongs = [];
  
  console.log(\`🔍 Searching for songs by "\${targetArtist}":\`);
  
  while (current !== null) {
    if (current.artist.toLowerCase().includes(targetArtist.toLowerCase())) {
      foundSongs.push({ song: current, position });
      console.log(\`  \${position + 1}. \${current.toString()}\`);
    }
    
    current = current.next;
    position++;
  }
  
  if (foundSongs.length === 0) {
    console.log(\`❌ No songs by "\${targetArtist}" found\`);
  }
  
  return foundSongs;
}
\`\`\`

Alex studied the patterns. "I see! Each search function uses the same basic traversal, but with different conditions for what we're looking for."

"Exactly," Maya said. "The traversal pattern is consistent, but the logic inside the loop changes based on what we need to accomplish."

## ⏱️ Alex's First Traversal Challenge!

Maya pulled out her tablet. "Alex, let's put this into practice. I want you to implement a function that can calculate the total duration of a playlist."

Jordan nodded enthusiastically. "This would be really useful for our library's music events - we need to know how long playlists will run."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`calculatePlaylistDuration()\` to sum up all song durations
- Use the basic traversal pattern to visit each song
- **Click Run Code**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge reinforces the fundamental traversal pattern while solving a practical problem," Maya explained.

## Advanced Traversal: Two-Pointer Techniques

After Alex completed the first challenge, Maya introduced a more sophisticated concept:

"Sometimes we need to use multiple pointers to solve complex problems. Let me show you a classic example - finding the middle song of a playlist without knowing its length."

\`\`\`javascript
function findMiddleSong(head) {
  if (!head) {
    console.log("📭 Playlist is empty");
    return null;
  }
  
  let slow = head;  // Moves one step at a time
  let fast = head;  // Moves two steps at a time
  
  // When fast reaches the end, slow will be at the middle
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  console.log(\`🎯 Middle song: \${slow.toString()}\`);
  return slow;
}
\`\`\`

Alex was fascinated. "How does that work?"

Maya drew a diagram on the whiteboard:

\`\`\`
Step 1: [A] → [B] → [C] → [D] → [E] → null
        ↑     ↑
       slow  fast

Step 2: [A] → [B] → [C] → [D] → [E] → null
              ↑           ↑
             slow        fast

Step 3: [A] → [B] → [C] → [D] → [E] → null
                    ↑                 ↑
                   slow              fast (null)

Result: slow is at the middle!
\`\`\`

"The fast pointer moves twice as fast as the slow pointer," Maya explained. "When the fast pointer reaches the end, the slow pointer is exactly at the middle."

Jordan was amazed. "That's brilliant! We can find the middle without counting the total length first."

## ⏱️ Alex's Second Traversal Challenge!

"Now for a more complex challenge," Maya said. "Jordan wants to implement a feature that can remove songs from the playlist."

Jordan explained: "Sometimes users want to remove songs they don't like, or we need to remove duplicates. But removing from a linked list is trickier than inserting."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`removeSongByTitle()\` to remove a song from the playlist
- Handle the special case of removing the first song
- **Click Run Code**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge teaches you about the careful pointer manipulation needed for safe removal," Maya explained.

## ⏱️ Alex's Advanced Traversal Challenge!

"For your final challenge," Maya said with a smile, "I want you to implement a function that can reverse a playlist - make it play backwards!"

Jordan's eyes lit up. "That would be amazing for creating 'reverse chronology' playlists!"

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`reversePlaylist()\` to reverse the order of songs
- Use three pointers: previous, current, and next
- **Click Run Code**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge teaches you about complex pointer manipulation and is a classic computer science problem," Maya explained.

## Common Traversal Pitfalls and Solutions

Maya then showed them common mistakes and how to avoid them:

### Pitfall 1: Losing the Head Reference
\`\`\`javascript
// ❌ Wrong - loses the original head
function badTraversal(head) {
  while (head !== null) {
    console.log(head.title);
    head = head.next; // Modifies the original head!
  }
}

// ✅ Correct - preserves the head
function goodTraversal(head) {
  let current = head; // Use a separate pointer
  while (current !== null) {
    console.log(current.title);
    current = current.next;
  }
}
\`\`\`

### Pitfall 2: Null Pointer Access
\`\`\`javascript
// ❌ Wrong - can crash if current is null
function badAccess(head) {
  let current = head;
  while (current.next !== null) { // Crashes if head is null!
    current = current.next;
  }
}

// ✅ Correct - checks for null first
function goodAccess(head) {
  let current = head;
  while (current !== null && current.next !== null) {
    current = current.next;
  }
}
\`\`\`

## Real-World Applications of Traversal Patterns

Maya showed them how these patterns apply beyond music:

### Web Scraping
"Web crawlers use similar traversal patterns to follow links between web pages."

### File System Navigation
"File explorers traverse directory structures using these same principles."

### Game Development
"Game engines traverse scene graphs to render objects in the correct order."

### Database Systems
"Database engines use traversal algorithms to execute queries efficiently."

## Key Insights from Playlist Traversal

By the end of their session, Alex had mastered several important concepts:

- **Basic traversal** is the foundation for all linked list operations
- **Search patterns** use traversal with conditional logic
- **Two-pointer techniques** solve complex problems efficiently
- **Insertion and deletion** require careful pointer manipulation
- **Common pitfalls** can be avoided with proper null checking
- **Real-world applications** exist across many domains

Jordan was already implementing these patterns in their playlist system. "I can't believe how much more powerful the system is now! Users can search, analyze, and manipulate playlists in ways I never thought possible."

"That's the beauty of understanding fundamental algorithms," Maya said. "Once you master the basic patterns, you can solve increasingly complex problems."

As they packed up, Alex reflected on the journey. "It's amazing how something as simple as following pointers can enable such sophisticated operations."

Maya smiled. "Tomorrow, we'll explore how to implement a complete playlist system from scratch, bringing together everything you've learned about linked lists."

The mastery of traversal patterns had opened up a world of possibilities, transforming simple song chains into powerful, dynamic playlist systems.`,
  exercise: {
    starterCode: `// Song node for our playlist
class SongNode {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration; // in seconds
    this.next = null;
  }
  
  toString() {
    const minutes = Math.floor(this.duration / 60);
    const seconds = this.duration % 60;
    return \`\${this.title} - \${this.artist} (\${minutes}:\${seconds.toString().padStart(2, '0')})\`;
  }
}

// Create a sample playlist
const song1 = new SongNode("Bohemian Rhapsody", "Queen", 355);
const song2 = new SongNode("Hotel California", "Eagles", 391);
const song3 = new SongNode("Stairway to Heaven", "Led Zeppelin", 482);
const song4 = new SongNode("Sweet Child O' Mine", "Guns N' Roses", 356);

// Connect the songs
song1.next = song2;
song2.next = song3;
song3.next = song4;

// ⏱️ Alex's First Traversal Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function calculatePlaylistDuration(head) {
  // Calculate the total duration of all songs in the playlist
  // Return the total duration in seconds
  
  let totalDuration = 0;
  let current = head;
  
  // TODO: Traverse the playlist and sum up all song durations
  // Hint: Use the basic traversal pattern with a while loop
  
  return totalDuration;
}
*/

// ⏱️ Alex's Second Traversal Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function removeSongByTitle(head, targetTitle) {
  // Remove the first song with the matching title from the playlist
  // Return the new head of the playlist
  
  // Handle empty playlist
  if (!head) return null;
  
  // Handle removing the first song
  if (head.title.toLowerCase() === targetTitle.toLowerCase()) {
    console.log(\`🗑️ Removed: \${head.toString()}\`);
    return head.next;
  }
  
  // TODO: Find and remove the target song from the middle or end
  // Hint: Keep track of the previous node to update its next pointer
  
  return head;
}
*/

// ⏱️ Alex's Advanced Traversal Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function reversePlaylist(head) {
  // Reverse the order of songs in the playlist
  // Return the new head of the reversed playlist
  
  let previous = null;
  let current = head;
  let next = null;
  
  // TODO: Reverse the links between nodes
  // Hint: For each node, make it point to the previous node instead of the next
  
  return previous; // Previous becomes the new head
}
*/`,
    solution: `// Song node for our playlist
class SongNode {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration; // in seconds
    this.next = null;
  }
  
  toString() {
    const minutes = Math.floor(this.duration / 60);
    const seconds = this.duration % 60;
    return \`\${this.title} - \${this.artist} (\${minutes}:\${seconds.toString().padStart(2, '0')})\`;
  }
}

// Create a sample playlist
const song1 = new SongNode("Bohemian Rhapsody", "Queen", 355);
const song2 = new SongNode("Hotel California", "Eagles", 391);
const song3 = new SongNode("Stairway to Heaven", "Led Zeppelin", 482);
const song4 = new SongNode("Sweet Child O' Mine", "Guns N' Roses", 356);

// Connect the songs
song1.next = song2;
song2.next = song3;
song3.next = song4;

function calculatePlaylistDuration(head) {
  // Calculate the total duration of all songs in the playlist
  let totalDuration = 0;
  let current = head;
  
  while (current !== null) {
    totalDuration += current.duration;
    console.log(\`Adding \${current.title}: \${current.duration}s\`);
    current = current.next;
  }
  
  const minutes = Math.floor(totalDuration / 60);
  const seconds = totalDuration % 60;
  console.log(\`📊 Total playlist duration: \${minutes}:\${seconds.toString().padStart(2, '0')} (\${totalDuration}s)\`);
  
  return totalDuration;
}

function removeSongByTitle(head, targetTitle) {
  // Handle empty playlist
  if (!head) return null;
  
  // Handle removing the first song
  if (head.title.toLowerCase() === targetTitle.toLowerCase()) {
    console.log(\`🗑️ Removed: \${head.toString()}\`);
    return head.next;
  }
  
  // Find and remove the target song from the middle or end
  let current = head;
  
  while (current.next !== null) {
    if (current.next.title.toLowerCase() === targetTitle.toLowerCase()) {
      const removedSong = current.next;
      current.next = removedSong.next;
      console.log(\`🗑️ Removed: \${removedSong.toString()}\`);
      return head;
    }
    current = current.next;
  }
  
  console.log(\`❌ Song "\${targetTitle}" not found in playlist\`);
  return head;
}

function reversePlaylist(head) {
  let previous = null;
  let current = head;
  let next = null;
  
  console.log("🔄 Reversing playlist...");
  
  while (current !== null) {
    // Store the next node
    next = current.next;
    
    // Reverse the link
    current.next = previous;
    
    // Move pointers forward
    previous = current;
    current = next;
  }
  
  console.log("✅ Playlist reversed!");
  return previous; // Previous is now the new head
}`,
    tests: [
      {
        name: "Test SongNode creation and playlist setup",
        test: (code) => {
          try {
            const testCode = code + `
            // Test song node creation
            const testSong = new SongNode("Test Song", "Test Artist", 180);
            const songString = testSong.toString();
            const hasDuration = testSong.duration === 180;
            
            // Test playlist linking
            const hasNext = song1.next === song2;
            const chainWorks = song1.next.next === song3;
            
            return ({ songString, hasDuration, hasNext, chainWorks });
            `;
            
            const testResult = new Function(testCode)();
            
            if (!testResult.songString.includes("Test Song - Test Artist (3:00)")) {
              return new TestResult({ passed: false, message: "SongNode toString() not formatting correctly" });
            }
            
            if (!testResult.hasDuration) {
              return new TestResult({ passed: false, message: "SongNode duration not stored correctly" });
            }
            
            if (!testResult.hasNext) {
              return new TestResult({ passed: false, message: "Playlist linking not working correctly" });
            }
            
            if (!testResult.chainWorks) {
              return new TestResult({ passed: false, message: "Playlist chain not connected properly" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "SongNode should work correctly with duration formatting and playlist linking."
      },
      {
        name: "Test calculatePlaylistDuration function",
        test: (code) => {
          try {
            const testCode = code + `
            let totalDuration = 0;
            
            if (typeof calculatePlaylistDuration === 'function') {
              totalDuration = calculatePlaylistDuration(song1);
            }
            
            return ({ totalDuration });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.totalDuration === 'undefined') {
              return new TestResult({ passed: false, message: "calculatePlaylistDuration function not found. Make sure to uncomment and implement it." });
            }
            
            // Expected total: 355 + 391 + 482 + 356 = 1584 seconds
            if (testResult.totalDuration !== 1584) {
              return new TestResult({ passed: false, message: `Expected total duration of 1584 seconds, got ${testResult.totalDuration}` });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "calculatePlaylistDuration should correctly sum all song durations."
      },
      {
        name: "Test removeSongByTitle function",
        test: (code) => {
          try {
            const testCode = code + `
            // Create a test playlist
            const testSong1 = new SongNode("Song A", "Artist A", 180);
            const testSong2 = new SongNode("Song B", "Artist B", 200);
            const testSong3 = new SongNode("Song C", "Artist C", 220);
            
            testSong1.next = testSong2;
            testSong2.next = testSong3;
            
            let newHead = testSong1;
            let removedMiddle = false;
            let removedFirst = false;
            
            if (typeof removeSongByTitle === 'function') {
              // Remove middle song
              newHead = removeSongByTitle(newHead, "Song B");
              removedMiddle = newHead.next && newHead.next.title === "Song C";
              
              // Remove first song
              newHead = removeSongByTitle(newHead, "Song A");
              removedFirst = newHead && newHead.title === "Song C";
            }
            
            return ({ removedMiddle, removedFirst });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.removedMiddle === 'undefined') {
              return new TestResult({ passed: false, message: "removeSongByTitle function not found. Make sure to uncomment and implement it." });
            }
            
            if (!testResult.removedMiddle) {
              return new TestResult({ passed: false, message: "removeSongByTitle should properly remove songs from the middle" });
            }
            
            if (!testResult.removedFirst) {
              return new TestResult({ passed: false, message: "removeSongByTitle should properly remove the first song and return new head" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "removeSongByTitle should remove songs from any position in the playlist."
      },
      {
        name: "Test reversePlaylist function",
        test: (code) => {
          try {
            const testCode = code + `
            // Create a test playlist
            const testSong1 = new SongNode("First", "Artist", 180);
            const testSong2 = new SongNode("Second", "Artist", 200);
            const testSong3 = new SongNode("Third", "Artist", 220);
            
            testSong1.next = testSong2;
            testSong2.next = testSong3;
            
            let reversedHead = null;
            let firstIsThird = false;
            let secondIsSecond = false;
            let thirdIsFirst = false;
            
            if (typeof reversePlaylist === 'function') {
              reversedHead = reversePlaylist(testSong1);
              
              if (reversedHead) {
                firstIsThird = reversedHead.title === "Third";
                secondIsSecond = reversedHead.next && reversedHead.next.title === "Second";
                thirdIsFirst = reversedHead.next && reversedHead.next.next && reversedHead.next.next.title === "First";
              }
            }
            
            return ({ firstIsThird, secondIsSecond, thirdIsFirst });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.firstIsThird === 'undefined') {
              return new TestResult({ passed: false, message: "reversePlaylist function not found. Make sure to uncomment and implement it." });
            }
            
            if (!testResult.firstIsThird) {
              return new TestResult({ passed: false, message: "After reversal, first song should be 'Third'" });
            }
            
            if (!testResult.secondIsSecond) {
              return new TestResult({ passed: false, message: "After reversal, second song should be 'Second'" });
            }
            
            if (!testResult.thirdIsFirst) {
              return new TestResult({ passed: false, message: "After reversal, third song should be 'First'" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "reversePlaylist should correctly reverse the order of all songs."
      },
    ]
  },
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();

        return (
          <main>
            <h2>Playlist Traversal Questions</h2>
            <form className="auto-graded-quiz">
              <div
                className="question"
                data-answers="Use a separate current pointer to preserve the head,Always check for null before accessing node properties,The basic while loop pattern works for most traversal operations"
              >
                <p>
                  Which are best practices for safe linked list traversal?
                </p>

                <label>
                  <input
                    type="checkbox"
                    value="Use a separate current pointer to preserve the head"
                  />{" "}
                  🔒 Use a separate current pointer to preserve the head
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Always check for null before accessing node properties"
                  />{" "}
                  ✅ Always check for null before accessing node properties
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="The basic while loop pattern works for most traversal operations"
                  />{" "}
                  🔄 The basic while loop pattern works for most traversal operations
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Modify the head pointer directly during traversal"
                  />{" "}
                  ❌ Modify the head pointer directly during traversal
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Skip null checks for better performance"
                  />{" "}
                  ⚡ Skip null checks for better performance
                </label>
                <br />
                <div className="feedback"></div>
                <div className="explanation">
                  <ul>
                    <li>
                      <strong>Separate current pointer:</strong> ✅ Correct — Preserves the original head reference.
                    </li>
                    <li>
                      <strong>Null checks:</strong> ✅ Correct — Prevents crashes when accessing properties.
                    </li>
                    <li>
                      <strong>While loop pattern:</strong> ✅ Correct — The fundamental traversal approach.
                    </li>
                    <li>
                      <strong>Modify head directly:</strong> ❌ Incorrect — This loses the original reference.
                    </li>
                    <li>
                      <strong>Skip null checks:</strong> ❌ Incorrect — This can cause runtime errors.
                    </li>
                  </ul>
                </div>
              </div>

              <button className="code-button test-button" type="submit">
                Submit
              </button>
            </form>
          </main>
        );
      };

      return <CheckpointComponent />;
    },
  },
};