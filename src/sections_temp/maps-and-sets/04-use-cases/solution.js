/*
Problem: Emergency Dispatch System - Real-World Map and Set Applications

Complete solution showing how to use Maps and Sets for emergency dispatch operations.
*/

function recordEmergencyCall(emergencyTracker, emergencyType) {
  // Track frequency of different emergency types
  if (emergencyTracker.has(emergencyType)) {
    emergencyTracker.set(emergencyType, emergencyTracker.get(emergencyType) + 1);
  } else {
    emergencyTracker.set(emergencyType, 1);
  }
  console.log(`Recorded ${emergencyType} emergency call`);
}

function getEmergencyStats(emergencyTracker) {
  // Return statistics about emergency call frequencies
  const stats = [];
  
  for (const [type, count] of emergencyTracker) {
    stats.push({ type, count });
  }
  
  return stats.sort((a, b) => b.count - a.count);
}

function contactHospital(hospitalContacts, hospitalName, currentTime) {
  // Track which hospitals have been contacted recently
  const timeWindow = 600000; // 10 minutes in milliseconds
  
  if (hospitalContacts.has(hospitalName)) {
    const lastContact = hospitalContacts.get(hospitalName);
    if (currentTime - lastContact < timeWindow) {
      return false; // Too recent, don't contact again
    }
  }
  
  hospitalContacts.set(hospitalName, currentTime);
  return true;
}

function getRecentContacts(hospitalContacts, currentTime) {
  // Get list of hospitals contacted in the last 10 minutes
  const timeWindow = 600000;
  const recentContacts = [];
  
  for (const [hospitalName, contactTime] of hospitalContacts) {
    if (currentTime - contactTime < timeWindow) {
      recentContacts.push(hospitalName);
    }
  }
  
  return recentContacts;
}

function assignEquipment(equipmentAssignments, equipmentUsage, unitId, equipmentType) {
  // Assign equipment to a unit and track usage
  if (equipmentAssignments.has(equipmentType)) {
    return false; // Already assigned
  }
  
  equipmentAssignments.add(equipmentType);
  
  // Track usage
  if (equipmentUsage.has(equipmentType)) {
    equipmentUsage.set(equipmentType, equipmentUsage.get(equipmentType) + 1);
  } else {
    equipmentUsage.set(equipmentType, 1);
  }
  
  return true;
}

function getAvailableEquipment(equipmentAssignments, allEquipment) {
  // Find equipment that is not currently assigned
  const available = [];
  
  for (const equipment of allEquipment) {
    if (!equipmentAssignments.has(equipment)) {
      available.push(equipment);
    }
  }
  
  return available;
}

function getEquipmentUsageStats(equipmentUsage) {
  // Get usage statistics for all equipment types
  const stats = [];
  
  for (const [equipment, usageCount] of equipmentUsage) {
    stats.push({ equipment, usageCount });
  }
  
  return stats.sort((a, b) => b.usageCount - a.usageCount);
}