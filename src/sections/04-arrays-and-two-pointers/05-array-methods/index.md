Three months have passed since Alex's debut at The Blue Note Café. What started as a simple gig has blossomed into a thriving musical career. Alex now manages multiple venues, collaborates with other musicians, and has discovered that their setlist management needs have grown far beyond basic add, remove, and update operations. It's time to master JavaScript's powerful array methods - the advanced toolkit that will transform Alex from a competent performer into a musical data wizard.

## Part 1: The Venue Manager - Mastering Core Modification Methods

Alex now performs at three different venues each week, and each venue has different requirements. The Blue Note loves classic rock, The Jazz Corner prefers smooth ballads, and The Electric Underground wants high-energy dance music. Managing these different setlists efficiently requires mastering the core modification methods.

### Building Setlists with push() and pop() - The Stack Approach

"I need to build tonight's setlist song by song," Alex explains to their new assistant, Maya, while preparing for The Blue Note. "And sometimes I need to quickly remove the last song if we're running over time."

```javascript
// Alex starts with an empty setlist and builds it strategically
let tonightSetlist = [];

// Building the setlist with push() - O(1) for each addition
console.log("Building tonight's setlist...");
tonightSetlist.push("Thunderstruck");        // Strong opener
console.log("Added opener:", tonightSetlist);

tonightSetlist.push("Hotel California");     // Crowd favorite
tonightSetlist.push("Don't Stop Believin'"); // Sing-along moment
tonightSetlist.push("Sweet Child O' Mine");  // Guitar showcase
console.log("Core setlist:", tonightSetlist);

// Adding multiple encore songs at once
tonightSetlist.push("Free Bird", "Stairway to Heaven", "Bohemian Rhapsody");
console.log("With encores:", tonightSetlist);
// ["Thunderstruck", "Hotel California", "Don't Stop Believin'", "Sweet Child O' Mine", "Free Bird", "Stairway to Heaven", "Bohemian Rhapsody"]

// Venue manager announces: "You're running 15 minutes over!"
console.log("\nTime management needed...");
let removedSong = tonightSetlist.pop();      // Remove last song - O(1)
console.log(`Removed: ${removedSong}`);
console.log("Adjusted setlist:", tonightSetlist);

// Still over time? Remove another
let anotherRemoved = tonightSetlist.pop();
console.log(`Also removed: ${anotherRemoved}`);
console.log("Final setlist:", tonightSetlist);
```

Maya nods, "So `push()` adds to the end and `pop()` removes from the end, both instantly?"

"Exactly!" Alex grins. "Think of it like a stack of sheet music. I can quickly add a new song to the top of the pile, or grab the top song off the pile. Both operations are **O(1) time complexity** - they're always fast, no matter how many songs I have."

### Managing Opening Acts with unshift() and shift() - The Queue Approach

The next day at The Jazz Corner, Alex faces a different challenge. The venue books opening acts, and Alex needs to manage the performance order dynamically.

```javascript
// The main performance lineup
let performanceOrder = ["Alex's Jazz Set", "Alex's Acoustic Set"];

// A surprise opening act arrives
console.log("Original lineup:", performanceOrder);
performanceOrder.unshift("Local Jazz Trio");  // Add to beginning - O(n)
console.log("With opening act:", performanceOrder);
// ["Local Jazz Trio", "Alex's Jazz Set", "Alex's Acoustic Set"]

// Another opening act wants to join
performanceOrder.unshift("Student Pianist");   // Add another opener - O(n)
console.log("Full lineup:", performanceOrder);
// ["Student Pianist", "Local Jazz Trio", "Alex's Jazz Set", "Alex's Acoustic Set"]

// First act finishes and leaves
let finishedAct = performanceOrder.shift();    // Remove from beginning - O(n)
console.log(`${finishedAct} has finished performing`);
console.log("Current lineup:", performanceOrder);
// ["Local Jazz Trio", "Alex's Jazz Set", "Alex's Acoustic Set"]

// Second act also finishes
let secondFinished = performanceOrder.shift();
console.log(`${secondFinished} has finished performing`);
console.log("Remaining performances:", performanceOrder);
// ["Alex's Jazz Set", "Alex's Acoustic Set"]
```

