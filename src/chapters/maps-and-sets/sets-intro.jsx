import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";
import { TestResult } from "../../utils/test_utils";

export const setsIntroChapter = {
  id: "sets-intro",
  title: "Introduction to Sets - The Patient Allergy Tracking System",
  sectionId: "maps-and-sets",
  previousChapterId: "maps-intro",
  content: `
## Dr. Sarah's Second Day: Understanding Patient Safety

The next morning at Mercy General Hospital, Dr. Sarah Chen arrived early, eager to continue learning about data structures in healthcare systems. She found Marcus Rodriguez already at his desk, reviewing patient safety reports with a concerned expression.

"Good morning, Marcus," Sarah said, settling down with her coffee. "You look like you're dealing with something serious."

Marcus looked up with a slight smile. "Good morning, Sarah! Actually, this is perfect timing. I'm reviewing our medication safety protocols, and it's a great example of another fundamental data structure - the **Set**."

"How is that different from the Maps we learned about yesterday?" Sarah asked, pulling out her notebook.

"Excellent question," Marcus replied. "Yesterday we focused on **relationships** - patient IDs connected to medical records. Today we're going to focus on **membership** - does this patient have this specific allergy? Yes or no. No additional information needed."

## The Critical Importance of Allergy Tracking

Marcus led Sarah to the pharmacy station where Dr. Elena Vasquez, the chief pharmacist, was reviewing medication orders. Elena was a meticulous woman in her forties who had prevented countless medication errors through her attention to detail.

"Dr. Vasquez, perfect timing," Marcus said. "Could you show Dr. Chen how our allergy tracking system works?"

Elena smiled warmly. "Of course! Sarah, this system literally saves lives every day. Watch this." She pulled up a patient's medication order on her screen.

"When I'm about to dispense medication for patient P-2024-089, the system immediately shows me their allergy profile," Elena explained, pointing to a section of the screen that displayed:

\`\`\`
Patient P-2024-089 Allergies:
✓ Penicillin
✓ Sulfa drugs  
✓ Latex
✓ Shellfish
\`\`\`

"Notice something important here," Marcus said to Sarah. "We don't need to know *when* the patient discovered they had a penicillin allergy, or *how severe* their reaction was, or *how many times* they've had reactions. We just need to know: **does this patient have a penicillin allergy?**"

Sarah nodded thoughtfully. "So it's like a yes-or-no checklist?"

"Exactly!" Elena said. "And that's what makes a **Set** perfect for this. A Set stores unique values - each allergy can only appear once in the list, and we can instantly check if a specific allergy exists."

## Understanding Set Operations

As the morning progressed, Marcus and Elena showed Sarah how their allergy tracking system demonstrated the core operations of a Set data structure.

### Add: Recording New Allergies

Around 10 AM, Dr. James Wilson approached the pharmacy station with an urgent update.

"Elena, I need to add a new allergy to patient P-2024-157's record. They just had a reaction to ibuprofen during their treatment."

Elena pulled up the patient's allergy set and added the new entry. "In Set terminology," Marcus explained to Sarah, "this is called **add** - including a new unique value in our collection."

Sarah watched as Elena entered the information:
- Patient's current allergies: {Penicillin, Latex}
- New allergy to add: Ibuprofen
- Updated allergy set: {Penicillin, Latex, Ibuprofen}

"Each time we add an allergy," Marcus explained, "the Set ensures it's only listed once. Even if someone accidentally tries to add 'Penicillin' again, the Set will ignore the duplicate."

### Has: Checking for Specific Allergies

"Now comes the critical safety check," Elena said, pulling up a new medication order. "Before I dispense any medication, I need to verify the patient doesn't have allergies to any of its components."

She typed "Penicillin" into the allergy checker for patient P-2024-089.

"This is called **has** - checking if a specific value exists in the Set," Marcus explained. "The system instantly returns true or false."

The screen immediately displayed: ⚠️ **ALLERGY ALERT: Patient has Penicillin allergy**

"See how fast that was?" Elena said. "Whether a patient has 3 allergies or 30 allergies, checking for a specific one takes the same amount of time."

Sarah was impressed. "So the system can instantly prevent dangerous medication errors?"

"Exactly. That's why Sets are perfect for safety-critical applications like this."

### Delete: Removing Outdated Allergies

"Sometimes," Elena continued, "we need to remove allergies from a patient's record. Maybe they underwent desensitization therapy, or a previous allergy was incorrectly recorded."

She showed Sarah the administrative interface. "This is the **delete** operation - removing a specific value from the Set."

Marcus demonstrated:
- Patient's allergies: {Penicillin, Latex, Shellfish}
- Remove: Latex (after successful desensitization)
- Updated set: {Penicillin, Shellfish}

"The beautiful thing about Sets," Marcus explained, "is that trying to delete something that doesn't exist won't cause an error - it just does nothing."

## ⏱️ Sarah's First Challenge!

Marcus pulled out his tablet and opened a coding environment. "Sarah, I want you to try managing our allergy tracking system. I've created a simplified version using JavaScript's built-in Set class."

"I get to work with the actual allergy system?" Sarah's eyes lit up with excitement.

"Absolutely! But remember - you don't need to build the Set from scratch. JavaScript provides a built-in Set class. Your job is to **use** the Set operations to solve real patient safety problems."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`addAllergy()\` to record new patient allergies
- Use \`allergySet.add()\` and \`allergySet.has()\` operations
- **Click Run Code**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This first challenge simulates what Elena just showed us," Marcus explained. "You need to add allergies to a patient's record and then check for specific allergies before medication administration."

## The Power of Unique Values

After Sarah completed the first challenge, Elena smiled approvingly. "Excellent work! Now you've experienced firsthand how Set operations work for patient safety. Let's reflect on what you've learned."

"So Sarah, why do you think our allergy tracking system works so well as a Set?" Elena asked.

Sarah thought for a moment. "Well, each allergy should only be listed once - we don't want duplicates cluttering up the system. And we need to quickly check if a patient has a specific allergy before giving them medication."

"Perfect understanding," Marcus said. "And what would happen if we used a regular array instead of a Set?"

"Oh!" Sarah realized. "We might accidentally add the same allergy multiple times, making the list confusing. And checking for allergies would be slower because we'd have to search through the entire list."

"Exactly. Sets automatically prevent duplicates and provide instant membership checking."

## ⏱️ Sarah's Second Challenge!

"Now let's try something more complex," Elena said, pulling up another coding challenge. "Sometimes we need to find patients who share common allergies, or identify patients who are allergic to any ingredient in a complex medication."

"How do we handle multiple allergies at once?" Sarah asked, intrigued.

"Great question! Sets provide powerful operations for comparing and combining allergy lists. We can find intersections, unions, and differences between different patients' allergy sets."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`findCommonAllergies()\` to find allergies shared between patients
- Use Set iteration and comparison methods
- Return a new Set containing only shared allergies
- **Click Run Code**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge teaches you how to work with multiple Sets together," Elena explained.

## ⏱️ Sarah's Third Challenge!

"One more challenge," Marcus said with a smile. "Sometimes we need to check if a medication is safe for a patient by ensuring they're not allergic to any of its ingredients."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`isMedicationSafe()\` to check if a patient can safely take a medication
- Compare the patient's allergies with the medication's ingredients
- Return true if safe, false if any ingredient matches an allergy
- **Click Run Code**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"Excellent work, Sarah!" Elena said as Sarah completed the challenges. "You've now experienced how to use Sets to solve real-world patient safety problems."

## Real-World Set Applications in Healthcare

Elena pulled out her laptop and opened several hospital systems. "Let me show you some other places where we use Sets in our hospital," she said.

### 1. Medication Ingredient Tracking

Elena opened the pharmacy database. "Each medication has a set of active and inactive ingredients. We use Sets to ensure no duplicates and for fast allergy checking."

\`\`\`javascript
class MedicationSafety {
  constructor() {
    this.medications = new Map();
    this.initializeMedications();
  }
  
  initializeMedications() {
    // Amoxicillin ingredients
    this.medications.set('Amoxicillin', new Set([
      'Amoxicillin trihydrate',
      'Penicillin',
      'Lactose',
      'Magnesium stearate'
    ]));
    
    // Ibuprofen ingredients  
    this.medications.set('Ibuprofen', new Set([
      'Ibuprofen',
      'Corn starch',
      'Lactose',
      'Titanium dioxide'
    ]));
  }
  
  checkMedicationSafety(medicationName, patientAllergies) {
    const ingredients = this.medications.get(medicationName);
    if (!ingredients) return false;
    
    // Check if any ingredient matches patient allergies
    for (const ingredient of ingredients) {
      if (patientAllergies.has(ingredient)) {
        return { safe: false, allergen: ingredient };
      }
    }
    
    return { safe: true };
  }
  
  findAlternativeMedications(patientAllergies) {
    const safeMedications = [];
    
    for (const [medName, ingredients] of this.medications) {
      let isSafe = true;
      for (const ingredient of ingredients) {
        if (patientAllergies.has(ingredient)) {
          isSafe = false;
          break;
        }
      }
      if (isSafe) {
        safeMedications.push(medName);
      }
    }
    
    return safeMedications;
  }
}

// Test the medication safety system
const medSafety = new MedicationSafety();
const patientAllergies = new Set(['Penicillin', 'Latex']);

const amoxicillinCheck = medSafety.checkMedicationSafety('Amoxicillin', patientAllergies);
console.log('Amoxicillin safety:', amoxicillinCheck);

const safeAlternatives = medSafety.findAlternativeMedications(patientAllergies);
console.log('Safe alternatives:', safeAlternatives);
\`\`\`

### 2. Procedure Completion Tracking

"And here's how we track completed procedures for each patient," Marcus continued:

\`\`\`javascript
class ProcedureTracker {
  constructor() {
    this.patientProcedures = new Map();
  }
  
  addCompletedProcedure(patientId, procedure) {
    if (!this.patientProcedures.has(patientId)) {
      this.patientProcedures.set(patientId, new Set());
    }
    this.patientProcedures.get(patientId).add(procedure);
  }
  
  hasCompletedProcedure(patientId, procedure) {
    const procedures = this.patientProcedures.get(patientId);
    return procedures ? procedures.has(procedure) : false;
  }
  
  getRequiredProcedures(patientId, allRequiredProcedures) {
    const completed = this.patientProcedures.get(patientId) || new Set();
    const remaining = [];
    
    for (const procedure of allRequiredProcedures) {
      if (!completed.has(procedure)) {
        remaining.push(procedure);
      }
    }
    
    return remaining;
  }
  
  getProcedureCompletion(patientId, requiredProcedures) {
    const completed = this.patientProcedures.get(patientId) || new Set();
    const completedCount = requiredProcedures.filter(proc => completed.has(proc)).length;
    
    return {
      completed: completedCount,
      total: requiredProcedures.length,
      percentage: Math.round((completedCount / requiredProcedures.length) * 100)
    };
  }
}

// Test procedure tracking
const tracker = new ProcedureTracker();
tracker.addCompletedProcedure('P-001', 'Blood Test');
tracker.addCompletedProcedure('P-001', 'X-Ray');
tracker.addCompletedProcedure('P-001', 'EKG');

const requiredProcedures = ['Blood Test', 'X-Ray', 'EKG', 'MRI', 'CT Scan'];
const remaining = tracker.getRequiredProcedures('P-001', requiredProcedures);
console.log('Remaining procedures:', remaining);

const completion = tracker.getProcedureCompletion('P-001', requiredProcedures);
console.log('Completion status:', completion);
\`\`\`

## Understanding Set Performance

"Here's something important to understand," Elena said, pulling up a performance chart. "All of these Set operations are **O(1)** - constant time. Do you know what that means for patient safety?"

Sarah thought about it. "It means that whether a patient has 5 allergies or 50 allergies, checking for a specific allergy takes the same amount of time?"

"Exactly! And in emergency situations, that speed can be the difference between life and death."

Marcus added, "When a patient is having an allergic reaction and we need to quickly identify safe alternative medications, we can't afford to wait for slow searches through long lists."

## Set Operations Summary

Elena pulled out a notepad and sketched out the key operations they'd learned:

### Core Set Operations

**Add (Recording new allergies)**
- Adds a value to the Set (ignores duplicates)
- Time Complexity: O(1) - always fast, no matter how many allergies
- Example: Adding "Ibuprofen" to patient's allergy set

**Has (Checking for specific allergies)**
- Checks if a value exists in the Set
- Time Complexity: O(1) - instant verification
- Example: Checking if patient is allergic to "Penicillin"

**Delete (Removing outdated allergies)**
- Removes a value from the Set
- Time Complexity: O(1) - fast removal
- Example: Removing "Latex" after successful desensitization

**Size (Counting total allergies)**
- Returns the number of values in the Set
- Time Complexity: O(1) - instant count
- Example: Getting total number of patient allergies

**Clear (Removing all allergies)**
- Removes all values from the Set
- Time Complexity: O(n) - proportional to number of allergies
- Example: Clearing allergy record (rarely used)

## Set vs Array for Allergy Tracking

"Let me show you why Sets are better than arrays for allergy tracking," Marcus said, drawing a comparison:

| Requirement | Set Solution | Array Problem |
|-------------|--------------|---------------|
| No duplicate allergies | Automatically prevents duplicates | Must manually check for duplicates |
| Fast allergy checking | O(1) has() operation | O(n) search through entire array |
| Easy allergy removal | O(1) delete() operation | O(n) find and remove operation |
| Memory efficient | Stores each allergy once | Could store duplicates |
| Clear intent | Designed for unique values | General-purpose, allows duplicates |

## Mathematical Set Operations in Healthcare

"Sets also support mathematical operations that are useful in healthcare," Elena explained:

\`\`\`javascript
// Union: All allergies from multiple patients (for family history)
function getAllFamilyAllergies(patient1Allergies, patient2Allergies) {
  const allAllergies = new Set(patient1Allergies);
  for (const allergy of patient2Allergies) {
    allAllergies.add(allergy);
  }
  return allAllergies;
}

// Intersection: Common allergies between patients
function findCommonAllergies(patient1Allergies, patient2Allergies) {
  const common = new Set();
  for (const allergy of patient1Allergies) {
    if (patient2Allergies.has(allergy)) {
      common.add(allergy);
    }
  }
  return common;
}

// Difference: Allergies unique to one patient
function findUniqueAllergies(patient1Allergies, patient2Allergies) {
  const unique = new Set();
  for (const allergy of patient1Allergies) {
    if (!patient2Allergies.has(allergy)) {
      unique.add(allergy);
    }
  }
  return unique;
}

// Example usage
const patient1 = new Set(['Penicillin', 'Latex', 'Shellfish']);
const patient2 = new Set(['Penicillin', 'Ibuprofen', 'Peanuts']);

console.log('All family allergies:', [...getAllFamilyAllergies(patient1, patient2)]);
console.log('Common allergies:', [...findCommonAllergies(patient1, patient2)]);
console.log('Patient 1 unique:', [...findUniqueAllergies(patient1, patient2)]);
\`\`\`

## Why Sets Are Perfect for Healthcare Safety

"Here's something important to understand," Elena said, tapping her pen on the notepad. "Sets are ideal for healthcare safety because they solve the fundamental problem of **unique membership**."

"What do you mean?" Sarah asked.

"In healthcare, we often need to track whether something **is** or **isn't** present, without caring about quantities or relationships. Does this patient have this allergy? Has this procedure been completed? Is this medication contraindicated?"

| Healthcare Safety Need | Set Solution | Benefit |
|----------------------|--------------|---------|
| Prevent duplicate allergies | Automatic uniqueness | Clean, accurate records |
| Instant allergy checking | O(1) membership testing | Fast emergency response |
| Track completed procedures | Boolean membership | Clear completion status |
| Medication safety screening | Ingredient intersection | Prevent adverse reactions |
| Family history tracking | Set union operations | Comprehensive risk assessment |

## Looking Ahead

As their second lesson wound down, Elena smiled at Sarah's obvious enthusiasm. "Tomorrow, we'll explore how Maps and Sets work together in our comprehensive patient management system."

"How do they work together?" Sarah asked, curious.

"Well, imagine we have a Map where each patient ID points to their allergy Set. Or a Map where each medication name points to its ingredient Set. The combination of these data structures creates powerful, efficient systems."

Marcus nodded. "That's when you really see the power of choosing the right data structure for each specific need."

As Sarah helped Elena organize the pharmacy records for the day, she felt a deep sense of accomplishment. What had started as learning about allergy tracking had revealed another fundamental principle of computer science. The Set wasn't just a way to store allergies; it was a powerful tool for ensuring patient safety through efficient, reliable data management.

"Elena," Sarah said as they prepared to leave, "I never realized how much computer science goes into keeping patients safe."

Elena's smile was warm and knowing. "That's the wonderful thing about working in healthcare technology, Sarah. Every data structure we choose, every algorithm we implement, has the potential to save lives. Tomorrow, we'll see how combining Maps and Sets creates even more powerful systems for patient care."

## Key Takeaways

By the end of their second day, Sarah had learned that:

- **Sets store unique values only** - perfect for allergy tracking without duplicates
- **Set operations are all O(1)** - fast and efficient for safety-critical applications
- **Using Sets effectively** requires understanding add, has, delete, size, and clear operations
- **Sets prevent duplicates automatically** - no need for manual duplicate checking
- **Set iteration enables complex operations** - finding intersections, unions, and differences
- **Sets are perfect for membership testing** - instant yes/no answers for safety questions
- **Real-world applications include** allergy tracking, procedure completion, and ingredient checking
- **Healthcare safety requires instant responses** - Sets provide the speed needed for emergency situations

Through hands-on coding challenges, Sarah discovered that understanding how to **use** data structures for specific problems is crucial for building safe, efficient healthcare systems. The simple act of tracking patient allergies had revealed another of computer science's most fundamental and useful data structures. And this was just the beginning of understanding how different data structures work together to create comprehensive healthcare information systems.`,
  exercise: {
    starterCode: `// ✅ JavaScript Set class - built-in and ready to use!
// 🔒 You can trust it works. Focus on how to use it for healthcare safety applications.

/*
Problem: Using Set Operations to Manage Patient Allergies

Dr. Elena has provided you with JavaScript's built-in Set class to help manage patient allergies.
Your job is to USE the Set operations to solve real patient safety problems!

Available Set Operations:
- set.add(value): Add an allergy to the patient's record
- set.has(value): Check if patient has a specific allergy
- set.delete(value): Remove an allergy from patient's record
- set.size: Get the number of allergies
- set.clear(): Remove all allergies (use carefully!)

Complete the functions below to help Elena ensure patient safety!
*/

// ⏱️ Sarah's First Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function addAllergy(allergySet, allergy) {
  // Add a new allergy to the patient's record
  // Use the Set's add operation to store the allergy
  
  // TODO: Use Set operations to add the allergy
  // Hint: allergySet.add(value)
  
  console.log(\`Added allergy: \${allergy}\`);
}

function checkAllergy(allergySet, allergy) {
  // Check if patient has a specific allergy
  // Return true if allergy exists, false if not
  
  // TODO: Use Set operations to check for allergy
  // Hint: allergySet.has(value)
  
  return false; // Replace with actual implementation
}
*/

// ⏱️ Sarah's Second Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function findCommonAllergies(patient1Allergies, patient2Allergies) {
  // Find allergies that both patients share
  // Return a new Set containing only shared allergies
  
  const commonAllergies = new Set();
  
  // TODO: Iterate through one set and check if allergy exists in the other
  // Hint: Use for...of loop and has() method
  
  return commonAllergies;
}
*/

// ⏱️ Sarah's Third Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function isMedicationSafe(patientAllergies, medicationIngredients) {
  // Check if medication is safe for patient
  // Return true if safe (no ingredient matches allergies), false if unsafe
  
  // TODO: Check if any medication ingredient matches patient allergies
  // Hint: Iterate through ingredients and check if patient is allergic to any
  
  return true; // Replace with actual implementation
}
*/`,
    solution: `// ✅ JavaScript Set class - built-in and ready to use!
/*
Problem: Using Set Operations to Manage Patient Allergies

Complete solution showing how to use Set operations effectively for healthcare safety.
*/

function addAllergy(allergySet, allergy) {
  // Add a new allergy to the patient's record
  allergySet.add(allergy);
  console.log(\`Added allergy: \${allergy}\`);
}

function checkAllergy(allergySet, allergy) {
  // Check if patient has a specific allergy
  return allergySet.has(allergy);
}

function findCommonAllergies(patient1Allergies, patient2Allergies) {
  // Find allergies that both patients share
  const commonAllergies = new Set();
  
  for (const allergy of patient1Allergies) {
    if (patient2Allergies.has(allergy)) {
      commonAllergies.add(allergy);
    }
  }
  
  return commonAllergies;
}

function isMedicationSafe(patientAllergies, medicationIngredients) {
  // Check if medication is safe for patient
  for (const ingredient of medicationIngredients) {
    if (patientAllergies.has(ingredient)) {
      return false; // Unsafe - patient is allergic to this ingredient
    }
  }
  return true; // Safe - no allergic ingredients found
}`,
    tests: [
      {
        name: "Test Set basic operations",
        test: (code) => {
          try {
            const testCode = code + `
            // Test Set basic operations
            const allergySet = new Set();
            
            // Test addAllergy function
            if (typeof addAllergy === 'function') {
              addAllergy(allergySet, 'Penicillin');
              addAllergy(allergySet, 'Latex');
              addAllergy(allergySet, 'Penicillin'); // Duplicate - should be ignored
            }
            
            // Test checkAllergy function
            let hasPenicillin = false;
            let hasIbuprofen = false;
            if (typeof checkAllergy === 'function') {
              hasPenicillin = checkAllergy(allergySet, 'Penicillin');
              hasIbuprofen = checkAllergy(allergySet, 'Ibuprofen'); // Not added
            }
            
            return ({ 
              setSize: allergySet.size,
              hasPenicillin: hasPenicillin,
              hasIbuprofen: hasIbuprofen,
              hasLatex: allergySet.has('Latex')
            });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.setSize === 'undefined') {
              return new TestResult({ passed: false, message: "addAllergy function not found. Make sure to uncomment and implement it." });
            }
            
            if (testResult.setSize !== 2) {
              return new TestResult({ passed: false, message: "Set should have 2 unique allergies (duplicates should be ignored)" });
            }
            
            if (testResult.hasPenicillin !== true) {
              return new TestResult({ passed: false, message: "checkAllergy should return true for existing allergies" });
            }
            
            if (testResult.hasIbuprofen !== false) {
              return new TestResult({ passed: false, message: "checkAllergy should return false for non-existent allergies" });
            }
            
            if (!testResult.hasLatex) {
              return new TestResult({ passed: false, message: "Latex allergy should exist in set after being added" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "Set should handle basic allergy operations correctly (add, has, uniqueness)."
      },
      {
        name: "Test findCommonAllergies function",
        test: (code) => {
          try {
            const testCode = code + `
            // Test findCommonAllergies
            const patient1Allergies = new Set(['Penicillin', 'Latex', 'Shellfish']);
            const patient2Allergies = new Set(['Penicillin', 'Ibuprofen', 'Peanuts']);
            const patient3Allergies = new Set(['Aspirin', 'Codeine']);
            
            let commonAllergies1 = new Set();
            let commonAllergies2 = new Set();
            
            if (typeof findCommonAllergies === 'function') {
              commonAllergies1 = findCommonAllergies(patient1Allergies, patient2Allergies);
              commonAllergies2 = findCommonAllergies(patient1Allergies, patient3Allergies);
            }
            
            return ({ 
              common1Size: commonAllergies1.size,
              common1HasPenicillin: commonAllergies1.has('Penicillin'),
              common1HasLatex: commonAllergies1.has('Latex'),
              common2Size: commonAllergies2.size
            });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.common1Size === 'undefined') {
              return new TestResult({ passed: false, message: "findCommonAllergies function not found. Make sure to uncomment and implement it." });
            }
            
            if (testResult.common1Size !== 1) {
              return new TestResult({ passed: false, message: "Should find 1 common allergy between patient1 and patient2 (Penicillin)" });
            }
            
            if (!testResult.common1HasPenicillin) {
              return new TestResult({ passed: false, message: "Common allergies should include Penicillin" });
            }
            
            if (testResult.common1HasLatex) {
              return new TestResult({ passed: false, message: "Common allergies should not include Latex (not shared)" });
            }
            
            if (testResult.common2Size !== 0) {
              return new TestResult({ passed: false, message: "Should find 0 common allergies between patient1 and patient3" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "findCommonAllergies should correctly identify shared allergies between patients."
      },
      {
        name: "Test isMedicationSafe function",
        test: (code) => {
          try {
            const testCode = code + `
            // Test isMedicationSafe
            const patientAllergies = new Set(['Penicillin', 'Latex', 'Shellfish']);
            
            const safeIngredients = new Set(['Ibuprofen', 'Acetaminophen', 'Aspirin']);
            const unsafeIngredients1 = new Set(['Penicillin', 'Ibuprofen']); // Contains Penicillin
            const unsafeIngredients2 = new Set(['Acetaminophen', 'Latex']); // Contains Latex
            const emptyIngredients = new Set();
            
            let safeResult = true;
            let unsafeResult1 = true;
            let unsafeResult2 = true;
            let emptyResult = true;
            
            if (typeof isMedicationSafe === 'function') {
              safeResult = isMedicationSafe(patientAllergies, safeIngredients);
              unsafeResult1 = isMedicationSafe(patientAllergies, unsafeIngredients1);
              unsafeResult2 = isMedicationSafe(patientAllergies, unsafeIngredients2);
              emptyResult = isMedicationSafe(patientAllergies, emptyIngredients);
            }
            
            return ({ 
              safeResult: safeResult,
              unsafeResult1: unsafeResult1,
              unsafeResult2: unsafeResult2,
              emptyResult: emptyResult
            });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.safeResult === 'undefined') {
              return new TestResult({ passed: false, message: "isMedicationSafe function not found. Make sure to uncomment and implement it." });
            }
            
            if (testResult.safeResult !== true) {
              return new TestResult({ passed: false, message: "isMedicationSafe should return true for medications with no allergic ingredients" });
            }
            
            if (testResult.unsafeResult1 !== false) {
              return new TestResult({ passed: false, message: "isMedicationSafe should return false when medication contains Penicillin" });
            }
            
            if (testResult.unsafeResult2 !== false) {
              return new TestResult({ passed: false, message: "isMedicationSafe should return false when medication contains Latex" });
            }
            
            if (testResult.emptyResult !== true) {
              return new TestResult({ passed: false, message: "isMedicationSafe should return true for medications with no ingredients" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "isMedicationSafe should correctly identify safe and unsafe medications based on patient allergies."
      },
    ]
  },
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();

        return (
          <main>
            <h2>Sets Introduction Questions</h2>
            <form className="auto-graded-quiz">
              <div
                className="question"
                data-answers="Patient allergy tracking,Completed procedure tracking,Medication ingredient checking"
              >
                <p>
                  Which of the following scenarios are best implemented using a
                  Set data structure in healthcare?
                </p>

                <label>
                  <input
                    type="checkbox"
                    value="Patient allergy tracking"
                  />{" "}
                  🚫 Patient allergy tracking
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Patient medical history with dates"
                  />{" "}
                  📅 Patient medical history with dates
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Completed procedure tracking"
                  />{" "}
                  ✅ Completed procedure tracking
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Patient room assignments with details"
                  />{" "}
                  🏥 Patient room assignments with details
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Medication ingredient checking"
                  />{" "}
                  💊 Medication ingredient checking
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Doctor schedule with time slots" /> ⏰
                  Doctor schedule with time slots
                </label>
                <div className="feedback"></div>
                <div className="explanation">
                  <ul>
                    <li>
                      <strong>Patient allergy tracking:</strong> ✅ Correct — Perfect Set
                      use case for unique allergies without duplicates.
                    </li>
                    <li>
                      <strong>Medical history with dates:</strong> ❌ Incorrect — This
                      requires key-value pairs (Map) to associate events with dates.
                    </li>
                    <li>
                      <strong>Completed procedure tracking:</strong> ✅ Correct — Set
                      tracks which procedures are done without duplicates.
                    </li>
                    <li>
                      <strong>Room assignments with details:</strong> ❌ Incorrect — This
                      requires key-value mapping (Map) for patient-to-room relationships.
                    </li>
                    <li>
                      <strong>Medication ingredient checking:</strong> ✅ Correct — Set
                      stores unique ingredients for allergy checking.
                    </li>
                    <li>
                      <strong>Doctor schedule with time slots:</strong> ❌ Incorrect — This
                      requires structured data (Map) to associate doctors with schedules.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="question" data-answer="O(1)">
                <p>
                  What is the average time complexity for Set operations like add,
                  has, and delete in patient safety systems?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  Set operations (add, has, delete) are O(1) constant time
                  on average, making them ideal for patient safety systems where
                  instant allergy checking can prevent life-threatening reactions.
                </div>
              </div>

              <div className="question" data-answer="duplicates">
                <p>
                  What does a Set automatically prevent that makes it perfect for
                  allergy tracking? (One word)
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  Sets automatically prevent <strong>duplicates</strong>, ensuring
                  each allergy is only listed once in a patient&apos;s record, which
                  keeps the allergy list clean and prevents confusion during
                  medication administration.
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