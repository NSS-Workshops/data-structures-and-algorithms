# Building a Custom Set from Scratch

## Understanding Set Implementation

Just like Maps, Sets are built on hash table principles. A Set is essentially a simplified Map where we only care about the keys (values), not key-value pairs.

## The Challenge: Custom Set for Healthcare

"Now that you understand how Maps work internally," David continued, "let's build a custom Set for our allergy tracking system. Sets are actually simpler than Maps because we only need to store values, not key-value pairs."

## Building Our Custom Set

```javascript
class CustomSet {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity);
    this.loadFactor = loadFactor;
    this.size = 0;
    this.capacity = initialCapacity;
  }
  
  hash(value) {
    const valueStr = String(value);
    let hash = 0;
    
    for (let i = 0; i < valueStr.length; i++) {
      const char = valueStr.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    
    return Math.abs(hash) % this.capacity;
  }
  
  add(value) {
    const index = this.hash(value);
    
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    
    const bucket = this.buckets[index];
    
    // Check if value already exists
    for (const existingValue of bucket) {
      if (existingValue === value) {
        return; // Value already exists, don't add duplicate
      }
    }
    
    // Add new value
    bucket.push(value);
    this.size++;
    
    // Check if we need to resize
    if (this.size > this.capacity * this.loadFactor) {
      this.resize();
    }
  }
  
  has(value) {
    const index = this.hash(value);
    const bucket = this.buckets[index];
    
    if (!bucket) {
      return false;
    }
    
    return bucket.includes(value);
  }
  
  delete(value) {
    const index = this.hash(value);
    const bucket = this.buckets[index];
    
    if (!bucket) {
      return false;
    }
    
    const valueIndex = bucket.indexOf(value);
    if (valueIndex !== -1) {
      bucket.splice(valueIndex, 1);
      this.size--;
      return true;
    }
    
    return false;
  }
  
  resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity);
    this.size = 0;
    
    // Rehash all values
    for (const bucket of oldBuckets) {
      if (bucket) {
        for (const value of bucket) {
          this.add(value);
        }
      }
    }
  }
  
  values() {
    const result = [];
    for (const bucket of this.buckets) {
      if (bucket) {
        result.push(...bucket);
      }
    }
    return result;
  }
  
  clear() {
    this.buckets = new Array(this.capacity);
    this.size = 0;
  }
}
```

## Key Differences from Map Implementation

1. **Simpler Storage**: Only values, no key-value pairs
2. **Duplicate Prevention**: Automatically prevents duplicate values
3. **Hash Function**: Same principle but only hashes the value
4. **Memory Efficient**: Less memory overhead than Maps

## Performance Analysis

**Time Complexity:**
- **add()**: O(1) average, O(n) worst case
- **has()**: O(1) average, O(n) worst case
- **delete()**: O(1) average, O(n) worst case

**Space Complexity:**
- O(n) where n is the number of unique values

## Real-World Application

```javascript
// Using our custom Set for allergy tracking
const patientAllergies = new CustomSet();

// Add allergies (duplicates automatically prevented)
patientAllergies.add('Penicillin');
patientAllergies.add('Shellfish');
patientAllergies.add('Penicillin'); // Duplicate - won't be added

console.log(patientAllergies.size); // 2
console.log(patientAllergies.has('Penicillin')); // true
console.log(patientAllergies.has('Aspirin')); // false

// Remove an allergy
patientAllergies.delete('Shellfish');
console.log(patientAllergies.values()); // ['Penicillin']
```

## Key Takeaways

- **Sets are simplified Maps** - only store values, not key-value pairs
- **Automatic deduplication** - prevents duplicate values by design
- **Hash-based implementation** - provides O(1) average performance
- **Memory efficient** - less overhead than equivalent Map storage
- **Perfect for membership testing** - instant "does this exist?" queries
- **Healthcare applications** - ideal for allergy lists, procedure tracking
- **Understanding internals** - helps optimize Set usage in applications

Ready to implement your own Set from scratch? Let's dive into the exercises!