"I notice you're more careful with `unshift()` and `shift()`," Maya observes.

Alex adjusts their guitar strap, "That's because these operations are **O(n) time complexity**. When I add 'Student Pianist' to the beginning, every other act has to 'shift' one position to the right. With a small lineup, no problem. But imagine if I had 50 acts - they'd all have to move!"

---
## ⏱️ **Alex's Venue Management Challenge!** 
 - 🔓 Uncomment the below code section in the editor 👉:
```js
// ==============================
// Exercise 1: Help Alex Manage Multiple Venue Setlists
// ==============================
```
 - Read the requirements written as comments in the code.
 - Implement the required logic.
 - Click `Run Code` and inspect `📋 Console Output` window for correctness!
 - Click `Run Tests`and ensure that test(s) related to this specific exercise are passing <span class="mtk8"> Passing test will show in green text.</span>

🚧 *Some tests for future exercises may fail at first — that’s expected. As you complete each exercise, those tests will start passing. By the time you finish the final exercise, all tests in the test suite should pass.*

---

## Part 2: The Collaboration Coordinator - Transforming Data with map() and filter()

Alex's success has attracted attention from other musicians. Now they're coordinating collaborative performances, which means transforming and filtering song data in sophisticated ways.

### Creating Venue-Specific Versions with map() - The Transformation Master

"Each venue wants the same songs but with different arrangements," Alex explains to their collaborator, Sam, a talented keyboardist. "The Blue Note wants rock versions, The Jazz Corner wants jazz arrangements, and The Electric Underground wants electronic remixes."

```javascript
// Alex's core song catalog
const coreSongs = [
    { title: "Wonderwall", originalGenre: "alternative", duration: 4.2 },
    { title: "Hotel California", originalGenre: "rock", duration: 6.5 },
    { title: "Blackbird", originalGenre: "folk", duration: 2.3 },
    { title: "Sweet Child O' Mine", originalGenre: "rock", duration: 5.8 }
];

// Transform for The Blue Note (rock venue) - map() creates new array
const blueNoteVersions = coreSongs.map(song => ({
    title: song.title,
    genre: "rock",                    // All songs become rock versions
    duration: song.duration + 0.5,   // Rock versions are slightly longer
    venue: "The Blue Note",
    arrangement: "full band with electric guitar"
}));

console.log("Blue Note versions:");
blueNoteVersions.forEach(song => 
    console.log(`- ${song.title} (${song.genre}, ${song.duration}min)`)
);

// Transform for The Jazz Corner - different transformation
const jazzVersions = coreSongs.map(song => ({
    title: song.title,
    genre: "jazz",
    duration: song.duration + 1.2,   // Jazz versions are longer (more improvisation)
    venue: "The Jazz Corner",
    arrangement: "acoustic with piano and upright bass"
}));

console.log("\nJazz Corner versions:");
jazzVersions.forEach(song => 
    console.log(`- ${song.title} (${song.genre}, ${song.duration}min)`)
);

// Transform for The Electric Underground - electronic versions
const electronicVersions = coreSongs.map(song => ({
    title: `${song.title} (Electronic Mix)`,
    genre: "electronic",
    duration: song.duration * 1.5,   // Electronic versions are much longer
    venue: "The Electric Underground",
    arrangement: "synthesizers, drum machines, and effects"
}));

console.log("\nElectronic versions:");
electronicVersions.forEach(song => 
    console.log(`- ${song.title} (${song.genre}, ${song.duration}min)`)
);
```

Sam is impressed, "So `map()` takes your original songs and creates completely new versions for each venue?"

"Exactly!" Alex beams. "The `map()` method is **O(n) time complexity** - it visits each song once and transforms it. The original array stays unchanged, and I get a brand new array with the transformed versions. It's like having a magical photocopier that can change what it copies!"

### Curating Perfect Setlists with filter() - The Selection Specialist

Later that week, Alex faces a new challenge: creating specialized setlists for different types of events.

