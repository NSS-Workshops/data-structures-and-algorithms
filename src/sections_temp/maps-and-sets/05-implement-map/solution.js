/*
Problem: Building a Custom HashMap for Patient Records

Complete solution showing how to implement a hash table-based Map from scratch.
*/

class CustomHashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity);
    this.loadFactor = loadFactor;
    this.size = 0;
    this.capacity = initialCapacity;
  }
  
  hash(key) {
    const stringKey = String(key);
    let hash = 0;
    
    for (let i = 0; i < stringKey.length; i++) {
      hash = (hash * 31 + stringKey.charCodeAt(i)) % this.capacity;
    }
    
    return hash;
  }
  
  set(key, value) {
    const index = this.hash(key);
    
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    
    // Check if key already exists
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i].key === key) {
        this.buckets[index][i].value = value;
        return;
      }
    }
    
    // Key doesn't exist, add new entry
    this.buckets[index].push({ key, value });
    this.size++;
    
    console.log(`Set ${key} at index ${index}`);
  }
  
  get(key) {
    const index = this.hash(key);
    
    if (!this.buckets[index]) {
      return undefined;
    }
    
    for (const entry of this.buckets[index]) {
      if (entry.key === key) {
        return entry.value;
      }
    }
    
    return undefined;
  }
  
  has(key) {
    const index = this.hash(key);
    
    if (!this.buckets[index]) {
      return false;
    }
    
    for (const entry of this.buckets[index]) {
      if (entry.key === key) {
        return true;
      }
    }
    
    return false;
  }
  
  delete(key) {
    const index = this.hash(key);
    
    if (!this.buckets[index]) {
      return false;
    }
    
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i].key === key) {
        this.buckets[index].splice(i, 1);
        this.size--;
        return true;
      }
    }
    
    return false;
  }
  
  clear() {
    this.buckets = new Array(this.capacity);
    this.size = 0;
  }
  
  getSize() {
    return this.size;
  }
  
  keys() {
    const allKeys = [];
    
    for (const bucket of this.buckets) {
      if (bucket) {
        for (const entry of bucket) {
          allKeys.push(entry.key);
        }
      }
    }
    
    return allKeys;
  }
  
  values() {
    const allValues = [];
    
    for (const bucket of this.buckets) {
      if (bucket) {
        for (const entry of bucket) {
          allValues.push(entry.value);
        }
      }
    }
    
    return allValues;
  }
  
  entries() {
    const allEntries = [];
    
    for (const bucket of this.buckets) {
      if (bucket) {
        for (const entry of bucket) {
          allEntries.push([entry.key, entry.value]);
        }
      }
    }
    
    return allEntries;
  }
  
  forEach(callback) {
    for (const bucket of this.buckets) {
      if (bucket) {
        for (const entry of bucket) {
          callback(entry.value, entry.key, this);
        }
      }
    }
  }
}