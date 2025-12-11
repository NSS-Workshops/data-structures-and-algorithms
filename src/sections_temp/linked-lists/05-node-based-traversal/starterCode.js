// Song node for our playlist
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
    console.log(`🗑️ Removed: ${head.toString()}`);
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
*/

// Test your functions (uncomment to test)
/*
console.log("=== Testing calculatePlaylistDuration ===");
const totalDuration = calculatePlaylistDuration(song1);
console.log(`Total duration: ${totalDuration} seconds`);

console.log("\n=== Testing removeSongByTitle ===");
let modifiedPlaylist = removeSongByTitle(song1, "Hotel California");
console.log("After removing Hotel California:");
let current = modifiedPlaylist;
while (current) {
  console.log(current.toString());
  current = current.next;
}

console.log("\n=== Testing reversePlaylist ===");
const reversedPlaylist = reversePlaylist(song1);
console.log("Reversed playlist:");
current = reversedPlaylist;
while (current) {
  console.log(current.toString());
  current = current.next;
}
*/