```javascript
// Alex's expanded repertoire with detailed metadata
const fullRepertoire = [
    { title: "Thunderstruck", genre: "rock", mood: "energetic", duration: 4.8, difficulty: "medium" },
    { title: "Hotel California", genre: "rock", mood: "mysterious", duration: 6.5, difficulty: "hard" },
    { title: "Wonderwall", genre: "alternative", mood: "nostalgic", duration: 4.2, difficulty: "easy" },
    { title: "Blackbird", genre: "folk", mood: "peaceful", duration: 2.3, difficulty: "medium" },
    { title: "Sweet Child O' Mine", genre: "rock", mood: "energetic", duration: 5.8, difficulty: "hard" },
    { title: "Tears in Heaven", genre: "ballad", mood: "emotional", duration: 4.5, difficulty: "easy" },
    { title: "At Last", genre: "jazz", mood: "romantic", duration: 3.2, difficulty: "medium" },
    { title: "Hallelujah", genre: "ballad", mood: "spiritual", duration: 5.1, difficulty: "easy" }
];

// Wedding reception - need romantic and peaceful songs
const weddingSetlist = fullRepertoire.filter(song => 
    song.mood === "romantic" || song.mood === "peaceful" || song.mood === "spiritual"
);
console.log("Wedding setlist:");
weddingSetlist.forEach(song => console.log(`- ${song.title} (${song.mood})`));

// Corporate event - need energetic but not too difficult songs
const corporateSetlist = fullRepertoire.filter(song => 
    song.mood === "energetic" && song.difficulty !== "hard"
);
console.log("\nCorporate event setlist:");
corporateSetlist.forEach(song => console.log(`- ${song.title} (${song.difficulty} difficulty)`));

// Intimate acoustic session - easy songs under 5 minutes
const acousticSetlist = fullRepertoire.filter(song => 
    song.difficulty === "easy" && song.duration < 5.0
);
console.log("\nAcoustic session setlist:");
acousticSetlist.forEach(song => console.log(`- ${song.title} (${song.duration}min)`));

// Rock festival - only high-energy rock songs
const rockFestivalSetlist = fullRepertoire.filter(song => 
    song.genre === "rock" && song.mood === "energetic"
);
console.log("\nRock festival setlist:");
rockFestivalSetlist.forEach(song => console.log(`- ${song.title}`));
```

"The `filter()` method is like having a super-smart assistant," Alex explains to Maya. "I tell it exactly what criteria I want, and it goes through my entire repertoire and picks out only the songs that match. It's also **O(n) time complexity** - it checks each song once, but the result is a perfectly curated setlist for any occasion."

---
## ⏱️ **Alex's Collaboration Challenge!** 
 - 🔓 Uncomment the below code section in the editor 👉:
```js
// ==============================
// Exercise 2: Help Alex Transform and Filter Song Collections
// ==============================
```
 - Read the requirements written as comments in the code.
 - Implement the required logic.
 - Click `Run Code` and inspect `📋 Console Output` window for correctness!
 - Click `Run Tests`and ensure that test(s) related to this specific exercise are passing <span class="mtk8"> Passing test will show in green text.</span>

🚧 *Some tests for future exercises may fail at first — that’s expected. As you complete each exercise, those tests will start passing. By the time you finish the final exercise, all tests in the test suite should pass.*

---

## Part 3: The Data Analyst - Advanced Processing with forEach(), reduce(), and slice()

Alex's musical career has evolved into a small business. They now need to analyze performance data, calculate statistics, and extract specific information from their growing collection of performance records.

### Processing Performance Data with forEach() - The Iterator

"I need to analyze last month's performances," Alex tells their business partner, Jordan, while reviewing their performance logs.

