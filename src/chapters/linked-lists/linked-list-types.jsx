import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";
import { TestResult } from "../../utils/test_utils";

export const linkedListTypesChapter = {
  id: 'linked-list-types',
  title: 'Playlist Types: Singly, Doubly, and Circular Linked Lists',
  sectionId: 'linked-lists',
  previousChapterId: 'linked-lists-intro',
  content: `
## Jordan's Playlist Evolution

The next morning, Jordan Kim burst into the library with even more excitement than the day before. They had spent the entire evening experimenting with the basic linked list playlist system Alex had helped them build, and now they had new ideas brewing.

"Alex! Maya!" Jordan called out, practically bouncing with energy. "I've been thinking about our playlist system all night, and I realized we need different types of playlists for different situations!"

Alex looked up from organizing returned books, curious about Jordan's enthusiasm. Maya smiled, recognizing the look of a programmer who had discovered new possibilities.

"What kind of different situations?" Maya asked, settling in for what she suspected would be another enlightening session.

Jordan opened their laptop and pulled up several sketches they'd made. "Well, think about it. Yesterday we built a basic playlist where you can only move forward through songs. But what if someone wants to go backwards? What if they want to skip to the previous song? And what about party playlists that should loop forever?"

Alex's eyes lit up. "Oh, I see! Different types of playlists need different types of connections!"

"Exactly!" Jordan exclaimed. "Let me show you what I've been working on."

## The Basic Playlist Revisited

Jordan first showed them their improved version of yesterday's basic playlist:

\`\`\`javascript
class SongNode {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.next = null; // Only points forward
  }
  
  toString() {
    return \`\${this.title} - \${this.artist}\`;
  }
}

// A simple forward-only playlist
class SinglyLinkedPlaylist {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  addSong(title, artist) {
    const newSong = new SongNode(title, artist);
    
    if (!this.head) {
      this.head = newSong;
    } else {
      // Find the last song and add after it
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newSong;
    }
    
    this.size++;
    console.log(\`🎵 Added: \${newSong.toString()}\`);
  }
}
\`\`\`

"This is what we call a **singly linked list**," Maya explained. "Each node only knows about the next node, so you can only traverse in one direction."

Jordan nodded. "It's perfect for simple playlists where you just want to play songs in order. But what if someone is listening and wants to go back to the previous song?"

## The Bidirectional Playlist Challenge

"That's where I ran into a problem," Jordan continued, pulling up another sketch. "With our current system, if someone is listening to song 3 and wants to go back to song 2, I have to start from the beginning and traverse forward again!"

Alex thought about this. "That seems inefficient. If you're at song 50 and want to go back to song 49, you'd have to start from song 1 and count all the way up?"

"Exactly! So I started thinking... what if each song also knew about the previous song?"

Maya smiled. "Jordan, you're thinking about a **doubly linked list**. Show us what you came up with."

## Introducing the Bidirectional Playlist

Jordan's eyes sparkled as they showed their new design:

\`\`\`javascript
class DoublySongNode {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.next = null;    // Points to next song
    this.prev = null;    // Points to previous song
  }
  
  toString() {
    return \`\${this.title} - \${this.artist}\`;
  }
}

class DoublyLinkedPlaylist {
  constructor() {
    this.head = null;  // First song
    this.tail = null;  // Last song (for efficiency)
    this.size = 0;
  }
  
  addSong(title, artist) {
    const newSong = new DoublySongNode(title, artist);
    
    if (!this.head) {
      // First song in playlist
      this.head = newSong;
      this.tail = newSong;
    } else {
      // Add to the end
      newSong.prev = this.tail;
      this.tail.next = newSong;
      this.tail = newSong;
    }
    
    this.size++;
    console.log(\`🎵 Added: \${newSong.toString()}\`);
  }
  
  // Navigate forward from current song
  playNext(currentSong) {
    if (currentSong && currentSong.next) {
      console.log(\`▶️ Playing next: \${currentSong.next.toString()}\`);
      return currentSong.next;
    } else {
      console.log("🔚 End of playlist");
      return null;
    }
  }
  
  // Navigate backward from current song
  playPrevious(currentSong) {
    if (currentSong && currentSong.prev) {
      console.log(\`⏮️ Playing previous: \${currentSong.prev.toString()}\`);
      return currentSong.prev;
    } else {
      console.log("🔚 Beginning of playlist");
      return null;
    }
  }
}
\`\`\`

Alex studied the code carefully. "So now each song has two connections - one to the next song and one to the previous song?"

"Exactly!" Jordan said. "Look at how this changes the structure:"

\`\`\`
Singly Linked (Forward Only):
[Song A] → [Song B] → [Song C] → [Song D] → null

Doubly Linked (Bidirectional):
null ← [Song A] ⟷ [Song B] ⟷ [Song C] ⟷ [Song D] → null
       ↑                                    ↑
      head                                tail
\`\`\`

Maya nodded approvingly. "This is a perfect example of how different data structures solve different problems. Jordan, what are the advantages and disadvantages you've noticed?"

## Comparing Playlist Types

Jordan had clearly thought this through. "Well, the doubly linked playlist is amazing for navigation - you can go forward or backward from any song in O(1) time. But..."

"But?" Alex prompted.

"But each song now needs to store two connections instead of one. That's more memory. And when I add or remove songs, I have to update more connections."

Jordan demonstrated the complexity:

\`\`\`javascript
// Removing a song from a doubly linked playlist
removeSong(songToRemove) {
  // Update the previous song's next pointer
  if (songToRemove.prev) {
    songToRemove.prev.next = songToRemove.next;
  } else {
    // Removing the first song
    this.head = songToRemove.next;
  }
  
  // Update the next song's previous pointer
  if (songToRemove.next) {
    songToRemove.next.prev = songToRemove.prev;
  } else {
    // Removing the last song
    this.tail = songToRemove.prev;
  }
  
  this.size--;
  console.log(\`🗑️ Removed: \${songToRemove.toString()}\`);
}
\`\`\`

"More complex, but more powerful," Maya observed. "What about your third idea - the party playlist that loops forever?"

## The Never-Ending Party Playlist

Jordan's excitement reached a new peak. "This is where it gets really cool! What if the last song in the playlist connected back to the first song? Then the playlist would never end!"

They sketched out the concept:

\`\`\`
Circular Singly Linked Playlist:
     ┌─────────────────────────────────────┐
     ↓                                     │
[Song A] → [Song B] → [Song C] → [Song D] ─┘
   ↑
  head
\`\`\`

"This is called a **circular linked list**," Maya explained. "The last node points back to the first node instead of pointing to null."

Jordan showed their implementation:

\`\`\`javascript
class CircularPlaylist {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  addSong(title, artist) {
    const newSong = new SongNode(title, artist);
    
    if (!this.head) {
      // First song - points to itself
      this.head = newSong;
      newSong.next = newSong;
    } else {
      // Find the last song (the one pointing to head)
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      
      // Insert new song between last song and head
      current.next = newSong;
      newSong.next = this.head;
    }
    
    this.size++;
    console.log(\`🎵 Added to circular playlist: \${newSong.toString()}\`);
  }
  
  playForever(startingSong, maxSongs = 10) {
    let current = startingSong || this.head;
    let count = 0;
    
    console.log("🎉 Starting infinite party playlist:");
    
    while (count < maxSongs) {
      console.log(\`\${count + 1}. \${current.toString()}\`);
      current = current.next;
      count++;
    }
    
    console.log("🎵 ...and it continues forever!");
  }
}
\`\`\`

Alex was fascinated. "So the playlist literally never ends? It just keeps cycling through the same songs?"

"Exactly! Perfect for parties, background music, or any situation where you want continuous playback without manual intervention."

## ⏱️ Alex's Playlist Type Challenge!

Maya pulled out her tablet. "Alex, I think you're ready to work with these different playlist types. Let's see if you can implement some key operations."

Jordan nodded enthusiastically. "I've set up a challenge where you need to work with a doubly linked playlist. The goal is to implement a function that can navigate both forward and backward from any song."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`navigatePlaylist()\` to move forward or backward in a doubly linked playlist
- Handle edge cases when reaching the beginning or end
- **Click Run Code**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge will help you understand how bidirectional navigation works," Maya explained.

## The Power of Circular Playlists

After Alex completed the challenge, Jordan showed them a more advanced circular playlist feature:

"Watch this - I can create a circular playlist that remembers where you left off and can resume from any point:"

\`\`\`javascript
class SmartCircularPlaylist extends CircularPlaylist {
  constructor() {
    super();
    this.currentSong = null;
  }
  
  play() {
    if (!this.head) {
      console.log("📭 Playlist is empty");
      return null;
    }
    
    // Start from current position or beginning
    this.currentSong = this.currentSong || this.head;
    console.log(\`🎵 Now playing: \${this.currentSong.toString()}\`);
    return this.currentSong;
  }
  
  next() {
    if (this.currentSong) {
      this.currentSong = this.currentSong.next;
      console.log(\`⏭️ Next: \${this.currentSong.toString()}\`);
      return this.currentSong;
    }
    return this.play();
  }
  
  // Jump to any song and continue from there
  jumpTo(songTitle) {
    let current = this.head;
    let found = false;
    
    do {
      if (current.title === songTitle) {
        this.currentSong = current;
        console.log(\`🎯 Jumped to: \${current.toString()}\`);
        found = true;
        break;
      }
      current = current.next;
    } while (current !== this.head);
    
    if (!found) {
      console.log(\`❌ Song "\${songTitle}" not found in playlist\`);
    }
    
    return found;
  }
}
\`\`\`

## Real-World Applications of Different List Types

Maya used the whiteboard to show how different linked list types solve different real-world problems:

### Singly Linked Lists
- **Music streaming**: Basic playlist playback
- **Browser history**: Forward navigation only
- **Undo systems**: Simple action history
- **RSS feeds**: Chronological article lists

### Doubly Linked Lists
- **Media players**: Forward and backward navigation
- **Text editors**: Cursor movement in documents
- **Browser tabs**: Navigate between open tabs
- **Photo galleries**: Previous/next image viewing

### Circular Linked Lists
- **Round-robin scheduling**: CPU task scheduling
- **Multiplayer games**: Turn-based player rotation
- **Carousel displays**: Infinite image rotation
- **Background music**: Continuous playlist looping

## ⏱️ Alex's Circular Playlist Challenge!

"Now for the advanced challenge," Maya said with a smile. "Jordan wants to implement a feature that can detect if a playlist has accidentally become circular when it shouldn't be."

Jordan explained: "Sometimes when building playlists programmatically, you might accidentally create a loop. We need a way to detect this."

<iframe width="560" height="315" src="https://www.youtube.com/embed/S5TcPmTl6ww?si=82xnZM_NhIV7CVqH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`detectLoop()\` to check if a playlist has an unintended circular connection
- Use the "tortoise and hare" algorithm (two pointers at different speeds)
- **Click Run Code**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge teaches you about cycle detection - a classic computer science problem," Maya explained.

## Choosing the Right Playlist Type

As their session continued, Maya helped Alex and Jordan understand when to use each type:

### Use Singly Linked Lists When:
- **Memory is limited**: Only one pointer per node
- **Simple forward navigation**: No need to go backward
- **Implementation simplicity**: Easier to code and debug
- **Append-heavy operations**: Frequently adding to the end

### Use Doubly Linked Lists When:
- **Bidirectional navigation**: Need to move forward and backward
- **Frequent deletions**: Easier to remove nodes when you have previous pointer
- **LRU caches**: Need to move items to front/back efficiently
- **Text editing**: Cursor can move in both directions

### Use Circular Linked Lists When:
- **Continuous cycling**: Round-robin or infinite loops needed
- **No clear start/end**: Data naturally forms a cycle
- **Resource sharing**: CPU scheduling, printer queues
- **Game mechanics**: Turn-based systems, circular menus

## Performance Comparison

Jordan had prepared a comparison table:

| Operation | Singly Linked | Doubly Linked | Circular |
|-----------|---------------|---------------|----------|
| **Memory per node** | 1 pointer | 2 pointers | 1 pointer |
| **Forward traversal** | O(1) per step | O(1) per step | O(1) per step |
| **Backward traversal** | O(n) from start | O(1) per step | O(n) around |
| **Insert at beginning** | O(1) | O(1) | O(1) |
| **Insert at end** | O(n) or O(1)* | O(1) | O(n) or O(1)* |
| **Delete node** | O(n) to find prev | O(1) if have node | O(n) to find prev |
| **Cycle detection** | Not applicable | Not applicable | Built-in |

*With tail pointer

## Looking Ahead: Advanced Playlist Features

As their session wound down, Jordan was already thinking about even more advanced features:

"What if we combined these concepts? Like a doubly linked circular playlist for a DJ system where you can go forward, backward, and it loops forever?"

Maya's eyes twinkled. "That's absolutely possible! You could create a doubly circular linked list. Each node would have both next and previous pointers, and the first and last nodes would connect to each other."

Alex was amazed. "So you can mix and match these concepts?"

"Exactly," Maya said. "Data structures are tools, and like any tools, you can combine them creatively to solve complex problems."

## Key Insights from Playlist Types

By the end of their session, Alex had learned:

- **Singly linked lists** provide simple, memory-efficient forward navigation
- **Doubly linked lists** enable bidirectional navigation at the cost of more memory
- **Circular linked lists** create infinite loops perfect for continuous operations
- **Each type solves different problems** and has different trade-offs
- **Real-world applications** exist for all three types
- **Performance characteristics** vary significantly between types
- **Creative combinations** are possible for complex requirements

Jordan was already sketching ideas for their next features. "I want to build a smart DJ system that can seamlessly switch between different playlist types based on the situation!"

"That sounds like an excellent project," Maya said. "Understanding these fundamental variations gives you the building blocks to create sophisticated systems."

As they packed up, Alex reflected on how much their understanding had grown. "It's amazing how something as simple as changing the connections between nodes can create completely different behaviors."

Maya smiled. "That's the beauty of data structures, Alex. Small changes in structure can lead to dramatically different capabilities. Tomorrow, we'll explore how to traverse and manipulate these different playlist types efficiently."

The journey into linked list variations had opened up a world of possibilities, each type offering unique advantages for different musical and programming challenges.`,
  exercise: {
    starterCode: `// Doubly linked song node for bidirectional navigation
class DoublySongNode {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.next = null;
    this.prev = null;
  }
  
  toString() {
    return \`\${this.title} - \${this.artist}\`;
  }
}

// Create a sample doubly linked playlist
const song1 = new DoublySongNode("Bohemian Rhapsody", "Queen");
const song2 = new DoublySongNode("Hotel California", "Eagles");
const song3 = new DoublySongNode("Stairway to Heaven", "Led Zeppelin");
const song4 = new DoublySongNode("Sweet Child O' Mine", "Guns N' Roses");

// Connect them bidirectionally
song1.next = song2;
song2.prev = song1;
song2.next = song3;
song3.prev = song2;
song3.next = song4;
song4.prev = song3;

// ⏱️ Alex's Playlist Type Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function navigatePlaylist(currentSong, direction, steps = 1) {
  // Navigate forward or backward in a doubly linked playlist
  // direction: "forward" or "backward"
  // steps: number of songs to move
  // Return the destination song or null if can't move that far
  
  let current = currentSong;
  
  // TODO: Implement navigation logic
  // Hint: Use a loop to move the specified number of steps
  // Check for null to avoid going past the ends
  
  return current;
}
*/

// ⏱️ Alex's Circular Playlist Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function detectLoop(playlist) {
  // Detect if a playlist has a circular connection (Floyd's cycle detection)
  // Return true if loop exists, false otherwise
  
  if (!playlist) return false;
  
  let slow = playlist;
  let fast = playlist;
  
  // TODO: Implement the tortoise and hare algorithm
  // Hint: Move slow pointer one step, fast pointer two steps
  // If they meet, there's a loop
  
  return false;
}
*/

// Helper function to create a test circular playlist
function createCircularPlaylist() {
  const songA = new DoublySongNode("Song A", "Artist A");
  const songB = new DoublySongNode("Song B", "Artist B");
  const songC = new DoublySongNode("Song C", "Artist C");
  
  songA.next = songB;
  songB.next = songC;
  songC.next = songA; // Creates the loop
  
  return songA;
}`,
    solution: `// Doubly linked song node for bidirectional navigation
class DoublySongNode {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.next = null;
    this.prev = null;
  }
  
  toString() {
    return \`\${this.title} - \${this.artist}\`;
  }
}

// Create a sample doubly linked playlist
const song1 = new DoublySongNode("Bohemian Rhapsody", "Queen");
const song2 = new DoublySongNode("Hotel California", "Eagles");
const song3 = new DoublySongNode("Stairway to Heaven", "Led Zeppelin");
const song4 = new DoublySongNode("Sweet Child O' Mine", "Guns N' Roses");

// Connect them bidirectionally
song1.next = song2;
song2.prev = song1;
song2.next = song3;
song3.prev = song2;
song3.next = song4;
song4.prev = song3;

function navigatePlaylist(currentSong, direction, steps = 1) {
  // Navigate forward or backward in a doubly linked playlist
  let current = currentSong;
  
  if (!current) return null;
  
  for (let i = 0; i < steps; i++) {
    if (direction === "forward") {
      if (current.next) {
        current = current.next;
        console.log(\`▶️ Moved forward to: \${current.toString()}\`);
      } else {
        console.log("🔚 Cannot move forward - end of playlist");
        break;
      }
    } else if (direction === "backward") {
      if (current.prev) {
        current = current.prev;
        console.log(\`⏮️ Moved backward to: \${current.toString()}\`);
      } else {
        console.log("🔚 Cannot move backward - beginning of playlist");
        break;
      }
    }
  }
  
  return current;
}

function detectLoop(playlist) {
  // Floyd's cycle detection algorithm (tortoise and hare)
  if (!playlist) return false;
  
  let slow = playlist;
  let fast = playlist;
  
  while (fast && fast.next) {
    slow = slow.next;        // Move one step
    fast = fast.next.next;   // Move two steps
    
    if (slow === fast) {
      console.log("🔄 Loop detected in playlist!");
      return true;
    }
  }
  
  console.log("✅ No loop detected - playlist is linear");
  return false;
}

// Helper function to create a test circular playlist
function createCircularPlaylist() {
  const songA = new DoublySongNode("Song A", "Artist A");
  const songB = new DoublySongNode("Song B", "Artist B");
  const songC = new DoublySongNode("Song C", "Artist C");
  
  songA.next = songB;
  songB.next = songC;
  songC.next = songA; // Creates the loop
  
  return songA;
}`,
    tests: [
      {
        name: "Test DoublySongNode creation and linking",
        test: (code) => {
          try {
            const testCode = code + `
            // Test doubly linked node creation
            const testSong1 = new DoublySongNode("Test Song 1", "Test Artist 1");
            const testSong2 = new DoublySongNode("Test Song 2", "Test Artist 2");
            
            testSong1.next = testSong2;
            testSong2.prev = testSong1;
            
            const hasNext = testSong1.next === testSong2;
            const hasPrev = testSong2.prev === testSong1;
            const song1String = testSong1.toString();
            
            return ({ hasNext, hasPrev, song1String });
            `;
            
            const testResult = new Function(testCode)();
            
            if (!testResult.hasNext) {
              return new TestResult({ passed: false, message: "DoublySongNode next linking not working correctly" });
            }
            
            if (!testResult.hasPrev) {
              return new TestResult({ passed: false, message: "DoublySongNode prev linking not working correctly" });
            }
            
            if (testResult.song1String !== "Test Song 1 - Test Artist 1") {
              return new TestResult({ passed: false, message: "DoublySongNode toString() not working correctly" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "DoublySongNode should support bidirectional linking with next and prev pointers."
      },
      {
        name: "Test navigatePlaylist function",
        test: (code) => {
          try {
            const testCode = code + `
            let forwardResult = null;
            let backwardResult = null;
            let multiStepResult = null;
            
            if (typeof navigatePlaylist === 'function') {
              // Test forward navigation
              forwardResult = navigatePlaylist(song2, "forward", 1);
              
              // Test backward navigation
              backwardResult = navigatePlaylist(song3, "backward", 1);
              
              // Test multi-step navigation
              multiStepResult = navigatePlaylist(song1, "forward", 2);
            }
            
            return ({ 
              forwardResult: forwardResult ? forwardResult.title : null,
              backwardResult: backwardResult ? backwardResult.title : null,
              multiStepResult: multiStepResult ? multiStepResult.title : null
            });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.forwardResult === 'undefined') {
              return new TestResult({ passed: false, message: "navigatePlaylist function not found. Make sure to uncomment and implement it." });
            }
            
            if (testResult.forwardResult !== "Stairway to Heaven") {
              return new TestResult({ passed: false, message: "Forward navigation should move from Hotel California to Stairway to Heaven" });
            }
            
            if (testResult.backwardResult !== "Hotel California") {
              return new TestResult({ passed: false, message: "Backward navigation should move from Stairway to Heaven to Hotel California" });
            }
            
            if (testResult.multiStepResult !== "Stairway to Heaven") {
              return new TestResult({ passed: false, message: "Multi-step navigation should move 2 steps forward from Bohemian Rhapsody" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "navigatePlaylist should handle forward, backward, and multi-step navigation."
      },
      {
        name: "Test detectLoop function",
        test: (code) => {
          try {
            const testCode = code + `
            let linearResult = false;
            let circularResult = false;
            
            if (typeof detectLoop === 'function') {
              // Test with linear playlist
              linearResult = detectLoop(song1);
              
              // Test with circular playlist
              const circularPlaylist = createCircularPlaylist();
              circularResult = detectLoop(circularPlaylist);
            }
            
            return ({ linearResult, circularResult });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.linearResult === 'undefined') {
              return new TestResult({ passed: false, message: "detectLoop function not found. Make sure to uncomment and implement it." });
            }
            
            if (testResult.linearResult !== false) {
              return new TestResult({ passed: false, message: "detectLoop should return false for linear playlists" });
            }
            
            if (testResult.circularResult !== true) {
              return new TestResult({ passed: false, message: "detectLoop should return true for circular playlists" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "detectLoop should correctly identify circular vs linear playlists using Floyd's algorithm."
      },
    ]
  },
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();

        return (
          <main>
            <h2>Linked List Types Questions</h2>
            <form className="auto-graded-quiz">
              <div
                className="question"
                data-answers="Doubly linked lists enable bidirectional navigation,Circular linked lists create infinite loops,Singly linked lists use less memory per node"
              >
                <p>
                  Which statements about different linked list types are correct?
                </p>

                <label>
                  <input
                    type="checkbox"
                    value="Doubly linked lists enable bidirectional navigation"
                  />{" "}
                  ⟷ Doubly linked lists enable bidirectional navigation
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Circular linked lists create infinite loops"
                  />{" "}
                  🔄 Circular linked lists create infinite loops
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Singly linked lists use less memory per node"
                  />{" "}
                  💾 Singly linked lists use less memory per node
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="All linked list types have the same performance characteristics"
                  />{" "}
                  ⚡ All linked list types have the same performance characteristics
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Circular linked lists cannot be traversed"
                  />{" "}
                  🚫 Circular linked lists cannot be traversed
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Doubly linked lists require more memory than singly linked lists"
                  />{" "}
                  📈 Doubly linked lists require more memory than singly linked lists
                </label>
                <div className="feedback"></div>
                <div className="explanation">
                  <ul>
                    <li>
                      <strong>Bidirectional navigation:</strong> ✅ Correct — Doubly linked lists have both next and prev pointers.
                    </li>
                    <li>
                      <strong>Infinite loops:</strong> ✅ Correct — Circular lists loop back to the beginning.
                    </li>
                    <li>
                      <strong>Memory usage:</strong> ✅ Correct — Singly linked lists only need one pointer per node.
                    </li>
                    <li>
                      <strong>Same performance:</strong> ❌ Incorrect — Different types have different performance characteristics.
                    </li>
                    <li>
                      <strong>Cannot traverse circular:</strong> ❌ Incorrect — Circular lists can be traversed with proper loop detection.
                    </li>
                    <li>
                      <strong>More memory for doubly:</strong> ✅ Correct — Two pointers per node vs one.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="question" data-answer="prev">
                <p>
                  In a doubly linked list, what property allows backward navigation from any node?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  The <strong>prev</strong> (or previous) pointer in each node allows backward navigation, making doubly linked lists bidirectional.
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