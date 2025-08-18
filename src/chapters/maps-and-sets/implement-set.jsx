import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";
import { TestResult } from "../../utils/test_utils";

export const implementSetChapter = {
  id: 'implement-set',
  title: 'The Allergy Safety System - Building a Custom Set from Scratch',
  sectionId: 'maps-and-sets',
  previousChapterId: 'implement-map',
  content: `
## A Critical Safety Challenge

The morning sun streamed through the windows of Mercy General Hospital's pharmacy as Dr. Sarah Chen walked in to meet with Maria Santos, the hospital's Chief Pharmacist. Maria had been managing medication safety protocols for over twelve years, and her expertise had prevented countless medication errors that could have endangered patients' lives.

"Dr. Chen," Maria said, looking up from her computer screen with a concerned expression, "I'm glad you're here. We've been having some challenges with our patient allergy tracking system, and I think your recent work with Maps and hash tables might help us solve a critical safety problem."

Sarah pulled up a chair, immediately interested. "What kind of safety problem?"

Maria turned her monitor toward Sarah, showing a complex medication management interface. "Every time we dispense medication, we need to check if the patient has any allergies that could cause dangerous reactions. But our current system is slow and sometimes misses allergies because it has to search through long lists."

"That sounds dangerous," Sarah said, studying the screen.

"It is. Last week, we almost gave penicillin to a patient with a penicillin allergy because the system took too long to load their allergy information. We need a **Set-based system** that can instantly tell us if a patient has a specific allergy - no searching, no delays, just immediate yes or no answers."

## Understanding Sets vs Maps: The Key Difference

Maria opened a whiteboard application and began drawing two diagrams side by side. "Remember how you learned about Maps with David? Maps store **key-value pairs** - like patient ID to patient information. But for allergy checking, we don't need to store additional information about each allergy. We just need to know: **does this patient have this allergy?**"

\`\`\`
Map (Key-Value Pairs):
Patient ID → Full Patient Record
"P-001" → { name: "John", allergies: [...], medications: [...] }

Set (Unique Values Only):
Patient Allergies
{ "Penicillin", "Shellfish", "Latex" }
\`\`\`

"A **Set** is perfect for this," Maria explained. "It stores unique values without any associated data. We can instantly check if 'Penicillin' exists in a patient's allergy set without caring about when the allergy was discovered or how severe it is."

Sarah nodded thoughtfully. "So it's like a Map where we only care about the keys, not the values?"

"Exactly! And because we don't need to store values, we can optimize our Set implementation differently than a Map. We can make it faster and use less memory."

## Building a Set from a HashMap Foundation

Maria pulled up a coding environment. "The beautiful thing about understanding hash tables is that we can build a Set by leveraging the HashMap you learned to create with David. Since a Set only needs to track existence, we can use our HashMap and just ignore the values."

\`\`\`javascript
class CustomHashSet {
  constructor() {
    // We'll use our Map internally, but only care about keys
    this.map = new Map();
  }
  
  add(value) {
    // For a Set, the value becomes the key, and we store a dummy value
    const wasNew = !this.map.has(value);
    this.map.set(value, true); // The 'true' is just a placeholder
    return wasNew; // Return whether this was a new addition
  }
  
  has(value) {
    // Check if the value exists as a key in our internal map
    return this.map.has(value);
  }
  
  delete(value) {
    // Remove the value from our internal map
    return this.map.delete(value);
  }
  
  size() {
    // Get the number of unique values in our set
    return this.map.size;
  }
  
  clear() {
    // Remove all values from the set
    this.map.clear();
  }
  
  values() {
    // Get all values in the set (same as keys for a Set)
    return Array.from(this.map.keys());
  }
  
  forEach(callback) {
    // Execute callback for each value in the set
    this.map.forEach((_, value) => {
      callback(value, value, this); // In Sets, key and value are the same
    });
  }
}
\`\`\`

"This is brilliant!" Sarah exclaimed. "We're reusing all the hash table logic from the HashMap, but adapting it for Set operations."

"Exactly. This approach gives us all the performance benefits of hash tables - O(1) add, has, and delete operations - while providing the unique-values-only semantics that Sets require."

## ⏱️ Sarah's First Challenge!

Maria opened a coding challenge interface. "Let's start by implementing the core Set operations. For our allergy safety system, we need to be able to add allergies, check if a patient has specific allergies, and remove allergies if they're determined to be incorrect."

"This is crucial for patient safety," Maria explained. "When a patient arrives in the emergency room, we need to instantly know their allergies to avoid life-threatening reactions."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`add()\`, \`has()\`, and \`delete()\` methods for the CustomHashSet
- Use the internal HashMap to store values as keys
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge teaches you how to adapt hash table operations for Set semantics," Maria explained.

## Set Operations: The Power of Mathematical Sets

After Sarah completed the first challenge, Maria smiled approvingly. "Perfect! Now let's implement the mathematical set operations that make Sets truly powerful for medical applications. We need **union**, **intersection**, and **difference** operations."

"What do you mean by mathematical set operations?" Sarah asked.

Maria pulled up a patient case study. "Let me show you with a real example. Imagine we have two patients with different allergies:"

\`\`\`javascript
// Patient A's allergies
const patientA_allergies = new CustomHashSet();
patientA_allergies.add("Penicillin");
patientA_allergies.add("Shellfish");
patientA_allergies.add("Latex");

// Patient B's allergies
const patientB_allergies = new CustomHashSet();
patientB_allergies.add("Shellfish");
patientB_allergies.add("Nuts");
patientB_allergies.add("Latex");

// Union: All allergies from both patients (for family allergy history)
const familyAllergies = patientA_allergies.union(patientB_allergies);
// Result: {"Penicillin", "Shellfish", "Latex", "Nuts"}

// Intersection: Common allergies (genetic predisposition analysis)
const commonAllergies = patientA_allergies.intersection(patientB_allergies);
// Result: {"Shellfish", "Latex"}

// Difference: Allergies unique to Patient A
const uniqueToA = patientA_allergies.difference(patientB_allergies);
// Result: {"Penicillin"}
\`\`\`

"These operations are incredibly useful for medical research and family history analysis," Maria explained.

## ⏱️ Sarah's Second Challenge!

"Now let's implement these set operations," Maria said, opening another coding challenge. "These operations will help us analyze allergy patterns across patient populations."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`union()\`, \`intersection()\`, and \`difference()\` methods
- Create new CustomHashSet instances for results
- Use iteration to combine sets properly
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge teaches you how to implement mathematical set operations that are crucial for medical data analysis," Maria explained.

## Real-World Application: Medication Safety System

After Sarah completed the set operations challenge, Maria opened the hospital's actual medication safety system. "Now let me show you how we'd use our CustomHashSet in a real medication safety application."

\`\`\`javascript
class MedicationSafetySystem {
  constructor() {
    this.patientAllergies = new Map(); // Patient ID -> CustomHashSet of allergies
    this.medicationIngredients = new Map(); // Medication -> CustomHashSet of ingredients
    this.safetyLog = [];
  }
  
  addPatientAllergy(patientId, allergy) {
    if (!this.patientAllergies.has(patientId)) {
      this.patientAllergies.set(patientId, new CustomHashSet());
    }
    
    const allergySet = this.patientAllergies.get(patientId);
    const wasNew = allergySet.add(allergy);
    
    if (wasNew) {
      this.safetyLog.push({
        action: 'ADD_ALLERGY',
        patientId: patientId,
        allergy: allergy,
        timestamp: new Date(),
        user: 'Dr. Chen'
      });
      
      console.log(\`Added allergy \${allergy} for patient \${patientId}\`);
    }
  }
  
  checkMedicationSafety(patientId, medicationName) {
    const patientAllergySet = this.patientAllergies.get(patientId);
    const medicationIngredientSet = this.medicationIngredients.get(medicationName);
    
    if (!patientAllergySet || !medicationIngredientSet) {
      return { safe: true, conflicts: [] };
    }
    
    // Find intersection of patient allergies and medication ingredients
    const conflicts = patientAllergySet.intersection(medicationIngredientSet);
    const conflictList = conflicts.values();
    
    const isSafe = conflictList.length === 0;
    
    // Log the safety check
    this.safetyLog.push({
      action: 'SAFETY_CHECK',
      patientId: patientId,
      medication: medicationName,
      safe: isSafe,
      conflicts: conflictList,
      timestamp: new Date(),
      user: 'Pharmacist Maria'
    });
    
    if (!isSafe) {
      console.warn(\`⚠️ ALLERGY ALERT: Patient \${patientId} allergic to: \${conflictList.join(', ')}\`);
    }
    
    return { safe: isSafe, conflicts: conflictList };
  }
  
  registerMedication(medicationName, ingredients) {
    const ingredientSet = new CustomHashSet();
    ingredients.forEach(ingredient => ingredientSet.add(ingredient));
    this.medicationIngredients.set(medicationName, ingredientSet);
    
    console.log(\`Registered medication \${medicationName} with \${ingredients.length} ingredients\`);
  }
  
  findPatientsWithAllergy(allergy) {
    const affectedPatients = [];
    
    for (const [patientId, allergySet] of this.patientAllergies) {
      if (allergySet.has(allergy)) {
        affectedPatients.push(patientId);
      }
    }
    
    return affectedPatients;
  }
  
  generateAllergyReport() {
    const allergyFrequency = new Map();
    const totalPatients = this.patientAllergies.size;
    
    // Count frequency of each allergy across all patients
    for (const [patientId, allergySet] of this.patientAllergies) {
      allergySet.forEach(allergy => {
        if (allergyFrequency.has(allergy)) {
          allergyFrequency.set(allergy, allergyFrequency.get(allergy) + 1);
        } else {
          allergyFrequency.set(allergy, 1);
        }
      });
    }
    
    // Convert to sorted report
    const report = [];
    for (const [allergy, count] of allergyFrequency) {
      report.push({
        allergy: allergy,
        patientCount: count,
        percentage: ((count / totalPatients) * 100).toFixed(1)
      });
    }
    
    return report.sort((a, b) => b.patientCount - a.patientCount);
  }
}

// Example usage in the hospital
const safetySystem = new MedicationSafetySystem();

// Register medications with their ingredients
safetySystem.registerMedication('Amoxicillin', ['Penicillin', 'Lactose']);
safetySystem.registerMedication('Ibuprofen', ['Ibuprofen', 'Corn Starch']);
safetySystem.registerMedication('Shellfish Oil Supplement', ['Shellfish Extract', 'Vitamin E']);

// Add patient allergies
safetySystem.addPatientAllergy('P-2024-001', 'Penicillin');
safetySystem.addPatientAllergy('P-2024-001', 'Shellfish');
safetySystem.addPatientAllergy('P-2024-002', 'Latex');
safetySystem.addPatientAllergy('P-2024-003', 'Penicillin');

// Check medication safety before dispensing
const safetyCheck1 = safetySystem.checkMedicationSafety('P-2024-001', 'Amoxicillin');
console.log('Safety check result:', safetyCheck1);
// Output: { safe: false, conflicts: ['Penicillin'] }

const safetyCheck2 = safetySystem.checkMedicationSafety('P-2024-002', 'Ibuprofen');
console.log('Safety check result:', safetyCheck2);
// Output: { safe: true, conflicts: [] }

// Generate allergy report for hospital administration
const allergyReport = safetySystem.generateAllergyReport();
console.log('Hospital Allergy Report:', allergyReport);
\`\`\`

"This is incredible," Sarah said, studying the safety system. "Our CustomHashSet isn't just storing data - it's preventing potentially life-threatening medication errors."

## ⏱️ Sarah's Third Challenge!

"For our final challenge," Maria said with a smile, "let's implement a specialized method that's crucial for our safety system - **isSubsetOf**. This helps us determine if one set of allergies is completely contained within another set."

"Why is that important?" Sarah asked.

"Great question! Sometimes we need to check if a patient's known allergies are a subset of allergies we're testing for, or if a medication's ingredients are a subset of safe ingredients for a patient."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`isSubsetOf()\` method to check if one set is contained in another
- Add \`isEmpty()\` and \`equals()\` utility methods
- Handle edge cases properly
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge teaches you how to implement advanced set comparison operations that are essential for comprehensive safety checking," Maria explained.

## Key Takeaways

By the end of their session, Sarah had learned that:

- **Sets store unique values without associated data** - perfect for membership testing and allergy tracking
- **Sets can be built using HashMap foundations** - reusing hash table logic for Set semantics
- **Set operations enable powerful data analysis** - union, intersection, and difference for medical research
- **O(1) performance is crucial for safety systems** - instant allergy checking can prevent life-threatening errors
- **Mathematical set operations have real-world applications** - genetic analysis, medication alternatives, and research
- **Custom implementations enable domain-specific optimizations** - audit logging, safety alerts, and compliance tracking
`,
  exercise: {
    starterCode: `/*
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
*/`,
    solution: `
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
}`,
    tests: [
      {
        name: "Test basic set operations (add, has, delete)",
        test: (code) => {
          try {
            const testCode = code + `
            // Test basic HashSet functionality
            const set = new CustomHashSet();
            
            let addResult1 = false;
            let addResult2 = false;
            let addResult3 = false;
            let hasResult1 = false;
            let hasResult2 = false;
            let deleteResult1 = false;
            let deleteResult2 = false;
            let sizeResult = 0;
            
            if (typeof set.add === 'function') {
              addResult1 = set.add('Penicillin');
              addResult2 = set.add('Shellfish');
              addResult3 = set.add('Penicillin'); // Duplicate
            }
            
            if (typeof set.has === 'function') {
              hasResult1 = set.has('Penicillin');
              hasResult2 = set.has('Latex');
            }
            
            if (typeof set.delete === 'function') {
              deleteResult1 = set.delete('Shellfish');
              deleteResult2 = set.delete('Nonexistent');
            }
            
            sizeResult = set.size();
            
            return ({
              addResult1: addResult1,
              addResult2: addResult2,
              addResult3: addResult3,
              hasResult1: hasResult1,
              hasResult2: hasResult2,
              deleteResult1: deleteResult1,
              deleteResult2: deleteResult2,
              sizeResult: sizeResult
            });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.addResult1 === 'undefined') {
              return new TestResult({ passed: false, message: "add function not found. Make sure to uncomment and implement it." });
            }
            
            if (testResult.addResult1 !== true) {
              return new TestResult({ passed: false, message: "add should return true when adding new value" });
            }
            
            if (testResult.addResult2 !== true) {
              return new TestResult({ passed: false, message: "add should return true when adding different new value" });
            }
            
            if (testResult.addResult3 !== false) {
              return new TestResult({ passed: false, message: "add should return false when adding duplicate value" });
            }
            
            if (testResult.hasResult1 !== true) {
              return new TestResult({ passed: false, message: "has should return true for existing values" });
            }
            
            if (testResult.hasResult2 !== false) {
              return new TestResult({ passed: false, message: "has should return false for non-existent values" });
            }
            
            if (testResult.deleteResult1 !== true) {
              return new TestResult({ passed: false, message: "delete should return true when deleting existing value" });
            }
            
            if (testResult.deleteResult2 !== false) {
              return new TestResult({ passed: false, message: "delete should return false when deleting non-existent value" });
            }
            
            if (testResult.sizeResult !== 1) {
              return new TestResult({ passed: false, message: "size should be 1 after adding 2 values and deleting 1" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "Basic set operations should handle uniqueness, membership testing, and deletion correctly."
      },
      {
        name: "Test set mathematical operations (union, intersection, difference)",
        test: (code) => {
          try {
            const testCode = code + `
            // Test set mathematical operations
            const setA = new CustomHashSet();
            const setB = new CustomHashSet();
            
            // Add values to sets
            if (typeof setA.add === 'function') {
              setA.add('Penicillin');
              setA.add('Shellfish');
              setA.add('Latex');
              
              setB.add('Shellfish');
              setB.add('Nuts');
              setB.add('Latex');
            }
            
            let unionResult = null;
            let intersectionResult = null;
            let differenceResult = null;
            
            if (typeof setA.union === 'function') {
              unionResult = setA.union(setB);
            }
            
            if (typeof setA.intersection === 'function') {
              intersectionResult = setA.intersection(setB);
            }
            
            if (typeof setA.difference === 'function') {
              differenceResult = setA.difference(setB);
            }
            
            return ({
              unionSize: unionResult ? unionResult.size() : -1,
              unionValues: unionResult ? unionResult.values().sort() : [],
              intersectionSize: intersectionResult ? intersectionResult.size() : -1,
              intersectionValues: intersectionResult ? intersectionResult.values().sort() : [],
              differenceSize: differenceResult ? differenceResult.size() : -1,
              differenceValues: differenceResult ? differenceResult.values().sort() : []
            });
            `;
            
            const testResult = new Function(testCode)();
            
            if (testResult.unionSize === -1) {
              return new TestResult({ passed: false, message: "union function not found. Make sure to uncomment and implement it." });
            }
            
            if (testResult.unionSize !== 4) {
              return new TestResult({ passed: false, message: "union should contain all unique values from both sets (expected 4)" });
            }
            
            const expectedUnion = ['Latex', 'Nuts', 'Penicillin', 'Shellfish'];
            if (!expectedUnion.every(val => testResult.unionValues.includes(val))) {
              return new TestResult({ passed: false, message: "union should contain all values: Penicillin, Shellfish, Latex, Nuts" });
            }
            
            if (testResult.intersectionSize !== 2) {
              return new TestResult({ passed: false, message: "intersection should contain common values only (expected 2)" });
            }
            
            const expectedIntersection = ['Latex', 'Shellfish'];
            if (!expectedIntersection.every(val => testResult.intersectionValues.includes(val))) {
              return new TestResult({ passed: false, message: "intersection should contain: Shellfish, Latex" });
            }
            
            if (testResult.differenceSize !== 1) {
              return new TestResult({ passed: false, message: "difference should contain values unique to first set (expected 1)" });
            }
            
            if (!testResult.differenceValues.includes('Penicillin')) {
              return new TestResult({ passed: false, message: "difference should contain: Penicillin" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "Set mathematical operations should correctly compute union, intersection, and difference."
      },
      {
        name: "Test advanced set methods (isSubsetOf, isEmpty, equals)",
        test: (code) => {
          try {
            const testCode = code + `
            // Test advanced set methods
            const setA = new CustomHashSet();
            const setB = new CustomHashSet();
            const setC = new CustomHashSet();
            const emptySet = new CustomHashSet();
            
            // Setup test data
            if (typeof setA.add === 'function') {
              setA.add('Penicillin');
              setA.add('Shellfish');
              
              setB.add('Penicillin');
              setB.add('Shellfish');
              setB.add('Latex');
              
              setC.add('Penicillin');
              setC.add('Shellfish');
            }
            
            let isSubsetResult1 = false;
            let isSubsetResult2 = false;
            let isEmptyResult1 = false;
            let isEmptyResult2 = false;
            let equalsResult1 = false;
            let equalsResult2 = false;
            
            if (typeof setA.isSubsetOf === 'function') {
              isSubsetResult1 = setA.isSubsetOf(setB); // A is subset of B
              isSubsetResult2 = setB.isSubsetOf(setA); // B is not subset of A
            }
            
            if (typeof emptySet.isEmpty === 'function') {
              isEmptyResult1 = emptySet.isEmpty();
              isEmptyResult2 = setA.isEmpty();
            }
            
            if (typeof setA.equals === 'function') {
              equalsResult1 = setA.equals(setC); // Same contents
              equalsResult2 = setA.equals(setB); // Different contents
            }
            
            return ({
              isSubsetResult1: isSubsetResult1,
              isSubsetResult2: isSubsetResult2,
              isEmptyResult1: isEmptyResult1,
              isEmptyResult2: isEmptyResult2,
              equalsResult1: equalsResult1,
              equalsResult2: equalsResult2
            });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.isSubsetResult1 === 'undefined') {
              return new TestResult({ passed: false, message: "isSubsetOf function not found. Make sure to uncomment and implement it." });
            }
            
            if (testResult.isSubsetResult1 !== true) {
              return new TestResult({ passed: false, message: "isSubsetOf should return true when first set is subset of second" });
            }
            
            if (testResult.isSubsetResult2 !== false) {
              return new TestResult({ passed: false, message: "isSubsetOf should return false when first set is not subset of second" });
            }
            
            if (testResult.isEmptyResult1 !== true) {
              return new TestResult({ passed: false, message: "isEmpty should return true for empty set" });
            }
            
            if (testResult.isEmptyResult2 !== false) {
              return new TestResult({ passed: false, message: "isEmpty should return false for non-empty set" });
            }
            
            if (testResult.equalsResult1 !== true) {
              return new TestResult({ passed: false, message: "equals should return true for sets with same contents" });
            }
            
            if (testResult.equalsResult2 !== false) {
              return new TestResult({ passed: false, message: "equals should return false for sets with different contents" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "Advanced set methods should correctly handle subset testing, emptiness checking, and equality comparison."
      },
    ]
  },
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();

        return (
          <main>
            <h2>Custom Set Implementation Questions</h2>
            <form className="auto-graded-quiz">
              <div
                className="question"
                data-answers="Membership testing for allergies,Preventing duplicate entries,Mathematical set operations"
              >
                <p>
                  Which scenarios are ideal use cases for Sets in healthcare applications?
                </p>

                <label>
                  <input
                    type="checkbox"
                    value="Membership testing for allergies"
                  />{" "}
                  🏥 Membership testing for allergies
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Storing patient ID to medical record mappings"
                  />{" "}
                  📋 Storing patient ID to medical record mappings
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Preventing duplicate entries"
                  />{" "}
                  🚫 Preventing duplicate entries
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Maintaining appointment queue order"
                  />{" "}
                  ⏰ Maintaining appointment queue order
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Mathematical set operations"
                  />{" "}
                  🔢 Mathematical set operations
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Caching expensive calculations" /> 💾
                  Caching expensive calculations
                </label>
                <div className="feedback"></div>
                <div className="explanation">
                  <ul>
                    <li>
                      <strong>Membership testing:</strong> ✅ Correct — Sets excel at O(1) "does this exist?" queries.
                    </li>
                    <li>
                      <strong>ID to record mappings:</strong> ❌ Incorrect — This requires key-value pairs (Map).
                    </li>
                    <li>
                      <strong>Preventing duplicates:</strong> ✅ Correct — Sets automatically ensure uniqueness.
                    </li>
                    <li>
                      <strong>Queue order:</strong> ❌ Incorrect — This requires ordered data structure (Queue).
                    </li>
                    <li>
                      <strong>Mathematical operations:</strong> ✅ Correct — Union, intersection, difference are Set operations.
                    </li>
                    <li>
                      <strong>Caching calculations:</strong> ❌ Incorrect — This requires key-value storage (Map).
                    </li>
                  </ul>
                </div>
              </div>

              <div className="question" data-answer="intersection">
                <p>
                  Which set operation would you use to find allergies that are common
                  between two family members for genetic analysis?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  The <strong>intersection</strong> operation finds elements that exist in both sets,
                  making it perfect for identifying common allergies between family members
                  that might indicate genetic predisposition.
                </div>
              </div>

              <div className="question" data-answer="O(1)">
                <p>
                  What is the average time complexity for checking if a patient has
                  a specific allergy using a hash-based Set implementation?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  Hash-based Set operations like membership testing (has) are O(1) constant time
                  on average, making them ideal for critical safety checks where every
                  millisecond counts in preventing medication errors.
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