```javascript
// Alex's performance data from last month
const lastMonthPerformances = [
    { venue: "The Blue Note", date: "2024-01-05", audience: 85, revenue: 450, songs: ["Thunderstruck", "Hotel California"] },
    { venue: "The Jazz Corner", date: "2024-01-12", audience: 45, revenue: 320, songs: ["At Last", "Blackbird"] },
    { venue: "The Electric Underground", date: "2024-01-19", audience: 120, revenue: 680, songs: ["Wonderwall (Electronic)", "Sweet Child O' Mine (Electronic)"] },
    { venue: "The Blue Note", date: "2024-01-26", audience: 95, revenue: 520, songs: ["Free Bird", "Stairway to Heaven"] }
];

// Process each performance for detailed analysis
console.log("Performance Analysis Report:");
console.log("=" .repeat(40));

lastMonthPerformances.forEach((performance, index) => {
    const revenuePerPerson = (performance.revenue / performance.audience).toFixed(2);
    const songsPerformed = performance.songs.length;
    
    console.log(`Performance #${index + 1}:`);
    console.log(`  Venue: ${performance.venue}`);
    console.log(`  Date: ${performance.date}`);
    console.log(`  Audience: ${performance.audience} people`);
    console.log(`  Revenue: $${performance.revenue}`);
    console.log(`  Revenue per person: $${revenuePerPerson}`);
    console.log(`  Songs performed: ${songsPerformed}`);
    console.log(`  Song list: ${performance.songs.join(", ")}`);
    console.log("-".repeat(30));
});

// forEach for side effects - updating external systems
let totalNotifications = 0;
const performanceAlerts = [];

lastMonthPerformances.forEach(performance => {
    // Check for high-revenue performances
    if (performance.revenue > 500) {
        performanceAlerts.push(`🎉 Excellent revenue at ${performance.venue}: $${performance.revenue}`);
        totalNotifications++;
    }
    
    // Check for large audiences
    if (performance.audience > 100) {
        performanceAlerts.push(`👥 Large audience at ${performance.venue}: ${performance.audience} people`);
        totalNotifications++;
    }
});

console.log("\nPerformance Alerts:");
performanceAlerts.forEach(alert => console.log(alert));
console.log(`\nTotal alerts generated: ${totalNotifications}`);
```

"The `forEach()` method is perfect when I need to do something with each performance but don't need to create a new array," Alex explains. "It's **O(n) time complexity** and is ideal for side effects like logging, updating databases, or generating reports."

### Calculating Business Metrics with reduce() - The Accumulator

Jordan looks at the performance data, "Can you calculate our total revenue and average audience size?"

"Absolutely! This is where `reduce()` shines," Alex says, pulling up their laptop.

```javascript
// Calculate total revenue using reduce()
const totalRevenue = lastMonthPerformances.reduce((accumulator, performance) => {
    return accumulator + performance.revenue;
}, 0); // Start with 0

console.log(`Total revenue last month: $${totalRevenue}`);

// Calculate total audience using reduce()
const totalAudience = lastMonthPerformances.reduce((sum, performance) => {
    return sum + performance.audience;
}, 0);

console.log(`Total audience last month: ${totalAudience} people`);

// Calculate average audience size
const averageAudience = (totalAudience / lastMonthPerformances.length).toFixed(1);
console.log(`Average audience size: ${averageAudience} people`);

// More complex reduce - find the best performing venue
const venueStats = lastMonthPerformances.reduce((stats, performance) => {
    const venue = performance.venue;
    
    if (!stats[venue]) {
        stats[venue] = { totalRevenue: 0, totalAudience: 0, performances: 0 };
    }
    
    stats[venue].totalRevenue += performance.revenue;
    stats[venue].totalAudience += performance.audience;
    stats[venue].performances += 1;
    
    return stats;
}, {});

console.log("\nVenue Performance Statistics:");
Object.keys(venueStats).forEach(venue => {
    const stats = venueStats[venue];
    const avgRevenue = (stats.totalRevenue / stats.performances).toFixed(2);
    const avgAudience = (stats.totalAudience / stats.performances).toFixed(1);
    
    console.log(`${venue}:`);
    console.log(`  Performances: ${stats.performances}`);
    console.log(`  Total Revenue: $${stats.totalRevenue}`);
    console.log(`  Average Revenue: $${avgRevenue}`);
    console.log(`  Average Audience: ${avgAudience} people`);
});

// Find most popular songs using reduce
const songPopularity = lastMonthPerformances.reduce((popularity, performance) => {
    performance.songs.forEach(song => {
        popularity[song] = (popularity[song] || 0) + 1;
    });
    return popularity;
}, {});

console.log("\nSong Popularity (times performed):");
Object.entries(songPopularity)
    .sort(([,a], [,b]) => b - a)  // Sort by popularity
    .forEach(([song, count]) => {
        console.log(`  ${song}: ${count} times`);
    });
