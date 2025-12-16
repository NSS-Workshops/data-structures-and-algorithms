export const tests = [
  {
    name: "⏱️ Sarah's First Challenge! - Test addAllergy() and checkAllergy() functions",
    test: (code) => {
      try {
        const testCode = code + `
        // Check if functions exist
        const hasAddAllergy = typeof addAllergy === 'function';
        const hasCheckAllergy = typeof checkAllergy === 'function';
        
        // Test Set basic operations
        const allergySet = new Set();
        
        // Test addAllergy function
        let addResult1 = false;
        let addResult2 = false;
        
        if (hasAddAllergy) {
          try {
            addAllergy(allergySet, 'Penicillin');
            addResult1 = true;
          } catch (e) { addResult1 = false; }
          
          try {
            addAllergy(allergySet, 'Latex');
            addResult2 = true;
          } catch (e) { addResult2 = false; }
          
          // Test duplicate (should be ignored)
          addAllergy(allergySet, 'Penicillin');
        }
        
        // Test checkAllergy function
        let hasPenicillin = false;
        let hasIbuprofen = false;
        if (hasCheckAllergy) {
          hasPenicillin = checkAllergy(allergySet, 'Penicillin');
          hasIbuprofen = checkAllergy(allergySet, 'Ibuprofen'); // Not added
        }
        
        return ({
          setSize: allergySet.size,
          hasPenicillin: hasPenicillin,
          hasIbuprofen: hasIbuprofen,
          hasLatex: allergySet.has('Latex'),
          hasAddAllergy: hasAddAllergy,
          hasCheckAllergy: hasCheckAllergy
        });
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasAddAllergy) {
          return { passed: false, message: "addAllergy function missing or not implemented. Make sure to uncomment and implement it." };
        }
        
        if (!testResult.hasCheckAllergy) {
          return { passed: false, message: "checkAllergy function missing or not implemented. Make sure to uncomment and implement it." };
        }
        
        if (testResult.setSize !== 2) {
          return { passed: false, message: "Set should have 2 unique allergies (duplicates should be ignored)" };
        }
        
        if (testResult.hasPenicillin !== true) {
          return { passed: false, message: "checkAllergy should return true for existing allergies" };
        }
        
        if (testResult.hasIbuprofen !== false) {
          return { passed: false, message: "checkAllergy should return false for non-existent allergies" };
        }
        
        if (!testResult.hasLatex) {
          return { passed: false, message: "Latex allergy should exist in set after being added" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "Sarah's First Challenge! - failed",
    successMessage: "✅ Sarah's First Challenge Complete! addAllergy() and checkAllergy() are working correctly."
  },
  {
    name: "⏱️ Sarah's Second Challenge! - Test findCommonAllergies() function",
    test: (code) => {
      try {
        const testCode = code + `
        // Check if function exists
        const hasFindCommonAllergies = typeof findCommonAllergies === 'function';
        
        // Test findCommonAllergies
        const patient1Allergies = new Set(['Penicillin', 'Latex', 'Shellfish']);
        const patient2Allergies = new Set(['Penicillin', 'Ibuprofen', 'Peanuts']);
        const patient3Allergies = new Set(['Aspirin', 'Codeine']);
        
        let commonAllergies1 = findCommonAllergies(patient1Allergies, patient2Allergies);
        let commonAllergies2 = findCommonAllergies(patient1Allergies, patient3Allergies);
        
        return ({
          common1Size: commonAllergies1.size,
          common1HasPenicillin: commonAllergies1.has('Penicillin'),
          common1HasLatex: commonAllergies1.has('Latex'),
          common2Size: commonAllergies2.size,
          hasFindCommonAllergies: hasFindCommonAllergies
        });
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFindCommonAllergies) {
          return { passed: false, message: "findCommonAllergies function missing or not implemented. Make sure to uncomment and implement it." };
        }
        
        if (testResult.common1Size !== 1) {
          return { passed: false, message: "Sarah's Second Challenge! - Should find 1 common allergy between patient1 and patient2 (Penicillin)" };
        }
        
        if (!testResult.common1HasPenicillin) {
          return { passed: false, message: "Sarah's Second Challenge! - Common allergies should include Penicillin" };
        }
        
        if (testResult.common1HasLatex) {
          return { passed: false, message: "Sarah's Second Challenge! - Common allergies should not include Latex (not shared)" };
        }
        
        if (testResult.common2Size !== 0) {
          return { passed: false, message: "Sarah's Second Challenge! - Should find 0 common allergies between patient1 and patient3" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "Sarah's Second Challenge! - failed",
    successMessage: "✅ Sarah's Second Challenge Complete! findCommonAllergies() successfully identifies shared allergies between patients."
  },
  {
    name: "⏱️ Sarah's Third Challenge! - Test isMedicationSafe() function",
    test: (code) => {
      try {
        const testCode = code + `
        // Check if function exists
        const hasIsMedicationSafe = typeof isMedicationSafe === 'function';
        
        // Test isMedicationSafe
        const patientAllergies = new Set(['Penicillin', 'Latex', 'Shellfish']);
        
        const safeIngredients = new Set(['Ibuprofen', 'Acetaminophen', 'Aspirin']);
        const unsafeIngredients1 = new Set(['Penicillin', 'Ibuprofen']); // Contains Penicillin
        const unsafeIngredients2 = new Set(['Acetaminophen', 'Latex']); // Contains Latex
        const emptyIngredients = new Set();
        
        let safeResult = isMedicationSafe(patientAllergies, safeIngredients);
        let unsafeResult1 = isMedicationSafe(patientAllergies, unsafeIngredients1);
        let unsafeResult2 = isMedicationSafe(patientAllergies, unsafeIngredients2);
        let emptyResult = isMedicationSafe(patientAllergies, emptyIngredients);
        
        return ({
          safeResult: safeResult,
          unsafeResult1: unsafeResult1,
          unsafeResult2: unsafeResult2,
          emptyResult: emptyResult,
          hasIsMedicationSafe: hasIsMedicationSafe
        });
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasIsMedicationSafe) {
          return { passed: false, message: "isMedicationSafe function missing or not implemented. Make sure to uncomment and implement it." };
        }
        
        if (testResult.safeResult !== true) {
          return { passed: false, message: "Sarah's Third Challenge! - isMedicationSafe should return true for medications with no allergic ingredients" };
        }
        
        if (testResult.unsafeResult1 !== false) {
          return { passed: false, message: "Sarah's Third Challenge! - isMedicationSafe should return false when medication contains Penicillin" };
        }
        
        if (testResult.unsafeResult2 !== false) {
          return { passed: false, message: "Sarah's Third Challenge! - isMedicationSafe should return false when medication contains Latex" };
        }
        
        if (testResult.emptyResult !== true) {
          return { passed: false, message: "Sarah's Third Challenge! - isMedicationSafe should return true for medications with no ingredients" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "Sarah's Third Challenge! - failed",
    successMessage: "✅ Sarah's Third Challenge Complete! isMedicationSafe() correctly identifies safe and unsafe medications for patient safety."
  },
];