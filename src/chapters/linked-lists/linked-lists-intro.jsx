import { useAutoGradeQuiz } from "@nss-workshops/nss-core";
import { TestResult } from "@nss-workshops/nss-core";

export const linkedListsIntroChapter = {
  id: 'linked-lists-intro',
  title: 'Introduction to Linked Lists - Building the Perfect Playlist',
  sectionId: 'linked-lists',
  previousChapterId: 'linked-lists-learning-objectives',
  content: `
##  ⚠️  A Quick Detour before We Dive Into Linked Lists
Before we build or manipulate linked lists in JavaScript, we need to take a quick detour to understand how references work. 

Unlike primitive values (like numbers or strings), objects in JavaScript are assigned and passed by reference. This means when you assign one object to another variable, both variables point to the same underlying data. Grasping this behavior is essential for safely navigating and modifying linked structures, where each node "points" to the next via a reference. Without this foundation, linked list logic can seem confusing or error-prone.

The foundation course has a workshop on this topic. Please review these concept and be sure to complete the coding exercises, 
before you dive into linked lists: [Primitive vs. Reference Values – Foundations Course](https://nashville-software-school.github.io/foundations-course/primitive-vs-reference)

<br/>
<hr/>

## Return to regular programming: Linked Lists
<iframe width="560" height="315" src="https://www.youtube.com/embed/N6dOwBde7-M?si=z_hZOUOD968Ci3O1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Alex's Musical Discovery

Three weeks had passed since Alex Rivera started working at Willowbrook Library, and they had become quite comfortable with the stack and queue systems Maya had taught them. But this Tuesday morning brought a new challenge that would change how Alex thought about organizing data forever.

"Alex!" called out Jordan Kim, the library's young tech coordinator, rushing over with a laptop in hand. Jordan was known for their passion for both technology and music, often seen with headphones around their neck. "I need your help with something really cool."

Maya looked up from her morning cataloging work, curious about the excitement in Jordan's voice.

"What's got you so energized this morning, Jordan?" Maya asked with a smile.

Jordan opened their laptop and showed Alex and Maya a music application they'd been working on. "I'm building a playlist system for our library's digital music collection, but I'm running into some problems. I thought maybe Alex could help me figure out the best way to organize the songs."

Alex leaned in, intrigued. "What kind of problems?"

"Well," Jordan began, pulling up their code, "I started by storing songs in an array, but it's not working well for what I want to do. Watch this..."

## The Array Playlist Problem

Jordan demonstrated their current system:

\`\`\`javascript
// Jordan's current array-based playlist
const playlist = [
  "Bohemian Rhapsody - Queen",
  "Hotel California - Eagles", 
  "Stairway to Heaven - Led Zeppelin",
  "Sweet Child O' Mine - Guns N' Roses",
  "Imagine - John Lennon"
];

console.log("Current playlist:", playlist);
\`\`\`

"This works fine for basic playback," Jordan explained, "but here's where it gets tricky. What if someone wants to add a song right after 'Hotel California'? Or what if they want to remove a song from the middle?"

Jordan showed them the code:

\`\`\`javascript
// Adding a song after "Hotel California" (position 1)
playlist.splice(2, 0, "Thunderstruck - AC/DC");
console.log("After adding Thunderstruck:", playlist);

// Result: All songs after position 1 had to shift!
// This is O(n) time complexity - slow for large playlists
\`\`\`

Alex watched as Jordan ran the code. "I see the problem! Just like when we had to move all the books when someone returned one to the middle of our sorted shelf. Everything after that position has to shift."

"Exactly!" Jordan said. "And it gets worse. What if I want to create a playlist where songs can easily be rearranged, or where I can quickly jump from one song to any other song that's related to it? Arrays force me to think in terms of positions, but music is more about connections between songs."

Maya nodded thoughtfully. "It sounds like you need a different way to organize your data - one that's based on connections rather than positions."

## Introducing the Song Chain Concept

Jordan pulled out a piece of paper and started sketching. "I've been reading about something called linked lists. Instead of storing songs in positions, what if each song knew which song comes next?"

They drew a simple diagram:

\`\`\`
🎵 "Bohemian Rhapsody" → 🎵 "Hotel California" → 🎵 "Stairway to Heaven" → 🎵 "Sweet Child O' Mine" → 🎵 "Imagine" → null
\`\`\`

"See?" Jordan continued excitedly. "Each song is connected to the next song, like links in a chain. If I want to add 'Thunderstruck' after 'Hotel California', I just need to:"

1. Make "Hotel California" point to "Thunderstruck"
2. Make "Thunderstruck" point to "Stairway to Heaven"

"No shifting required!" Alex exclaimed. "“No shifting required!” Alex exclaimed. "It's like adding a new chain link, just unhook one link and snap the new one in between!"

Maya smiled. "Jordan, you've just described a **linked list** - one of the most fundamental data structures in computer science. And Alex, you're right about the similarity to our book cart, but there's an important difference."

## Understanding the Linked List Structure

Maya took the paper and expanded Jordan's diagram:

\`\`\`
Each song is a "node" containing:
┌──────────────────────────────┐
│  Song: "Bohemian Rhapsody"   │
│  Next: → points to next song │
└──────────────────────────────┘
           ↓
┌──────────────────────────────┐
│  Song: "Hotel California"    │
│  Next: → points to next song │
└──────────────────────────────┘
           ↓
         ... and so on
\`\`\`

"Unlike our book stack where we only access the top," Maya explained, "a linked list lets us traverse through the entire chain. We start at the first song - called the **head** - and follow the connections to visit each song in order."

Jordan's eyes lit up. "So it's like having a playlist where each song has a note saying 'play this song next'!"

"Perfect analogy!" Maya said. "And here's the beautiful part - if you want to add or remove a song, you only need to change a few connections, not move everything around like with arrays."

## The Power of Node-Based Thinking

Alex was starting to see the bigger picture. "So instead of thinking about positions like 'song number 3', we think about connections like 'the song that comes after Hotel California'?"

"Exactly," Jordan nodded. "Let me show you how this would work in code:"

\`\`\`javascript
// Each song is a node with data and a connection
class SongNode {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.next = null; // Points to the next song
  }
  
  toString() {
    return \`\${this.title} - \${this.artist}\`;
  }
}

// Create some song nodes
const song1 = new SongNode("Bohemian Rhapsody", "Queen");
const song2 = new SongNode("Hotel California", "Eagles");
const song3 = new SongNode("Stairway to Heaven", "Led Zeppelin");

// Connect them together
song1.next = song2;
song2.next = song3;
// song3.next is null (end of playlist)

console.log("First song:", song1.toString());
console.log("Next song:", song1.next.toString());
console.log("Third song:", song1.next.next.toString());
\`\`\`

"This is fascinating," Alex said, "but how do we actually work with this? How do we play through the entire playlist?"

## Traversing the Musical Chain

Jordan grinned. "That's where it gets really cool. We can walk through the entire playlist by following the connections:"

\`\`\`javascript
function playPlaylist(firstSong) {
  let currentSong = firstSong;
  let songNumber = 1;
  
  console.log("🎵 Now Playing Playlist:");
  
  while (currentSong !== null) {
    console.log(\`\${songNumber}. \${currentSong.toString()}\`);
    currentSong = currentSong.next; // Move to the next song
    songNumber++;
  }
  
  console.log("🎵 Playlist finished!");
}

// Play our playlist
playPlaylist(song1);
\`\`\`

Maya watched Alex's expression change from confusion to understanding. "Do you see what's happening here, Alex?"

"I think so," Alex said slowly. "We start with the first song, then we follow the 'next' connection to get to the second song, then follow that song's 'next' connection to get to the third song, and so on until we reach a song that doesn't have a next song."

"Perfect!" Jordan exclaimed. "And the best part is, if I want to add a new song between any two existing songs, I just need to adjust two connections."

## ⏱️ Alex's First Playlist Challenge!

Maya pulled out her tablet. "Alex, I think you're ready for a hands-on challenge. Jordan has created a simple playlist system, and I want you to help them solve a common problem."

Jordan nodded enthusiastically. "Here's the scenario: I have a playlist, but I want to find a specific song and then play the song that comes after it. Can you help me write a function to do that?"

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`playNextSong()\` to find a song and play the next one
- Use the \`currentSong.next\` property to traverse the playlist
- **Click Run Code**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge will help you understand how to navigate through linked structures," Maya explained. "You're not just accessing data - you're following connections."

## The Magic of Dynamic Connections

After Alex completed the first challenge, Jordan showed them something even more impressive:

"Watch what happens when I want to add a song in the middle of the playlist:"

\`\`\`javascript
// Original playlist: Song1 → Song2 → Song3
// Want to insert "Thunderstruck" between Song1 and Song2

const newSong = new SongNode("Thunderstruck", "AC/DC");

// Step 1: Make new song point to Song2
newSong.next = song1.next;

// Step 2: Make Song1 point to new song
song1.next = newSong;

// Result: Song1 → Thunderstruck → Song2 → Song3
\`\`\`

Alex's eyes widened. "That's it? Just two steps? No shifting everything around?"

"That's the power of linked lists!" Jordan said. "We're working with connections, not positions. Adding or removing songs is just about changing which song points to which."

## ⏱️ Alex's Second Playlist Challenge!

"Now for something more complex," Maya said. "Jordan wants to be able to remove a song from anywhere in the playlist. But here's the tricky part - to remove a song, you need to make the previous song point to the song after the one you're removing."

Jordan nodded. "It's like removing a link from a chain - you have to connect the pieces on either side."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`removeSong()\` to remove a song from the playlist
- Handle the case where the song to remove is the first song
- **Click Run Code**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge teaches you about the careful pointer manipulation that makes linked lists work," Maya explained.

## Real-World Applications Beyond Music

As their session continued, Maya showed Alex and Jordan how linked lists appear in many real-world applications:

### 1. Browser History
"Your web browser uses a similar structure for the back button," Maya explained. "Each page you visit is connected to the previous page, forming a chain of your browsing history."

### 2. Undo Systems
"Remember our catalog editor's undo feature? That could also be implemented as a linked list, where each action points to the previous action."

### 3. Social Media Feeds
"Social media platforms often use linked structures to connect posts, where each post knows about the next post in your feed."

### 4. GPS Navigation
"GPS systems use linked structures to represent routes, where each waypoint is connected to the next turn or destination."

## Understanding the Trade-offs

Jordan had been thinking. "This seems amazing, but there must be some downsides, right?"

Maya nodded approvingly. "Great question! Let's think about this. Alex, if I wanted to play the 50th song in a playlist, how would I do it with our linked list?"

Alex thought for a moment. "I'd have to start at the first song and follow the connections 49 times to get to the 50th song."

"Exactly! That's O(n) time complexity. With an array, you could jump directly to position 49 in O(1) time."

Jordan understood. "So linked lists are great for sequential access and dynamic changes, but arrays are better for random access."

"Perfect understanding," Maya said. "Different data structures excel at different things. That's why we need to understand multiple approaches."

## 📊 Big O Analysis: Linked Lists vs Arrays

Maya pulled out her whiteboard. "Let's make this concrete with Big O notation. Understanding the time complexity of different operations will help you choose the right data structure."

### Linked List Operations

| Operation | Time Complexity | Explanation |
|-----------|----------------|-------------|
| **Traversal** | **O(n)** | Must visit each node sequentially from head to tail |
| **Search** | **O(n)** | Must traverse from head until target is found |
| **Insert at Beginning** | **O(1)** | Just update head pointer and new node's next |
| **Insert at End** | **O(n)** | Must traverse to find the last node first |
| **Insert at Position** | **O(n)** | Must traverse to the position, then O(1) to insert |
| **Delete at Beginning** | **O(1)** | Just update head pointer to head.next |
| **Delete at End** | **O(n)** | Must traverse to find the second-to-last node |
| **Delete at Position** | **O(n)** | Must traverse to find the node, then O(1) to delete |
| **Random Access** | **O(n)** | Must traverse from head to reach specific position |

### Array Operations (for comparison)

| Operation | Time Complexity | Explanation |
|-----------|----------------|-------------|
| **Traversal** | **O(n)** | Must visit each element from index 0 to n-1 |
| **Search** | **O(n)** | Must check each element until target is found |
| **Insert at Beginning** | **O(n)** | Must shift all existing elements to the right |
| **Insert at End** | **O(1)** | Direct access to end position |
| **Insert at Position** | **O(n)** | Must shift all elements after position to the right |
| **Delete at Beginning** | **O(n)** | Must shift all remaining elements to the left |
| **Delete at End** | **O(1)** | Direct access to end position |
| **Delete at Position** | **O(n)** | Must shift all elements after position to the left |
| **Random Access** | **O(1)** | Direct access using index calculation |

### Key Insights from the Comparison

Jordan studied the comparison chart. "So linked lists are better for insertions and deletions at the beginning, but arrays are better for random access and operations at the end?"

"Exactly!" Maya confirmed. "Let's see this in action with some examples:"

\`\`\`javascript
// Linked List: Insert at beginning - O(1)
function insertAtBeginning(head, newSong) {
  const newNode = new SongNode(newSong.title, newSong.artist);
  newNode.next = head;  // Just one pointer update!
  return newNode;       // New head
}

// Array: Insert at beginning - O(n)
function insertAtBeginningArray(playlist, newSong) {
  playlist.unshift(newSong); // Must shift ALL elements!
  return playlist;
}

// Linked List: Access 50th song - O(n)
function getNodeAtPosition(head, position) {
  let current = head;
  for (let i = 0; i < position && current; i++) {
    current = current.next; // Must traverse step by step
  }
  return current;
}

// Array: Access 50th song - O(1)
function getElementAtPosition(playlist, position) {
  return playlist[position]; // Direct memory access!
}
\`\`\`

### When to Choose Each Structure

"So when should I use linked lists versus arrays?" Jordan asked.

Maya created a decision guide:

**Choose Linked Lists When:**
- ✅ Frequent insertions/deletions at the beginning
- ✅ Unknown or highly variable data size
- ✅ You rarely need random access to elements
- ✅ Sequential processing is the primary use case
- ✅ Memory is fragmented or you need dynamic allocation

**Choose Arrays When:**
- ✅ Frequent random access to elements by index
- ✅ Mathematical operations or algorithms requiring indexing
- ✅ Memory efficiency is critical
- ✅ Cache performance matters for your application
- ✅ You primarily add/remove elements at the end

"For our playlist example," Jordan realized, "if users mostly play songs sequentially and frequently add songs at the beginning, linked lists make sense. But if they often jump to specific track numbers, arrays would be better."

## ⏱️ Alex's Third Playlist Challenge!

"One more challenge," Maya said with a smile. "Jordan wants to create a function that can count how many songs are in a playlist. This will help you practice traversing the entire linked structure."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`countSongs()\` to count all songs in the playlist
- Traverse the entire linked list from head to end
- **Click Run Code**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge reinforces the fundamental pattern of linked list traversal," Maya explained.

## Looking Ahead: More Complex Playlist Features

As their session wound down, Jordan was already thinking about advanced features:

"What if I wanted to create a playlist that loops back to the beginning when it reaches the end? Or what if I wanted to be able to go backwards through the playlist as well as forwards?"

Maya's eyes twinkled. "Those are excellent questions, Jordan. What you're describing are **circular linked lists** and **doubly linked lists** - variations that solve exactly those problems."

Alex was intrigued. "So there are different types of linked lists for different needs?"

"Absolutely," Maya said. "Tomorrow we'll explore these variations and see how they can make Jordan's playlist system even more powerful."

## Key Insights from the Musical Journey

By the end of their session, Alex had discovered several fundamental insights:

- **Linked lists organize data through connections, not positions**
- **Each node contains data and a reference to the next node**
- **Traversal requires following connections sequentially**
- **Insertions and deletions only require changing connections**
- **Trade-offs exist: great for dynamic changes, slower for random access**
- **Real-world applications are everywhere, from browsers to GPS systems**

Jordan was already sketching ideas for their next playlist features. "I can't wait to build a system where users can easily rearrange songs, create custom connections, and maybe even have playlists that adapt based on listening patterns."

"That's the spirit of a true programmer," Maya said. "Understanding the fundamental data structures opens up endless possibilities for creative solutions."

As Alex helped Jordan pack up their laptop, they realized that this introduction to linked lists had been more than just learning a new data structure - it had been about understanding how to think in terms of connections and relationships rather than just positions and indices.

"Maya," Alex said, "I'm starting to see that different problems really do need different approaches. The book return cart needed a stack, the hold requests needed a queue, and now Jordan's playlist needs a linked list."

Maya smiled warmly. "That's exactly the kind of thinking that will make you a great programmer, Alex. Tomorrow, we'll dive deeper into the different types of linked lists and see how they can solve even more complex problems."

The foundation had been laid. Alex now understood not just what linked lists were, but why they mattered and how they could be used to solve real problems. The journey into the world of connected data structures had begun.`,
  exercise: {
    starterCode: `// 🎵 Simple Song Node class - represents a song in our playlist
class SongNode {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.next = null; // Points to the next song in the playlist
  }
  
  toString() {
    return \`\${this.title} - \${this.artist}\`;
  }
}

// Create a sample playlist
const song1 = new SongNode("Bohemian Rhapsody", "Queen");
const song2 = new SongNode("Hotel California", "Eagles");
const song3 = new SongNode("Stairway to Heaven", "Led Zeppelin");
const song4 = new SongNode("Sweet Child O' Mine", "Guns N' Roses");

// Connect the songs together
song1.next = song2;
song2.next = song3;
song3.next = song4;
// song4.next is null (end of playlist)

// ⏱️ Alex's First Playlist Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function playNextSong(playlist, targetSong) {
  // Find the target song and play the song that comes after it
  // targetsong parameter is a string with "Tile - Band" ex. "Hotel California - Eagles"
  // Return the next song's string representation, or "End of playlist" if no next song
  
  let currentSong = playlist;
  
  // TODO: Traverse the playlist to find the target song
  // Hint: Use a while loop and check currentSong.toString()
  
  return "End of playlist";
}
*/

// ⏱️ Alex's Second Playlist Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function removeSong(playlist, targetTitle) {
  // Remove a song from the playlist by title
  // Return the new head of the playlist
  
  // Handle case where first song should be removed
  if (playlist && playlist.title === targetTitle) {
    return playlist.next;
  }
  
  let currentSong = playlist;
  
  // TODO: Find the song before the one to remove
  // Hint: Check if currentSong.next exists and if its title matches
  
  return playlist; // Return original head if song not found
}
*/

// ⏱️ Alex's Third Playlist Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function countSongs(playlist) {
  // Count the total number of songs in the playlist
  // Return the count as a number
  
  let count = 0;
  let currentSong = playlist;
  
  // TODO: Traverse the entire playlist and count songs
  // Hint: Use a while loop and increment count for each song
  
  return count;
}
*/`,
    solution: `// 🎵 Simple Song Node class - represents a song in our playlist
class SongNode {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.next = null; // Points to the next song in the playlist
  }
  
  toString() {
    return \`\${this.title} - \${this.artist}\`;
  }
}

// Create a sample playlist
const song1 = new SongNode("Bohemian Rhapsody", "Queen");
const song2 = new SongNode("Hotel California", "Eagles");
const song3 = new SongNode("Stairway to Heaven", "Led Zeppelin");
const song4 = new SongNode("Sweet Child O' Mine", "Guns N' Roses");

// Connect the songs together
song1.next = song2;
song2.next = song3;
song3.next = song4;
// song4.next is null (end of playlist)

function playNextSong(playlist, targetSong) {
  // Find the target song and play the song that comes after it
  let currentSong = playlist;
  
  while (currentSong !== null) {
    if (currentSong.toString() === targetSong) {
      if (currentSong.next !== null) {
        console.log("🎵 Playing next:", currentSong.next.toString());
        return currentSong.next.toString();
      } else {
        console.log("🎵 End of playlist reached");
        return "End of playlist";
      }
    }
    currentSong = currentSong.next;
  }
  
  console.log("🎵 Song not found in playlist");
  return "Song not found";
}

function removeSong(playlist, targetTitle) {
  // Handle case where first song should be removed
  if (playlist && playlist.title === targetTitle) {
    console.log(\`🗑️ Removed first song: \${playlist.toString()}\`);
    return playlist.next;
  }
  
  let currentSong = playlist;
  
  while (currentSong !== null && currentSong.next !== null) {
    if (currentSong.next.title === targetTitle) {
      const removedSong = currentSong.next;
      currentSong.next = removedSong.next;
      console.log(\`🗑️ Removed song: \${removedSong.toString()}\`);
      return playlist;
    }
    currentSong = currentSong.next;
  }
  
  console.log(\`🎵 Song "\${targetTitle}" not found in playlist\`);
  return playlist;
}

function countSongs(playlist) {
  let count = 0;
  let currentSong = playlist;
  
  while (currentSong !== null) {
    count++;
    currentSong = currentSong.next;
  }
  
  console.log(\`📊 Total songs in playlist: \${count}\`);
  return count;
}`,
    tests: [
      {
        name: "Test SongNode class and playlist creation",
        test: (code) => {
          try {
            const testCode = code + `
            // Test SongNode creation and linking
            const testSong1 = new SongNode("Test Song 1", "Test Artist 1");
            const testSong2 = new SongNode("Test Song 2", "Test Artist 2");
            testSong1.next = testSong2;
            
            const song1String = testSong1.toString();
            const song2String = testSong2.toString();
            const hasNext = testSong1.next === testSong2;
            const nextIsNull = testSong2.next === null;
            
            return ({ song1String, song2String, hasNext, nextIsNull });
            `;
            
            const testResult = new Function(testCode)();
            
            if (testResult.song1String !== "Test Song 1 - Test Artist 1") {
              return new TestResult({ passed: false, message: "SongNode toString() not working correctly" });
            }
            
            if (!testResult.hasNext) {
              return new TestResult({ passed: false, message: "Song linking not working correctly" });
            }
            
            if (!testResult.nextIsNull) {
              return new TestResult({ passed: false, message: "Last song should have next = null" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "SongNode class should work correctly with title, artist, and next properties."
      },
      {
        name: "Test playNextSong function",
        test: (code) => {
          try {
            const testCode = code + `
            let result1 = "";
            let result2 = "";
            let result3 = "";
            
            if (typeof playNextSong === 'function') {
              result1 = playNextSong(song1, "Hotel California - Eagles");
              result2 = playNextSong(song1, "Sweet Child O' Mine - Guns N' Roses");
              result3 = playNextSong(song1, "Nonexistent Song - Unknown");
            }
            
            return ({ result1, result2, result3 });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.result1 === 'undefined') {
              return new TestResult({ passed: false, message: "playNextSong function not found. Make sure to uncomment and implement it." });
            }
            
            if (testResult.result1 !== "Stairway to Heaven - Led Zeppelin") {
              return new TestResult({ passed: false, message: "playNextSong should return the song after Hotel California" });
            }
            
            if (testResult.result2 !== "End of playlist") {
              return new TestResult({ passed: false, message: "playNextSong should return 'End of playlist' when target is the last song" });
            }
            
            if (testResult.result3 !== "Song not found") {
              return new TestResult({ passed: false, message: "playNextSong should return 'Song not found' for nonexistent songs" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "playNextSong should find a song and return the next song in the playlist."
      },
      {
        name: "Test removeSong function",
        test: (code) => {
          try {
            const testCode = code + `
            // Create a test playlist
            const testSong1 = new SongNode("Song A", "Artist A");
            const testSong2 = new SongNode("Song B", "Artist B");
            const testSong3 = new SongNode("Song C", "Artist C");
            testSong1.next = testSong2;
            testSong2.next = testSong3;
            
            let newHead = testSong1;
            let removedMiddle = false;
            let removedFirst = false;
            
            if (typeof removeSong === 'function') {
              // Remove middle song
              newHead = removeSong(newHead, "Song B");
              removedMiddle = newHead.next && newHead.next.title === "Song C";
              
              // Remove first song
              newHead = removeSong(newHead, "Song A");
              removedFirst = newHead && newHead.title === "Song C";
            }
            
            return ({ removedMiddle, removedFirst });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.removedMiddle === 'undefined') {
              return new TestResult({ passed: false, message: "removeSong function not found. Make sure to uncomment and implement it." });
            }
            
            if (!testResult.removedMiddle) {
              return new TestResult({ passed: false, message: "removeSong should properly remove songs from the middle of the playlist" });
            }
            
            if (!testResult.removedFirst) {
              return new TestResult({ passed: false, message: "removeSong should properly remove the first song and return new head" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "removeSong should remove songs from any position in the playlist."
      },
      {
        name: "Test countSongs function",
        test: (code) => {
          try {
            const testCode = code + `
            let count1 = 0;
            let count2 = 0;
            
            if (typeof countSongs === 'function') {
              count1 = countSongs(song1); // Should count 4 songs
              count2 = countSongs(null); // Should count 0 songs (empty playlist)
            }
            
            return ({ count1, count2 });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.count1 === 'undefined') {
              return new TestResult({ passed: false, message: "countSongs function not found. Make sure to uncomment and implement it." });
            }
            
            if (testResult.count1 !== 4) {
              return new TestResult({ passed: false, message: "countSongs should return 4 for the sample playlist" });
            }
            
            if (testResult.count2 !== 0) {
              return new TestResult({ passed: false, message: "countSongs should return 0 for an empty playlist" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "countSongs should correctly count all songs in the playlist."
      },
    ]
  },
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();

        return (
          <main>
            <h2>Linked Lists Introduction Questions</h2>
            <form className="auto-graded-quiz">
              <div
                className="question"
                data-answers="Each node contains data and a reference to the next node,Insertions and deletions only require changing connections,Sequential access through following next pointers"
              >
                <p>
                  Which of the following are key characteristics of linked lists?
                </p>

                <label>
                  <input
                    type="checkbox"
                    value="Each node contains data and a reference to the next node"
                  />{" "}
                  🔗 Each node contains data and a reference to the next node
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Elements are stored in contiguous memory locations"
                  />{" "}
                  📦 Elements are stored in contiguous memory locations
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Insertions and deletions only require changing connections"
                  />{" "}
                  ⚡ Insertions and deletions only require changing connections
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Random access to elements is O(1)"
                  />{" "}
                  🎯 Random access to elements is O(1)
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Sequential access through following next pointers"
                  />{" "}
                  ➡️ Sequential access through following next pointers
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Fixed size determined at creation time"
                  />{" "}
                  📏 Fixed size determined at creation time
                </label>
                <div className="feedback"></div>
                <div className="explanation">
                  <ul>
                    <li>
                      <strong>Node structure:</strong> ✅ Correct — Each node contains data and a next reference.
                    </li>
                    <li>
                      <strong>Contiguous memory:</strong> ❌ Incorrect — Linked lists use non-contiguous memory.
                    </li>
                    <li>
                      <strong>Connection-based operations:</strong> ✅ Correct — Only connections need to change.
                    </li>
                    <li>
                      <strong>O(1) random access:</strong> ❌ Incorrect — Random access is O(n) in linked lists.
                    </li>
                    <li>
                      <strong>Sequential access:</strong> ✅ Correct — Must follow next pointers to traverse.
                    </li>
                    <li>
                      <strong>Fixed size:</strong> ❌ Incorrect — Linked lists are dynamic in size.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="question" data-answer="O(n)">
                <p>
                  What is the time complexity for accessing the 50th song in a linked list playlist?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  Accessing the 50th element requires traversing from the head through 49 connections, making it <strong>O(n)</strong> time complexity. Unlike arrays which provide O(1) random access, linked lists require sequential traversal.
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