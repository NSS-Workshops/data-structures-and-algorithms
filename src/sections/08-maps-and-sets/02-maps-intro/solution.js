/*
Problem: Using Map Operations to Manage Patient Records

Complete solution showing how to use Map operations effectively for healthcare.
*/

function addPatient(patientMap, patientId, patientInfo) {
  // Add a new patient to the records system
  patientMap.set(patientId, patientInfo);
  console.log(`Added patient ${patientId}: ${patientInfo.name}`);
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
    console.log(`Updated patient ${patientId} room to ${newRoom}`);
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
}