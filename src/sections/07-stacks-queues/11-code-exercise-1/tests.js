import { TestResult } from "@nss-workshops/nss-core";

export default [
  {
    name: "Valid parentheses basic cases",
    test: (code) => {
      try {
        const isValid = new Function(`${code}; return isValid;`)();
        
        const test1 = isValid("()") === true;
        const test2 = isValid("()[]{}") === true;
        const test3 = isValid("{[]}") === true;
        
        if (test1 && test2 && test3) {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `Failed basic valid cases. Results: "()" = ${isValid("()")}, "()[]{}" = ${isValid("()[]{}")}, "{[]}" = ${isValid("{[]}")}`
          });
        }
      } catch (error) {
        return new TestResult({
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    },
    message: "Function should return true for valid parentheses combinations."
  },
  {
    name: "Invalid parentheses cases",
    test: (code) => {
      try {
        const isValid = new Function(`${code}; return isValid;`)();
        
        const test1 = isValid("(]") === false;
        const test2 = isValid("([)]") === false;
        const test3 = isValid("((") === false;
        const test4 = isValid("))") === false;
        
        if (test1 && test2 && test3 && test4) {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `Failed invalid cases. Results: "(]" = ${isValid("(]")}, "([)]" = ${isValid("([)]")}, "((" = ${isValid("((")}, "))" = ${isValid("))")}`
          });
        }
      } catch (error) {
        return new TestResult({
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    },
    message: "Function should return false for invalid parentheses combinations."
  },
  {
    name: "Edge cases",
    test: (code) => {
      try {
        const isValid = new Function(`${code}; return isValid;`)();
        
        const test1 = isValid("") === true;  // Empty string is valid
        const test2 = isValid("(") === false; // Single opening bracket
        const test3 = isValid(")") === false; // Single closing bracket
        
        if (test1 && test2 && test3) {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `Failed edge cases. Results: "" = ${isValid("")}, "(" = ${isValid("(")}, ")" = ${isValid(")")}`
          });
        }
      } catch (error) {
        return new TestResult({
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    },
    message: "Function should handle edge cases correctly."
  },
  {
    name: "Complex nested cases",
    test: (code) => {
      try {
        const isValid = new Function(`${code}; return isValid;`)();
        
        const test1 = isValid("((()))") === true;
        const test2 = isValid("({[]})") === true;
        const test3 = isValid("((())") === false;
        const test4 = isValid("({[}])") === false;
        
        if (test1 && test2 && test3 && test4) {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `Failed complex cases. Results: "((()))" = ${isValid("((()))")}, "({[]})" = ${isValid("({[]})")}, "((())" = ${isValid("((())")}, "({[}])" = ${isValid("({[}])")}`
          });
        }
      } catch (error) {
        return new TestResult({
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    },
    message: "Function should handle complex nested bracket combinations."
  }
];