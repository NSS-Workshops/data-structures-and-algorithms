We are about to look under the hood of the [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) data structure, <strong>watch until minute 3:20 only!</strong>
<iframe width="560" height="315" src="https://www.youtube.com/embed/t-vM3LJDfug?si=xUHZi4tAguRDz9ck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

This chapter gives you a peek behind the scenes at how JavaScript’s built-in Map() works under the hood. Even though we get this powerful data structure “for free” in the language, exploring the nuts and bolts that make it possible will build your intuition for using it effectively. It can also help you spot and fix tricky Map-related bugs. And beyond that, it’s great practice for sharpening your problem-solving skills—and maybe even impressing your friends (or your interviewer :D ).


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

## ⏱️ Sarah's First Challenge!

David opened a coding environment. "Let's start with the foundation - implementing the hash function. This is the heart of our Map implementation."

"The hash function needs to take any key and convert it to an array index," David explained. "For our patient records system, we'll create a function that works well with patient ID strings."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement the `hash()` method to convert keys to array indices
- Use string character codes and a prime number for good distribution
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge teaches you how hash functions distribute keys across the array," David explained. "A good hash function is crucial for performance."

## Building the Core Operations

After Sarah completed the hash function challenge, David smiled approvingly. "Perfect! Now let's implement the core Map operations. We'll start with **set** and **get** - the fundamental operations that make Maps useful."

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
    const stringKey = String(key);
    let hash = 0;
    
    for (let i = 0; i < stringKey.length; i++) {
      // Use prime number 31 for better distribution
      hash = (hash * 31 + stringKey.charCodeAt(i)) % this.capacity;
    }
    
    return hash;
  }
  
  set(key, value) {
    const index = this.hash(key);
    
    // If bucket is empty, create new array
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    
    // Check if key already exists (update scenario)
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i].key === key) {
        this.buckets[index][i].value = value;
        console.log(`Updated existing key: \${key}`);
        return;
      }
    }
    
    // Key doesn't exist, add new entry (collision or new bucket)
    this.buckets[index].push({ key, value });
    this.size++;
    console.log(`Added new key: \${key} at index \${index}`);
    
    // Check if we need to resize
    if (this.size > this.capacity * this.loadFactor) {
      this.resize();
    }
  }
  
  get(key) {
    const index = this.hash(key);
    
    if (!this.buckets[index]) {
      return undefined;
    }
    
    // Search through the bucket for the key
    for (const entry of this.buckets[index]) {
      if (entry.key === key) {
        return entry.value;
      }
    }
    
    return undefined;
  }
}
```

"Notice how we handle collisions," David pointed out. "Multiple entries can exist at the same index, but we search through them to find the exact key we want."

## ⏱️ Sarah's Second Challenge!

"Now let's implement the remaining core operations," David said, opening another coding challenge. "We need **has**, **delete**, and **clear** methods to complete our basic Map functionality."

"The **has** method is like **get**, but we only care about existence, not the value," David explained. "The **delete** method needs to remove an entry and update our size counter."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement `has()`, `delete()`, and `clear()` methods
- Handle collision scenarios properly in delete
- Update size counters correctly
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge teaches you how to maintain data integrity while modifying the hash table," David explained.

## The Resize Challenge: Dynamic Growth

As Sarah worked through the challenges, David pulled up a performance monitoring dashboard. "Here's something crucial that most people don't think about - **dynamic resizing**."

"What do you mean?" Sarah asked, looking up from her code.

"As we add more patient records, our hash table gets more crowded. More collisions mean longer search times. We need to **resize** the hash table when it gets too full."

David leaned closer to the screen. "Here’s the other part people forget — when two different keys land in the same slot, the engine tucks them into a little chain hanging off that bucket. If there are only a few, it’s still lightning fast. But as more pile into the same spot, the engine has to walk that chain one by one to find what you’re looking for. In the absolute worst case, if everything ended up in a single bucket, a lookup could take as long as searching through the whole table — O(n) time instead of O(1)."

He pointed back to the dashboard. "That’s why we say map operations are amortized constant time. Most of the time they’re blazing fast, but collisions remind us that it isn’t a perfect guarantee.

David showed her a graph of performance over time. "See how lookup times increase as the hash table fills up? That's why we use a **load factor** - when the table is 75% full, we double its size and **rehash** all existing entries."

```javascript
resize() {
  console.log(`Resizing from \${this.capacity} to \${this.capacity * 2}`);
  
  const oldBuckets = this.buckets;
  this.capacity = this.capacity * 2;
  this.buckets = new Array(this.capacity);
  this.size = 0; // Will be recalculated as we re-add entries
  
  // Rehash all existing entries
  for (const bucket of oldBuckets) {
    if (bucket) {
      for (const entry of bucket) {
        this.set(entry.key, entry.value);
      }
    }
  }
}
```

"This is fascinating," Sarah said. "So the hash table automatically optimizes itself as it grows?"

"Exactly! This keeps our O(1) performance even as we add thousands of patient records."

## ⏱️ Sarah's Third Challenge!

"Now for the final challenge," David said with a smile. "Let's implement the utility methods that make our HashMap truly useful - **keys()**, **values()**, **entries()**, and **forEach()**."

"These methods allow us to iterate through all our patient records, which is essential for generating reports and performing bulk operations."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement `keys()`, `values()`, `entries()`, and `forEach()` methods
- Handle empty buckets properly during iteration
- Return arrays for keys, values, and entries
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge teaches you how to traverse the entire hash table efficiently," David explained.

## Real-World Application: Patient Records System

After Sarah completed all the challenges, David opened the hospital's actual patient records system. "Now let me show you how we'd use our custom HashMap in the real patient records system."

```javascript
class PatientRecordsSystem {
  constructor() {
    this.patientMap = new CustomHashMap(32, 0.75); // Start larger for hospital use
    this.auditLog = [];
  }
  