```

"The `reduce()` method is like having a super-powered calculator," Alex explains enthusiastically. "It takes all my performance data and 'reduces' it down to a single value - whether that's a total, an average, or even a complex object with statistics. It's **O(n) time complexity** and incredibly versatile."

### Extracting Specific Data with slice() - The Precision Extractor

"I need to analyze just the last two performances for this week's planning," Alex mentions while preparing for a venue meeting.

```javascript
// Extract the last two performances using slice()
const recentPerformances = lastMonthPerformances.slice(-2);
console.log("Most recent performances:");
recentPerformances.forEach(performance => {
    console.log(`- ${performance.venue} on ${performance.date}: ${performance.audience} people, $${performance.revenue}`);
});

// Extract the first half of the month's performances
const firstHalf = lastMonthPerformances.slice(0, 2);
console.log("\nFirst half of month:");
firstHalf.forEach(performance => {
    console.log(`- ${performance.venue} on ${performance.date}`);
});

// Extract middle performances (excluding first and last)
const middlePerformances = lastMonthPerformances.slice(1, -1);
console.log("\nMiddle performances:");
middlePerformances.forEach(performance => {
    console.log(`- ${performance.venue} on ${performance.date}`);
});

// Create a copy of all performances for backup
const performanceBackup = lastMonthPerformances.slice();
console.log(`\nCreated backup of ${performanceBackup.length} performances`);

// Demonstrate that slice doesn't modify the original
console.log(`Original array still has ${lastMonthPerformances.length} performances`);

// Extract specific range for quarterly report
const quarterlyData = lastMonthPerformances.slice(1, 3);
console.log("\nQuarterly report data:");
quarterlyData.forEach(performance => {
    console.log(`- ${performance.venue}: $${performance.revenue} revenue`);
});
```

Jordan nods approvingly, "So `slice()` lets you extract exactly the data you need without changing the original?"

"Exactly!" Alex confirms. "The `slice()` method is **O(k) time complexity**, where k is the number of elements I'm extracting. It's perfect for getting specific ranges of data, creating backups, or extracting samples for analysis. The original data stays completely untouched."

---
## ⏱️ **Alex's Data Analysis Challenge!** 
 - 🔓 Uncomment the below code section in the editor 👉:
```js
// ==============================
// Exercise 3: Help Alex Analyze Performance Data
// ============================== 
```

 - Read the requirements written as comments in the code.
 - Implement the required logic.
 - Click `Run Code` and inspect `📋 Console Output` window for correctness!
 - Click `Run Tests`and ensure that test(s) related to this specific exercise are passing <span class="mtk8"> Passing test will show in green text.</span>

🚧 *Some tests for future exercises may fail at first — that’s expected. As you complete each exercise, those tests will start passing. By the time you finish the final exercise, all tests in the test suite should pass.*

---

## Part 4: The Master Curator - Advanced Manipulation with splice() and Method Chaining

Alex's reputation has grown to the point where they're now curating music festivals and managing complex, multi-day events. This requires sophisticated array manipulation and the ability to chain multiple operations together elegantly.

### Precision Editing with splice() - The Swiss Army Knife

"The festival director wants me to completely restructure the lineup," Alex explains to their team while reviewing the three-day festival schedule.

```javascript
// Day 1 of the music festival lineup
let day1Lineup = [
    "Opening Ceremony",
    "Local Band A",
    "Alex's Acoustic Set",
    "Local Band B", 
    "Headliner 1",
    "Closing Fireworks"
];

console.log("Original Day 1 lineup:", day1Lineup);

// Remove "Local Band B" and replace with two different acts
let removedActs = day1Lineup.splice(3, 1, "Jazz Ensemble", "Folk Duo");
console.log("Removed:", removedActs);  // ["Local Band B"]
console.log("After replacement:", day1Lineup);
// ["Opening Ceremony", "Local Band A", "Alex's Acoustic Set", "Jazz Ensemble", "Folk Duo", "Headliner 1", "Closing Fireworks"]

// Insert a special intermission without removing anything
day1Lineup.splice(4, 0, "15-minute Intermission");
console.log("With intermission:", day1Lineup);

