export const tests = [
  {
    name: "⏱️ Jake's First Challenge! - Test recordEmergencyCall() and getEmergencyStats() functions",
    test: (code) => {
      try {
        const testCode = code + `
        // Check if functions exist
        const hasRecordEmergencyCall = typeof recordEmergencyCall === 'function';
        const hasGetEmergencyStats = typeof getEmergencyStats === 'function';
        
        // Test emergency call tracking
        const emergencyTracker = new Map();
        
        // Test recordEmergencyCall function with valid inputs
        let recordResult1 = false;
        let recordResult2 = false;
        let recordResult3 = false;
        
        if (hasRecordEmergencyCall) {
          try {
            recordEmergencyCall(emergencyTracker, 'Medical');
            recordResult1 = true;
          } catch (e) { recordResult1 = false; }
          
          try {
            recordEmergencyCall(emergencyTracker, 'Fire');
            recordResult2 = true;
          } catch (e) { recordResult2 = false; }
          
          try {
            recordEmergencyCall(emergencyTracker, 'Medical'); // Duplicate type
            recordResult3 = true;
          } catch (e) { recordResult3 = false; }
        }
        
        // Test getEmergencyStats function
        let stats = [];
        if (hasGetEmergencyStats) {
          stats = getEmergencyStats(emergencyTracker);
        }
        
        return ({
          mapSize: emergencyTracker.size,
          medicalCount: emergencyTracker.get('Medical'),
          fireCount: emergencyTracker.get('Fire'),
          stats: stats,
          recordResults: [recordResult1, recordResult2, recordResult3],
          hasRecordEmergencyCall: hasRecordEmergencyCall,
          hasGetEmergencyStats: hasGetEmergencyStats
        });
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasRecordEmergencyCall) {
          return { passed: false, message: "recordEmergencyCall function missing or not implemented. Make sure to uncomment and implement it." };
        }
        
        if (!testResult.hasGetEmergencyStats) {
          return { passed: false, message: "getEmergencyStats function missing or not implemented. Make sure to uncomment and implement it." };
        }
        
        if (testResult.mapSize !== 2) {
          return { passed: false, message: "recordEmergencyCall should track unique emergency types" };
        }
        
        if (testResult.medicalCount !== 2) {
          return { passed: false, message: "recordEmergencyCall should increment count for duplicate types" };
        }
        
        if (testResult.fireCount !== 1) {
          return { passed: false, message: "recordEmergencyCall should set count to 1 for new types" };
        }
        
        if (!testResult.stats || testResult.stats.length !== 2) {
          return { passed: false, message: "getEmergencyStats should return stats for all emergency types" };
        }
        
        if (testResult.stats[0].type !== 'Medical' || testResult.stats[0].count !== 2) {
          return { passed: false, message: "getEmergencyStats should sort by frequency (Medical should be first with count 2)" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "Jake's First Challenge! - failed",
    successMessage: "✅ Jake's First Challenge Complete! recordEmergencyCall() and getEmergencyStats() are working correctly."
  },
  {
    name: "⏱️ Jake's Second Challenge! - Test contactHospital() and getRecentContacts() functions",
    test: (code) => {
      try {
        const testCode = code + `
        // Check if functions exist
        const hasContactHospital = typeof contactHospital === 'function';
        const hasGetRecentContacts = typeof getRecentContacts === 'function';
        
        // Test hospital contact tracking
        const hospitalContacts = new Map();
        const currentTime = Date.now();
        
        // Test contactHospital function
        let contact1 = false;
        let contact2 = false;
        let contact3 = false;
        
        if (hasContactHospital) {
          contact1 = contactHospital(hospitalContacts, 'General Hospital', currentTime);
          contact2 = contactHospital(hospitalContacts, 'General Hospital', currentTime + 300000); // 5 min later
          contact3 = contactHospital(hospitalContacts, 'City Medical', currentTime);
        }
        
        // Test getRecentContacts function
        let recentContacts = [];
        if (hasGetRecentContacts) {
          recentContacts = getRecentContacts(hospitalContacts, currentTime + 300000);
        }
        
        return ({
          contact1: contact1,
          contact2: contact2,
          contact3: contact3,
          recentContacts: recentContacts.sort(),
          hasContactHospital: hasContactHospital,
          hasGetRecentContacts: hasGetRecentContacts
        });
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasContactHospital) {
          return { passed: false, message: "contactHospital function missing or not implemented. Make sure to uncomment and implement it." };
        }
        
        if (!testResult.hasGetRecentContacts) {
          return { passed: false, message: "getRecentContacts function missing or not implemented. Make sure to uncomment and implement it." };
        }
        
        if (testResult.contact1 !== true) {
          return { passed: false, message: "Jake's Second Challenge! - contactHospital should return true for first contact with hospital" };
        }
        
        if (testResult.contact2 !== false) {
          return { passed: false, message: "Jake's Second Challenge! - contactHospital should return false for duplicate contact within time window" };
        }
        
        if (testResult.contact3 !== true) {
          return { passed: false, message: "Jake's Second Challenge! - contactHospital should return true for different hospital" };
        }
        
        if (!testResult.recentContacts || testResult.recentContacts.length !== 2) {
          return { passed: false, message: "Jake's Second Challenge! - getRecentContacts should return all hospitals contacted within time window" };
        }
        
        const expectedContacts = ['City Medical', 'General Hospital'];
        if (!expectedContacts.every(hospital => testResult.recentContacts.includes(hospital))) {
          return { passed: false, message: "Jake's Second Challenge! - getRecentContacts should include both contacted hospitals" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: "Jake's Second Challenge! - " + error.message };
      }
    },
    message: "Jake's Second Challenge! - failed",
    successMessage: "✅ Jake's Second Challenge Complete! contactHospital() and getRecentContacts() are working correctly."
  },
  {
    name: "⏱️ Jake's Third Challenge! - Test assignEquipment(), getAvailableEquipment(), and getEquipmentUsageStats() functions",
    test: (code) => {
      try {
        const testCode = code + `
        // Check if functions exist
        const hasAssignEquipment = typeof assignEquipment === 'function';
        const hasGetAvailableEquipment = typeof getAvailableEquipment === 'function';
        const hasGetEquipmentUsageStats = typeof getEquipmentUsageStats === 'function';
        
        // Test equipment assignment and usage
        const equipmentAssignments = new Set();
        const equipmentUsage = new Map();
        const allEquipment = ['Defibrillator', 'Oxygen Tank', 'Stretcher', 'First Aid Kit'];
        
        // Test assignEquipment function
        let assign1 = false;
        let assign2 = false;
        let assign3 = false;
        
        if (hasAssignEquipment) {
          assign1 = assignEquipment(equipmentAssignments, equipmentUsage, 'Unit-1', 'Defibrillator');
          assign2 = assignEquipment(equipmentAssignments, equipmentUsage, 'Unit-2', 'Defibrillator'); // Duplicate
          assign3 = assignEquipment(equipmentAssignments, equipmentUsage, 'Unit-1', 'Oxygen Tank');
        }
        
        // Test getAvailableEquipment function
        let available = [];
        if (hasGetAvailableEquipment) {
          available = getAvailableEquipment(equipmentAssignments, allEquipment);
        }
        
        // Test getEquipmentUsageStats function
        let usageStats = [];
        if (hasGetEquipmentUsageStats) {
          usageStats = getEquipmentUsageStats(equipmentUsage);
        }
        
        return ({
          assign1: assign1,
          assign2: assign2,
          assign3: assign3,
          assignmentsSize: equipmentAssignments.size,
          available: available.sort(),
          usageStats: usageStats,
          defibrillatorUsage: equipmentUsage.get('Defibrillator'),
          oxygenUsage: equipmentUsage.get('Oxygen Tank'),
          hasAssignEquipment: hasAssignEquipment,
          hasGetAvailableEquipment: hasGetAvailableEquipment,
          hasGetEquipmentUsageStats: hasGetEquipmentUsageStats
        });
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasAssignEquipment) {
          return { passed: false, message: "assignEquipment function missing or not implemented. Make sure to uncomment and implement it." };
        }
        
        if (!testResult.hasGetAvailableEquipment) {
          return { passed: false, message: "getAvailableEquipment function missing or not implemented. Make sure to uncomment and implement it." };
        }
        
        if (!testResult.hasGetEquipmentUsageStats) {
          return { passed: false, message: "getEquipmentUsageStats function missing or not implemented. Make sure to uncomment and implement it." };
        }
        
        if (testResult.assign1 !== true) {
          return { passed: false, message: "Jake's Third Challenge! - assignEquipment should return true for first assignment" };
        }
        
        if (testResult.assign2 !== false) {
          return { passed: false, message: "Jake's Third Challenge! - assignEquipment should return false for duplicate assignment" };
        }
        
        if (testResult.assign3 !== true) {
          return { passed: false, message: "Jake's Third Challenge! - assignEquipment should return true for different equipment" };
        }
        
        if (testResult.assignmentsSize !== 2) {
          return { passed: false, message: "Jake's Third Challenge! - Equipment assignments should track unique equipment only" };
        }
        
        const expectedAvailable = ['First Aid Kit', 'Stretcher'];
        if (!testResult.available || testResult.available.length !== 2 ||
            !expectedAvailable.every(item => testResult.available.includes(item))) {
          return { passed: false, message: "Jake's Third Challenge! - getAvailableEquipment should return unassigned equipment" };
        }
        
        if (testResult.defibrillatorUsage !== 1) {
          return { passed: false, message: "Jake's Third Challenge! - assignEquipment should track usage count (Defibrillator should have count 1)" };
        }
        
        if (testResult.oxygenUsage !== 1) {
          return { passed: false, message: "Jake's Third Challenge! - assignEquipment should track usage count (Oxygen Tank should have count 1)" };
        }
        
        if (!testResult.usageStats || testResult.usageStats.length !== 2) {
          return { passed: false, message: "Jake's Third Challenge! - getEquipmentUsageStats should return stats for all used equipment" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: "Jake's Third Challenge! - " + error.message };
      }
    },
    message: "Jake's Third Challenge! - failed",
    successMessage: "✅ Jake's Third Challenge Complete! assignEquipment(), getAvailableEquipment(), and getEquipmentUsageStats() are working correctly."
  },
];