  addPatient(patientId, patientData) {
    // Add audit logging
    this.auditLog.push({
      action: 'ADD_PATIENT',
      patientId: patientId,
      timestamp: new Date(),
      user: 'Dr. Chen'
    });
    
    // Add patient to our custom map
    this.patientMap.set(patientId, {
      ...patientData,
      createdAt: new Date(),
      lastModified: new Date()
    });
    
    console.log(`Patient \${patientId} added to system`);
  }
  
  getPatient(patientId) {
    const patient = this.patientMap.get(patientId);
    
    if (patient) {
      // Log access for compliance
      this.auditLog.push({
        action: 'ACCESS_PATIENT',
        patientId: patientId,
        timestamp: new Date(),
        user: 'Dr. Chen'
      });
    }
    
    return patient;
  }
  
  updatePatient(patientId, updates) {
    const existingPatient = this.patientMap.get(patientId);
    
    if (!existingPatient) {
      throw new Error(`Patient \${patientId} not found`);
    }
    
    // Merge updates with existing data
    const updatedPatient = {
      ...existingPatient,
      ...updates,
      lastModified: new Date()
    };
    
    this.patientMap.set(patientId, updatedPatient);
    
    // Log the update
    this.auditLog.push({
      action: 'UPDATE_PATIENT',
      patientId: patientId,
      changes: Object.keys(updates),
      timestamp: new Date(),
      user: 'Dr. Chen'
    });
    
    console.log(`Patient \${patientId} updated`);
  }
  
  generateReport() {
    const report = {
      totalPatients: this.patientMap.getSize(),
      patientsByAge: new Map(),
      recentActivity: this.auditLog.slice(-10) // Last 10 actions
    };
    
    // Analyze patient demographics using our custom iteration
    this.patientMap.forEach((patientData, patientId) => {
      const ageGroup = Math.floor(patientData.age / 10) * 10; // Group by decade
      const ageKey = `\${ageGroup}-\${ageGroup + 9}`;
      
      if (report.patientsByAge.has(ageKey)) {
        report.patientsByAge.set(ageKey, report.patientsByAge.get(ageKey) + 1);
      } else {
        report.patientsByAge.set(ageKey, 1);
      }
    });
    
    return report;
  }
  
