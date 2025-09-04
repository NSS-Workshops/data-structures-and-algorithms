
// Customer asks for "Hotel" but the full title is "Hotel California"
function findAlbumsStartingWith(sortedCollection, prefix) {
  // Find the first album that starts with the prefix
  let left = 0;
  let right = sortedCollection.length - 1;
  let firstMatch = -1;
  
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    const currentTitle = sortedCollection[mid].title;
    
    if (currentTitle.toLowerCase().startsWith(prefix.toLowerCase())) {
      firstMatch = mid;
      right = mid - 1; // Keep looking for earlier matches
    } else if (currentTitle.toLowerCase() < prefix.toLowerCase()) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  // Collect all albums starting with the prefix
  const matches = [];
  if (firstMatch !== -1) {
    for (let i = firstMatch; i < sortedCollection.length; i++) {
      if (sortedCollection[i].title.toLowerCase().startsWith(prefix.toLowerCase())) {
        matches.push(sortedCollection[i]);
      } else {
        break;
      }
    }
  }
  
  return matches;
}
