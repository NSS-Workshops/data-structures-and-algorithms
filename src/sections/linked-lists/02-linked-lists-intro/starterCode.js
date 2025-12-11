// Linked Lists Introduction - Playlist Management System
// Complete the functions below to work with a linked list playlist

class SongNode {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.next = null; // Points to the next song
  }
  
  toString() {
    return `${this.title} - ${this.artist}`;
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

// Challenge 1: Find a song and play the next song in the playlist
// Uncomment and complete this function
/*
function playNextSong(playlist, targetSong) {
  // Find the target song and play the song that comes after it
  // Your code here
}
*/

// Challenge 2: Remove a song from the playlist
// Uncomment and complete this function
/*
function removeSong(playlist, targetTitle) {
  // Remove the song with the given title from the playlist
  // Return the new head of the playlist
  // Your code here
}
*/

// Challenge 3: Count the total number of songs in the playlist
// Uncomment and complete this function
/*
function countSongs(playlist) {
  // Count and return the total number of songs in the playlist
  // Your code here
}
*/

// Test your functions (uncomment to test)
/*
console.log("=== Testing playNextSong ===");
console.log(playNextSong(song1, "Hotel California - Eagles"));
console.log(playNextSong(song1, "Sweet Child O' Mine - Guns N' Roses"));
console.log(playNextSong(song1, "Nonexistent Song - Unknown"));

console.log("\n=== Testing removeSong ===");
let modifiedPlaylist = removeSong(song1, "Hotel California");
console.log("After removing Hotel California:");
let current = modifiedPlaylist;
while (current) {
  console.log(current.toString());
  current = current.next;
}

console.log("\n=== Testing countSongs ===");
console.log("Total songs:", countSongs(song1));
console.log("Empty playlist count:", countSongs(null));
*/