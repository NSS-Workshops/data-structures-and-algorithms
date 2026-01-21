/*
Problem: Building a Custom HashSet for Allergy Safety

Maria has shown you how to build a HashSet from scratch using hash tables.
Your job is to implement the core functionality that powers the medication safety system!

Set Components:
- Unique values only (no duplicates)
- Fast membership testing with O(1) operations
- Mathematical set operations (union, intersection, difference)
- Built on hash table foundation for performance

Complete the methods below to build a working HashSet!
*/

// ⏱️ Sarah's First Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
class CustomHashSet {
  constructor() {
    // Use Map internally, treating values as keys
    this.map = new Map();
  }
  
  add(value) {
    // Add a value to the set (ignore duplicates)
    // Return true if value was added, false if it already existed
    
    // TODO: Check if value exists, add if new
    // Hint: Use map.has() to check, map.set() to add with dummy value
    
    return false; // Replace with actual implementation
  }
  
  has(value) {
    // Check if value exists in the set
    
    // TODO: Use internal map to check membership
    // Hint: Delegate to map.has()
    
    return false;
  }
  
  delete(value) {
    // Remove value from the set
    // Return true if deleted, false if value not found
    
    // TODO: Remove value from internal map
    // Hint: Delegate to map.delete()
    
    return false;
  }
  
  size() {
    // Return number of values in the set
    return this.map.size;
  }
  
  clear() {
    // Remove all values from the set
    this.map.clear();
  }
  
  values() {
    // Return array of all values in the set
    return Array.from(this.map.keys()); // Keys are our values in a Set
  }
}
*/

// ⏱️ Sarah's Second Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
// Add these set operation methods to your CustomHashSet class:

union(otherSet) {
  // Create new set with all values from both sets
  const resultSet = new CustomHashSet();
  
  // TODO: Add all values from this set and other set
  // Hint: Use forEach to iterate, add() to insert
  
  return resultSet;
}

intersection(otherSet) {
  // Create new set with values that exist in both sets
  const resultSet = new CustomHashSet();
  
  // TODO: Add values that exist in both sets
  // Hint: Iterate through this set, check if otherSet has each value
  
  return resultSet;
}

difference(otherSet) {
  // Create new set with values from this set that don't exist in other set
  const resultSet = new CustomHashSet();
  
  // TODO: Add values from this set that aren't in other set
  // Hint: Iterate through this set, add if not in otherSet
  
  return resultSet;
}

forEach(callback) {
  // Execute callback for each value in the set
  // Callback receives (value, value, set) - value appears twice for Set compatibility
  
  // TODO: Iterate through all values and call callback
  // Hint: Use map.forEach, but adapt parameters for Set semantics
}
*/

// ⏱️ Sarah's Third Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
// Add these utility methods to your CustomHashSet class:

isSubsetOf(otherSet) {
  // Check if this set is a subset of another set
  // Return true if all values in this set exist in other set
  
  // TODO: Check if every value in this set exists in otherSet
  // Hint: If this set is larger, it can't be a subset
  
  return false;
}

isEmpty() {
  // Check if the set has no values
  
  // TODO: Return true if set is empty
  // Hint: Check if size is 0
  
  return false;
}

equals(otherSet) {
  // Check if two sets contain exactly the same values
  
  // TODO: Compare sizes and check if all values match
  // Hint: Same size and this set is subset of other set
  
  return false;
}
*/