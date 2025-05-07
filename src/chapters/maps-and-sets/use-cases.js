export const useCasesChapter = {
  id: 'use-cases',
  title: 'Use Cases for Key-Value and Uniqueness Structures',
  sectionId: 'maps-and-sets',
  previousChapterId: 'sets-intro',
  content: `## Use Cases for Key-Value and Uniqueness Structures

Maps and Sets are powerful data structures that solve specific types of problems efficiently. This chapter explores practical use cases where these structures shine.

TBD

## Frequency Counting with Maps

Maps are ideal for counting occurrences of items in a collection:

\`\`\`javascript
function countFrequency(array) {
  const frequencyMap = new Map();
  
  for (const item of array) {
    if (frequencyMap.has(item)) {
      frequencyMap.set(item, frequencyMap.get(item) + 1);
    } else {
      frequencyMap.set(item, 1);
    }
  }
  
  return frequencyMap;
}

// Example usage
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCounts = countFrequency(fruits);

console.log(fruitCounts.get('apple')); // 3
console.log(fruitCounts.get('banana')); // 2
console.log(fruitCounts.get('orange')); // 1
\`\`\`

TBD

## Fast Lookup with Maps

Maps provide O(1) average time complexity for lookups, making them excellent for scenarios requiring quick access to data:

\`\`\`javascript
// User database with O(1) lookup by ID
const userDatabase = new Map();

// Add users
userDatabase.set('user123', { name: 'Alice', email: 'alice@example.com', role: 'admin' });
userDatabase.set('user456', { name: 'Bob', email: 'bob@example.com', role: 'editor' });
userDatabase.set('user789', { name: 'Charlie', email: 'charlie@example.com', role: 'viewer' });

// Fast user lookup
function getUser(userId) {
  return userDatabase.has(userId) ? userDatabase.get(userId) : null;
}

// Example usage
const user = getUser('user456');
console.log(user); // { name: 'Bob', email: 'bob@example.com', role: 'editor' }
\`\`\`

TBD

## Deduplication with Sets

Sets automatically handle uniqueness, making them perfect for removing duplicates:

\`\`\`javascript
function removeDuplicates(array) {
  return [...new Set(array)];
}

// Example usage
const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 5];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
\`\`\`

TBD

## Caching with Maps

Maps are excellent for implementing caching mechanisms:

\`\`\`javascript
// Memoization example: Fibonacci with caching
function fibonacciWithCache() {
  const cache = new Map();
  
  function fib(n) {
    // Check if result is in cache
    if (cache.has(n)) {
      return cache.get(n);
    }
    
    // Base cases
    if (n <= 1) {
      return n;
    }
    
    // Calculate and cache result
    const result = fib(n - 1) + fib(n - 2);
    cache.set(n, result);
    
    return result;
  }
  
  return fib;
}

const fibonacci = fibonacciWithCache();
console.log(fibonacci(40)); // Fast calculation with caching
\`\`\`

TBD

## Two-Way Mappings

Maps can be used to create bidirectional mappings:

\`\`\`javascript
class BiMap {
  constructor() {
    this.map = new Map();
    this.reverseMap = new Map();
  }
  
  set(key, value) {
    this.map.set(key, value);
    this.reverseMap.set(value, key);
  }
  
  get(key) {
    return this.map.get(key);
  }
  
  getKey(value) {
    return this.reverseMap.get(value);
  }
  
  has(key) {
    return this.map.has(key);
  }
  
  hasValue(value) {
    return this.reverseMap.has(value);
  }
  
  delete(key) {
    const value = this.map.get(key);
    this.map.delete(key);
    this.reverseMap.delete(value);
  }
  
  size() {
    return this.map.size;
  }
}

// Example: Country code mapping
const countryMap = new BiMap();
countryMap.set('US', 'United States');
countryMap.set('CA', 'Canada');
countryMap.set('MX', 'Mexico');

console.log(countryMap.get('CA')); // 'Canada'
console.log(countryMap.getKey('Mexico')); // 'MX'
\`\`\`

TBD

## Grouping Data with Maps

Maps are useful for grouping related data:

\`\`\`javascript
function groupBy(array, keyFunc) {
  const groups = new Map();
  
  for (const item of array) {
    const key = keyFunc(item);
    
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    
    groups.get(key).push(item);
  }
  
  return groups;
}

// Example: Group people by age
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'Dave', age: 30 },
  { name: 'Eve', age: 35 }
];

const peopleByAge = groupBy(people, person => person.age);

console.log(peopleByAge.get(25)); // [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }]
console.log(peopleByAge.get(30)); // [{ name: 'Bob', age: 30 }, { name: 'Dave', age: 30 }]
\`\`\`

TBD

## Set Operations for Data Analysis

Set operations are valuable for data analysis and comparison:

\`\`\`javascript
// Find common elements between two arrays
function findCommonElements(array1, array2) {
  const set1 = new Set(array1);
  return array2.filter(item => set1.has(item));
}

// Example: Find common skills between job requirements and candidate
const jobRequirements = ['JavaScript', 'React', 'Node.js', 'SQL', 'Git'];
const candidateSkills = ['JavaScript', 'React', 'Angular', 'Git', 'Python'];

const matchingSkills = findCommonElements(jobRequirements, candidateSkills);
console.log(matchingSkills); // ['JavaScript', 'React', 'Git']
\`\`\`

TBD

## Implementing a Simple LRU Cache

Maps can be used to implement more complex data structures like an LRU (Least Recently Used) cache:

\`\`\`javascript
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  
  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    
    // Get value and refresh position by deleting and re-adding
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    
    return value;
  }
  
  put(key, value) {
    // If key exists, remove it first
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    // If at capacity, remove oldest item (first item in map)
    else if (this.cache.size >= this.capacity) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    
    // Add new key-value pair
    this.cache.set(key, value);
  }
}

// Example usage
const cache = new LRUCache(2);
cache.put(1, 1); // cache is {1=1}
cache.put(2, 2); // cache is {1=1, 2=2}
console.log(cache.get(1)); // returns 1, cache is now {2=2, 1=1}
cache.put(3, 3); // removes key 2, cache is {1=1, 3=3}
console.log(cache.get(2)); // returns -1 (not found)
\`\`\`

TBD`,
  exercise: null
};