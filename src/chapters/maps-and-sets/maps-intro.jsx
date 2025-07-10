import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";
import { TestResult } from "../../utils/test_utils";

export const mapsIntroChapter = {
  id: "maps-intro",
  title: "Introduction to Maps - The Patient Records System",
  sectionId: "maps-and-sets",
  previousChapterId: "maps-sets-learning-objectives",
  content: `
## Dr. Sarah's First Day at Mercy General Hospital

The morning sun filtered through the tall windows of Mercy General Hospital as Dr. Sarah Chen adjusted her white coat and checked her tablet one more time. It was her first day as the new Chief Medical Information Officer, and she was about to meet with Marcus Rodriguez, the hospital's veteran IT director who had been managing patient data systems for over a decade.

"Dr. Chen! Welcome to Mercy General," Marcus called out as he approached with a warm smile. He was a man in his fifties with graying hair and kind eyes behind wire-rimmed glasses. "I'm Marcus, and I'm excited to show you how we keep track of our patients' medical information."

Sarah smiled back, feeling some of her nervousness fade. "Thank you, Marcus. I'm really looking forward to learning about your systems. I've heard great things about how efficiently you manage patient data here."

"Well, we've learned a lot over the years," Marcus said with a chuckle. "Let me show you something that might seem simple but is actually a perfect example of an important computer science concept called a **Map**."

## The Challenge of Patient Identification

Marcus led Sarah to the main nursing station where several monitors displayed patient information. The station buzzed with activity as nurses and doctors accessed patient records throughout their shifts.

"Here's what I want you to notice," Marcus said, pointing to one of the screens. "See this patient lookup system? When a nurse types in a patient ID like 'P-2024-001', the system instantly displays all of that patient's information - name, room number, medical history, current medications, everything."

Sarah looked at the screen, thinking. "That's impressive. But with thousands of patients, how does it find the right record so quickly?"

"Excellent question!" Marcus's eyes lit up. "That's exactly what makes this system so powerful. We use what computer scientists call a **Map** - a data structure that creates a direct relationship between a unique **key** (like the patient ID) and a **value** (like all the patient's information)."

\`\`\`
Patient ID (Key)    →    Patient Information (Value)
┌─────────────────┐      ┌─────────────────────────────────┐
│   P-2024-001    │  →   │ name: John Smith                │
│                 │      │ room: 302A                      │
│                 │      │ age: 40                         │
│                 │      │ allergies: Penicillin           │
│                 │      │ current_meds: Lisinopril        │
└─────────────────┘      └─────────────────────────────────┘

┌─────────────────┐      ┌─────────────────────────────────┐
│   P-2024-002    │  →   │ name: Maria Garcia              │
│                 │      │ room: 205B                      │
│                 │      │ age: 55.                        │
│                 │      │ allergies: None                 │
│                 │      │ current_meds: Metformin         │
└─────────────────┘      └─────────────────────────────────┘
\`\`\`

Sarah nodded slowly. "So it's like having a direct phone line to each patient's information instead of having to search through a phone book?"

"Perfect analogy!" Marcus confirmed. "Instead of searching through thousands of records one by one, the Map gives us **instant access** to any patient's information using their unique ID."

## Understanding Map Operations

As the morning progressed, Marcus showed Sarah how their patient records system naturally demonstrated the core operations of a Map data structure.

### set(): Adding New Patient Records

Around 10 AM, Lisa Thompson, an experienced nurse who had been working at the hospital for eight years, came to the station to register a new patient admission.

"Morning, Marcus! Morning, Dr. Chen!" Lisa called out cheerfully. "I need to add a new patient to the system - emergency admission from last night."

"Perfect timing, Lisa," Marcus said. "Dr. Chen, watch what Lisa is doing. In Map terminology, we call this operation **set** - adding a new key-value pair to our patient records."

Sarah watched as Lisa entered the information:
- Patient ID: P-2024-157 (the key)
- Patient Information: Complete medical record (the value)

"Each time Lisa adds a new patient," Marcus explained, "that patient ID becomes a new 'key' in our Map, and all their medical information becomes the 'value' associated with that key. The set operation creates this relationship."

### get(): Retrieving Patient Information

"Now comes the magic part," Marcus said, pulling up the patient lookup interface. "Lisa, can you show Dr. Chen how we retrieve a patient's information?"

Lisa typed "P-2024-157" into the search field and instantly, the new patient's complete record appeared on screen.

"This is called **get** - retrieving a value using its key," Marcus explained. "Notice how fast that was? Whether we have 100 patients or 10,000 patients, looking up a specific patient takes the same amount of time."

Sarah was impressed. "So the system doesn't have to search through every patient record?"

"Exactly! The Map structure allows **O(1)** lookup time - that means constant time, regardless of how many patients we have in the system."

### has(): Checking Patient Existence

Halfway through their tour, Dr. James Wilson, a senior physician, approached the station looking concerned.

"Lisa, I need to check if we have a patient with ID P-2024-089 in the system. I'm getting conflicting information from different departments."

Lisa typed the ID into the system. "Let me check... Yes, we do have that patient. They're in room 418."

"What Dr. Wilson just asked for," Marcus explained to Sarah, "is called the **has** operation - checking if a key exists in the Map without necessarily retrieving all the information."

### delete(): Removing Patient Records

"Now, this is important," Marcus said, pulling up the administrative interface. "When a patient is discharged and their records are archived, we use the **delete** operation to remove them from the active patient Map."

He showed Sarah how the system could remove a patient record:
- Input: Patient ID (the key)
- Action: Remove both the key and all associated patient information
- Result: Patient no longer appears in active patient lookups

"Of course," Marcus added quickly, "we don't actually delete the medical records - they're archived for legal and medical reasons. But we remove them from the active patient Map to keep our system focused on current patients."

## ⏱️ Sarah's First Challenge!

Marcus pulled out a tablet and opened a coding environment. "Sarah, I want you to try something. I've created a simplified version of our patient records system using a Map. Let's see if you can use the Map operations we just learned about."

"You mean... I get to actually code with Maps?" Sarah's eyes lit up with excitement.

"Absolutely! But here's the thing - you don't need to build the Map from scratch. JavaScript provides a built-in Map class for you. Your job is to **use** the Map operations to solve real hospital problems."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`addPatient()\` and \`getPatientInfo()\`to insert/retrieve patients
- Use \`patientMap.set()\` and \`patientMap.get()\` operations
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This first challenge simulates what we just did manually," Marcus explained. "You need to add patients to our records system and then retrieve their information when needed."

## The Power of Key-Value Relationships

After Sarah completed the first challenge, Marcus smiled approvingly. "Excellent work! Now you've experienced firsthand how Map operations work. Let's reflect on what you've learned."

"So Sarah, why do you think our patient records system works so well as a Map?" Marcus asked.

Sarah thought for a moment. "Well, every patient has a unique ID, and we need to quickly access their complete medical information. The Map creates a direct connection between the ID and the data."

"Perfect understanding," Marcus said. "And what makes this better than, say, keeping all patient records in a simple list?"

"Oh!" Sarah realized. "With a list, we'd have to search through every patient record until we found the right one. That could take forever with thousands of patients. But with a Map, we go directly to the right record."

"Exactly. That's why Maps are essential in healthcare systems where speed can literally save lives."

## ⏱️ Sarah's Second Challenge!

"Now let's try something more complex," Marcus said, pulling up another coding challenge. "Sometimes we need to update patient information - maybe their room number changes, or we need to add new medication information."

"How do we handle updates?" Sarah asked, intrigued.

"Great question! The beautiful thing about Maps is that if you set a key that already exists, it updates the value instead of creating a duplicate. This makes updating patient records very straightforward."

Structure of Patient Information:
\`\`\`json
{
  name: String
  room: String
  age: Number
  allergies: String
  current_meds: String
}
  \`\`\`

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`updatePatientRoom()\` to change a patient's room assignment
- Use \`patientMap.has()\` to check if patient exists before updating
- Use \`patientMap.set()\` to update the patient's information
- **Click Run Code**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge teaches you that Maps handle both creation and updates seamlessly," Marcus explained.

## ⏱️ Sarah's Third Challenge!

"One more challenge," Marcus said with a smile. "Sometimes we need to find all patients who meet certain criteria - like all patients in the ICU, or all patients with specific allergies."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`findPatientsByRoom()\` to find all patients in a specific ward
- Use Map iteration methods to search through all patient records
- Return an array of patient IDs that match the criteria
- **Click Run Code**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"Excellent work, Sarah!" Marcus said as Sarah completed the challenges. "You've now experienced how to use Maps to solve real-world healthcare problems."

## Real-World Map Applications in Healthcare

Marcus pulled out his laptop and opened several hospital systems. "Let me show you some other places where we use Maps in our hospital," he said.

### 1. Medication Lookup System

Marcus opened the pharmacy system. "See this medication database? When a doctor prescribes 'Lisinopril', the system instantly shows dosage information, side effects, and drug interactions."

\`\`\`javascript
class MedicationDatabase {
  constructor() {
    this.medicationMap = new Map();
    this.initializeMedications();
  }
  
  initializeMedications() {
    this.medicationMap.set('Lisinopril', {
      type: 'ACE Inhibitor',
      commonDosage: '10-40mg daily',
      sideEffects: ['Dry cough', 'Dizziness', 'Hyperkalemia'],
      interactions: ['NSAIDs', 'Potassium supplements']
    });
    
    this.medicationMap.set('Metformin', {
      type: 'Biguanide',
      commonDosage: '500-2000mg daily',
      sideEffects: ['Nausea', 'Diarrhea', 'Lactic acidosis'],
      interactions: ['Alcohol', 'Contrast dye']
    });
  }
  
  getMedicationInfo(drugName) {
    if (this.medicationMap.has(drugName)) {
      return this.medicationMap.get(drugName);
    }
    return null;
  }
  
  checkDrugInteraction(drug1, drug2) {
    const med1 = this.getMedicationInfo(drug1);
    const med2 = this.getMedicationInfo(drug2);
    
    if (med1 && med2) {
      return med1.interactions.includes(drug2) || med2.interactions.includes(drug1);
    }
    return false;
  }
}

// Test the medication system
const medDB = new MedicationDatabase();
const lisinoprilInfo = medDB.getMedicationInfo('Lisinopril');
console.log('Lisinopril info:', lisinoprilInfo);

const hasInteraction = medDB.checkDrugInteraction('Lisinopril', 'NSAIDs');
console.log('Drug interaction detected:', hasInteraction);
\`\`\`

### 2. Doctor Schedule Management

"And here's how we manage doctor schedules," Marcus continued:

\`\`\`javascript
class DoctorSchedule {
  constructor() {
    this.scheduleMap = new Map();
  }
  
  addShift(doctorId, shift) {
    if (!this.scheduleMap.has(doctorId)) {
      this.scheduleMap.set(doctorId, []);
    }
    this.scheduleMap.get(doctorId).push(shift);
  }
  
  getDoctorSchedule(doctorId) {
    return this.scheduleMap.get(doctorId) || [];
  }
  
  findAvailableDoctor(timeSlot) {
    for (const [doctorId, shifts] of this.scheduleMap) {
      const isAvailable = shifts.some(shift => 
        shift.start <= timeSlot && timeSlot <= shift.end && !shift.occupied
      );
      if (isAvailable) {
        return doctorId;
      }
    }
    return null;
  }
}

// Test doctor scheduling
const schedule = new DoctorSchedule();
schedule.addShift('DR001', { start: 8, end: 16, occupied: false });
schedule.addShift('DR002', { start: 16, end: 24, occupied: false });

const availableDoctor = schedule.findAvailableDoctor(10);
console.log('Available doctor at 10 AM:', availableDoctor);
\`\`\`

## Understanding Map Performance

"Here's something important to understand," Marcus said, pulling up a performance chart. "All of these Map operations are **O(1)** - constant time. Do you know what that means?"

Sarah shook her head.

"It means that whether we have 50 patients or 50,000 patients, these operations take the same amount of time. Looking up a patient? Same speed. Adding a new patient? Same speed. The size of our patient database doesn't slow us down."

"That's incredible!" Sarah realized. "So as our hospital grows, the system doesn't get slower?"

"Exactly! That's what makes Maps so powerful for healthcare applications. When every second counts in an emergency, we need systems that respond instantly."

## Map Operations Summary

Marcus pulled out a notepad and sketched out the key operations they'd learned:

### Core Map Operations

**Set (Adding/Updating patient records)**
- Adds a key-value pair to the Map
- Time Complexity: O(1) - always fast, no matter how many patients
- Example: Adding new patient P-2024-158 with their medical information

**Get (Retrieving patient information)**
- Retrieves the value associated with a key
- Time Complexity: O(1) - instant lookup
- Example: Getting all information for patient P-2024-001

**Has (Checking if patient exists)**
- Checks if a key exists in the Map
- Time Complexity: O(1) - quick verification
- Example: Verifying if patient P-2024-089 is in the system

**Delete (Removing patient records)**
- Removes a key-value pair from the Map
- Time Complexity: O(1) - fast removal
- Example: Removing discharged patient from active records

**Size (Counting total patients)**
- Returns the number of key-value pairs in the Map
- Time Complexity: O(1) - instant count
- Example: Getting total number of active patients

## Why Maps Are Perfect for Healthcare

"Here's something important to understand," Marcus said, tapping his pen on the notepad. "Maps are ideal for healthcare because they solve the fundamental problem of **unique identification**."

"What do you mean?" Sarah asked.

"Every patient needs a unique identifier - their patient ID. And we need to instantly access all their information using that ID. Maps create this direct relationship perfectly."

| Healthcare Need | Map Solution | Benefit |
|----------------|--------------|---------|
| Unique patient identification | Each patient ID is a unique key | No duplicate patients |
| Instant record access | O(1) lookup time | Fast emergency response |
| Easy updates | Set operation updates existing keys | Current information always |
| Existence verification | Has operation checks for patients | Prevents errors |
| Scalable system | Performance doesn't degrade | Grows with hospital |

## Looking Ahead

As their first lesson wound down, Marcus smiled at Sarah's obvious enthusiasm. "Tomorrow, we'll explore a different but related concept - our patient allergy tracking system. That one uses something called a **Set**."

"How is that different from a Map?" Sarah asked, curious.

"Well, imagine if we only cared about **which** allergies a patient has, not how many times they've had reactions or when they were discovered. We just need to know: does this patient have a penicillin allergy? Yes or no."

Sarah thought about it. "So it's like... a collection of unique items without the extra information?"

"Exactly! A Set stores unique values without associating them with other data. It's perfect for tracking things like allergies, symptoms that have been observed, or procedures that have been completed."

As Sarah helped Marcus organize the patient records for the day, she felt a sense of accomplishment. What had started as learning about a hospital computer system had revealed a fundamental principle of computer science. The Map wasn't just a way to store patient data; it was a powerful tool for creating efficient, reliable systems that could save lives.

"Marcus," Sarah said as they prepared to leave, "I never thought managing patient records could teach me so much about programming."

Marcus's smile was warm and knowing. "That's the wonderful thing about working in healthcare technology, Sarah. Every system we build has the potential to help save lives. Tomorrow, we'll discover how Sets help us track patient allergies and ensure medication safety."

## Key Takeaways

By the end of their first day, Sarah had learned that:

- **Maps create direct key-value relationships** - like patient IDs to medical records
- **Map operations are all O(1)** - fast and efficient regardless of database size
- **Using Maps effectively** requires understanding set, get, has, delete, and size operations
- **Maps handle both creation and updates** - setting an existing key updates its value
- **Map iteration allows complex searches** - finding patients by criteria across all records
- **Maps are perfect for unique identification** - each key can only exist once
- **Real-world applications include** patient records, medication databases, and doctor schedules
- **Healthcare systems require instant access** - Maps provide the speed needed for emergency situations

Through hands-on coding challenges, Sarah discovered that understanding how to **use** data structures is just as important as knowing how they work internally. The simple act of looking up patient records had revealed one of computer science's most fundamental and useful data structures. And this was just the beginning of Sarah's journey into the organized, efficient world of healthcare information systems and the data structures that power them.`,
  exercise: {
    starterCode: `/*
Problem: Using Map Operations to Manage Patient Records

Dr. Sarah has provided you with JavaScript's built-in Map class to help manage patient records.
Your job is to USE the Map operations to solve real healthcare problems!

Available Map Operations:
- map.set(key, value): Add or update a patient record
- map.get(key): Retrieve a patient's information by ID
- map.has(key): Check if a patient exists in the system
- map.delete(key): Remove a patient from active records
- map.size: Get the number of patients in the system
- map.clear(): Remove all patients (use carefully!)

Complete the functions below to help Sarah manage patient records!
*/

// ⏱️ Sarah's First Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function addPatient(patientMap, patientId, patientInfo) {
  // Add a new patient to the records system
  // Use the Map's set operation to store patient information
  
  // TODO: Use Map operations to add the patient
  // Hint: patientMap.set(key, value)
  
  console.log(\`Added patient \${patientId}: \${patientInfo.name}\`);
}
function getPatientInfo(patientMap, patientId) {
  // Retrieve a patient's information by their ID
  // Return the patient info if found, null if not found
  
  // TODO: Use Map operations to get patient information
  // Hint: Check if patient exists first, then get their info
  
  return null; // Replace with actual implementation
}
*/

// ⏱️ Sarah's Second Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function updatePatientRoom(patientMap, patientId, newRoom) {
  // Update a patient's room assignment
  // Return true if successful, false if patient not found
  
  // TODO: Check if patient exists, then update their room
  // Hint: Get current patient info, modify it, then set it back
  
  return false; // Replace with actual implementation
}
*/

// ⏱️ Sarah's Third Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function findPatientsByRoom(patientMap, roomPrefix) {
  // Find all patients whose room starts with the given prefix
  // Return an array of patient IDs
  // Example: roomPrefix "ICU" should find patients in "ICU-1", "ICU-2", etc.
  
  const matchingPatients = [];
  
  // TODO: Iterate through all patients and check their room assignments
  // Hint: Use for...of loop with patientMap entries
  
  return matchingPatients;
}
*/`,
    solution: `
/*
Problem: Using Map Operations to Manage Patient Records

Complete solution showing how to use Map operations effectively for healthcare.
*/

function addPatient(patientMap, patientId, patientInfo) {
  // Add a new patient to the records system
  patientMap.set(patientId, patientInfo);
  console.log("Added patient \${patientId}: \${patientInfo.name}");
}

function getPatientInfo(patientMap, patientId) {
  // Retrieve a patient's information by their ID
  if (patientMap.has(patientId)) {
    return patientMap.get(patientId);
  }
  return null;
}

function updatePatientRoom(patientMap, patientId, newRoom) {
  // Update a patient's room assignment
  if (patientMap.has(patientId)) {
    const patientInfo = patientMap.get(patientId);
    patientInfo.room = newRoom;
    patientMap.set(patientId, patientInfo);
    console.log(\`Updated patient \${patientId} room to \${newRoom}\`);
    return true;
  }
  return false;
}

function findPatientsByRoom(patientMap, roomPrefix) {
  // Find all patients whose room starts with the given prefix
  const matchingPatients = [];
  
  for (const [patientId, patientInfo] of patientMap) {
    if (patientInfo.room && patientInfo.room.startsWith(roomPrefix)) {
      matchingPatients.push(patientId);
    }
  }
  
  return matchingPatients;
}`,
    tests: [
      {
        name: "Test Map basic operations",
        test: (code) => {
          try {
            const testCode = code + `
            // Test Map basic operations
            const patientMap = new Map();
            
            // Test addPatient function
            if (typeof addPatient === 'function') {
              addPatient(patientMap, 'P-001', { name: 'John Doe', room: 'ICU-1', age: 45 });
              addPatient(patientMap, 'P-002', { name: 'Jane Smith', room: '302A', age: 32 });
            }
            
            // Test getPatientInfo function
            let patient1 = null;
            let patient2 = null;
            if (typeof getPatientInfo === 'function') {
              patient1 = getPatientInfo(patientMap, 'P-001');
              patient2 = getPatientInfo(patientMap, 'P-999'); // Non-existent
            }
            
            return ({ 
              mapSize: patientMap.size,
              patient1: patient1,
              patient2: patient2,
              hasP001: patientMap.has('P-001')
            });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.mapSize === 'undefined') {
              return new TestResult({ passed: false, message: "addPatient function not found. Make sure to uncomment and implement it." });
            }
            
            if (testResult.mapSize !== 2) {
              return new TestResult({ passed: false, message: "addPatient should add patients to the map" });
            }
            
            if (!testResult.patient1 || testResult.patient1.name !== 'John Doe') {
              return new TestResult({ passed: false, message: "getPatientInfo should return correct patient information" });
            }
            
            if (testResult.patient2 !== null) {
              return new TestResult({ passed: false, message: "getPatientInfo should return null for non-existent patients" });
            }
            
            if (!testResult.hasP001) {
              return new TestResult({ passed: false, message: "Patient should exist in map after being added" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "Map should handle basic patient operations correctly (add, get, has)."
      },
      {
        name: "Test updatePatientRoom function",
        test: (code) => {
          try {
            const testCode = code + `
            // Test updatePatientRoom
            const patientMap = new Map();
            
            // Add test patients
            if (typeof addPatient === 'function') {
              addPatient(patientMap, 'P-001', { name: 'John Doe', room: 'ICU-1', age: 45 });
            }
            
            let updateResult1 = false;
            let updateResult2 = false;
            let updatedPatient = null;
            
            if (typeof updatePatientRoom === 'function') {
              updateResult1 = updatePatientRoom(patientMap, 'P-001', 'ICU-2');
              updateResult2 = updatePatientRoom(patientMap, 'P-999', 'Room-1'); // Non-existent
              
              if (typeof getPatientInfo === 'function') {
                updatedPatient = getPatientInfo(patientMap, 'P-001');
              }
            }
            
            return ({ 
              updateResult1: updateResult1,
              updateResult2: updateResult2,
              updatedRoom: updatedPatient ? updatedPatient.room : null
            });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.updateResult1 === 'undefined') {
              return new TestResult({ passed: false, message: "updatePatientRoom function not found. Make sure to uncomment and implement it." });
            }
            
            if (testResult.updateResult1 !== true) {
              return new TestResult({ passed: false, message: "updatePatientRoom should return true when updating existing patient" });
            }
            
            if (testResult.updateResult2 !== false) {
              return new TestResult({ passed: false, message: "updatePatientRoom should return false when patient doesn't exist" });
            }
            
            if (testResult.updatedRoom !== 'ICU-2') {
              return new TestResult({ passed: false, message: "updatePatientRoom should actually update the patient's room" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "updatePatientRoom should update existing patients and handle non-existent patients correctly."
      },
      {
        name: "Test findPatientsByRoom function",
        test: (code) => {
          try {
            const testCode = code + `
            // Test findPatientsByRoom
            const patientMap = new Map();
            
            // Add test patients
            if (typeof addPatient === 'function') {
              addPatient(patientMap, 'P-001', { name: 'John Doe', room: 'ICU-1', age: 45 });
              addPatient(patientMap, 'P-002', { name: 'Jane Smith', room: 'ICU-2', age: 32 });
              addPatient(patientMap, 'P-003', { name: 'Bob Johnson', room: '302A', age: 28 });
              addPatient(patientMap, 'P-004', { name: 'Alice Brown', room: 'ICU-3', age: 55 });
            }
            
            let icuPatients = [];
            let roomPatients = [];
            let noMatchPatients = [];
            
            if (typeof findPatientsByRoom === 'function') {
              icuPatients = findPatientsByRoom(patientMap, 'ICU');
              roomPatients = findPatientsByRoom(patientMap, '302');
              noMatchPatients = findPatientsByRoom(patientMap, 'ER');
            }
            
            return ({ 
              icuPatients: icuPatients.sort(),
              roomPatients: roomPatients,
              noMatchPatients: noMatchPatients
            });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.icuPatients === 'undefined') {
              return new TestResult({ passed: false, message: "findPatientsByRoom function not found. Make sure to uncomment and implement it." });
            }
            
            if (!Array.isArray(testResult.icuPatients)) {
              return new TestResult({ passed: false, message: "findPatientsByRoom should return an array" });
            }
            
            const expectedICU = ['P-001', 'P-002', 'P-004'].sort();
            if (testResult.icuPatients.length !== 3 || !testResult.icuPatients.every(id => expectedICU.includes(id))) {
              return new TestResult({ passed: false, message: `findPatientsByRoom should find all ICU patients. Expected: ${expectedICU}, Got: ${testResult.icuPatients}` });
            }
            
            if (testResult.roomPatients.length !== 1 || testResult.roomPatients[0] !== 'P-003') {
              return new TestResult({ passed: false, message: "findPatientsByRoom should find patients in room 302A" });
            }
            
            if (testResult.noMatchPatients.length !== 0) {
              return new TestResult({ passed: false, message: "findPatientsByRoom should return empty array when no matches found" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "findPatientsByRoom should search through all patients and return matching IDs."
      },
    ]
  },
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();

        return (
          <main>
            <h2>Maps Introduction Questions</h2>
            <form className="auto-graded-quiz">
              <div
                className="question"
                data-answers="Patient record lookup by ID,Medication database for drug information,Doctor schedule management"
              >
                <p>
                  Which of the following scenarios are best implemented using a
                  Map data structure in healthcare?
                </p>

                <label>
                  <input
                    type="checkbox"
                    value="Patient record lookup by ID"
                  />{" "}
                  🏥 Patient record lookup by ID
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Patient waiting queue for appointments"
                  />{" "}
                  ⏰ Patient waiting queue for appointments
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Medication database for drug information"
                  />{" "}
                  💊 Medication database for drug information
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Patient allergy tracking (unique allergies only)"
                  />{" "}
                  🚫 Patient allergy tracking (unique allergies only)
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Doctor schedule management"
                  />{" "}
                  👨‍⚕️ Doctor schedule management
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Emergency room triage order" /> 🚨
                  Emergency room triage order
                </label>
                <div className="feedback"></div>
                <div className="explanation">
                  <ul>
                    <li>
                      <strong>Patient record lookup:</strong> ✅ Correct — Perfect Map
                      use case with patient ID as key and medical info as value.
                    </li>
                    <li>
                      <strong>Patient waiting queue:</strong> ❌ Incorrect — This
                      requires FIFO ordering (Queue), not key-value mapping.
                    </li>
                    <li>
                      <strong>Medication database:</strong> ✅ Correct — Drug name
                      as key, medication info as value for instant lookup.
                    </li>
                    <li>
                      <strong>Allergy tracking:</strong> ❌ Incorrect — This only
                      needs unique values (Set), not key-value pairs.
                    </li>
                    <li>
                      <strong>Doctor schedule:</strong> ✅ Correct — Doctor ID as
                      key, schedule information as value.
                    </li>
                    <li>
                      <strong>ER triage order:</strong> ❌ Incorrect — This requires
                      priority ordering, not key-value mapping.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="question" data-answer="O(1)">
                <p>
                  What is the average time complexity for Map operations like get,
                  set, and has in healthcare systems?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  Map operations (get, set, has, delete) are O(1) constant time
                  on average, making them ideal for healthcare systems where
                  instant access to patient information can be life-critical.
                </div>
              </div>

              <div className="question" data-answer="key">
                <p>
                  In a patient records Map, the patient ID (like &quot;P-2024-001&quot;) is
                  called the _____, while the medical information is called the value.
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  In Map terminology, the patient ID is the <strong>key</strong> -
                  the unique identifier used to access the associated medical
                  information (the value). This key-value relationship enables
                  instant patient record lookup.
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