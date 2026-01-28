
function findAlbumsStartingWith(sortedCollection, prefix) {

  // start by setting left and right pointers to the first and last indices of our collection,
  // set firstMatch to -1, a placeholder
  
  while (left <= right) {
    
    //set a variable called mid, to the middle index between our pointers
    //set a variable currentTitle to the title property of the element at mid
    
    //check if that title starts with the specified prefix string (bonus: make it case insensitive)
        //if so, set firstMatch to this element, then move the right pointer just left of mid to search for an earlier match
        //if the currentTitle is before ( < ) the prefix, set left to right after mid to search the right half next
        //otherwise, set right to just before mid to search the left half next
  }
  
  // Collect all albums starting with the prefix
  const matches = [];
  if (firstMatch !== -1) {
    //if we found at least one match, iterate through the collection starting with that and keep adding records as long as they start with the prefix
  }
  
  return matches;
}


////// Some test data and calls to test out these functions
const vinylCollection = [
  {
    title: "Abbey Road",
    artist: "The Beatles",
  },
  {
    title: "Back in Black",
    artist: "AC/DC",
  },
  {
    title: "Born to Run",
    artist: "Bruce Springsteen",
  },
  {
    title: "Born in the U.S.A.",
    artist: "Bruce Springsteen",
  },
  {
    title: "Brothers in Arms",
    artist: "Dire Straits",
  },
  {
    title: "Dark Side of the Moon",
    artist: "Pink Floyd",
  },
  {
    title: "Desperado",
    artist: "Eagles",
  },
  {
    title: "Fleetwood Mac",
    artist: "Fleetwood Mac",
  },
  {
    title: "Hotel California",
    artist: "Eagles",
  },
  {
    title: "Houses of the Holy",
    artist: "Led Zeppelin",
  },
  {
    title: "Hysteria",
    artist: "Def Leppard",
  },
  {
    title: "Led Zeppelin IV",
    artist: "Led Zeppelin",
  },
  {
    title: "Let It Be",
    artist: "The Beatles",
  },
  {
    title: "Let It Bleed",
    artist: "The Rolling Stones",
  },
  {
    title: "London Calling",
    artist: "The Clash",
  },
  {
    title: "Nevermind",
    artist: "Nirvana",
  },
  {
    title: "Physical Graffiti",
    artist: "Led Zeppelin",
  },
  {
    title: "Purple Rain",
    artist: "Prince",
  },
  {
    title: "Rumours",
    artist: "Fleetwood Mac",
  },
  {
    title: "Sgt. Pepper's Lonely Hearts Club Band",
    artist: "The Beatles",
  },
  {
    title: "The Wall",
    artist: "Pink Floyd",
  },
  {
    title: "Thriller",
    artist: "Michael Jackson",
  },
  {
    title: "Who's Next",
    artist: "The Who",
  }
];

// Customer asks for "ho" and should find Hotel California and Houses of the Holy
const albums = findAlbumsStartingWith(vinylCollection, "ho");
console.log(albums);