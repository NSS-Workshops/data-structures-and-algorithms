// ==============================
// Exercise 1: Help Alex Access Songs by Position
// ==============================
function getSongAtPosition(setlist, position) {
  // Return the song at the given position
  // Handle invalid positions gracefully
  // Return the string "Position out of bounds" if position is invalid
  if (position < 0 || position >= setlist.length) {
    return "Position out of bounds";
  }
  return setlist[position];
}

const alexsSetlist = ["Wonderwall", "Hotel California", "Blackbird", "Free Bird"];
console.log("Song at position 2:", getSongAtPosition(alexsSetlist, 2));
console.log("Song at position 10:", getSongAtPosition(alexsSetlist, 10));

// ==============================
// Exercise 2: Help Alex Update Their Setlist
// ==============================
function updateSetlistBasedOnFeedback(setlist, updates) {
  // updates is an object like { 0: "New Song", 2: "Another Song" }
  // Update the setlist at the specified positions
  for (let position in updates) {
    const index = parseInt(position);
    if (index >= 0 && index < setlist.length) {
      setlist[index] = updates[position];
    }
  }
  return setlist;
}

let performanceSet = ["Song A", "Song B", "Song C", "Song D"];
const feedback = { 0: "Thunderstruck", 2: "Don't Stop Believin'" };
updateSetlistBasedOnFeedback(performanceSet, feedback);
console.log("Updated setlist:", performanceSet);

// ==============================
// Exercise 3: Help Alex Add Songs Strategically
// ==============================
function addSongStrategically(setlist, song, position) {
  // If position is "end", use push (O(1))
  // If position is "beginning", use unshift (O(n))
  // If position is a number, use splice (O(n))
  // Return the updated setlist
  if (position === "end") {
    setlist.push(song);
  } else if (position === "beginning") {
    setlist.unshift(song);
  } else if (typeof position === "number") {
    setlist.splice(position, 0, song);
  }
  return setlist;
}

let strategicSet = ["Hotel California", "Sweet Child O' Mine"];
addSongStrategically(strategicSet, "Thunderstruck", "beginning");
addSongStrategically(strategicSet, "Free Bird", "end");
addSongStrategically(strategicSet, "Wonderwall", 2);
console.log("Strategic setlist:", strategicSet);

// ==============================
// Exercise 4: Help Alex Remove Songs Strategically
// ==============================
function removeSongStrategically(setlist, position) {
  // If position is "end", use pop (O(1))
  // If position is "beginning", use shift (O(n))
  // If position is a number, use splice (O(n))
  // Return the removed song
  if (position === "end") {
    return setlist.pop();
  } else if (position === "beginning") {
    return setlist.shift();
  } else if (typeof position === "number") {
    const removed = setlist.splice(position, 1);
    return removed[0];
  }
  return null;
}

let removalSet = ["Thunderstruck", "Hotel California", "Wonderwall", "Free Bird"];
console.log("Removed from end:", removeSongStrategically(removalSet, "end"));
console.log("Removed from beginning:", removeSongStrategically(removalSet, "beginning"));
console.log("Removed from position 1:", removeSongStrategically(removalSet, 1));
console.log("Final setlist:", removalSet);

// ==============================
// Exercise 5: Help Alex Find Songs for Requests
// ==============================
function findSongsForRequest(repertoire, criteria) {
  // repertoire is an array of song objects with properties like title, genre, mood
  // criteria is an object like { genre: "rock", mood: "energetic" }
  // Return all songs that match ALL the criteria
  return repertoire.filter(song => {
    return Object.keys(criteria).every(key => 
      song[key] && song[key].toLowerCase() === criteria[key].toLowerCase()
    );
  });
}

const alexsRepertoire = [
  { title: "Thunderstruck", genre: "rock", mood: "energetic" },
  { title: "Hotel California", genre: "rock", mood: "mysterious" },
  { title: "Wonderwall", genre: "alternative", mood: "nostalgic" },
  { title: "Tears in Heaven", genre: "ballad", mood: "emotional" }
];

console.log("Rock songs:", findSongsForRequest(alexsRepertoire, { genre: "rock" }));
console.log("Energetic rock:", findSongsForRequest(alexsRepertoire, { genre: "rock", mood: "energetic" }));