// Remove the last two items and replace with a grand finale
let removedEnding = day1Lineup.splice(-2, 2, "Alex's Rock Set", "Grand Finale with All Artists");
console.log("Removed ending:", removedEnding);  // ["Headliner 1", "Closing Fireworks"]
console.log("Final Day 1 lineup:", day1Lineup);

// Complex restructuring - remove multiple acts and insert new sequence
let day2Lineup = [
    "Morning Yoga Session",
    "Weak Act 1",
    "Weak Act 2", 
    "Alex's Jazz Set",
    "Weak Act 3",
    "Evening Headliner"
];

console.log("\nOriginal Day 2 lineup:", day2Lineup);

// Remove three weak acts (positions 1, 2, 4) and replace with strong lineup
let removedWeak = day2Lineup.splice(1, 2, "Rising Star Band", "Veteran Musician");
console.log("Removed weak acts:", removedWeak);
console.log("Improved lineup:", day2Lineup);

// Remove another weak act and insert multiple strong acts
day2Lineup.splice(4, 1, "Special Guest", "Surprise Collaboration", "Alex's Electronic Set");
console.log("Final Day 2 lineup:", day2Lineup);
```

"The `splice()` method is like a Swiss Army knife," Alex explains to the festival team. "It can remove elements, add elements, or do both at the same time. It's **O(n) time complexity** because elements after the splice point need to shift, but it gives me surgical precision for complex lineup changes."

### The Art of Method Chaining - Elegant Data Pipelines

"Now for the real magic," Alex says, opening their laptop to show the team how to create sophisticated data processing pipelines.

```javascript
// Alex's complete song database with rich metadata
const masterSongDatabase = [
    { title: "Thunderstruck", genre: "rock", mood: "energetic", duration: 4.8, difficulty: "medium", year: 1990, popularity: 95 },
    { title: "Hotel California", genre: "rock", mood: "mysterious", duration: 6.5, difficulty: "hard", year: 1976, popularity: 98 },
    { title: "Wonderwall", genre: "alternative", mood: "nostalgic", duration: 4.2, difficulty: "easy", year: 1995, popularity: 92 },
    { title: "Blackbird", genre: "folk", mood: "peaceful", duration: 2.3, difficulty: "medium", year: 1968, popularity: 88 },
    { title: "Sweet Child O' Mine", genre: "rock", mood: "energetic", duration: 5.8, difficulty: "hard", year: 1987, popularity: 96 },
    { title: "Tears in Heaven", genre: "ballad", mood: "emotional", duration: 4.5, difficulty: "easy", year: 1992, popularity: 89 },
    { title: "At Last", genre: "jazz", mood: "romantic", duration: 3.2, difficulty: "medium", year: 1960, popularity: 85 },
    { title: "Hallelujah", genre: "ballad", mood: "spiritual", duration: 5.1, difficulty: "easy", year: 1984, popularity: 94 },
    { title: "Bohemian Rhapsody", genre: "rock", mood: "dramatic", duration: 5.9, difficulty: "hard", year: 1975, popularity: 99 },
    { title: "Imagine", genre: "ballad", mood: "peaceful", duration: 3.1, difficulty: "easy", year: 1971, popularity: 97 }
];

// Create a perfect wedding setlist using method chaining
const weddingSetlist = masterSongDatabase
    .filter(song => song.mood === "romantic" || song.mood === "peaceful" || song.mood === "emotional")
    .filter(song => song.difficulty !== "hard")  // Keep it manageable for intimate setting
    .map(song => ({
        title: song.title,
        duration: song.duration,
        arrangement: "acoustic guitar and vocals",
        specialNote: `Perfect for ${song.mood} moments`
    }))
    .slice(0, 4);  // Limit to 4 songs for intimate ceremony

console.log("Perfect Wedding Setlist:");
weddingSetlist.forEach((song, index) => {
    console.log(`${index + 1}. ${song.title} (${song.duration}min) - ${song.specialNote}`);
});

// Create a rock festival setlist with popularity scoring
const rockFestivalSetlist = masterSongDatabase
    .filter(song => song.genre === "rock")
    .filter(song => song.popularity > 90)
    .map(song => ({
        ...song,
        festivalScore: song.popularity + (song.mood === "energetic" ? 10 : 0),
        expectedCrowdResponse: song.popularity > 95 ? "Explosive" : "Enthusiastic"
    }))
    .sort((a, b) => b.festivalScore - a.festivalScore)  // Sort by festival score
    .slice(0, 5);  // Top 5 songs

