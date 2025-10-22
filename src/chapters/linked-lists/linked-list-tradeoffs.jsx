import { useAutoGradeQuiz } from "@nss-workshops/nss-core";
import { TestResult } from "@nss-workshops/nss-core";

export const linkedListTradeoffsChapter = {
  id: 'linked-list-tradeoffs',
  title: 'Playlist Performance: Arrays vs Linked Lists',
  sectionId: 'linked-lists',
  previousChapterId: 'linked-list-types',
  content: `
## The Great Playlist Performance Debate


<iframe width="560" height="315" src="https://www.youtube.com/embed/njTh_OwMljA?si=nRmFCw5avBr59hxU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Two weeks into Jordan's playlist project, the library's digital music system had become incredibly popular. But with success came new challenges. During the busy afternoon rush, Jordan noticed that some playlist operations were becoming sluggish, especially when patrons tried to jump to specific songs or when the system needed to process large playlists.

"Maya, Alex," Jordan called out, looking frustrated at their laptop screen. "I think we have a performance problem. Some operations on our playlists are really slow, but others are lightning fast. I don't understand why."

Maya and Alex gathered around Jordan's workstation, where several performance metrics were displayed on the screen.

"This is actually a perfect learning opportunity," Maya said, settling into a chair. "You're experiencing firsthand the fundamental trade-offs between different data structures. Let's analyze what's happening."

Alex looked at the metrics. "What exactly is slow, and what's fast?"

Jordan pulled up their performance logs. "Well, adding songs to the end of a playlist is super fast. But when someone wants to jump to song number 50 in a 100-song playlist, it takes forever. And don't get me started on what happens when someone wants to insert a song in the middle of a large playlist."

"Ah," Maya nodded knowingly. "You're discovering the classic trade-off between **access time** and **insertion/removal efficiency**. Let's dive deep into this."

## Understanding the Performance Landscape

Maya opened a whiteboard and drew two columns: "Array-Based Playlists" and "Linked List Playlists."

"Jordan, before we built your linked list system, how were you storing playlists?"

"In arrays," Jordan replied. "Just simple JavaScript arrays with song objects."

"Perfect. Let's compare both approaches systematically and understand when each one shines."

### Array-Based Playlist Performance

Maya started with the array approach:

\`\`\`javascript
// Array-based playlist implementation
class ArrayPlaylist {
  constructor() {
    this.songs = []; // Simple array storage
  }
  
  // Adding to the end - what's the performance?
  addSong(title, artist, duration) {
    const song = { title, artist, duration };
    this.songs.push(song); // O(1)
    console.log(\`✅ Added \${title} to end of playlist\`);
  }
  
  // Accessing by position - what's the performance?
  getSongAt(index) {
    if (index >= 0 && index < this.songs.length) {
      console.log(\`🎯 Instantly accessed song \${index + 1}: \${this.songs[index].title}\`);
      return this.songs[index]; // O(1) - instant access!
    }
    return null;
  }
  
  // Inserting in the middle - what's the performance?
  insertSongAt(index, title, artist, duration) {
    const song = { title, artist, duration };
    this.songs.splice(index, 0, song); // O(n) - must shift elements!
    console.log(\`⚠️ Inserted \${title} at position \${index + 1} (shifted \${this.songs.length - index - 1} songs)\`);
  }
  
  // Removing from middle - what's the performance?
  removeSongAt(index) {
    if (index >= 0 && index < this.songs.length) {
      const removed = this.songs.splice(index, 1)[0]; // O(n) - must shift elements!
      console.log(\`⚠️ Removed \${removed.title} from position \${index + 1} (shifted \${this.songs.length - index} songs)\`);
      return removed;
    }
    return null;
  }
}
\`\`\`

Alex studied the code. "So arrays are really fast for accessing specific positions, but slow for inserting or removing in the middle?"

"Exactly! Let's see why," Maya said, drawing a diagram:

\`\`\`
Array Memory Layout:
[Song0][Song1][Song2][Song3][Song4]...
   ↑      ↑      ↑      ↑      ↑
  Pos0   Pos1   Pos2   Pos3   Pos4

Accessing Song3: songs[3] → Instant! O(1)

Inserting at Pos2:
Before: [Song0][Song1][Song2][Song3][Song4]
After:  [Song0][Song1][NewSong][Song2][Song3][Song4]
                        ↑
        Song2, Song3, Song4 all had to shift right! O(n)
\`\`\`

### Linked List Playlist Performance

Now Maya showed the linked list approach:

\`\`\`javascript
// Linked list playlist implementation (Jordan's current system)
class LinkedPlaylist {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  // Adding to the end - what's the performance?
  addSong(title, artist, duration) {
    const newSong = new SongNode(title, artist, duration);
    
    if (!this.head) {
      this.head = newSong;
    } else {
      // Must traverse to the end! O(n)
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newSong;
    }
    
    this.size++;
    console.log(\`⚠️ Added \${title} to end (traversed \${this.size - 1} songs)\`);
  }
  
  // Accessing by position - what's the performance?
  getSongAt(index) {
    if (index < 0 || index >= this.size) return null;
    
    let current = this.head;
    // Must traverse from beginning! O(n)
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    
    console.log(\`⚠️ Accessed song \${index + 1}: \${current.title} (traversed \${index + 1} songs)\`);
    return current;
  }
  
  // Inserting at the beginning - what's the performance?
  insertAtBeginning(title, artist, duration) {
    const newSong = new SongNode(title, artist, duration);
    newSong.next = this.head;
    this.head = newSong;
    this.size++;
    console.log(\`✅ Instantly inserted \${title} at beginning\`); // O(1) - instant!
  }
  
  // Removing from beginning - what's the performance?
  removeFromBeginning() {
    if (!this.head) return null;
    
    const removed = this.head;
    this.head = this.head.next;
    this.size--;
    console.log(\`✅ Instantly removed \${removed.title} from beginning\`); // O(1) - instant!
    return removed;
  }
}
\`\`\`

Jordan was starting to see the pattern. "So linked lists are fast for operations at the beginning, but slow for random access and operations at the end?"

"You've got it!" Maya said. "Let's visualize this too:"

\`\`\`
Linked List Memory Layout:
[Song0] → [Song1] → [Song2] → [Song3] → [Song4] → null
   ↑
  head

Accessing Song3: Must traverse Song0 → Song1 → Song2 → Song3 = O(n)

Inserting at beginning:
[NewSong] → [Song0] → [Song1] → [Song2] → [Song3] → [Song4] → null
     ↑
   new head
Just change two pointers! O(1)
\`\`\`

## ⏱️ Alex's Performance Analysis Challenge!

Maya pulled out her tablet. "Alex, let's put this theory to the test. I want you to implement a function that compares the performance characteristics of both approaches."

Jordan nodded enthusiastically. "This would help me understand exactly when to use each approach!"

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`comparePerformance()\` to fill in different operations time complexity in big O notation
- **Click Run Code**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge will help you understand the practical implications of these performance differences," Maya explained.

`,
exercise: {
    starterCode: `// Song node for linked list implementation
class SongNode {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.next = null;
  }
}

// Array-based playlist for comparison
class ArrayPlaylist {
  constructor() {
    this.songs = [];
  }
  
  addSong(title, artist, duration) {
    this.songs.push({ title, artist, duration });
  }
  
  getSongAt(index) {
    return this.songs[index] || null;
  }
  
  insertAt(index, title, artist, duration) {
    this.songs.splice(index, 0, { title, artist, duration });
  }
}

// Linked list playlist for comparison
class LinkedPlaylist {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  addSong(title, artist, duration) {
    const newSong = new SongNode(title, artist, duration);
    if (!this.head) {
      this.head = newSong;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newSong;
    }
    this.size++;
  }
  
  getSongAt(index) {
    let current = this.head;
    for (let i = 0; i < index && current; i++) {
      current = current.next;
    }
    return current;
  }
}

// ⏱️ Alex's Performance Analysis Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function comparePerformance(arrayPlaylist, linkedPlaylist, operation, index = 0) {
  const results = {
    operation: operation,
  };

  // TODO: Strings below should be replaced with the appropriate time complexity 
  // (e.g., O(1), O(n), O(n²), etc.) for the corresponding operation

  switch (operation) {
    case "access":
      results.arrayComplexity = "TODO";
      results.linkedComplexity = "TODO";
      break;
      
    case "add_end":
      results.arrayComplexity = "TODO";
      results.linkedComplexity = "TODO";
      break;
      
    case "add_beginning":
      results.arrayComplexity = "TODO";
      results.linkedComplexity = "TODO";
      break;
  }
  
  return results;
}
*/`,
    solution: `// Song node for linked list implementation
class SongNode {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.next = null;
  }
}

// Array-based playlist for comparison
class ArrayPlaylist {
  constructor() {
    this.songs = [];
  }
  
  addSong(title, artist, duration) {
    this.songs.push({ title, artist, duration });
  }
  
  getSongAt(index) {
    return this.songs[index] || null;
  }
  
  insertAt(index, title, artist, duration) {
    this.songs.splice(index, 0, { title, artist, duration });
  }
}

// Linked list playlist for comparison
class LinkedPlaylist {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  addSong(title, artist, duration) {
    const newSong = new SongNode(title, artist, duration);
    if (!this.head) {
      this.head = newSong;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newSong;
    }
    this.size++;
  }
  
  getSongAt(index) {
    let current = this.head;
    for (let i = 0; i < index && current; i++) {
      current = current.next;
    }
    return current;
  }
}

function comparePerformance(arrayPlaylist, linkedPlaylist, operation, index = 0) {
  const results = {
    operation: operation,
  };

  // TODO: Strings below should be replaced with the appropriate time complexity 
  // (e.g., O(1), O(n), O(n²), etc.) for the corresponding operation

  switch (operation) {
    case "access":
      results.arrayComplexity = "O(1)";
      results.linkedComplexity = "O(n)";
      break;
      
    case "add_end":
      results.arrayComplexity = "O(1)";
      results.linkedComplexity = "O(n)";
      break;
      
    case "add_beginning":
      results.arrayComplexity = "O(n)";
      results.linkedComplexity = "O(1)";
      break;
  }
  
  return results;
}`,
    tests: [
      {
        name: "Test ArrayPlaylist and LinkedPlaylist basic functionality",
        test: (code) => {
          try {
            const testCode = code + `
            // Test both playlist types
            const arrayPL = new ArrayPlaylist();
            const linkedPL = new LinkedPlaylist();
            
            arrayPL.addSong("Test Song", "Test Artist", 180);
            linkedPL.addSong("Test Song", "Test Artist", 180);
            
            const arraySong = arrayPL.getSongAt(0);
            const linkedSong = linkedPL.getSongAt(0);
            
            const arrayWorks = arraySong && arraySong.title === "Test Song";
            const linkedWorks = linkedSong && linkedSong.title === "Test Song";
            
            return ({ arrayWorks, linkedWorks });
            `;
            
            const testResult = new Function(testCode)();
            
            if (!testResult.arrayWorks) {
              return new TestResult({ passed: false, message: "ArrayPlaylist not working correctly" });
            }
            
            if (!testResult.linkedWorks) {
              return new TestResult({ passed: false, message: "LinkedPlaylist not working correctly" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "Both ArrayPlaylist and LinkedPlaylist should work correctly for basic operations."
      },
      {
        name: "Test comparePerformance function",
        test: (code) => {
          try {
            const testCode = code + `
            const arrayPL = new ArrayPlaylist();
            const linkedPL = new LinkedPlaylist();
            
            let accessResult = null;
            let addEndResult = null;
            let addBeginResult = null;
            
            if (typeof comparePerformance === 'function') {
              accessResult = comparePerformance(arrayPL, linkedPL, "access");
              addEndResult = comparePerformance(arrayPL, linkedPL, "add_end");
              addBeginResult = comparePerformance(arrayPL, linkedPL, "add_beginning");
            }
            
            return ({ 
              accessResult: accessResult ? accessResult.arrayComplexity : null,
              addEndResult: addEndResult ? addEndResult.arrayComplexity : null,
              addBeginResult: addBeginResult ? addBeginResult.linkedComplexity : null
            });
            `;
            
            const testResult = new Function(testCode)();
            
            if (!testResult.accessResult) {
              return new TestResult({ passed: false, message: "comparePerformance function not found. Make sure to uncomment and implement it." });
            }
            
            if (testResult.accessResult !== "O(1)") {
              return new TestResult({ passed: false, message: "Array access should be O(1)" });
            }
            
            if (testResult.addEndResult !== "O(1)") {
              return new TestResult({ passed: false, message: "Array add to end should be O(1)" });
            }
            
            if (testResult.addBeginResult !== "O(1)") {
              return new TestResult({ passed: false, message: "Linked list add to beginning should be O(1)" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "comparePerformance should correctly analyze time complexities for different operations."
      }
    ]
  },
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();

        return (
          <main>
            <h2>Playlist Performance Questions</h2>
            <form className="auto-graded-quiz">
              <div
                className="question"
                data-answers="Arrays provide O(1) random access,Linked lists provide O(1) insertion at beginning,Arrays require shifting elements for middle insertions"
              >
                <p>
                  Which statements about array vs linked list performance are correct?
                </p>

                <label>
                  <input
                    type="checkbox"
                    value="Arrays provide O(1) random access"
                  />{" "}
                  Arrays provide O(1) random access
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Linked lists provide O(1) insertion at beginning"
                  />{" "}
                  Linked lists provide O(1) insertion at beginning
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Arrays require shifting elements for middle insertions"
                  />{" "}
                  Arrays require shifting elements for middle insertions
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Linked lists provide O(1) random access"
                  />{" "}
                  Linked lists provide O(1) random access
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Arrays and linked lists have identical performance"
                  />{" "}
                  Arrays and linked lists have identical performance
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Linked lists use less memory than arrays"
                  />{" "}
                  Linked lists use less memory than arrays
                </label>
                <div className="feedback"></div>
                <div className="explanation">
                  <ul>
                    <li>
                      <strong>Array random access:</strong> ✅ Correct — Arrays can access any element by index in O(1) time.
                    </li>
                    <li>
                      <strong>Linked list beginning insertion:</strong> ✅ Correct — Just update head pointer in O(1) time.
                    </li>
                    <li>
                      <strong>Array middle insertions:</strong> ✅ Correct — Elements after insertion point must shift.
                    </li>
                    <li>
                      <strong>Linked list random access:</strong> ❌ Incorrect — Must traverse from head, O(n) time.
                    </li>
                    <li>
                      <strong>Identical performance:</strong> ❌ Incorrect — They have different strengths and weaknesses.
                    </li>
                    <li>
                      <strong>Linked list memory usage:</strong> ❌ Incorrect — Extra pointers increase memory usage.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="question" data-answer="O(n)">
                <p>
                  What is the time complexity for accessing the 50th element in a linked list?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  Accessing the 50th element requires traversing from the head through 49 nodes, making it <strong>O(n)</strong> time complexity, where n is the position of the element.
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