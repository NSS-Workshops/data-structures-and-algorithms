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

```javascript
class SongNode {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.next = null; // Only points forward
  }
  
  toString() {
    return `${this.title} - ${this.artist}`;
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
    console.log(`🎵 Added: ${newSong.toString()}`);
  }
}
```

"This is what we call a **singly linked list**," Maya explained. "Each node only knows about the next node, so you can only traverse in one direction."

Jordan nodded. "It's perfect for simple playlists where you just want to play songs in order. But what if someone is listening and wants to go back to the previous song?"

## The Bidirectional Playlist Challenge

"That's where I ran into a problem," Jordan continued, pulling up another sketch. "With our current system, if someone is listening to song 3 and wants to go back to song 2, I have to start from the beginning and traverse forward again!"

Alex thought about this. "That seems inefficient. If you're at song 50 and want to go back to song 49, you'd have to start from song 1 and count all the way up?"

"Exactly! So I started thinking... what if each song also knew about the previous song?"

Maya smiled. "Jordan, you're thinking about a **doubly linked list**. Show us what you came up with."

## Introducing the Bidirectional Playlist

Jordan's eyes sparkled as they showed their new design:

```javascript
class DoublySongNode {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.next = null;    // Points to next song
    this.prev = null;    // Points to previous song
  }
  
  toString() {
    return `${this.title} - ${this.artist}`;
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
    console.log(`🎵 Added: ${newSong.toString()}`);
  }
  
  // Navigate forward from current song
  playNext(currentSong) {
    if (currentSong && currentSong.next) {
      console.log(`▶️ Playing next: ${currentSong.next.toString()}`);
      return currentSong.next;
    } else {
      console.log("🔚 End of playlist");
      return null;
    }
  }
  
  // Navigate backward from current song
  playPrevious(currentSong) {
    if (currentSong && currentSong.prev) {
      console.log(`⏮️ Playing previous: ${currentSong.prev.toString()}`);
      return currentSong.prev;
    } else {
      console.log("🔚 Beginning of playlist");
      return null;
    }
  }
}
```

Alex studied the code carefully. "So now each song has two connections - one to the next song and one to the previous song?"

"Exactly!" Jordan said. "Look at how this changes the structure:"

```
Singly Linked (Forward Only):
[Song A] → [Song B] → [Song C] → [Song D] → null

Doubly Linked (Bidirectional):
null ← [Song A] ⟷ [Song B] ⟷ [Song C] ⟷ [Song D] → null
       ↑                                    ↑
      head                                tail
```

Maya nodded approvingly. "This is a perfect example of how different data structures solve different problems. Jordan, what are the advantages and disadvantages you've noticed?"

## Comparing Playlist Types

Jordan had clearly thought this through. "Well, the doubly linked playlist is amazing for navigation - you can go forward or backward from any song in O(1) time. But..."

"But?" Alex prompted.

"But each song now needs to store two connections instead of one. That's more memory. And when I add or remove songs, I have to update more connections."

Jordan demonstrated the complexity:

```javascript
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
  console.log(`🗑️ Removed: ${songToRemove.toString()}`);
}
```

"More complex, but more powerful," Maya observed. "What about your third idea - the party playlist that loops forever?"

## The Never-Ending Party Playlist

Jordan's excitement reached a new peak. "This is where it gets really cool! What if the last song in the playlist connected back to the first song? Then the playlist would never end!"

They sketched out the concept:

```
Circular Singly Linked Playlist:
     ┌─────────────────────────────────────┐
     ↓                                     │
[Song A] → [Song B] → [Song C] → [Song D] ─┘
   ↑
  head
```

"This is called a **circular linked list**," Maya explained. "The last node points back to the first node instead of pointing to null."

Jordan showed their implementation:

```javascript
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
    console.log(`🎵 Added to circular playlist: ${newSong.toString()}`);
  }
  
  playForever(startingSong, maxSongs = 10) {
    let current = startingSong || this.head;
    let count = 0;
    
    console.log("🎉 Starting infinite party playlist:");
    
    while (count < maxSongs) {
      console.log(`${count + 1}. ${current.toString()}`);
      current = current.next;
      count++;
    }
    
    console.log("🎵 ...and it continues forever!");
  }
}
```

Alex was fascinated. "So the playlist literally never ends? It just keeps cycling through the same songs?"

"Exactly! Perfect for parties, background music, or any situation where you want continuous playback without manual intervention."

## ⏱️ Alex's Playlist Type Challenge!

Maya pulled out her tablet. "Alex, I think you're ready to work with these different playlist types. Let's see if you can implement some key operations."

Jordan nodded enthusiastically. "I've set up a challenge where you need to work with a doubly linked playlist. The goal is to implement a function that can navigate both forward and backward from any song."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement `navigatePlaylist()` to move forward or backward in a doubly linked playlist
- Handle edge cases when reaching the beginning or end
- **Click Run Code**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge will help you understand how bidirectional navigation works," Maya explained.

## The Power of Circular Playlists

After Alex completed the challenge, Jordan showed them a more advanced circular playlist feature:

"Watch this - I can create a circular playlist that remembers where you left off and can resume from any point:"

```javascript
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
    console.log(`🎵 Now playing: ${this.currentSong.toString()}`);
    return this.currentSong;
  }
  
  next() {
    if (this.currentSong) {
      this.currentSong = this.currentSong.next;
      console.log(`⏭️ Next: ${this.currentSong.toString()}`);
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
        console.log(`🎯 Jumped to: ${current.toString()}`);
        found = true;
        break;
      }
      current = current.next;
    } while (current !== this.head);
    
    if (!found) {
      console.log(`❌ Song "${songTitle}" not found in playlist`);
    }
    
    return found;
  }
}
```

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