console.log("\nRock Festival Setlist (by crowd impact):");
rockFestivalSetlist.forEach((song, index) => {
    console.log(`${index + 1}. ${song.title} (Score: ${song.festivalScore}, Response: ${song.expectedCrowdResponse})`);
});

// Calculate total performance statistics using chaining
const performanceStats = masterSongDatabase
    .filter(song => song.difficulty !== "hard")  // Only manageable songs
    .reduce((stats, song) => {
        stats.totalDuration += song.duration;
        stats.averagePopularity += song.popularity;
        stats.songCount += 1;
        stats.genres[song.genre] = (stats.genres[song.genre] || 0) + 1;
        return stats;
    }, { totalDuration: 0, averagePopularity: 0, songCount: 0, genres: {} });

// Finalize the statistics
performanceStats.averagePopularity = (performanceStats.averagePopularity / performanceStats.songCount).toFixed(1);

console.log("\nPerformance Statistics for Manageable Songs:");
console.log(`Total Duration: ${performanceStats.totalDuration.toFixed(1)} minutes`);
console.log(`Average Popularity: ${performanceStats.averagePopularity}%`);
console.log(`Song Count: ${performanceStats.songCount}`);
console.log("Genre Distribution:", performanceStats.genres);

// Create a dynamic setlist based on time constraints
function createTimedSetlist(availableMinutes, preferredMood = null) {
    return masterSongDatabase
        .filter(song => preferredMood ? song.mood === preferredMood : true)
        .sort((a, b) => b.popularity - a.popularity)  // Start with most popular
        .reduce((setlist, song) => {
            const currentDuration = setlist.reduce((total, s) => total + s.duration, 0);
            if (currentDuration + song.duration <= availableMinutes) {
                setlist.push(song);
            }
            return setlist;
        }, [])
        .map((song, index) => ({
            position: index + 1,
            title: song.title,
            duration: song.duration,
            cumulativeTime: song.duration // Will be calculated properly below
        }));
}

// Calculate cumulative time properly
const thirtyMinuteSet = createTimedSetlist(30, "energetic");
let runningTime = 0;
thirtyMinuteSet.forEach(song => {
    runningTime += song.duration;
    song.cumulativeTime = runningTime.toFixed(1);
});

