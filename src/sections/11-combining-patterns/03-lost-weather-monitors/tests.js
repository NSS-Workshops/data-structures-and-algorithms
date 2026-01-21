export default [
  {
    name: "Collects weather monitors using 2D navigation and stack operations",
    test: (code) => {
      try {
        const testCode = code + `
          const grid1 = [
            [0, 105, 0],
            [203, 0, 307],
            [0, 402, 0]
          ];
          const out1 = collectWeatherMonitors(grid1, 1, 0, ['U', 'R', 'D', 'R']);
          
          const grid2 = [
            [101, 102],
            [103, 104]
          ];
          const out2 = collectWeatherMonitors(grid2, 0, 0, ['R', 'D', 'L']);
          
          const grid3 = [
            [0, 0, 0],
            [0, 999, 0],
            [0, 0, 0]
          ];
          const out3 = collectWeatherMonitors(grid3, 1, 1, ['U', 'D', 'L', 'R']);
          
          return { out1, out2, out3 };
        `;
        const { out1, out2, out3 } = new Function(testCode)();

        // Test 1: Should collect monitor serial numbers [203, 105, 307] in that order
        if (!Array.isArray(out1) || JSON.stringify(out1) !== JSON.stringify([203, 105, 307])) {
          return { passed: false, message: `Expected [203, 105, 307], got ${JSON.stringify(out1)}` };
        }
        
        // Test 2: Should collect monitor serial numbers [101, 102, 104, 103] following the path
        if (!Array.isArray(out2) || JSON.stringify(out2) !== JSON.stringify([101, 102, 104, 103])) {
          return { passed: false, message: `Expected [101, 102, 104, 103], got ${JSON.stringify(out2)}` };
        }
        
        // Test 3: Should collect only the starting monitor serial number [999]
        if (!Array.isArray(out3) || JSON.stringify(out3) !== JSON.stringify([999])) {
          return { passed: false, message: `Expected [999], got ${JSON.stringify(out3)}` };
        }

        return { passed: true };
      } catch (e) {
        return { passed: false, message: e.message };
      }
    },
    message: "Should navigate 2D grid following search moves and collect weather monitor serial numbers using stack operations."
  }
];