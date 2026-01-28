## A Critical Safety Challenge

The morning sun streamed through the windows of Mercy General Hospital's pharmacy as Dr. Sarah Chen walked in to meet with Maria Santos, the hospital's Chief Pharmacist. Maria had been managing medication safety protocols for over twelve years, and her expertise had prevented countless medication errors that could have endangered patients' lives.

"Dr. Chen," Maria said, looking up from her computer screen with a concerned expression, "I'm glad you're here. We've been having some challenges with our patient allergy tracking system, and I think your recent work with Maps and hash tables might help us solve a critical safety problem."

Sarah pulled up a chair, immediately interested. "What kind of safety problem?"

Maria turned her monitor toward Sarah, showing a complex medication management interface. "Every time we dispense medication, we need to check if the patient has any allergies that could cause dangerous reactions. But our current system is slow and sometimes misses allergies because it has to search through long lists."

"That sounds dangerous," Sarah said, studying the screen.

"It is. Last week, we almost gave penicillin to a patient with a penicillin allergy because the system took too long to load their allergy information. We need a **Set-based system** that can instantly tell us if a patient has a specific allergy - no searching, no delays, just immediate yes or no answers."

## Understanding Sets vs Maps: The Key Difference

Maria opened a whiteboard application and began drawing two diagrams side by side. "Remember how you learned about Maps with David? Maps store **key-value pairs** - like patient ID to patient information. But for allergy checking, we don't need to store additional information about each allergy. We just need to know: **does this patient have this allergy?**"

```
Map (Key-Value Pairs):
Patient ID → Full Patient Record
"P-001" → { name: "John", allergies: [...], medications: [...] }

Set (Unique Values Only):
Patient Allergies
{ "Penicillin", "Shellfish", "Latex" }
```

"A **Set** is perfect for this," Maria explained. "It stores unique values without any associated data. We can instantly check if 'Penicillin' exists in a patient's allergy set without caring about when the allergy was discovered or how severe it is."

Sarah nodded thoughtfully. "So it's like a Map where we only care about the keys, not the values?"

"Exactly! And because we don't need to store values, we can optimize our Set implementation differently than a Map. We can make it faster and use less memory."

## Building a Set from a HashMap Foundation

Maria pulled up a coding environment. "The beautiful thing about understanding hash tables is that we can build a Set by leveraging the HashMap you learned to create with David. Since a Set only needs to track existence, we can use our HashMap and just ignore the values."

```javascript
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
```

"This is brilliant!" Sarah exclaimed. "We're reusing all the hash table logic from the HashMap, but adapting it for Set operations."

"Exactly. This approach gives us all the performance benefits of hash tables - O(1) add, has, and delete operations - while providing the unique-values-only semantics that Sets require."

## ⏱️ Sarah's First Challenge!

Maria opened a coding challenge interface. "Let's start by implementing the core Set operations. For our allergy safety system, we need to be able to add allergies, check if a patient has specific allergies, and remove allergies if they're determined to be incorrect."

"This is crucial for patient safety," Maria explained. "When a patient arrives in the emergency room, we need to instantly know their allergies to avoid life-threatening reactions."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement `add()`, `has()`, and `delete()` methods for the CustomHashSet
- Use the internal HashMap to store values as keys
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge teaches you how to adapt hash table operations for Set semantics," Maria explained.

## Set Operations: The Power of Mathematical Sets

After Sarah completed the first challenge, Maria smiled approvingly. "Perfect! Now let's implement the mathematical set operations that make Sets truly powerful for medical applications. We need **union**, **intersection**, and **difference** operations."

"What do you mean by mathematical set operations?" Sarah asked.

Maria pulled up a patient case study. "Let me show you with a real example. Imagine we have two patients with different allergies:"

```javascript
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
```

"These operations are incredibly useful for medical research and family history analysis," Maria explained.

## ⏱️ Sarah's Second Challenge!

"Now let's implement these set operations," Maria said, opening another coding challenge. "These operations will help us analyze allergy patterns across patient populations."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement `union()`, `intersection()`, and `difference()` methods
- Create new CustomHashSet instances for results
- Use iteration to combine sets properly
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge teaches you how to implement mathematical set operations that are crucial for medical data analysis," Maria explained.

## Real-World Application: Medication Safety System

After Sarah completed the set operations challenge, Maria opened the hospital's actual medication safety system. "Now let me show you how we'd use our CustomHashSet in a real medication safety application."

```javascript
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
      
      console.log(`Added allergy \${allergy} for patient \${patientId}`);
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
      console.warn(`⚠️ ALLERGY ALERT: Patient \${patientId} allergic to: \${conflictList.join(', ')}`);
    }
    
    return { safe: isSafe, conflicts: conflictList };
  }
  
  registerMedication(medicationName, ingredients) {
    const ingredientSet = new CustomHashSet();
    ingredients.forEach(ingredient => ingredientSet.add(ingredient));
    this.medicationIngredients.set(medicationName, ingredientSet);
    
    console.log(`Registered medication \${medicationName} with \${ingredients.length} ingredients`);
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
```

"This is incredible," Sarah said, studying the safety system. "Our CustomHashSet isn't just storing data - it's preventing potentially life-threatening medication errors."

## ⏱️ Sarah's Third Challenge!

"For our final challenge," Maria said with a smile, "let's implement a specialized method that's crucial for our safety system - **isSubsetOf**. This helps us determine if one set of allergies is completely contained within another set."

"Why is that important?" Sarah asked.

"Great question! Sometimes we need to check if a patient's known allergies are a subset of allergies we're testing for, or if a medication's ingredients are a subset of safe ingredients for a patient."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement `isSubsetOf()` method to check if one set is contained in another
- Add `isEmpty()` and `equals()` utility methods
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