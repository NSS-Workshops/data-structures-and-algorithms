
## Alex's Advanced Playlist Operations

A week had passed since Alex first learned about linked lists through Jordan's music playlist system. The basic concepts were solid, but now Maya had a new challenge that would push Alex's understanding to the next level.

"Alex," Maya said, settling down with her morning coffee, "Jordan's playlist system has been a huge success with our library patrons. But now they're asking for more sophisticated features."

Alex looked up from their work, intrigued. "What kind of features?"

Maya pulled out a tablet showing user feedback. "People want to be able to search through playlists, rearrange songs dynamically, and even create smart playlists that can modify themselves. All of these require advanced traversal techniques."

Jordan joined them, looking excited but slightly overwhelmed. "I've been trying to implement these features, but I keep running into problems. I think I need to understand how to properly navigate and manipulate linked structures."

"Perfect timing," Maya smiled. "Today we're going to explore the art of playlist traversal - how to efficiently move through, search, and modify linked lists."

## The Foundation: Basic Playlist Traversal

Maya started by reviewing the fundamental traversal pattern they'd learned:

```javascript
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
    return `${this.title} - ${this.artist} (${minutes}:${seconds.toString().padStart(2, '0')})`;
  }
}

// Basic traversal pattern
function displayPlaylist(head) {
  console.log("🎵 Current Playlist:");
  let current = head;
  let position = 1;
  
  while (current !== null) {
    console.log(`${position}. ${current.toString()}`);
    current = current.next; // Move to next song
    position++;
  }
  
  if (position === 1) {
    console.log("📭 Playlist is empty");
  }
}
```

"This is the foundation," Maya explained. "Every advanced operation builds on this basic pattern of following the `next` pointers."

Alex nodded. "So we start at the head and follow the chain until we reach null."

"Exactly. But now let's see how we can use this pattern to solve more complex problems."

## Searching Through Playlists

Jordan showed them the first challenge: "Users want to search for songs by title, artist, or even duration. How do we efficiently search through a linked playlist?"

Maya demonstrated the search pattern:

```javascript
// Search by title
function findSongByTitle(head, targetTitle) {
  let current = head;
  let position = 0;
  
  while (current !== null) {
    if (current.title.toLowerCase() === targetTitle.toLowerCase()) {
      console.log(`🎯 Found "${targetTitle}" at position ${position + 1}`);
      return { song: current, position };
    }
    
    current = current.next;
    position++;
  }
  
  console.log(`❌ Song "${targetTitle}" not found in playlist`);
  return null;
}

// Search by artist
function findSongsByArtist(head, targetArtist) {
  let current = head;
  let position = 0;
  const foundSongs = [];
  
  console.log(`🔍 Searching for songs by "${targetArtist}":`);
  
  while (current !== null) {
    if (current.artist.toLowerCase().includes(targetArtist.toLowerCase())) {
      foundSongs.push({ song: current, position });
      console.log(`  ${position + 1}. ${current.toString()}`);
    }
    
    current = current.next;
    position++;
  }
  
  if (foundSongs.length === 0) {
    console.log(`❌ No songs by "${targetArtist}" found`);
  }
  
  return foundSongs;
}
```

Alex studied the patterns. "I see! Each search function uses the same basic traversal, but with different conditions for what we're looking for."

"Exactly," Maya said. "The traversal pattern is consistent, but the logic inside the loop changes based on what we need to accomplish."

## ⏱️ Alex's Traversal Challenge!

Maya pulled out her tablet. "Alex, let's put this into practice. I want you to implement a function that can calculate the total duration of a playlist."

Jordan nodded enthusiastically. "This would be really useful for our library's music events - we need to know how long playlists will run."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement `calculatePlaylistDuration()` to sum up all song durations
- Use the basic traversal pattern to visit each song
- **Click Run Code**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge reinforces the fundamental traversal pattern while solving a practical problem," Maya explained.

### Pitfall 1: Losing the Head Reference
```javascript
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
```

### Pitfall 2: Null Pointer Access
```javascript
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
```