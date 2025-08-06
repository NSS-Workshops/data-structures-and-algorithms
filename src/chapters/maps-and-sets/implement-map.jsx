import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";
import { TestResult } from "../../utils/test_utils";

export const implementMapChapter = {
  id: 'implement-map',
  title: 'Building the Foundation - Creating a Custom Map from Scratch',
  sectionId: 'maps-and-sets',
  previousChapterId: 'use-cases',
  content: `
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

\`\`\`
Patient ID: "P-2024-001"
           ↓ (hash function)
Array Index: 7
           ↓
Bucket[7]: { key: "P-2024-001", value: {patient data} }
\`\`\`

"The hash function takes any patient ID and converts it into an array index," David continued. "This gives us **O(1) lookup time** - we go directly to the right location instead of searching."

Sarah nodded thoughtfully. "But what if two different patient IDs end up with the same array index?"

"Excellent question! That's called a **collision**, and it's one of the main challenges we need to solve when building a hash table."

## Handling Collisions: The Chaining Approach

David pulled up another diagram showing how collisions are handled. "There are several ways to handle collisions, but we'll use **separate chaining** - storing multiple key-value pairs at each array index using a linked list or array."

\`\`\`
Array Index 7:
┌─────────────────────────────────────────────────────────┐
│ [{ key: "P-2024-001", value: {John's data} },          │
│  { key: "P-2024-157", value: {Mary's data} }]          │
└─────────────────────────────────────────────────────────┘
\`\`\`

"When we get a collision, we just add the new entry to the list at that index. When we search, we check each entry in the list until we find the right key."

"That's brilliant," Sarah said. "So even with collisions, we can still store and retrieve all our patient data."

"Exactly! Now let's build our custom HashMap step by step."

## ⏱️ Sarah's First Challenge!

David opened a coding environment. "Let's start with the foundation - implementing the hash function. This is the heart of our Map implementation."

"The hash function needs to take any key and convert it to an array index," David explained. "For our patient records system, we'll create a function that works well with patient ID strings."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement the \`hash()\` method to convert keys to array indices
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

\`\`\`javascript
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
        console.log(\`Updated existing key: \${key}\`);
        return;
      }
    }
    
    // Key doesn't exist, add new entry (collision or new bucket)
    this.buckets[index].push({ key, value });
    this.size++;
    console.log(\`Added new key: \${key} at index \${index}\`);
    
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
\`\`\`

"Notice how we handle collisions," David pointed out. "Multiple entries can exist at the same index, but we search through them to find the exact key we want."

## ⏱️ Sarah's Second Challenge!

"Now let's implement the remaining core operations," David said, opening another coding challenge. "We need **has**, **delete**, and **clear** methods to complete our basic Map functionality."

"The **has** method is like **get**, but we only care about existence, not the value," David explained. "The **delete** method needs to remove an entry and update our size counter."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`has()\`, \`delete()\`, and \`clear()\` methods
- Handle collision scenarios properly in delete
- Update size counters correctly
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge teaches you how to maintain data integrity while modifying the hash table," David explained.

## The Resize Challenge: Dynamic Growth

As Sarah worked through the challenges, David pulled up a performance monitoring dashboard. "Here's something crucial that most people don't think about - **dynamic resizing**."

"What do you mean?" Sarah asked, looking up from her code.

"As we add more patient records, our hash table gets more crowded. More collisions mean longer search times. We need to **resize** the hash table when it gets too full."

David showed her a graph of performance over time. "See how lookup times increase as the hash table fills up? That's why we use a **load factor** - when the table is 75% full, we double its size and **rehash** all existing entries."

\`\`\`javascript
resize() {
  console.log(\`Resizing from \${this.capacity} to \${this.capacity * 2}\`);
  
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
\`\`\`

"This is fascinating," Sarah said. "So the hash table automatically optimizes itself as it grows?"

"Exactly! This keeps our O(1) performance even as we add thousands of patient records."

## ⏱️ Sarah's Third Challenge!

"Now for the final challenge," David said with a smile. "Let's implement the utility methods that make our HashMap truly useful - **keys()**, **values()**, **entries()**, and **forEach()**."

"These methods allow us to iterate through all our patient records, which is essential for generating reports and performing bulk operations."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`keys()\`, \`values()\`, \`entries()\`, and \`forEach()\` methods
- Handle empty buckets properly during iteration
- Return arrays for keys, values, and entries
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge teaches you how to traverse the entire hash table efficiently," David explained.

## Real-World Application: Patient Records System

After Sarah completed all the challenges, David opened the hospital's actual patient records system. "Now let me show you how we'd use our custom HashMap in the real patient records system."

\`\`\`javascript
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
    
    console.log(\`Patient \${patientId} added to system\`);
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
      throw new Error(\`Patient \${patientId} not found\`);
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
    
    console.log(\`Patient \${patientId} updated\`);
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
      const ageKey = \`\${ageGroup}-\${ageGroup + 9}\`;
      
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
\`\`\`

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

## Looking Ahead: Sets and Advanced Structures

As their session wound down, David smiled at Sarah's obvious enthusiasm. "Tomorrow, we'll take what you've learned about hash tables and use it to build a custom **Set** implementation."

"How is that different from what we just built?" Sarah asked.

"Great question! A Set is like a Map where we only care about the keys, not the values. It's perfect for tracking things like patient allergies, completed procedures, or visited departments - situations where we only need to know if something exists, not store additional data about it."

Sarah thought about it. "So it's like our HashMap, but simpler because we don't need to store values?"

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

Through hands-on implementation, Sarah discovered that Maps aren't just built-in language features - they're sophisticated data structures that can be customized and optimized for specific applications. The simple act of storing patient records had revealed the elegant engineering behind one of computer science's most important and useful data structures.`,
  exercise: {
    starterCode: `/*
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
    
    console.log(\`Set \${key} at index \${index}\`);
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
*/`,
    solution: `
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
    
    console.log(\`Set \${key} at index \${index}\`);
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
}`,
    tests: [
      {
        name: "Test hash function and basic set/get operations",
        test: (code) => {
          try {
            const testCode = code + `
            // Test basic HashMap functionality
            const map = new CustomHashMap(8); // Small capacity for testing
            
            let hashResult1 = -1;
            let hashResult2 = -1;
            let setResult = false;
            let getValue = null;
            let getNonExistent = null;
            
            if (typeof map.hash === 'function') {
              hashResult1 = map.hash('test');
              hashResult2 = map.hash('test'); // Should be same
            }
            
            if (typeof map.set === 'function' && typeof map.get === 'function') {
              try {
                map.set('patient1', { name: 'John Doe', age: 45 });
                setResult = true;
                getValue = map.get('patient1');
                getNonExistent = map.get('nonexistent');
              } catch (e) { setResult = false; }
            }
            
            return ({
              hashResult1: hashResult1,
              hashResult2: hashResult2,
              hashConsistent: hashResult1 === hashResult2,
              hashInRange: hashResult1 >= 0 && hashResult1 < 8,
              setResult: setResult,
              getValue: getValue,
              getNonExistent: getNonExistent,
              mapSize: map.getSize ? map.getSize() : -1
            });
            `;
            
            const testResult = new Function(testCode)();
            
            if (testResult.hashResult1 === -1) {
              return new TestResult({ passed: false, message: "hash function not found. Make sure to uncomment and implement it." });
            }
            
            if (!testResult.hashConsistent) {
              return new TestResult({ passed: false, message: "hash function should return consistent results for the same key" });
            }
            
            if (!testResult.hashInRange) {
              return new TestResult({ passed: false, message: "hash function should return index within array bounds (0 to capacity-1)" });
            }
            
            if (!testResult.setResult) {
              return new TestResult({ passed: false, message: "set function not working. Make sure to implement set method properly." });
            }
            
            if (!testResult.getValue || testResult.getValue.name !== 'John Doe') {
              return new TestResult({ passed: false, message: "get function should return the correct value for existing keys" });
            }
            
            if (testResult.getNonExistent !== undefined) {
              return new TestResult({ passed: false, message: "get function should return undefined for non-existent keys" });
            }
            
            if (testResult.mapSize !== 1) {
              return new TestResult({ passed: false, message: "size should be tracked correctly when adding entries" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "Hash function should distribute keys properly and basic set/get operations should work correctly."
      },
      {
        name: "Test has, delete, and clear operations",
        test: (code) => {
          try {
            const testCode = code + `
            // Test has, delete, and clear operations
            const map = new CustomHashMap();
            
            // Add some test data
            if (typeof map.set === 'function') {
              map.set('patient1', { name: 'John' });
              map.set('patient2', { name: 'Jane' });
            }
            
            let hasResult1 = false;
            let hasResult2 = false;
            let deleteResult1 = false;
            let deleteResult2 = false;
            let sizeAfterDelete = -1;
            let sizeAfterClear = -1;
            
            if (typeof map.has === 'function') {
              hasResult1 = map.has('patient1');
              hasResult2 = map.has('nonexistent');
            }
            
            if (typeof map.delete === 'function') {
              deleteResult1 = map.delete('patient1');
              deleteResult2 = map.delete('nonexistent');
              sizeAfterDelete = map.getSize();
            }
            
            if (typeof map.clear === 'function') {
              map.clear();
              sizeAfterClear = map.getSize();
            }
            
            return ({
              hasResult1: hasResult1,
              hasResult2: hasResult2,
              deleteResult1: deleteResult1,
              deleteResult2: deleteResult2,
              sizeAfterDelete: sizeAfterDelete,
              sizeAfterClear: sizeAfterClear
            });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.hasResult1 === 'undefined') {
              return new TestResult({ passed: false, message: "has function not found. Make sure to uncomment and implement it." });
            }
            
            if (testResult.hasResult1 !== true) {
              return new TestResult({ passed: false, message: "has function should return true for existing keys" });
            }
            
            if (testResult.hasResult2 !== false) {
              return new TestResult({ passed: false, message: "has function should return false for non-existent keys" });
            }
            
            if (testResult.deleteResult1 !== true) {
              return new TestResult({ passed: false, message: "delete function should return true when deleting existing keys" });
            }
            
            if (testResult.deleteResult2 !== false) {
              return new TestResult({ passed: false, message: "delete function should return false when deleting non-existent keys" });
            }
            
            if (testResult.sizeAfterDelete !== 1) {
              return new TestResult({ passed: false, message: "size should be updated correctly after deletion" });
            }
            
            if (testResult.sizeAfterClear !== 0) {
              return new TestResult({ passed: false, message: "clear function should reset size to 0" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "has, delete, and clear operations should work correctly and maintain proper size tracking."
      },
      {
        name: "Test iteration methods (keys, values, entries, forEach)",
        test: (code) => {
          try {
            const testCode = code + `
            // Test iteration methods
            const map = new CustomHashMap();
            
            // Add test data
            if (typeof map.set === 'function') {
              map.set('patient1', { name: 'John', age: 45 });
              map.set('patient2', { name: 'Jane', age: 32 });
              map.set('patient3', { name: 'Bob', age: 28 });
            }
            
            let keys = [];
            let values = [];
            let entries = [];
            let forEachResults = [];
            
            if (typeof map.keys === 'function') {
              keys = map.keys();
            }
            
            if (typeof map.values === 'function') {
              values = map.values();
            }
            
            if (typeof map.entries === 'function') {
              entries = map.entries();
            }
            
            if (typeof map.forEach === 'function') {
              map.forEach((value, key, mapRef) => {
                forEachResults.push({ key, name: value.name, hasMapRef: mapRef === map });
              });
            }
            
            return ({
              keys: keys.sort(),
              values: values.map(v => v.name).sort(),
              entries: entries.length,
              forEachCount: forEachResults.length,
              forEachHasMapRef: forEachResults.every(r => r.hasMapRef),
              keysIncludesPatient1: keys.includes('patient1'),
              valuesIncludesJohn: values.some(v => v.name === 'John')
            });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.keys === 'undefined') {
              return new TestResult({ passed: false, message: "keys function not found. Make sure to uncomment and implement it." });
            }
            
            if (!Array.isArray(testResult.keys) || testResult.keys.length !== 3) {
              return new TestResult({ passed: false, message: "keys function should return array of all keys" });
            }
            
            if (!testResult.keysIncludesPatient1) {
              return new TestResult({ passed: false, message: "keys function should include all added keys" });
            }
            
            if (!Array.isArray(testResult.values) || testResult.values.length !== 3) {
              return new TestResult({ passed: false, message: "values function should return array of all values" });
            }
            
            if (!testResult.valuesIncludesJohn) {
              return new TestResult({ passed: false, message: "values function should include all added values" });
            }
            
            if (testResult.entries !== 3) {
              return new TestResult({ passed: false, message: "entries function should return array of [key, value] pairs" });
            }
            
            if (testResult.forEachCount !== 3) {
              return new TestResult({ passed: false, message: "forEach function should call callback for each entry" });
            }
            
            if (!testResult.forEachHasMapRef) {
              return new TestResult({ passed: false, message: "forEach callback should receive (value, key, map) parameters" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "Iteration methods should traverse all entries correctly and provide proper callback parameters."
      },
    ]
  },
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();

        return (
          <main>
            <h2>Custom Map Implementation Questions</h2>
            <form className="auto-graded-quiz">
              <div
                className="question"
                data-answers="Hash function converts keys to array indices,Separate chaining handles collisions,Dynamic resizing maintains performance"
              >
                <p>
                  Which components are essential for implementing a custom HashMap?
                </p>

                <label>
                  <input
                    type="checkbox"
                    value="Hash function converts keys to array indices"
                  />{" "}
                  🔢 Hash function converts keys to array indices
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Linked list for maintaining insertion order"
                  />{" "}
                  🔗 Linked list for maintaining insertion order
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Separate chaining handles collisions"
                  />{" "}
                  ⛓️ Separate chaining handles collisions
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Binary search tree for sorted keys"
                  />{" "}
                  🌳 Binary search tree for sorted keys
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Dynamic resizing maintains performance"
                  />{" "}
                  📈 Dynamic resizing maintains performance
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Queue for processing operations" /> 📋
                  Queue for processing operations
                </label>
                <div className="feedback"></div>
                <div className="explanation">
                  <ul>
                    <li>
                      <strong>Hash function:</strong> ✅ Correct — Essential for converting keys to array indices.
                    </li>
                    <li>
                      <strong>Insertion order:</strong> ❌ Incorrect — Not required for basic HashMap functionality.
                    </li>
                    <li>
                      <strong>Separate chaining:</strong> ✅ Correct — Handles collisions by storing multiple entries per bucket.
                    </li>
                    <li>
                      <strong>Binary search tree:</strong> ❌ Incorrect — Not needed for hash table implementation.
                    </li>
                    <li>
                      <strong>Dynamic resizing:</strong> ✅ Correct — Maintains O(1) performance as data grows.
                    </li>
                    <li>
                      <strong>Queue:</strong> ❌ Incorrect — Not part of hash table structure.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="question" data-answer="O(1)">
                <p>
                  What is the average time complexity for hash table operations like
                  set, get, and delete in a well-implemented HashMap?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  Hash table operations are O(1) constant time on average when the hash
                  function distributes keys well and the load factor is maintained.
                  This makes HashMaps ideal for applications requiring fast lookups
                  like patient records systems.
                </div>
              </div>

              <div className="question" data-answer="0.75">
                <p>
                  What is the typical load factor threshold used to trigger
                  dynamic resizing in hash tables? (Enter as decimal, e.g., 0.75)
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  A load factor of 0.75 (75%) is commonly used as the threshold for
                  resizing hash tables. This balances memory usage with performance -
                  keeping the table from becoming too crowded while not wasting
                  excessive space.
                </div>
              </div>

              <button className="code-button test-button" type="submit">
                Submit
              </button>
            </form>
          </main>
        );
      };

      return <CheckpointComponent />;
    },
  },
};