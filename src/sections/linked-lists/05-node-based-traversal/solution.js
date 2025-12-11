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

function calculatePlaylistDuration(head) {
  // Calculate the total duration of all songs in the playlist
  let totalDuration = 0;
  let current = head;
  
  while (current !== null) {
    totalDuration += current.duration;
    console.log(`Adding ${current.title}: ${current.duration}s`);
    current = current.next;
  }
  
  const minutes = Math.floor(totalDuration / 60);
  const seconds = totalDuration % 60;
  console.log(`📊 Total playlist duration: ${minutes}:${seconds.toString().padStart(2, '0')} (${totalDuration}s)`);
  
  return totalDuration;
}

function removeSongByTitle(head, targetTitle) {
  // Handle empty playlist
  if (!head) return null;
  
  // Handle removing the first song
  if (head.title.toLowerCase() === targetTitle.toLowerCase()) {
    console.log(`🗑️ Removed: ${head.toString()}`);
    return head.next;
  }
  
  // Find and remove the target song from the middle or end
  let current = head;
  
  while (current.next !== null) {
    if (current.next.title.toLowerCase() === targetTitle.toLowerCase()) {
      const removedSong = current.next;
      current.next = removedSong.next;
      console.log(`🗑️ Removed: ${removedSong.toString()}`);
      return head;
    }
    current = current.next;
  }
  
  console.log(`❌ Song "${targetTitle}" not found in playlist`);
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
}

// Test the functions
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

console.log("\n=== Key Traversal Patterns Demonstrated ===");
console.log("✅ Basic traversal with accumulation (calculatePlaylistDuration)");
console.log("✅ Search and remove with pointer manipulation (removeSongByTitle)");
console.log("✅ Complex pointer reversal (reversePlaylist)");
console.log("✅ Safe null checking throughout all operations");