// Song node for linked list implementation
class SongNode {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.next = null;
  }
}

// Array-based playlist for comparison
class ArrayPlaylist {
  constructor() {
    this.songs = [];
  }
  
  addSong(title, artist, duration) {
    this.songs.push({ title, artist, duration });
  }
  
  getSongAt(index) {
    return this.songs[index] || null;
  }
  
  insertAt(index, title, artist, duration) {
    this.songs.splice(index, 0, { title, artist, duration });
  }
}

// Linked list playlist for comparison
class LinkedPlaylist {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  addSong(title, artist, duration) {
    const newSong = new SongNode(title, artist, duration);
    if (!this.head) {
      this.head = newSong;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newSong;
    }
    this.size++;
  }
  
  getSongAt(index) {
    let current = this.head;
    for (let i = 0; i < index && current; i++) {
      current = current.next;
    }
    return current;
  }
}

function comparePerformance(arrayPlaylist, linkedPlaylist, operation, index = 0) {
  const results = {
    operation: operation,
  };

  // Fill in the appropriate time complexity for each operation
  switch (operation) {
    case "access":
      results.arrayComplexity = "O(1)";     // Direct index access
      results.linkedComplexity = "O(n)";    // Must traverse from head
      break;
      
    case "add_end":
      results.arrayComplexity = "O(1)";     // Push to end of array
      results.linkedComplexity = "O(n)";    // Must traverse to find end
      break;
      
    case "add_beginning":
      results.arrayComplexity = "O(n)";     // Must shift all elements
      results.linkedComplexity = "O(1)";    // Just update head pointer
      break;
  }
  
  return results;
}

// Test the function
const arrayPL = new ArrayPlaylist();
const linkedPL = new LinkedPlaylist();

// Add some test songs
arrayPL.addSong("Test Song 1", "Artist 1", 180);
linkedPL.addSong("Test Song 1", "Artist 1", 180);

console.log("=== Performance Comparison ===");
console.log("Access:", comparePerformance(arrayPL, linkedPL, "access"));
console.log("Add to end:", comparePerformance(arrayPL, linkedPL, "add_end"));
console.log("Add to beginning:", comparePerformance(arrayPL, linkedPL, "add_beginning"));

// Demonstrate the differences
console.log("\n=== Practical Examples ===");

// Array access is instant
console.log("Array access to index 0:", arrayPL.getSongAt(0)?.title || "Not found");

// Linked list access requires traversal
console.log("Linked list access to index 0:", linkedPL.getSongAt(0)?.title || "Not found");

console.log("\n=== Key Insights ===");
console.log("✅ Arrays excel at: Random access, adding to end");
console.log("✅ Linked Lists excel at: Adding to beginning, dynamic size");
console.log("⚠️  Choose based on your primary use case!");