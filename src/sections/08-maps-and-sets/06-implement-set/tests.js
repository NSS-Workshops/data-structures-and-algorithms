// Test Result class for consistent test output
class TestResult {
  constructor({ passed, message = "" }) {
    this.passed = passed;
    this.message = message;
  }
}

export const tests = [
  {
    name: "Test basic set operations (add, has, delete)",
    test: (code) => {
      try {
        const testCode = code + `
        // Test basic HashSet functionality
        const set = new CustomHashSet();
        
        let addResult1 = false;
        let addResult2 = false;
        let addResult3 = false;
        let hasResult1 = false;
        let hasResult2 = false;
        let deleteResult1 = false;
        let deleteResult2 = false;
        let sizeResult = 0;
        
        if (typeof set.add === 'function') {
          addResult1 = set.add('Penicillin');
          addResult2 = set.add('Shellfish');
          addResult3 = set.add('Penicillin'); // Duplicate
        }
        
        if (typeof set.has === 'function') {
          hasResult1 = set.has('Penicillin');
          hasResult2 = set.has('Latex');
        }
        
        if (typeof set.delete === 'function') {
          deleteResult1 = set.delete('Shellfish');
          deleteResult2 = set.delete('Nonexistent');
        }
        
        sizeResult = set.size();
        
        return ({
          addResult1: addResult1,
          addResult2: addResult2,
          addResult3: addResult3,
          hasResult1: hasResult1,
          hasResult2: hasResult2,
          deleteResult1: deleteResult1,
          deleteResult2: deleteResult2,
          sizeResult: sizeResult
        });
        `;
        
        const testResult = new Function(testCode)();
        
        if (typeof testResult.addResult1 === 'undefined') {
          return new TestResult({ passed: false, message: "add function not found. Make sure to uncomment and implement it." });
        }
        
        if (testResult.addResult1 !== true) {
          return new TestResult({ passed: false, message: "add should return true when adding new value" });
        }
        
        if (testResult.addResult2 !== true) {
          return new TestResult({ passed: false, message: "add should return true when adding different new value" });
        }
        
        if (testResult.addResult3 !== false) {
          return new TestResult({ passed: false, message: "add should return false when adding duplicate value" });
        }
        
        if (testResult.hasResult1 !== true) {
          return new TestResult({ passed: false, message: "has should return true for existing values" });
        }
        
        if (testResult.hasResult2 !== false) {
          return new TestResult({ passed: false, message: "has should return false for non-existent values" });
        }
        
        if (testResult.deleteResult1 !== true) {
          return new TestResult({ passed: false, message: "delete should return true when deleting existing value" });
        }
        
        if (testResult.deleteResult2 !== false) {
          return new TestResult({ passed: false, message: "delete should return false when deleting non-existent value" });
        }
        
        if (testResult.sizeResult !== 1) {
          return new TestResult({ passed: false, message: "size should be 1 after adding 2 values and deleting 1" });
        }
        
        return new TestResult({ passed: true });
      } catch (error) {
        return new TestResult({ passed: false, message: error.message });
      }
    },
    message: "Basic set operations should handle uniqueness, membership testing, and deletion correctly."
  },
  {
    name: "Test set mathematical operations (union, intersection, difference)",
    test: (code) => {
      try {
        const testCode = code + `
        // Test set mathematical operations
        const setA = new CustomHashSet();
        const setB = new CustomHashSet();
        
        // Add values to sets
        if (typeof setA.add === 'function') {
          setA.add('Penicillin');
          setA.add('Shellfish');
          setA.add('Latex');
          
          setB.add('Shellfish');
          setB.add('Nuts');
          setB.add('Latex');
        }
        
        let unionResult = null;
        let intersectionResult = null;
        let differenceResult = null;
        
        if (typeof setA.union === 'function') {
          unionResult = setA.union(setB);
        }
        
        if (typeof setA.intersection === 'function') {
          intersectionResult = setA.intersection(setB);
        }
        
        if (typeof setA.difference === 'function') {
          differenceResult = setA.difference(setB);
        }
        
        return ({
          unionSize: unionResult ? unionResult.size() : -1,
          unionValues: unionResult ? unionResult.values().sort() : [],
          intersectionSize: intersectionResult ? intersectionResult.size() : -1,
          intersectionValues: intersectionResult ? intersectionResult.values().sort() : [],
          differenceSize: differenceResult ? differenceResult.size() : -1,
          differenceValues: differenceResult ? differenceResult.values().sort() : []
        });
        `;
        
        const testResult = new Function(testCode)();
        
        if (testResult.unionSize === -1) {
          return new TestResult({ passed: false, message: "union function not found. Make sure to uncomment and implement it." });
        }
        
        if (testResult.unionSize !== 4) {
          return new TestResult({ passed: false, message: "union should contain all unique values from both sets (expected 4)" });
        }
        
        const expectedUnion = ['Latex', 'Nuts', 'Penicillin', 'Shellfish'];
        if (!expectedUnion.every(val => testResult.unionValues.includes(val))) {
          return new TestResult({ passed: false, message: "union should contain all values: Penicillin, Shellfish, Latex, Nuts" });
        }
        
        if (testResult.intersectionSize !== 2) {
          return new TestResult({ passed: false, message: "intersection should contain common values only (expected 2)" });
        }
        
        const expectedIntersection = ['Latex', 'Shellfish'];
        if (!expectedIntersection.every(val => testResult.intersectionValues.includes(val))) {
          return new TestResult({ passed: false, message: "intersection should contain: Shellfish, Latex" });
        }
        
        if (testResult.differenceSize !== 1) {
          return new TestResult({ passed: false, message: "difference should contain values unique to first set (expected 1)" });
        }
        
        if (!testResult.differenceValues.includes('Penicillin')) {
          return new TestResult({ passed: false, message: "difference should contain: Penicillin" });
        }
        
        return new TestResult({ passed: true });
      } catch (error) {
        return new TestResult({ passed: false, message: error.message });
      }
    },
    message: "Set mathematical operations should correctly compute union, intersection, and difference."
  },
  {
    name: "Test advanced set methods (isSubsetOf, isEmpty, equals)",
    test: (code) => {
      try {
        const testCode = code + `
        // Test advanced set methods
        const setA = new CustomHashSet();
        const setB = new CustomHashSet();
        const setC = new CustomHashSet();
        const emptySet = new CustomHashSet();
        
        // Setup test data
        if (typeof setA.add === 'function') {
          setA.add('Penicillin');
          setA.add('Shellfish');
          
          setB.add('Penicillin');
          setB.add('Shellfish');
          setB.add('Latex');
          
          setC.add('Penicillin');
          setC.add('Shellfish');
        }
        
        let isSubsetResult1 = false;
        let isSubsetResult2 = false;
        let isEmptyResult1 = false;
        let isEmptyResult2 = false;
        let equalsResult1 = false;
        let equalsResult2 = false;
        
        if (typeof setA.isSubsetOf === 'function') {
          isSubsetResult1 = setA.isSubsetOf(setB); // A is subset of B
          isSubsetResult2 = setB.isSubsetOf(setA); // B is not subset of A
        }
        
        if (typeof emptySet.isEmpty === 'function') {
          isEmptyResult1 = emptySet.isEmpty();
          isEmptyResult2 = setA.isEmpty();
        }
        
        if (typeof setA.equals === 'function') {
          equalsResult1 = setA.equals(setC); // Same contents
          equalsResult2 = setA.equals(setB); // Different contents
        }
        
        return ({
          isSubsetResult1: isSubsetResult1,
          isSubsetResult2: isSubsetResult2,
          isEmptyResult1: isEmptyResult1,
          isEmptyResult2: isEmptyResult2,
          equalsResult1: equalsResult1,
          equalsResult2: equalsResult2
        });
        `;
        
        const testResult = new Function(testCode)();
        
        if (typeof testResult.isSubsetResult1 === 'undefined') {
          return new TestResult({ passed: false, message: "isSubsetOf function not found. Make sure to uncomment and implement it." });
        }
        
        if (testResult.isSubsetResult1 !== true) {
          return new TestResult({ passed: false, message: "isSubsetOf should return true when first set is subset of second" });
        }
        
        if (testResult.isSubsetResult2 !== false) {
          return new TestResult({ passed: false, message: "isSubsetOf should return false when first set is not subset of second" });
        }
        
        if (testResult.isEmptyResult1 !== true) {
          return new TestResult({ passed: false, message: "isEmpty should return true for empty set" });
        }
        
        if (testResult.isEmptyResult2 !== false) {
          return new TestResult({ passed: false, message: "isEmpty should return false for non-empty set" });
        }
        
        if (testResult.equalsResult1 !== true) {
          return new TestResult({ passed: false, message: "equals should return true for sets with same contents" });
        }
        
        if (testResult.equalsResult2 !== false) {
          return new TestResult({ passed: false, message: "equals should return false for sets with different contents" });
        }
        
        return new TestResult({ passed: true });
      } catch (error) {
        return new TestResult({ passed: false, message: error.message });
      }
    },
    message: "Advanced set methods should correctly handle subset testing, emptiness checking, and equality comparison."
  }
];