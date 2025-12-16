// ✅ JavaScript Set class - built-in and ready to use!
/*
Problem: Using Set Operations to Manage Patient Allergies

Complete solution showing how to use Set operations effectively for healthcare safety.
*/

function addAllergy(allergySet, allergy) {
  // Add a new allergy to the patient's record
  allergySet.add(allergy);
  console.log(`Added allergy: ${allergy}`);
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
}