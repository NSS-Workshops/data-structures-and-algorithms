/*
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
  
  console.log(`Added patient ${patientId}: ${patientInfo.name}`);
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
*/