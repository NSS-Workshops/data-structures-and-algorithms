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