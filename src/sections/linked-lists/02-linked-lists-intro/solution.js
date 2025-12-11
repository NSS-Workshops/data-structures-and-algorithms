// Linked Lists Introduction - Playlist Management System
// Complete solutions for the playlist management functions

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
    console.log(`🗑️ Removed first song: ${playlist.toString()}`);
    return playlist.next;
  }
  
  let currentSong = playlist;
  
  while (currentSong !== null && currentSong.next !== null) {
    if (currentSong.next.title === targetTitle) {
      const removedSong = currentSong.next;
      currentSong.next = removedSong.next;
      console.log(`🗑️ Removed song: ${removedSong.toString()}`);
      return playlist;
    }
    currentSong = currentSong.next;
  }
  
  console.log(`🎵 Song "${targetTitle}" not found in playlist`);
  return playlist;
}

function countSongs(playlist) {
  let count = 0;
  let currentSong = playlist;
  
  while (currentSong !== null) {
    count++;
    currentSong = currentSong.next;
  }
  
  console.log(`📊 Total songs in playlist: ${count}`);
  return count;
}

// Test the functions
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