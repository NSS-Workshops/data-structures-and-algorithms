// ✅ JavaScript Set class - built-in and ready to use!
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
  
  console.log(`Added allergy: ${allergy}`);
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
*/