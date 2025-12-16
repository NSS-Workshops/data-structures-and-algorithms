/*
Problem: Building a Custom HashSet for Allergy Safety

Complete solution showing how to implement a hash table-based Set from scratch.
*/

class CustomHashSet {
  constructor() {
    this.map = new Map();
  }
  
  add(value) {
    const wasNew = !this.map.has(value);
    this.map.set(value, true); // Use dummy value
    return wasNew;
  }
  
  has(value) {
    return this.map.has(value);
  }
  
  delete(value) {
    return this.map.delete(value);
  }
  
  size() {
    return this.map.size;
  }
  
  clear() {
    this.map.clear();
  }
  
  values() {
    return Array.from(this.map.keys());
  }
  
  union(otherSet) {
    const resultSet = new CustomHashSet();
    
    // Add all values from this set
    this.forEach(value => {
      resultSet.add(value);
    });
    
    // Add all values from other set
    otherSet.forEach(value => {
      resultSet.add(value);
    });
    
    return resultSet;
  }
  
  intersection(otherSet) {
    const resultSet = new CustomHashSet();
    
    this.forEach(value => {
      if (otherSet.has(value)) {
        resultSet.add(value);
      }
    });
    
    return resultSet;
  }
  
  difference(otherSet) {
    const resultSet = new CustomHashSet();
    
    this.forEach(value => {
      if (!otherSet.has(value)) {
        resultSet.add(value);
      }
    });
    
    return resultSet;
  }
  
  forEach(callback) {
    this.map.forEach((_, value) => {
      callback(value, value, this);
    });
  }
  
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }
    
    let isSubset = true;
    this.forEach(value => {
      if (!otherSet.has(value)) {
        isSubset = false;
      }
    });
    
    return isSubset;
  }
  
  isEmpty() {
    return this.size() === 0;
  }
  
  equals(otherSet) {
    if (this.size() !== otherSet.size()) {
      return false;
    }
    
    return this.isSubsetOf(otherSet);
  }
}