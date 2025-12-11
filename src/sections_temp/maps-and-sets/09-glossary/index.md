# Glossary: Maps and Sets

This glossary contains important terms and concepts related to maps and sets. Understanding these terms will help you communicate effectively about algorithms and data structures during interviews and technical discussions.

## Core Map Concepts

**Map** - A JavaScript data structure that stores key-value pairs, like a patient ID linked to their medical record. Think of it as a super-powered phone book where you can instantly find information using a unique identifier. *Week 6*

**Key** - The unique identifier in a Map (like a patient ID 'P-2024-001'). Keys can be any data type - strings, numbers, objects, or even functions! *Week 6*

**Value** - The information stored with a key in a Map (like all the patient's medical data). This is what you get back when you look up a key. *Week 6*

**Key-Value Pair** - The combination of a key and its associated value in a Map. Like 'P-2024-001' → {name: 'John Doe', room: '302A'}. *Week 6*

## Core Set Concepts

**Set** - A JavaScript data structure that stores unique values with no duplicates, like a patient's allergy list. Perfect for tracking 'yes/no' information - does this patient have this allergy? *Week 6*

**Unique Values** - In a Set, each value can only appear once. If you try to add 'Penicillin' twice to an allergy Set, it will ignore the duplicate. *Week 6*

**Membership Test** - Checking if something exists in a Set or Map. Like asking 'Does this patient have a Penicillin allergy?' - you get a simple yes/no answer. *Week 6*

## Map Operations

**set() Method** - Adds or updates a key-value pair in a Map. If the key already exists, it completely replaces the old value with the new one. *Week 6*

**get() Method** - Retrieves the value associated with a key in a Map. Returns the value if found, or undefined if the key doesn't exist. *Week 6*

**has() Method** - Checks if a key exists in a Map or if a value exists in a Set. Returns true or false - perfect for quick existence checks. *Week 6*

**delete() Method** - Removes a key-value pair from a Map or a value from a Set. Returns true if something was actually removed, false if it wasn't there. *Week 6*

## Set Operations

**add() Method** - Adds a value to a Set. If the value already exists, it's ignored (no duplicates allowed). Great for building lists of unique items. *Week 6*

## Key Concepts from Content

**Override Behavior** - When you set() the same key twice in a Map, the second value completely replaces the first. This is powerful but can be dangerous if you're not careful! *Week 6*

**Reference vs Value Comparison** - Primitive values (strings, numbers) are compared by their actual value, but objects are compared by reference. Two objects with identical content are still different keys/values. *Week 6*

**Defensive Programming** - Writing code that checks for invalid inputs (like null or undefined) before processing them. Essential for healthcare systems where bad data could be dangerous. *Week 6*

## Performance Concepts

**O(1) Time Complexity** - Constant time - Map and Set operations take the same amount of time whether you have 10 items or 10,000 items. This makes them incredibly fast for lookups. *Week 6*

**Hash Function** - A function that converts keys or values into array indices for fast access. The quality of the hash function determines the performance of Maps and Sets. *Week 6*

**Collision** - When two different keys or values hash to the same array index. Hash tables use various strategies like chaining to handle collisions. *Week 6*

**Load Factor** - The ratio of stored items to total capacity in a hash table. When the load factor gets too high, the hash table resizes to maintain performance. *Week 6*

## Set Mathematical Operations

**Intersection** - Finding values that exist in both Sets. Like finding allergies that two family members share. Create a new Set with only the common elements. *Week 6*

**Union** - Combining two Sets to include all unique values from both. Like creating a complete family allergy history from multiple patients' records. *Week 6*

**Difference** - Finding values that exist in one Set but not another. Useful for identifying what's missing or what's unique to one collection. *Week 6*

## Advanced Concepts

**Hash Table** - The underlying data structure that powers Maps and Sets. Uses hash functions to map keys/values to array indices for O(1) access. *Week 6*

**Separate Chaining** - A collision resolution strategy that stores multiple items at the same hash table index using arrays or linked lists. *Week 6*

**Dynamic Resizing** - The process of expanding a hash table when it becomes too full, rehashing all existing items to maintain performance. *Week 6*

**Cache** - Using Maps to store frequently accessed data for quick retrieval. Common pattern in web applications and databases. *Week 6*

**Frequency Counting** - Using Maps to count occurrences of items. Keys represent the items, values represent their counts. *Week 6*

**Deduplication** - Using Sets to remove duplicate values from collections. Much more efficient than array-based approaches. *Week 6*

## Real-World Applications

**Patient Records** - Maps linking patient IDs to medical information for instant healthcare data access. *Week 6*

**Allergy Tracking** - Sets storing unique patient allergies for fast medication safety checks. *Week 6*

**Emergency Dispatch** - Maps and Sets managing emergency resources, incident tracking, and response coordination. *Week 6*

**Caching Systems** - Maps storing computed results to avoid expensive recalculations. *Week 6*

**User Sessions** - Maps tracking active user sessions and their associated data. *Week 6*

**Inventory Management** - Sets tracking unique product IDs and Maps linking products to their details. *Week 6*

Understanding these terms will help you discuss Maps and Sets confidently in technical interviews and professional development conversations!