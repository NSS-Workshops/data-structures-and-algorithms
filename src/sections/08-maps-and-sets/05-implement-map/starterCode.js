/*
Problem: Building a Custom HashMap for Patient Records

David has shown you how to build a HashMap from scratch using hash tables.
Your job is to implement the core functionality that powers the patient records system!

Hash Table Components:
- Hash function: Converts keys to array indices
- Buckets: Array positions that store key-value pairs
- Collision handling: Multiple entries per bucket using arrays
- Dynamic resizing: Maintaining performance as data grows

Complete the methods below to build a working HashMap!
*/

// ⏱️ Sarah's First Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
class CustomHashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity);
    this.loadFactor = loadFactor;
    this.size = 0;
    this.capacity = initialCapacity;
  }
  
  hash(key) {
    // Convert key to array index using string character codes
    // Use prime number 31 for good distribution
    
    const stringKey = String(key);
    let hash = 0;
    
    // TODO: Implement hash function
    // Hint: Loop through characters, use charCodeAt() and modulo
    
    return hash;
  }
  
  set(key, value) {
    // Add or update a key-value pair
    const index = this.hash(key);
    
    // TODO: Handle three scenarios:
    // 1. Empty bucket - create new array
    // 2. Existing key - update value
    // 3. New key in occupied bucket - add to array
    
    console.log(`Set ${key} at index ${index}`);
  }
  
  get(key) {
    // Retrieve value by key
    const index = this.hash(key);
    
    // TODO: Search through bucket for the key
    // Return value if found, undefined if not found
    
    return undefined;
  }
}
*/

// ⏱️ Sarah's Second Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
// Add these methods to your CustomHashMap class:

has(key) {
  // Check if key exists in the map
  // Similar to get() but return boolean
  
  // TODO: Implement has method
  // Hint: Use similar logic to get() but return true/false
  
  return false;
}

delete(key) {
  // Remove key-value pair from the map
  // Return true if deleted, false if key not found
  
  const index = this.hash(key);
  
  // TODO: Find and remove the entry from the bucket
  // Update size counter if successful
  // Hint: Use array.splice() to remove from bucket array
  
  return false;
}

clear() {
  // Remove all entries from the map
  
  // TODO: Reset buckets array and size counter
  // Hint: Create new array and set size to 0
}

getSize() {
  // Return the number of key-value pairs
  return this.size;
}
*/

// ⏱️ Sarah's Third Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
// Add these utility methods to your CustomHashMap class:

keys() {
  // Return array of all keys in the map
  const allKeys = [];
  
  // TODO: Iterate through all buckets and collect keys
  // Hint: Use nested loops - outer for buckets, inner for entries
  
  return allKeys;
}

values() {
  // Return array of all values in the map
  const allValues = [];
  
  // TODO: Iterate through all buckets and collect values
  // Similar to keys() but collect entry.value instead
  
  return allValues;
}

entries() {
  // Return array of [key, value] pairs
  const allEntries = [];
  
  // TODO: Iterate through all buckets and collect [key, value] pairs
  // Hint: Push [entry.key, entry.value] for each entry
  
  return allEntries;
}

forEach(callback) {
  // Execute callback function for each key-value pair
  // Callback receives (value, key, map) as parameters
  
  // TODO: Iterate through all entries and call callback
  // Hint: Call callback(entry.value, entry.key, this) for each entry
}
*/