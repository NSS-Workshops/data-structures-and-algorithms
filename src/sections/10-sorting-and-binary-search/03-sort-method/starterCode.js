////// EXERCISE 1: complete these functions

// Sort by release year (newest first)
function sortByYear(collection) {
  //return the appropriate value
  //tip: the result of subtraction will be the positive, negative or zero value we need
  return 0;
}

// Sort by artist name
function sortByArtist(collection) {
  //the string method localeCompare() is handy for typical alphabetical sorting, and facilitates internationalization
  //look it up if you need to reference how it works
  return 0;
}

// Sort by condition (custom order)
function sortByCondition(collection) {
  //we can define whatever logic we want to compare on whatever fields. 
  // Use this object to compare between conditions, which are stored as strings
  const conditionOrder = { "mint": 1, "very good": 2, "good": 3, "fair": 4 };
  return 0;
}



////// EXERCISE 2: complete these functions

//  Case-Insensitive Artist Sorting: Handle artists with different capitalization
function sortByArtistIgnoreCase(collection) {
  //use a comparison function that makes both strings lower case before comparing
}

// Custom Business Logic: Sort by "popularity" - a combination of price and condition
function sortByPopularity(collection) {
  const conditionMultiplier = { "mint": 1.2, "very good": 1.0, "good": 0.8, "fair": 0.6 };
  
  return collection.sort((a, b) => {
    //multiply the value for the condition by price to get the value for popularity and compare those
  });
}




////// Some test data and calls to test out these functions

const vinylCollection = [
  {
    title: "Abbey Road",
    artist: "The Beatles",
    releaseYear: 1969,
    price: 24.99,
    condition: "mint"
  },
  {
    title: "Dark Side of the Moon",
    artist: "Pink Floyd",
    releaseYear: 1973,
    price: 29.99,
    condition: "very good"
  },
  {
    title: "Thriller",
    artist: "Michael Jackson",
    releaseYear: 1982,
    price: 19.99,
    condition: "good"
  }
];