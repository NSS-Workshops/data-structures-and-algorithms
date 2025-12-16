// ==============================
// Exercise 1: Help Alex Manage Multiple Venue Setlists
// ==============================
// Task: Create functions to manage setlists for different venues efficiently

function buildSetlistWithPush(songs) {
  let setlist = [];
  
  songs.forEach(song => {
    setlist.push(song);
  });
  
  return setlist;
}

function managePerformanceQueue(initialLineup, newOpeners, finishedActs) {
  let lineup = [...initialLineup];
  
  // Add new opening acts to the beginning
  newOpeners.forEach(opener => {
    lineup.unshift(opener);
  });
  
  // Remove finished acts from the beginning
  for (let i = 0; i < finishedActs; i++) {
    lineup.shift();
  }
  
  return lineup;
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
  return songs.map(song => {
    let transformedSong = { ...song };
    
    switch (venueType) {
      case "rock":
        transformedSong.genre = "rock";
        transformedSong.duration = song.duration + 0.5;
        transformedSong.venue = "Rock Venue";
        transformedSong.arrangement = "full band with electric guitar";
        break;
      case "jazz":
        transformedSong.genre = "jazz";
        transformedSong.duration = song.duration + 1.2;
        transformedSong.venue = "Jazz Venue";
        transformedSong.arrangement = "acoustic with piano and upright bass";
        break;
      case "electronic":
        transformedSong.genre = "electronic";
        transformedSong.duration = song.duration * 1.5;
        transformedSong.venue = "Electronic Venue";
        transformedSong.arrangement = "synthesizers, drum machines, and effects";
        break;
      default:
        break;
    }
    
    return transformedSong;
  });
}

function filterSongsForEvent(repertoire, eventType) {
  switch (eventType) {
    case "wedding":
      return repertoire.filter(song => 
        song.mood === "romantic" || song.mood === "peaceful" || song.mood === "nostalgic"
      );
    case "corporate":
      return repertoire.filter(song => 
        song.mood === "energetic" && song.duration < 5.0
      );
    case "festival":
      return repertoire.filter(song => 
        song.mood === "energetic" || song.genre === "rock"
      );
    default:
      return repertoire;
  }
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
  console.log("Performance Analysis Report:");
  console.log("=".repeat(40));
  
  performances.forEach((performance, index) => {
    const revenuePerPerson = (performance.revenue / performance.audience).toFixed(2);
    
    console.log(`Performance #${index + 1}:`);
    console.log(`  Venue: ${performance.venue}`);
    console.log(`  Date: ${performance.date}`);
    console.log(`  Audience: ${performance.audience} people`);
    console.log(`  Revenue: $${performance.revenue}`);
    console.log(`  Revenue per person: $${revenuePerPerson}`);
    console.log("-".repeat(30));
  });
}

function calculateBusinessMetrics(performances) {
  const metrics = performances.reduce((acc, performance) => {
    acc.totalRevenue += performance.revenue;
    acc.totalAudience += performance.audience;
    acc.performanceCount += 1;
    
    // Track venue statistics
    if (!acc.venueStats[performance.venue]) {
      acc.venueStats[performance.venue] = { revenue: 0, audience: 0, count: 0 };
    }
    acc.venueStats[performance.venue].revenue += performance.revenue;
    acc.venueStats[performance.venue].audience += performance.audience;
    acc.venueStats[performance.venue].count += 1;
    
    return acc;
  }, {
    totalRevenue: 0,
    totalAudience: 0,
    performanceCount: 0,
    venueStats: {}
  });
  
  // Calculate averages
  metrics.averageRevenue = (metrics.totalRevenue / metrics.performanceCount).toFixed(2);
  metrics.averageAudience = (metrics.totalAudience / metrics.performanceCount).toFixed(1);
  
  return metrics;
}

function extractRecentPerformances(performances, count) {
  return performances.slice(-count);
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
  return songDatabase
    .filter(song => song.duration <= criteria.maxDuration)
    .filter(song => !criteria.preferredMood || song.mood === criteria.preferredMood)
    .sort((a, b) => b.popularity - a.popularity)
    .map(song => ({
      ...song,
      performanceNote: `Optimized for ${criteria.preferredMood || 'general'} performance`
    }))
    .slice(0, criteria.maxSongs);
}

function restructureFestivalLineup(lineup, changes) {
  const removedActs = lineup.splice(changes.removeAt, changes.removeCount, ...changes.addActs);
  return removedActs;
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