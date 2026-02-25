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

// Test your functions (uncomment to test)
/*
console.log("=== Testing navigatePlaylist ===");
console.log("Forward 1 step from Hotel California:", navigatePlaylist(song2, "forward", 1)?.title);
console.log("Backward 1 step from Stairway to Heaven:", navigatePlaylist(song3, "backward", 1)?.title);
console.log("Forward 2 steps from Bohemian Rhapsody:", navigatePlaylist(song1, "forward", 2)?.title);
*/