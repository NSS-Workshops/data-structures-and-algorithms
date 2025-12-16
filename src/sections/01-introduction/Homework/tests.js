export default [
    {
    name: "Two Sum - Example 1",
    test: (code) => {
        try {
        const twoSum = new Function(`${code}; return twoSum;`)();
        const nums = [2, 7, 11, 15];
        const target = 9;
        const result = twoSum(nums, target);
        const expected = [0, 1];
        return JSON.stringify(result.sort()) === JSON.stringify(expected.sort())
            ? new TestResult({ passed: true })
            : new TestResult({ passed: false, message: `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}` });
        } catch (e) {
        return new TestResult({ passed: false, message: e.message });
        }
    },
    message: "Should return [0,1] for nums=[2,7,11,15], target=9"
    },
    {
    name: "Two Sum - Example 2",
    test: (code) => {
        try {
        const twoSum = new Function(`${code}; return twoSum;`)();
        const nums = [3, 2, 4];
        const target = 6;
        const result = twoSum(nums, target);
        const expected = [1, 2];
        return JSON.stringify(result.sort()) === JSON.stringify(expected.sort())
            ? new TestResult({ passed: true })
            : new TestResult({ passed: false, message: `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}` });
        } catch (e) {
        return new TestResult({ passed: false, message: e.message });
        }
    },
    message: "Should return [1,2] for nums=[3,2,4], target=6"
    },
    {
    name: "Two Sum - Example 3 (Duplicates)",
    test: (code) => {
        try {
        const twoSum = new Function(`${code}; return twoSum;`)();
        const nums = [3, 3];
        const target = 6;
        const result = twoSum(nums, target);
        const expected = [0, 1];
        return JSON.stringify(result.sort()) === JSON.stringify(expected.sort())
            ? new TestResult({ passed: true })
            : new TestResult({ passed: false, message: `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}` });
        } catch (e) {
        return new TestResult({ passed: false, message: e.message });
        }
    },
    message: "Should return [0,1] for nums=[3,3], target=6"
    },
    {
    name: "Two Sum - Negative Numbers",
    test: (code) => {
        try {
        const twoSum = new Function(`${code}; return twoSum;`)();
        const nums = [-1, -2, -3, -4, -5];
        const target = -8;
        const result = twoSum(nums, target);
        const expected = [2, 4];
        return JSON.stringify(result.sort()) === JSON.stringify(expected.sort())
            ? new TestResult({ passed: true })
            : new TestResult({ passed: false, message: `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}` });
        } catch (e) {
        return new TestResult({ passed: false, message: e.message });
        }
    },
    message: "Should handle negative numbers correctly"
    }
]