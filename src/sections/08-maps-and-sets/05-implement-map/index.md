We are about to look under the hood of the [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) data structure, **watch until minute 3:20 only!**

<iframe width="560" height="315" src="https://www.youtube.com/embed/t-vM3LJDfug?si=xUHZi4tAguRDz9ck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

This chapter gives you a peek behind the scenes at how JavaScript's built-in Map() works under the hood. Even though we get this powerful data structure "for free" in the language, exploring the nuts and bolts that make it possible will build your intuition for using it effectively. It can also help you spot and fix tricky Map-related bugs. And beyond that, it's great practice for sharpening your problem-solving skills—and maybe even impressing your friends (or your interviewer :D ).

## The Challenge: Building a Better System

Three weeks had passed since Dr. Sarah Chen's introduction to Maps at Mercy General Hospital, and she had become increasingly fascinated with how these data structures powered their patient records system. This morning, she found herself in the hospital's IT department, sitting across from David Kim, the lead software architect who had been with the hospital for over eight years.

"Dr. Chen," David said, adjusting his glasses as he pulled up several code windows on his monitor, "I'm glad you're here. We've been using JavaScript's built-in Map for our patient records, but we're running into some limitations. We need a custom implementation that can handle our specific requirements."

Sarah leaned forward with interest. "What kind of limitations?"

"Well," David explained, "we need better control over how patient IDs are hashed, we want to add custom logging for compliance, and we need to optimize for our specific data patterns. The only way to do this is to **build our own Map from scratch** using hash tables."

"Build our own Map?" Sarah's eyes widened. "Is that even possible?"

David smiled. "Not only is it possible, it's exactly how JavaScript's Map works internally. Today, I'm going to show you how to implement a hash table-based Map that could power our entire patient records system."

## Understanding the Foundation: Hash Tables

David opened a whiteboard application and began sketching. "Before we build our Map, we need to understand **hash tables** - the data structure that makes Maps so fast."

"Think of a hash table like the hospital's room directory," David explained, drawing a simple diagram. "Instead of searching through every room to find a patient, we use a **hash function** to convert the patient ID directly into a room number."

```
Patient ID: "P-2024-001"
           ↓ (hash function)
Array Index: 7
           ↓
Bucket[7]: { key: "P-2024-001", value: {patient data} }
```

"The hash function takes any patient ID and converts it into an array index," David continued. "This gives us **O(1) lookup time** - we go directly to the right location instead of searching."

Sarah nodded thoughtfully. "But what if two different patient IDs end up with the same array index?"

"Excellent question! That's called a **collision**, and it's one of the main challenges we need to solve when building a hash table."

## Handling Collisions: The Chaining Approach

David pulled up another diagram showing how collisions are handled. "There are several ways to handle collisions, but we'll use **separate chaining** - storing multiple key-value pairs at each array index using a linked list or array."

```
Array Index 7:
┌─────────────────────────────────────────────────────────┐
│ [{ key: "P-2024-001", value: {John's data} },          │
│  { key: "P-2024-157", value: {Mary's data} }]          │
└─────────────────────────────────────────────────────────┘
```

"When we get a collision, we just add the new entry to the list at that index. When we search, we check each entry in the list until we find the right key."

"That's brilliant," Sarah said. "So even with collisions, we can still store and retrieve all our patient data."

"Exactly! Now let's build our custom HashMap step by step."

## Building the Core Operations

"Remember," David said, "our HashMap needs to handle three scenarios when setting a value:"

1. **Empty bucket**: Create a new list and add the entry
2. **Existing key**: Update the value for that key
3. **New key in occupied bucket**: Add to the existing list (collision handling)

```javascript
class CustomHashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity);
    this.loadFactor = loadFactor;
    this.size = 0;
    this.capacity = initialCapacity;
  }
  
  hash(key) {
    // Convert key to string and calculate hash
    const keyStr = String(key);
    let hash = 0;
    
    for (let i = 0; i < keyStr.length; i++) {
      const char = keyStr.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    
    return Math.abs(hash) % this.capacity;
  }
  
  set(key, value) {
    const index = this.hash(key);
    
    if (!this.buckets[index]) {
      // Empty bucket - create new chain
      this.buckets[index] = [];
    }
    
    // Check if key already exists
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        // Update existing key
        bucket[i].value = value;
        return;
      }
    }
    
    // New key - add to chain
    bucket.push({ key, value });
    this.size++;
    
    // Check if we need to resize
    if (this.size > this.capacity * this.loadFactor) {
      this.resize();
    }
  }
  
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    
    if (!bucket) {
      return undefined;
    }
    
    // Search through the chain
    for (const entry of bucket) {
      if (entry.key === key) {
        return entry.value;
      }
    }
    
    return undefined;
  }
  
  has(key) {
    return this.get(key) !== undefined;
  }
  
  delete(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    
    if (!bucket) {
      return false;
    }
    
    // Find and remove the entry
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }
    
    return false;
  }
  
  resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity);
    this.size = 0;
    
    // Rehash all entries
    for (const bucket of oldBuckets) {
      if (bucket) {
        for (const entry of bucket) {
          this.set(entry.key, entry.value);
        }
      }
    }
  }
}
```

## Performance Analysis

"Now let's analyze the performance of our custom HashMap," David explained:

**Time Complexity:**
- **set()**: O(1) average, O(n) worst case
- **get()**: O(1) average, O(n) worst case  
- **has()**: O(1) average, O(n) worst case
- **delete()**: O(1) average, O(n) worst case

**Space Complexity:**
- O(n) where n is the number of key-value pairs

"The worst case happens when all keys hash to the same bucket, creating a long chain. But with a good hash function and proper load factor management, we maintain O(1) average performance."

## Key Takeaways

By building their own HashMap, Sarah learned:

- **Hash functions** convert keys to array indices for O(1) access
- **Collision handling** allows multiple entries at the same index
- **Load factor management** maintains performance through resizing
- **Separate chaining** handles collisions using arrays at each bucket
- **Dynamic resizing** prevents performance degradation as data grows
- **Custom implementations** allow optimization for specific use cases
- **Understanding internals** helps debug and optimize Map usage
- **Hash table principles** apply to many other data structures

"Building your own Map gives you deep insight into how these powerful data structures work," David concluded. "Even though you'll usually use the built-in Map, understanding the implementation helps you use it more effectively."

Ready to implement your own Map from scratch? Let's dive into the exercises!