  getSystemStats() {
    return {
      totalPatients: this.patientMap.getSize(),
      hashTableCapacity: this.patientMap.capacity,
      loadFactor: this.patientMap.size / this.patientMap.capacity,
      totalAuditEntries: this.auditLog.length
    };
  }
}
```

"This is incredible," Sarah said, studying the code. "Our custom HashMap isn't just storing data - it's the foundation for an entire patient management system with audit logging, reporting, and performance monitoring."

## Performance Analysis: Why Our Implementation Matters

David pulled up a performance comparison chart. "Let's talk about why building our own HashMap matters for the hospital."

### Time Complexity Analysis

| Operation | Average Case | Worst Case | Real-World Impact |
|-----------|--------------|------------|-------------------|
| **set(key, value)** | O(1) | O(n) | Instant patient record creation |
| **get(key)** | O(1) | O(n) | Immediate patient lookup in emergencies |
| **has(key)** | O(1) | O(n) | Quick patient existence verification |
| **delete(key)** | O(1) | O(n) | Fast record archival |
| **resize()** | O(n) | O(n) | Automatic performance optimization |

"The worst-case O(n) happens when many keys hash to the same bucket," David explained. "But with a good hash function and proper resizing, this is extremely rare."

### Space Complexity

"Our HashMap uses O(n) space where n is the number of patient records. The dynamic resizing means we use about 25% extra space to maintain performance, which is a great trade-off for a hospital system."

## Advantages of Our Custom Implementation

David opened a comparison document. "Here's why our custom HashMap is better than just using JavaScript's built-in Map for our hospital system:"

### 1. **Custom Hash Function**
- Optimized for patient ID patterns
- Better distribution for our specific data
- Reduced collisions for hospital-specific keys

### 2. **Audit Logging Integration**
- Every operation can be logged for compliance
- HIPAA-compliant access tracking
- Built-in security monitoring

### 3. **Performance Monitoring**
- Real-time load factor tracking
- Automatic resize notifications
- Custom metrics for hospital operations

### 4. **Specialized Methods**
- Hospital-specific reporting functions
- Custom iteration patterns for medical data
- Integration with existing hospital systems

"Exactly! And because it's simpler, we can optimize it in different ways. We can also implement powerful set operations like union, intersection, and difference - operations that are crucial for medical data analysis."

As Sarah helped David organize the code examples for the day, she felt a deep sense of accomplishment. What had started as learning about patient records had evolved into understanding the fundamental building blocks of computer science.

"David," Sarah said as they prepared to leave, "I never imagined that building data structures from scratch could be so practical and powerful."

David's smile was warm and knowing. "That's the wonderful thing about working in healthcare technology, Sarah. Every algorithm we implement, every data structure we optimize, has the potential to help save lives. Tomorrow, we'll discover how Sets can help us track patient allergies and ensure medication safety."

## Key Takeaways

By the end of their session, Sarah had learned that:

- **Hash tables are the foundation of Maps** - converting keys to array indices for O(1) access
- **Hash functions determine performance** - good distribution prevents collisions and maintains speed
- **Collision handling is crucial** - separate chaining allows multiple entries per bucket
- **Dynamic resizing maintains performance** - load factor monitoring prevents degradation
- **Custom implementations enable specialization** - audit logging, custom metrics, and domain-specific optimizations
- **Real-world applications require more than basic operations** - reporting, monitoring, and integration capabilities
- **Understanding internals improves usage** - knowing how Maps work helps optimize their use
- **Building from scratch teaches fundamental concepts** - hash functions, collision resolution, and performance trade-offs

Through hands-on implementation, Sarah discovered that Maps aren't just built-in language features - they're sophisticated data structures that can be customized and optimized for specific applications. The simple act of storing patient records had revealed the elegant engineering behind one of computer science's most important and useful data structures.