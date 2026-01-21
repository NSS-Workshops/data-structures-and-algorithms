export default [
  {
    name: "Finds earliest unsafe index via binary search",
    test: (code) => {
      try {
        const testCode = code + `
          const a = findFirstBelowThreshold([12,11,9,9,7,7,4,2], 8);   // first <8 is idx 4 (7)
          const b = findFirstBelowThreshold([10,9,9,8,8,8,8], 8);      // first <8 is -1 (none)
          const c = findFirstBelowThreshold([9,7,7,7,6], 7.5);          // first <7.5 is idx 1 (7)
          const d = findFirstBelowThreshold([], 5);                     // -1
          return { a, b, c, d };
        `;
        const { a, b, c, d } = new Function(testCode)();

        if (a !== 4) return { passed: false, message: "Case a should be index 4" };
        if (b !== -1) return { passed: false, message: "Case b should be -1 (none unsafe)" };
        if (c !== 1) return { passed: false, message: "Case c should be index 1" };
        if (d !== -1) return { passed: false, message: "Case d should be -1 for empty input" };

        return { passed: true };
      } catch (e) {
        return { passed: false, message: e.message };
      }
    },
    message: "Use a lower-bound binary search to find the first index where thickness < minSafe."
  }
]