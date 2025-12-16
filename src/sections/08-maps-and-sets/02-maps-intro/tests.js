import { TestResult } from "@nss-workshops/nss-core";

export const tests = [
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
    message: "✅ Sarah's First Challenge Complete! addPatient() and getPatientInfo() are working correctly."
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
    message: "✅ Sarah's Second Challenge Complete! updatePatientRoom() is working correctly."
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
    message: "✅ Sarah's Third Challenge Complete! findPatientsByRoom() successfully searches and filters patients."
  }
];