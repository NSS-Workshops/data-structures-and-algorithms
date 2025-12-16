// ==============================
// Exercise 1: Help Alex Manage Multiple Venue Setlists
// ==============================
// Task: Create functions to manage setlists for different venues efficiently

function buildSetlistWithPush(songs) {
  // Start with empty setlist and use push() to add songs one by one
  // Return the final setlist
}

function managePerformanceQueue(initialLineup, newOpeners, finishedActs) {
  // Use unshift() to add new opening acts
  // Use shift() to remove finished acts
  // Return the updated lineup
}

const songs = ["Thunderstruck", "Hotel California", "Free Bird"];
console.log("Built setlist:", buildSetlistWithPush(songs));

let lineup = ["Alex's Main Set"];
lineup = managePerformanceQueue(lineup, ["Jazz Trio", "Folk Singer"], 1);
console.log("Updated lineup:", lineup);

// ==============================
// Exercise 2: Help Alex Transform and Filter Song Collections
// ==============================
// Task: Create venue-specific versions and filter songs by criteria

function createVenueVersions(songs, venueType) {
  // Use map() to transform songs for specific venue
  // venueType can be "rock", "jazz", or "electronic"
  // Transform duration and add venue-specific properties
}

function filterSongsForEvent(repertoire, eventType) {
  // Use filter() to select appropriate songs
  // eventType can be "wedding", "corporate", "festival"
  // Return songs matching the event criteria
}

const coreSongs = [
  { title: "Wonderwall", genre: "alternative", mood: "nostalgic", duration: 4.2 },
  { title: "At Last", genre: "jazz", mood: "romantic", duration: 3.2 }
];

console.log("Rock versions:", createVenueVersions(coreSongs, "rock"));
console.log("Wedding songs:", filterSongsForEvent(coreSongs, "wedding"));

// ==============================
// Exercise 3: Help Alex Analyze Performance Data
// ==============================
// Task: Process performance data and calculate business metrics

function generatePerformanceReport(performances) {
  // Use forEach() to process each performance and generate detailed report
  // Include venue, date, audience, revenue, and calculated metrics
}

function calculateBusinessMetrics(performances) {
  // Use reduce() to calculate total revenue, average audience, and venue statistics
  // Return an object with all the calculated metrics
}

function extractRecentPerformances(performances, count) {
  // Use slice() to extract the most recent performances
  // Return the specified number of recent performances
}

const performances = [
  { venue: "Blue Note", date: "2024-01-05", audience: 85, revenue: 450 },
  { venue: "Jazz Corner", date: "2024-01-12", audience: 45, revenue: 320 },
  { venue: "Electric Underground", date: "2024-01-19", audience: 120, revenue: 680 }
];

generatePerformanceReport(performances);
console.log("Metrics:", calculateBusinessMetrics(performances));
console.log("Recent:", extractRecentPerformances(performances, 2));

// ==============================
// Exercise 4: Help Alex Master Method Chaining and Advanced Array Operations
// ==============================
// Task: Use method chaining and splice() for complex data operations

function createOptimalSetlist(songDatabase, criteria) {
  // Use method chaining: filter by criteria, sort by popularity,
  // map to add performance notes, and limit to top songs
  // criteria: { maxDuration: number, preferredMood: string, maxSongs: number }
}

function restructureFestivalLineup(lineup, changes) {
  // Use splice() to make complex changes to the lineup
  // changes: { removeAt: number, removeCount: number, addActs: array }
  // Return the removed acts
}

const songDatabase = [
  { title: "Thunderstruck", mood: "energetic", duration: 4.8, popularity: 95 },
  { title: "Hotel California", mood: "mysterious", duration: 6.5, popularity: 98 },
  { title: "Wonderwall", mood: "nostalgic", duration: 4.2, popularity: 92 }
];

const criteria = { maxDuration: 5.0, preferredMood: "energetic", maxSongs: 2 };
console.log("Optimal setlist:", createOptimalSetlist(songDatabase, criteria));

let festivalLineup = ["Opening", "Band A", "Band B", "Headliner", "Closing"];
const changes = { removeAt: 1, removeCount: 2, addActs: ["Jazz Ensemble", "Rock Band"] };
console.log("Removed:", restructureFestivalLineup(festivalLineup, changes));
console.log("New lineup:", festivalLineup);