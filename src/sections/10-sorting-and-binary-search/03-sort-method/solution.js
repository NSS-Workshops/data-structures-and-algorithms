////// EXERCISE 1: complete these functions

// Sort by release year (newest first)
function sortByYear(collection) {
  return collection.sort((a, b) => b.releaseYear - a.releaseYear);
}

// Sort by artist name
function sortByArtist(collection) {
  return collection.sort((a, b) => a.artist.localeCompare(b.artist));
}

// Sort by condition (custom order)
function sortByCondition(collection) {
  const conditionOrder = { "mint": 1, "very good": 2, "good": 3, "fair": 4 };
  return collection.sort((a, b) => conditionOrder[a.condition] - conditionOrder[b.condition]);
}


////// EXERCISE 2: complete these functions

//  Case-Insensitive Artist Sorting: Handle artists with different capitalization
function sortByArtistIgnoreCase(collection) {
  return collection.sort((a, b) =>
    a.artist.toLowerCase().localeCompare(b.artist.toLowerCase())
  );
}

// Custom Business Logic: Sort by "popularity" - a combination of price and condition
function sortByPopularity(collection) {
  const conditionMultiplier = { "mint": 1.2, "very good": 1.0, "good": 0.8, "fair": 0.6 };
  
  return collection.sort((a, b) => {
    const aScore = a.price * conditionMultiplier[a.condition];
    const bScore = b.price * conditionMultiplier[b.condition];
    return bScore - aScore; // Higher score first
  });
}