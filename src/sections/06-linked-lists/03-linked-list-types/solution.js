// Doubly linked song node for bidirectional navigation
class DoublySongNode {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.next = null;
    this.prev = null;
  }
  
  toString() {
    return `${this.title} - ${this.artist}`;
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
        console.log(`▶️ Moved forward to: ${current.toString()}`);
      } else {
        console.log("🔚 Cannot move forward - end of playlist");
        break;
      }
    } else if (direction === "backward") {
      if (current.prev) {
        current = current.prev;
        console.log(`⏮️ Moved backward to: ${current.toString()}`);
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
}

// Test the functions
console.log("=== Testing navigatePlaylist ===");
console.log("Forward 1 step from Hotel California:", navigatePlaylist(song2, "forward", 1)?.title);
console.log("Backward 1 step from Stairway to Heaven:", navigatePlaylist(song3, "backward", 1)?.title);
console.log("Forward 2 steps from Bohemian Rhapsody:", navigatePlaylist(song1, "forward", 2)?.title);

console.log("\n=== Testing detectLoop ===");
console.log("Linear playlist has loop:", detectLoop(song1));
const circularPlaylist = createCircularPlaylist();
console.log("Circular playlist has loop:", detectLoop(circularPlaylist));