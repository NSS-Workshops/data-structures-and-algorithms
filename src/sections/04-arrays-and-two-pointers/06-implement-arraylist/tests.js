export const tests = [
  {
    name: "Basic construction and properties",
    test: (code) => {
      try {
        const DynamicInt32Array = new Function(code + '; return DynamicInt32Array;')();
        const arr = new DynamicInt32Array(4);
        return (arr.size() === 0 && arr.isEmpty() === true && arr.capacity() === 4)
          ? { passed: true }
          : { passed: false, message: "Initial properties incorrect" };
      } catch (e) {
        return { passed: false, message: e.message };
      }
    },
    message: "Should initialize with correct size, empty state, and capacity"
  },
  {
    name: "Append and get operations with int32 conversion",
    test: (code) => {
      try {
        const DynamicInt32Array = new Function(code + '; return DynamicInt32Array;')();
        const arr = new DynamicInt32Array(4);
        arr.append(42.7); // Should convert to 42
        arr.append(-100);
        return (arr.size() === 2 && arr.get(0) === 42 && arr.get(1) === -100)
          ? { passed: true }
          : { passed: false, message: "Append or get operations failed" };
      } catch (e) {
        return { passed: false, message: e.message };
      }
    },
    message: "Should append elements with int32 conversion and retrieve them correctly"
  },
  {
    name: "Automatic resizing on capacity overflow",
    test: (code) => {
      try {
        const DynamicInt32Array = new Function(code + '; return DynamicInt32Array;')();
        const arr = new DynamicInt32Array(2);
        arr.append(100);
        arr.append(200);
        arr.append(300); // Should trigger resize
        return (arr.capacity() > 2 && arr.size() === 3 && arr.get(2) === 300)
          ? { passed: true }
          : { passed: false, message: "Automatic resizing failed" };
      } catch (e) {
        return { passed: false, message: e.message };
      }
    },
    message: "Should automatically resize when capacity is exceeded"
  },
  {
    name: "Remove operation with element shifting",
    test: (code) => {
      try {
        const DynamicInt32Array = new Function(code + '; return DynamicInt32Array;')();
        const arr = new DynamicInt32Array(8);
        arr.append(10);
        arr.append(20);
        arr.append(30);
        const removed = arr.removeAt(1);
        return (removed === 20 && arr.size() === 2 && arr.get(1) === 30)
          ? { passed: true }
          : { passed: false, message: "Remove operation or element shifting failed" };
      } catch (e) {
        return { passed: false, message: e.message };
      }
    },
    message: "Should remove elements and shift remaining elements correctly"
  },
  {
    name: "Set operation with int32 conversion",
    test: (code) => {
      try {
        const DynamicInt32Array = new Function(code + '; return DynamicInt32Array;')();
        const arr = new DynamicInt32Array(8);
        arr.append(100);
        arr.append(200);
        const oldValue = arr.set(0, 150.9); // Should convert to 150
        return (oldValue === 100 && arr.get(0) === 150)
          ? { passed: true }
          : { passed: false, message: "Set operation failed" };
      } catch (e) {
        return { passed: false, message: e.message };
      }
    },
    message: "Should set element at index with int32 conversion and return old value"
  },
  {
    name: "Clear operation",
    test: (code) => {
      try {
        const DynamicInt32Array = new Function(code + '; return DynamicInt32Array;')();
        const arr = new DynamicInt32Array(16);
        arr.append(100);
        arr.append(200);
        arr.clear();
        return (arr.size() === 0 && arr.isEmpty() && arr.capacity() === 8)
          ? { passed: true }
          : { passed: false, message: "Clear operation failed" };
      } catch (e) {
        return { passed: false, message: e.message };
      }
    },
    message: "Should clear all elements and reset to initial state"
  },
  {
    name: "Error handling for invalid operations",
    test: (code) => {
      try {
        const DynamicInt32Array = new Function(code + '; return DynamicInt32Array;')();
        const arr = new DynamicInt32Array(4);
        
        let errorThrown = false;
        try {
          arr.get(0); // Should throw - empty array
        } catch {
          errorThrown = true;
        }
        
        if (!errorThrown) {
          return { passed: false, message: "get() should throw for empty array" };
        }
        
        return { passed: true };
      } catch (e) {
        return { passed: false, message: e.message };
      }
    },
    message: "Should throw appropriate errors for invalid operations"
  }
];