console.log("\n30-Minute Energetic Set:");
thirtyMinuteSet.forEach(song => {
    console.log(`${song.position}. ${song.title} (${song.duration}min) - Running total: ${song.cumulativeTime}min`);
});
```

"Method chaining is like conducting an orchestra," Alex explains with enthusiasm. "Each method is like a different section of musicians, and when you chain them together, you create a beautiful, complex performance from simple individual parts."

Maya looks amazed, "So you can filter, transform, sort, and calculate all in one smooth operation?"

"Exactly! Each method returns an array, so I can immediately call the next method on the result. It's **O(n) time complexity** for each method in the chain, but the code reads like a story - filter the songs I want, transform them how I need, sort by importance, and extract exactly what I need."

---

## ⏱️ **Alex's Festival Curation Challenge!**
- 🔓 Uncomment the below code section in the editor 👉:
```js
// ==============================
// Exercise 4: Help Alex Master Method Chaining and Advanced Array Operations
// ==============================
```
- Read the requirements written as comments in the code.
- Implement the required logic.
- Click `Run Code` and inspect `📋 Console Output` window for correctness!
- Click `Run Tests`and ensure that test(s) related to this specific exercise are passing 
<span class="mtk8"> Passing test will show in green text.</span>


*Some tests for future exercises may fail at first — that’s expected. As you complete each exercise, those tests will start passing. By the time you finish the final exercise, all tests in the test suite should pass. *


---

## Alex's Array Mastery: From Street Musician to Data Wizard

As Alex packs up after another successful festival, they reflect on how far they've come. What started as simple setlist management has evolved into sophisticated data processing that powers their entire musical enterprise.

### 🎯 **The Complete Array Methods Toolkit**

#### **Core Modification Methods - The Foundation**
- **`push()`** (O(1)): "Adding songs to the end of my setlist - always fast"
- **`pop()`** (O(1)): "Removing the last song when time runs short - instant"
- **`unshift()`** (O(n)): "Adding opening acts - powerful but requires shifting"
- **`shift()`** (O(n)): "Removing finished acts - necessary but slower"

#### **Transformation Methods - The Creative Tools**
- **`map()`** (O(n)): "Creating venue-specific versions of every song"
- **`filter()`** (O(n)): "Selecting perfect songs for each occasion"

#### **Analysis Methods - The Business Intelligence**
- **`forEach()`** (O(n)): "Processing each performance for reports and alerts"
- **`reduce()`** (O(n)): "Calculating totals, averages, and complex statistics"
- **`slice()`** (O(k)): "Extracting specific data ranges without changing originals"

#### **Advanced Manipulation - The Precision Tools**
- **`splice()`** (O(n)): "Surgical editing of festival lineups and complex arrangements"

### 🎸 **Alex's Method Selection Philosophy**

"Tonight taught me that choosing the right array method is like choosing the right instrument for a song," Alex muses while reviewing their performance analytics. "Each method has its perfect use case:"

```javascript
// Alex's decision framework for array methods
class ArrayMethodSelector {
    static chooseMethod(task, dataSize, performanceNeeds) {
        if (task === "add_to_end" || task === "remove_from_end") {
            return "Use push()/pop() - O(1) operations, always fast";
        }
        
        if (task === "transform_all_elements") {
            return "Use map() - O(n) but creates clean new data";
        }
        
        if (task === "select_subset") {
            return "Use filter() - O(n) but perfect for criteria-based selection";
        }
        
        if (task === "calculate_single_value") {
            return "Use reduce() - O(n) but incredibly powerful for aggregation";
        }
        
        if (task === "process_with_side_effects") {
            return "Use forEach() - O(n) and perfect for logging/updating";
        }
        
        if (task === "extract_range") {
            return "Use slice() - O(k) and non-destructive";
        }
        
        if (task === "complex_editing") {
            return "Use splice() - O(n) but surgical precision";
        }
        
        if (task === "multiple_operations") {
            return "Use method chaining - readable and powerful";
        }
        
        return "Consider the performance needs and data flow";
    }
}

// Alex's performance optimization guidelines
const optimizationTips = [
    "Favor O(1) operations (push/pop) during live performances",
    "Use method chaining for complex data processing in preparation",
    "Choose filter() + map() over forEach() when creating new data",
    "Use reduce() for calculations, forEach() for side effects",
    "Remember: slice() preserves originals, splice() modifies them",
    "Chain methods to create readable data processing pipelines"
];

console.log("Alex's Array Method Mastery Guidelines:");
optimizationTips.forEach((tip, index) => {
    console.log(`${index + 1}. ${tip}`);
});
```

### 🌟 **From Basic Operations to Advanced Data Processing**

Alex started the evening knowing only basic array operations. By mastering JavaScript's built-in array methods, they've transformed their musical career into a data-driven enterprise that can:

1. **Dynamically adapt setlists** using push/pop for real-time changes
2. **Create venue-specific arrangements** using map transformations
3. **Curate perfect playlists** using filter selections
4. **Analyze business performance** using reduce calculations
5. **Generate detailed reports** using forEach processing
6. **Extract specific data ranges** using slice operations
7. **Perform complex lineup editing** using splice modifications
8. **Build sophisticated data pipelines** using method chaining

### 🎵 **The Symphony of Array Methods**

"The beautiful thing about mastering array methods," Alex tells Jordan while reviewing their quarterly performance data, "is that they work together like instruments in an orchestra. Each method has its own voice, but when you combine them thoughtfully, you can create something truly magnificent."

Jordan nods, looking at the elegant code that now powers their entire operation, "It's like you've turned data processing into an art form."

Alex grins, closing their laptop and picking up their guitar, "That's exactly what it is. Whether I'm managing songs or managing data, it's all about understanding the tools, knowing when to use each one, and combining them creatively to achieve something greater than the sum of their parts."

*Ready for the next adventure? Let's see how Alex applies these array method skills to tackle even more complex programming challenges...*