import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";
import { TestResult } from "../../utils/test_utils";

export const mapsIntroChapter = {
  id: "maps-intro",
  title: "Introduction to Maps - The Patient Records System",
  sectionId: "maps-and-sets",
  previousChapterId: "maps-sets-learning-objectives",
  content: `
## What is a Map?
In JavaScript, a Map is a data structure , a collection of key–value pairs where keys can be of any type (including objects, functions, or primitives), unlike plain objects which only allow strings or symbols as keys. In Javascript the Maps insertion order is preserved, has a built-in .size property, and provides convenient methods like .set(), .get(), .has(), and .delete() for efficient O(1) lookups and updates.

<iframe width="560" height="315" src="https://www.youtube.com/embed/QtLbuFUI1I4?si=Avi0keGWunmUFrSf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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

get() returns undefined when the key isn’t in the Map. We could use that to test membership, but it’s brittle.
If you ever store undefined (or other falsy values like 0), the check can lie. 
The canonical way to test membership is has(), which will examine in the next section.

\`\`\`
// Patient record context: patientID -> allergy count
const patientAllergyCounts = new Map();
patientAllergyCounts.set("PT-101", 2);
patientAllergyCounts.set("PT-202", undefined); // key exists, value not loaded yet
patientAllergyCounts.set("PT-303", 0);         // key exists, zero allergies (falsy)

// Using get() for membership (NOT recommended)
console.log(patientAllergyCounts.get("PT-101") !== undefined); // true
console.log(patientAllergyCounts.get("PT-202") !== undefined); // false  ← wrong: key exists
console.log(patientAllergyCounts.get("PT-303"));               // 0 (falsy) → easy to misread

// Canonical membership check
console.log(patientAllergyCounts.has("PT-101")); // true
console.log(patientAllergyCounts.has("PT-202")); // true  ← correct
console.log(patientAllergyCounts.has("PT-999")); // false
\`\`\`

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

### Iterating a Map (for...of)

As the afternoon approached, Dr. Martinez, the head of the Emergency Department, approached the station with a concerned expression.

"Marcus, we need to generate a report of all patients currently in the ICU for the evening shift handoff. Can the system help us loop through all our patient records?"

"Perfect timing, Dr. Martinez!" Marcus said, turning to Sarah. "This brings us to another essential Map operation - **iteration**. Sometimes we need to examine all patient records, not just look up individual ones."

Marcus pulled up the system interface. "Sarah, watch this. When we need to go through all patients in our Map, we use a \`for...of\` loop with **destructuring** to efficiently and concisely access both the patient ID and their information."

\`\`\`javascript
// Looping through all patient records using for...of with destructuring
const patientMap = new Map();

// Add some sample patients
patientMap.set('P-2024-001', { name: 'John Smith', room: 'ICU-1', condition: 'Stable' });
patientMap.set('P-2024-002', { name: 'Maria Garcia', room: 'ICU-2', condition: 'Critical' });
patientMap.set('P-2024-003', { name: 'David Lee', room: '302A', condition: 'Recovering' });

// Method 1: Destructuring entries (most common and efficient)
console.log('=== All Patient Records ===');
for (const [patientId, patientInfo] of patientMap) {
  console.log(\`Patient \${patientId}: \${patientInfo.name} in \${patientInfo.room} - \${patientInfo.condition}\`);
}

// Method 2: Iterating over keys only
console.log('\\n=== Patient IDs Only ===');
for (const patientId of patientMap.keys()) {
  console.log(\`Patient ID: \${patientId}\`);
}

// Method 3: Iterating over values only
console.log('\\n=== Patient Info Only ===');
for (const patientInfo of patientMap.values()) {
  console.log(\`\${patientInfo.name} - \${patientInfo.condition}\`);
}
\`\`\`

"Notice the **destructuring** syntax," Marcus explained, pointing to the first loop. "When we write \`[patientId, patientInfo]\`, we're automatically unpacking each Map entry into two separate variables - the key and the value."

Sarah looked intrigued. "So instead of getting some complex object, we immediately get the patient ID and all their information as separate variables?"

"Exactly! It's much cleaner than the alternative," Marcus demonstrated:

\`\`\`javascript
// Without destructuring (more verbose)
for (const entry of patientMap) {
  const patientId = entry[0];        // Get the key
  const patientInfo = entry[1];      // Get the value
  console.log(\`Patient \${patientId}: \${patientInfo.name}\`);
}

// With destructuring (clean and readable)
for (const [patientId, patientInfo] of patientMap) {
  console.log(\`Patient \${patientId}: \${patientInfo.name}\`);
}
\`\`\`

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

## Maps vs Objects: What You Already Know

<iframe width="560" height="315" src="https://www.youtube.com/embed/Z_2rpuPQmC0?si=EM73Rjfegtxu-m20" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

"Before we dive deeper into Maps," Marcus said, "I want to address something important. Sarah, you mentioned you have experience with JavaScript programming. You probably already know about objects, right?"

Sarah nodded. "Yes, I've used objects plenty of times. They're like containers that hold key-value pairs."

"So Maps aren't replacing objects?" Sarah asked.

"Not at all! Objects and Maps serve different purposes. Think of it this way: objects are perfect when you know your property names ahead of time - like a patient record template with fixed fields. But Maps shine when you're dealing with dynamic keys - like patient IDs that you won't know until runtime."


### The Object Approach (What You Already Know)

"If you've watched the video above - you'll recognize this pattern," Marcus said. "Let's see how we might handle patient records using regular JavaScript objects:"

\`\`\`javascript
// Using Objects for patient records (traditional approach)
const patientRecords = {
  'P-2024-001': {
    name: 'John Smith',
    room: '302A',
    age: 40,
    allergies: 'Penicillin'
  },
  'P-2024-002': {
    name: 'Maria Garcia',
    room: '205B',
    age: 55,
    allergies: 'None'
  }
};

// Accessing patient data with objects
console.log(patientRecords['P-2024-001']); // Works fine
console.log(patientRecords['P-2024-001'].name); // "John Smith"

// Adding new patients
patientRecords['P-2024-003'] = {
  name: 'David Lee',
  room: '410C',
  age: 32,
  allergies: 'Shellfish'
};
\`\`\`

"This looks familiar, doesn't it?" Marcus asked. "Objects can definitely handle key-value relationships. So why do we need Maps?"

### The Critical Differences

Marcus opened a new demonstration. "Here's where things get interesting. Let me show you some scenarios where objects fall short in healthcare systems."

#### 1. Key Type Limitations

\`\`\`javascript
// Objects: Keys are ALWAYS strings (or Symbols)
const objectRecords = {};

// These all become string keys!
objectRecords[123] = 'Patient A';        // Key becomes "123"
objectRecords['123'] = 'Patient B';      // Overwrites Patient A!
objectRecords[true] = 'Patient C';       // Key becomes "true"

console.log(Object.keys(objectRecords)); // ["123", "true"]
console.log(objectRecords[123]);         // "Patient B" (not "Patient A"!)

// Maps: Keys can be ANY type
const mapRecords = new Map();

mapRecords.set(123, 'Patient A');        // Number key
mapRecords.set('123', 'Patient B');      // String key (different!)
mapRecords.set(true, 'Patient C');       // Boolean key

console.log(mapRecords.get(123));        // "Patient A"
console.log(mapRecords.get('123'));      // "Patient B"
console.log(mapRecords.get(true));       // "Patient C"
\`\`\`

"In healthcare," Marcus explained, "this distinction is crucial. What if we want to use actual patient objects as keys, or numeric room numbers?"

#### 2. Prototype Pollution and Inherited Properties

\`\`\`javascript
// Objects inherit properties from Object.prototype
const patientObj = {};
console.log(patientObj.toString);        // [Function: toString] - inherited!
console.log(patientObj.hasOwnProperty);  // [Function: hasOwnProperty] - inherited!

// This can cause unexpected behavior
console.log('toString' in patientObj);   // true (even though we never set it!)

// Maps are clean - no inherited properties
const patientMap = new Map();
console.log(patientMap.get('toString')); // undefined (as expected)
\`\`\`

#### 3. Size and Iteration Differences

\`\`\`javascript
// Objects: No direct size property
const patientObj = {
  'P-001': { name: 'John' },
  'P-002': { name: 'Jane' }
};

// Getting size requires Object.keys()
console.log(Object.keys(patientObj).length); // 2 (but includes inherited properties!)

// Maps: Built-in size property
const patientMap = new Map();
patientMap.set('P-001', { name: 'John' });
patientMap.set('P-002', { name: 'Jane' });

console.log(patientMap.size); // 2 (exact count, no inherited properties)
\`\`\`

#### 4. Iteration Order Guarantees (JavaScript preserves insertion order of a Map, other languages may not!)

\`\`\`javascript
// Objects: Iteration order is complex and can be unpredictable
const patientObj = {};
patientObj['P-003'] = 'Third';
patientObj['P-001'] = 'First';
patientObj['P-002'] = 'Second';
patientObj[10] = 'Numeric';
patientObj[5] = 'Another numeric';

// Order might be: 5, 10, P-003, P-001, P-002 (numbers first, then insertion order)
for (const key in patientObj) {
  console.log(key, patientObj[key]);
}

// Maps: ALWAYS maintain insertion order in JS!
const patientMap = new Map();
patientMap.set('P-003', 'Third');
patientMap.set('P-001', 'First');
patientMap.set('P-002', 'Second');
patientMap.set(10, 'Numeric');
patientMap.set(5, 'Another numeric');

// Order is guaranteed: P-003, P-001, P-002, 10, 5
for (const [key, value] of patientMap) {
  console.log(key, value);
}
\`\`\`

### Real Healthcare Scenario: Why This Matters

"Let me show you a real scenario where these differences matter," Marcus said, pulling up a complex example:

\`\`\`javascript
// Scenario: Multi-department patient tracking
// We need to track patients across different departments using various ID types

// Using Objects (problematic)
const departmentRecords = {};

// Different departments use different ID formats
departmentRecords[12345] = { dept: 'Cardiology', patient: 'John Doe' };     // Numeric ID
departmentRecords['12345'] = { dept: 'Radiology', patient: 'Jane Smith' };  // String ID (OVERWRITES!)
departmentRecords['ER-001'] = { dept: 'Emergency', patient: 'Bob Johnson' };

console.log('Object records:', Object.keys(departmentRecords));
// Only ["12345", "ER-001"] - lost the Cardiology record!

// Using Maps (correct)
const departmentMap = new Map();

departmentMap.set(12345, { dept: 'Cardiology', patient: 'John Doe' });      // Numeric ID
departmentMap.set('12345', { dept: 'Radiology', patient: 'Jane Smith' });   // String ID (separate!)
departmentMap.set('ER-001', { dept: 'Emergency', patient: 'Bob Johnson' });

console.log('Map size:', departmentMap.size); // 3 - all records preserved!
console.log('Cardiology patient:', departmentMap.get(12345));
console.log('Radiology patient:', departmentMap.get('12345'));
\`\`\`

### When to Use Objects vs Maps

Marcus created a comparison table on the whiteboard:

| Scenario | Use Object | Use Map | Why |
|----------|------------|---------|-----|
| **Configuration/Settings** | ✅ | ❌ | Objects are perfect for known, fixed properties |
| **JSON Data** | ✅ | ❌ | JSON naturally maps to objects |
| **Record/Entity Storage** | ❌ | ✅ | Maps handle dynamic keys better, because that’s what they’re built for. |
| **Frequent Additions/Deletions** | ❌ | ✅ | Maps are optimized for this |
| **Non-string Keys** | ❌ | ✅ | Objects convert all keys to strings |
| **Size Tracking** | ❌ | ✅ | Maps provide instant size |
| **Guaranteed Iteration Order** | ❌ | ✅ | Maps maintain insertion order in JS (This isn’t universal across languages. For example, in Java's Map doesn’t guarantee insertion order. Always check your language’s data-structure documentation.)|
| **Prototype-free Storage** | ❌ | ✅ | Maps don't inherit properties |

### Migration Strategy: Objects to Maps

"If you're working with existing object-based code," Marcus said, "here's how you can migrate to Maps when appropriate:"

\`\`\`javascript
// Converting existing object-based patient records to Maps
function migrateToMap(patientObject) {
  const patientMap = new Map();
  
  // Convert object entries to Map entries
  for (const [patientId, patientInfo] of Object.entries(patientObject)) {
    patientMap.set(patientId, patientInfo);
  }
  
  return patientMap;
}

// Example migration
const legacyPatients = {
  'P-001': { name: 'John', room: '302A' },
  'P-002': { name: 'Jane', room: '205B' }
};

const modernPatients = migrateToMap(legacyPatients);
console.log(modernPatients.get('P-001')); // { name: 'John', room: '302A' }
\`\`\`

### Key Takeaways: Objects vs Maps

Marcus pulled up a summary slide. "Let's consolidate what we've learned about when to use objects versus Maps:"

**Use Objects When:**
- You have a fixed set of known properties (like a patient record template)
- You're working with JSON data from APIs
- You need the familiar dot notation syntax
- You're defining configuration or settings
- Performance for property access is critical

**Use Maps When:**
- You have dynamic keys that aren't known at compile time
- You need non-string keys (numbers, objects, functions)
- You frequently add/remove key-value pairs
- You need guaranteed insertion order (in JS)
- You want to avoid prototype pollution
- You need an accurate count of entries

#### **[This MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps) article goes into more detail about when to use objects vs Maps**


## Understanding Map Keys and Data Types

"Now that you understand why Maps are often better than objects for dynamic data," Marcus continued, "let's explore the full flexibility of Map keys. Sarah, what types of data can we use as keys in JavaScript Maps?"

Sarah thought for a moment, now with a better understanding. "Well, we've seen that unlike objects, Maps can use any data type as keys, not just strings..."

"Exactly! Maps are much more flexible than objects," Marcus explained, opening a demonstration:

\`\`\`javascript
// Maps can use ANY data type as keys!
const hospitalMap = new Map();

// String keys (most common)
hospitalMap.set('P-2024-001', { name: 'John Doe', room: '302A' });

// Number keys
hospitalMap.set(12345, { name: 'Jane Smith', room: '205B' });

// Object keys
const doctorObj = { id: 'DR001', name: 'Dr. Wilson' };
hospitalMap.set(doctorObj, { schedule: 'Monday-Friday', department: 'Cardiology' });

// Even function keys!
const emergencyProtocol = function() { return 'Code Blue'; };
hospitalMap.set(emergencyProtocol, { priority: 'Critical', response: 'Immediate' });

console.log('String key lookup:', hospitalMap.get('P-2024-001'));
console.log('Number key lookup:', hospitalMap.get(12345));
console.log('Object key lookup:', hospitalMap.get(doctorObj));
\`\`\`

"The key insight," Marcus continued, "is how JavaScript compares these different key types:"

### Key Comparison Rules in Maps

\`\`\`javascript
const comparisonDemo = new Map();

// Primitive values (strings, numbers, booleans) are compared by VALUE
comparisonDemo.set('patient1', 'John');
comparisonDemo.set('patient1', 'Jane'); // Overwrites John!
console.log(comparisonDemo.get('patient1')); // 'Jane'

// Objects are compared by REFERENCE, not content
const room1 = { floor: 3, number: 'A' };
const room2 = { floor: 3, number: 'A' }; // Same content, different object

comparisonDemo.set(room1, 'Patient A');
comparisonDemo.set(room2, 'Patient B'); // Different keys! Both stored

console.log(comparisonDemo.size); // 3 total entries
console.log(comparisonDemo.get(room1)); // 'Patient A'
console.log(comparisonDemo.get(room2)); // 'Patient B'

// Special case: NaN is treated as equal to itself in Maps
comparisonDemo.set(NaN, 'Special case');
comparisonDemo.set(NaN, 'Updated value'); // Overwrites!
console.log(comparisonDemo.get(NaN)); // 'Updated value'
\`\`\`

## Map Key Override Behavior

"This brings us to a critical concept," Marcus said seriously. "Maps enforce **unique keys** - you cannot have duplicate keys, but you can **override** values."

\`\`\`javascript
// Demonstrating override behavior in patient records
const patientRecords = new Map();

// Initial patient record
patientRecords.set('P-2024-001', {
  name: 'John Doe',
  room: '302A',
  condition: 'Stable',
  admitted: '2024-01-15'
});

console.log('Initial record:', patientRecords.get('P-2024-001'));

// Later update - OVERWRITES the entire record!
patientRecords.set('P-2024-001', {
  name: 'John Doe',
  room: '305B', // Room changed
  condition: 'Improving',
  admitted: '2024-01-15',
  lastUpdated: '2024-01-20'
});

console.log('Updated record:', patientRecords.get('P-2024-001'));
console.log('Total patients:', patientRecords.size); // Still 1!
\`\`\`

"Notice something important," Marcus pointed out. "When we set the same key twice, we don't get two records - the second one **completely replaces** the first. This is both powerful and dangerous."

### Safe Update Pattern

"In healthcare, we need to be careful about overwrites. Here's a safer pattern:"

\`\`\`javascript
function updatePatientRoom(patientMap, patientId, newRoom) {
  // Defensive programming - check inputs
  if (!patientId || !newRoom) {
    console.error('Invalid input: patientId and newRoom are required');
    return false;
  }
  
  // Check if patient exists
  if (!patientMap.has(patientId)) {
    console.error(\`Patient \${patientId} not found\`);
    return false;
  }
  
  // Get existing record and update only the room
  const existingRecord = patientMap.get(patientId);
  const updatedRecord = {
    ...existingRecord, // Keep all existing data
    room: newRoom,     // Update only the room
    lastUpdated: new Date().toISOString()
  };
  
  // Set the updated record
  patientMap.set(patientId, updatedRecord);
  return true;
}
\`\`\`

## Key Takeaways

By the end of their first day, Sarah had learned that:

- **Maps create direct key-value relationships** - like patient IDs to medical records
- **Map operations are all O(1)** - fast and efficient regardless of database size
- **Using Maps effectively** requires understanding set, get, has, delete, and size operations
- **Maps handle both creation and updates** - setting an existing key updates its value
- **Map iteration allows complex searches** - finding patients by criteria across all records
- **Maps are perfect for unique identification** - each key can only exist once
- **Maps complement objects** - use objects for structured data, Maps for dynamic key-value storage
- **Key type flexibility** - Maps accept any data type as keys, unlike objects which convert to strings
- **Real-world applications include** patient records, medication databases, and doctor schedules
- **Healthcare systems require instant access** - Maps provide the speed needed for emergency situations
`,
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
        name: "⏱️ Sarah's First Challenge! - Test addPatient() and getPatientInfo() functions",
        test: (code) => {
          try {
            const testCode = code + `
            // Check if functions exist
            const hasAddPatient = typeof addPatient === 'function';
            const hasGetPatientInfo = typeof getPatientInfo === 'function';

            // Test Map basic operations
            const patientMap = new Map();
            
            // Test addPatient function with valid inputs
            let addResult1 = false;
            let addResult2 = false;
            
            if (hasAddPatient) {
              try {
                addPatient(patientMap, 'P-001', { name: 'John Doe', room: 'ICU-1', age: 45 });
                addResult1 = true;
              } catch (e) { addResult1 = false; }
              
              try {
                addPatient(patientMap, 'P-002', { name: 'Jane Smith', room: '302A', age: 32 });
                addResult2 = true;
              } catch (e) { addResult2 = false; }
            }
            
            // Test getPatientInfo function
            let patient1 = null;
            let patient2 = null;
            if (hasGetPatientInfo) {
              patient1 = getPatientInfo(patientMap, 'P-001');
              patient2 = getPatientInfo(patientMap, 'P-999'); // Non-existent
            }
            
            return ({
              mapSize: patientMap.size,
              patient1: patient1,
              patient2: patient2,
              hasP001: patientMap.has('P-001'),
              addResult1: addResult1,
              addResult2: addResult2,
              hasAddPatient: hasAddPatient,
              hasGetPatientInfo: hasGetPatientInfo
            });
            `;

            const testResult = new Function(testCode)();

            if (!testResult.hasAddPatient) {
              return new TestResult({ passed: false, message: "addPatient function missing or not implemented. Make sure to uncomment and implement it." });
            }
            
            if (!testResult.hasGetPatientInfo) {
              return new TestResult({ passed: false, message: "getPatientInfo function missing or not implemented. Make sure to uncomment and implement it." });
            }
            
            if (testResult.mapSize !== 2) {
              return new TestResult({ passed: false, message: "addPatient should add valid patients to the map" });
            }
            
            if (!testResult.patient1 || testResult.patient1.name !== 'John Doe') {
              return new TestResult({ passed: false, message: "getPatientInfo should return correct patient information" });
            }
            
            if (testResult.patient2 !== null) {
              return new TestResult({ passed: false, message: "getPatientInfo should return null for non-existent patients" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "Sarah's First Challenge! - failed",
        successMessage: "✅ Sarah's First Challenge Complete! addPatient() and getPatientInfo() are working correctly."
      },
      {
        name: "⏱️ Sarah's Second Challenge! - Test updatePatientRoom() function",
        test: (code) => {
          try {
            const testCode = code + `
            // Check if function exists
            const hasUpdatePatientRoom = typeof updatePatientRoom === 'function';
            const hasAddPatient = typeof addPatient === 'function';
            const hasGetPatientInfo = typeof getPatientInfo === 'function';
            
            // Test updatePatientRoom
            const patientMap = new Map();
            
            // Add test patient (if addPatient exists)
            if (hasAddPatient) {
              addPatient(patientMap, 'P-001', { name: 'John Doe', room: 'ICU-1', age: 45 });
            } else {
              // Manually add patient for testing
              patientMap.set('P-001', { name: 'John Doe', room: 'ICU-1', age: 45 });
            }
            
            let updateResult1 = updatePatientRoom(patientMap, 'P-001', 'ICU-2');
            let updateResult2 = updatePatientRoom(patientMap, 'P-999', 'Room-1'); // Non-existent
            
            let updatedPatient = null;
            if (hasGetPatientInfo) {
              updatedPatient = getPatientInfo(patientMap, 'P-001');
            } else {
              updatedPatient = patientMap.get('P-001');
            }
            
            return ({
              updateResult1: updateResult1,
              updateResult2: updateResult2,
              updatedRoom: updatedPatient ? updatedPatient.room : null,
              hasUpdatePatientRoom: hasUpdatePatientRoom
            });
            `;
            
            const testResult = new Function(testCode)();
            
            if (!testResult.hasUpdatePatientRoom) {
              return new TestResult({ passed: false, message: "updatePatientRoom function missing or not implemented. Make sure to uncomment and implement it." });
            }
            
            if (testResult.updateResult1 !== true) {
              return new TestResult({ passed: false, message: "Sarah's Second Challenge! - updatePatientRoom should return true when updating existing patient" });
            }
            
            if (testResult.updateResult2 !== false) {
              return new TestResult({ passed: false, message: "Sarah's Second Challenge! - updatePatientRoom should return false when patient doesn't exist" });
            }
            
            if (testResult.updatedRoom !== 'ICU-2') {
              return new TestResult({ passed: false, message: "Sarah's Second Challenge! - updatePatientRoom should actually update the patient's room" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: "Sarah's Second Challenge! - " + error.message });
          }
        },
        message: "Sarah's Second Challenge! - failed",
        successMessage: "✅ Sarah's Second Challenge Complete! updatePatientRoom() is working correctly."
      },
      {
        name: "⏱️ Sarah's Third Challenge! - Test findPatientsByRoom() function",
        test: (code) => {
          try {
            const testCode = code + `
            // Check if function exists
            const hasFindPatientsByRoom = typeof findPatientsByRoom === 'function';
            const hasAddPatient = typeof addPatient === 'function';
            
            // Test findPatientsByRoom
            const patientMap = new Map();
            
            // Add test patients
            if (hasAddPatient) {
              addPatient(patientMap, 'P-001', { name: 'John Doe', room: 'ICU-1', age: 45 });
              addPatient(patientMap, 'P-002', { name: 'Jane Smith', room: 'ICU-2', age: 32 });
              addPatient(patientMap, 'P-003', { name: 'Bob Johnson', room: '302A', age: 28 });
              addPatient(patientMap, 'P-004', { name: 'Alice Brown', room: 'ICU-3', age: 55 });
            } else {
              // Manually add patients for testing
              patientMap.set('P-001', { name: 'John Doe', room: 'ICU-1', age: 45 });
              patientMap.set('P-002', { name: 'Jane Smith', room: 'ICU-2', age: 32 });
              patientMap.set('P-003', { name: 'Bob Johnson', room: '302A', age: 28 });
              patientMap.set('P-004', { name: 'Alice Brown', room: 'ICU-3', age: 55 });
            }
            
            let icuPatients = findPatientsByRoom(patientMap, 'ICU');
            let roomPatients = findPatientsByRoom(patientMap, '302');
            let noMatchPatients = findPatientsByRoom(patientMap, 'ER');
            
            return ({
              icuPatients: icuPatients.sort(),
              roomPatients: roomPatients,
              noMatchPatients: noMatchPatients,
              hasFindPatientsByRoom: hasFindPatientsByRoom
            });
            `;
            
            const testResult = new Function(testCode)();
            
            if (!testResult.hasFindPatientsByRoom) {
              return new TestResult({ passed: false, message: "findPatientsByRoom function missing or not implemented. Make sure to uncomment and implement it." });
            }
            
            if (!Array.isArray(testResult.icuPatients)) {
              return new TestResult({ passed: false, message: "Sarah's Third Challenge! - findPatientsByRoom should return an array" });
            }
            
            const expectedICU = ['P-001', 'P-002', 'P-004'].sort();
            if (testResult.icuPatients.length !== 3 || !testResult.icuPatients.every(id => expectedICU.includes(id))) {
              return new TestResult({ passed: false, message: `Sarah's Third Challenge! - findPatientsByRoom should find all ICU patients. Expected: ${expectedICU}, Got: ${testResult.icuPatients}` });
            }
            
            if (testResult.roomPatients.length !== 1 || testResult.roomPatients[0] !== 'P-003') {
              return new TestResult({ passed: false, message: "Sarah's Third Challenge! - findPatientsByRoom should find patients in room 302A" });
            }
            
            if (testResult.noMatchPatients.length !== 0) {
              return new TestResult({ passed: false, message: "Sarah's Third Challenge! - findPatientsByRoom should return empty array when no matches found" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: "Sarah's Third Challenge! - " + error.message });
          }
        },
        message: "Sarah's Third Challenge! - failed",
        successMessage: "✅ Sarah's Third Challenge Complete! findPatientsByRoom() successfully searches and filters patients."
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
              <div className="question" data-answer="false">
                <p>
                  Consider this code snippet:<br />
                  <code>
                    const patientMap = new Map();<br />
                    const room1 = &#123; floor: 3, number: &apos;A&apos; &#125;;<br />
                    const room2 = &#123; floor: 3, number: &apos;A&apos; &#125;;<br />
                    patientMap.set(room1, &apos;Patient A&apos;);<br />
                    patientMap.set(room2, &apos;Patient B&apos;);<br />
                  </code><br />
                  True or False: The Map will contain only one entry because room1 and room2 have the same content.
                </p>
                <label>
                  <input type="radio" name="reference-keys" value="true" required /> True
                </label>
                <br />
                <label>
                  <input type="radio" name="reference-keys" value="false" required /> False
                </label>
                <span className="feedback" />
                <div className="explanation">
                  <strong>False.</strong> The Map will contain TWO entries. When using objects as keys in Maps, JavaScript compares them by <strong>reference</strong>, not by content. Even though room1 and room2 have identical properties (floor: 3, number: &apos;A&apos;), they are different objects in memory, so they are treated as different keys. This is a crucial concept in healthcare systems where you might use patient objects or room objects as keys - each object instance is unique even if the data looks the same.
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

              <div className="question" data-answer="true">
                <p>
                  True or False: JavaScript Maps preserve insertion order, but this behavior is not guaranteed in all programming languages that implement Map-like data structures.
                </p>
                <label>
                  <input type="radio" name="insertion-order" value="true" required /> True
                </label>
                <br />
                <label>
                  <input type="radio" name="insertion-order" value="false" required /> False
                </label>
                <span className="feedback" />
                <div className="explanation">
                  <strong>True.</strong> JavaScript Maps guarantee insertion order preservation - when you iterate through a Map, you&apos;ll get entries in the order they were added. However, this is not universal across all programming languages. For example, Python dictionaries only preserve insertion order as of Python 3.7+, and some other languages&apos; hash map implementations do not preserve insertion order at all. This is an important consideration when workin with Maps in other languages.
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