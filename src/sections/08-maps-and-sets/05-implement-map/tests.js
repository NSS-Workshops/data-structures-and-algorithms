export const tests = [
  {
    name: "Test hash function and basic set/get operations",
    test: (code) => {
      try {
        const testCode = code + `
        // Test basic HashMap functionality
        const map = new CustomHashMap(8); // Small capacity for testing
        
        let hashResult1 = -1;
        let hashResult2 = -1;
        let setResult = false;
        let getValue = null;
        let getNonExistent = null;
        
        if (typeof map.hash === 'function') {
          hashResult1 = map.hash('test');
          hashResult2 = map.hash('test'); // Should be same
        }
        
        if (typeof map.set === 'function' && typeof map.get === 'function') {
          try {
            map.set('patient1', { name: 'John Doe', age: 45 });
            setResult = true;
            getValue = map.get('patient1');
            getNonExistent = map.get('nonexistent');
          } catch (e) { setResult = false; }
        }
        
        return ({
          hashResult1: hashResult1,
          hashResult2: hashResult2,
          hashConsistent: hashResult1 === hashResult2,
          hashInRange: hashResult1 >= 0 && hashResult1 < 8,
          setResult: setResult,
          getValue: getValue,
          getNonExistent: getNonExistent,
          mapSize: map.getSize ? map.getSize() : -1
        });
        `;
        
        const testResult = new Function(testCode)();
        
        if (testResult.hashResult1 === -1) {
          return { passed: false, message: "hash function not found. Make sure to uncomment and implement it." };
        }
        
        if (!testResult.hashConsistent) {
          return { passed: false, message: "hash function should return consistent results for the same key" };
        }
        
        if (!testResult.hashInRange) {
          return { passed: false, message: "hash function should return index within array bounds (0 to capacity-1)" };
        }
        
        if (!testResult.setResult) {
          return { passed: false, message: "set function not working. Make sure to implement set method properly." };
        }
        
        if (!testResult.getValue || testResult.getValue.name !== 'John Doe') {
          return { passed: false, message: "get function should return the correct value for existing keys" };
        }
        
        if (testResult.getNonExistent !== undefined) {
          return { passed: false, message: "get function should return undefined for non-existent keys" };
        }
        
        if (testResult.mapSize !== 1) {
          return { passed: false, message: "size should be tracked correctly when adding entries" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "Hash function should distribute keys properly and basic set/get operations should work correctly."
  },
  {
    name: "Test has, delete, and clear operations",
    test: (code) => {
      try {
        const testCode = code + `
        // Test has, delete, and clear operations
        const map = new CustomHashMap();
        
        // Add some test data
        if (typeof map.set === 'function') {
          map.set('patient1', { name: 'John' });
          map.set('patient2', { name: 'Jane' });
        }
        
        let hasResult1 = false;
        let hasResult2 = false;
        let deleteResult1 = false;
        let deleteResult2 = false;
        let sizeAfterDelete = -1;
        let sizeAfterClear = -1;
        
        if (typeof map.has === 'function') {
          hasResult1 = map.has('patient1');
          hasResult2 = map.has('nonexistent');
        }
        
        if (typeof map.delete === 'function') {
          deleteResult1 = map.delete('patient1');
          deleteResult2 = map.delete('nonexistent');
          sizeAfterDelete = map.getSize();
        }
        
        if (typeof map.clear === 'function') {
          map.clear();
          sizeAfterClear = map.getSize();
        }
        
        return ({
          hasResult1: hasResult1,
          hasResult2: hasResult2,
          deleteResult1: deleteResult1,
          deleteResult2: deleteResult2,
          sizeAfterDelete: sizeAfterDelete,
          sizeAfterClear: sizeAfterClear
        });
        `;
        
        const testResult = new Function(testCode)();
        
        if (typeof testResult.hasResult1 === 'undefined') {
          return { passed: false, message: "has function not found. Make sure to uncomment and implement it." };
        }
        
        if (testResult.hasResult1 !== true) {
          return { passed: false, message: "has function should return true for existing keys" };
        }
        
        if (testResult.hasResult2 !== false) {
          return { passed: false, message: "has function should return false for non-existent keys" };
        }
        
        if (testResult.deleteResult1 !== true) {
          return { passed: false, message: "delete function should return true when deleting existing keys" };
        }
        
        if (testResult.deleteResult2 !== false) {
          return { passed: false, message: "delete function should return false when deleting non-existent keys" };
        }
        
        if (testResult.sizeAfterDelete !== 1) {
          return { passed: false, message: "size should be updated correctly after deletion" };
        }
        
        if (testResult.sizeAfterClear !== 0) {
          return { passed: false, message: "clear function should reset size to 0" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "has, delete, and clear operations should work correctly and maintain proper size tracking."
  },
  {
    name: "Test iteration methods (keys, values, entries, forEach)",
    test: (code) => {
      try {
        const testCode = code + `
        // Test iteration methods
        const map = new CustomHashMap();
        
        // Add test data
        if (typeof map.set === 'function') {
          map.set('patient1', { name: 'John', age: 45 });
          map.set('patient2', { name: 'Jane', age: 32 });
          map.set('patient3', { name: 'Bob', age: 28 });
        }
        
        let keys = [];
        let values = [];
        let entries = [];
        let forEachResults = [];
        
        if (typeof map.keys === 'function') {
          keys = map.keys();
        }
        
        if (typeof map.values === 'function') {
          values = map.values();
        }
        
        if (typeof map.entries === 'function') {
          entries = map.entries();
        }
        
        if (typeof map.forEach === 'function') {
          map.forEach((value, key, mapRef) => {
            forEachResults.push({ key, name: value.name, hasMapRef: mapRef === map });
          });
        }
        
        return ({
          keys: keys.sort(),
          values: values.map(v => v.name).sort(),
          entries: entries.length,
          forEachCount: forEachResults.length,
          forEachHasMapRef: forEachResults.every(r => r.hasMapRef),
          keysIncludesPatient1: keys.includes('patient1'),
          valuesIncludesJohn: values.some(v => v.name === 'John')
        });
        `;
        
        const testResult = new Function(testCode)();
        
        if (typeof testResult.keys === 'undefined') {
          return { passed: false, message: "keys function not found. Make sure to uncomment and implement it." };
        }
        
        if (!Array.isArray(testResult.keys) || testResult.keys.length !== 3) {
          return { passed: false, message: "keys function should return array of all keys" };
        }
        
        if (!testResult.keysIncludesPatient1) {
          return { passed: false, message: "keys function should include all added keys" };
        }
        
        if (!Array.isArray(testResult.values) || testResult.values.length !== 3) {
          return { passed: false, message: "values function should return array of all values" };
        }
        
        if (!testResult.valuesIncludesJohn) {
          return { passed: false, message: "values function should include all added values" };
        }
        
        if (testResult.entries !== 3) {
          return { passed: false, message: "entries function should return array of [key, value] pairs" };
        }
        
        if (testResult.forEachCount !== 3) {
          return { passed: false, message: "forEach function should call callback for each entry" };
        }
        
        if (!testResult.forEachHasMapRef) {
          return { passed: false, message: "forEach callback should receive (value, key, map) parameters" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "Iteration methods should traverse all entries correctly and provide proper callback parameters."
  },
];