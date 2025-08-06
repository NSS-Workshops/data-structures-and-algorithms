import { formatGlossary } from "../../utils/format_utils";

const data = [
  // Core Map Concepts
  { term: "Map", definition: "A JavaScript data structure that stores key-value pairs, like a patient ID linked to their medical record. Think of it as a super-powered phone book where you can instantly find information using a unique identifier.", week: "6"},
  { term: "Key", definition: "The unique identifier in a Map (like a patient ID 'P-2024-001'). Keys can be any data type - strings, numbers, objects, or even functions!", week: "6"},
  { term: "Value", definition: "The information stored with a key in a Map (like all the patient's medical data). This is what you get back when you look up a key.", week: "6"},
  { term: "Key-Value Pair", definition: "The combination of a key and its associated value in a Map. Like 'P-2024-001' → {name: 'John Doe', room: '302A'}.", week: "6"},
  
  // Core Set Concepts
  { term: "Set", definition: "A JavaScript data structure that stores unique values with no duplicates, like a patient's allergy list. Perfect for tracking 'yes/no' information - does this patient have this allergy?", week: "6"},
  { term: "Unique Values", definition: "In a Set, each value can only appear once. If you try to add 'Penicillin' twice to an allergy Set, it will ignore the duplicate.", week: "6"},
  { term: "Membership Test", definition: "Checking if something exists in a Set or Map. Like asking 'Does this patient have a Penicillin allergy?' - you get a simple yes/no answer.", week: "6"},
  
  // Map Operations (covered in exercises)
  { term: "set() Method", definition: "Adds or updates a key-value pair in a Map. If the key already exists, it completely replaces the old value with the new one.", week: "6"},
  { term: "get() Method", definition: "Retrieves the value associated with a key in a Map. Returns the value if found, or undefined if the key doesn't exist.", week: "6"},
  { term: "has() Method", definition: "Checks if a key exists in a Map or if a value exists in a Set. Returns true or false - perfect for quick existence checks.", week: "6"},
  { term: "delete() Method", definition: "Removes a key-value pair from a Map or a value from a Set. Returns true if something was actually removed, false if it wasn't there.", week: "6"},
  
  // Set Operations (covered in exercises)
  { term: "add() Method", definition: "Adds a value to a Set. If the value already exists, it's ignored (no duplicates allowed). Great for building lists of unique items.", week: "6"},
  
  // Key Concepts from Content
  { term: "Override Behavior", definition: "When you set() the same key twice in a Map, the second value completely replaces the first. This is powerful but can be dangerous if you're not careful!", week: "6"},
  { term: "Reference vs Value Comparison", definition: "Primitive values (strings, numbers) are compared by their actual value, but objects are compared by reference. Two objects with identical content are still different keys/values.", week: "6"},
  { term: "Defensive Programming", definition: "Writing code that checks for invalid inputs (like null or undefined) before processing them. Essential for healthcare systems where bad data could be dangerous.", week: "6"},
  
  // Performance Concepts
  { term: "O(1) Time Complexity", definition: "Constant time - Map and Set operations take the same amount of time whether you have 10 items or 10,000 items. This makes them incredibly fast for lookups.", week: "6"},
  
  // Set Mathematical Operations (covered in content)
  { term: "Intersection", definition: "Finding values that exist in both Sets. Like finding allergies that two family members share. Create a new Set with only the common elements.", week: "6"},
  { term: "Union", definition: "Combining two Sets to include all unique values from both. Like creating a complete family allergy history from multiple patients' records.", week: "6"},
];

export const glossaryChapter = {
  id: 'maps-and-sets-glossary',
  title: 'Glossary: Maps and Sets',
  sectionId: 'maps-and-sets',
  previousChapterId: 'maps-and-sets-supplemental-materials',
  content: `## Glossary: Maps and Sets

This glossary contains important terms and concepts related to maps and sets. Understanding these terms will help you communicate effectively about algorithms and data structures during interviews and technical discussions.

${formatGlossary(data)}
`,
  exercise: null
};