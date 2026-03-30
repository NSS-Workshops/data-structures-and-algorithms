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