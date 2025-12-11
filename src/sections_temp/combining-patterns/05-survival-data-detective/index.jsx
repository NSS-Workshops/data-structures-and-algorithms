import { CodeExercise } from "@nss-workshops/nss-core";

const starterCode = `
function findFirstBelowThreshold(thicknesses, minSafe) {
  // Binary search for the first index where thickness < minSafe
  let lo = 0, hi = thicknesses.length - 1;
  let ans = -1;

  // TODO: classic lower-bound style search on predicate (x < minSafe)
  return ans;
}
`;

const solution = `
// Reference Solution
function findFirstBelowThreshold(thicknesses, minSafe) {
  let lo = 0, hi = thicknesses.length - 1;
  let ans = -1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (thicknesses[mid] < minSafe) {
      ans = mid;      // candidate; try to find an earlier one
      hi = mid - 1;
    } else {
      lo = mid + 1;   // still safe, move right
    }
  }
  return ans;
}
`;

const tests = [
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
];

export default function SurvivalDataDetective() {
  return (
    <CodeExercise
      starterCode={starterCode}
      solution={solution}
      tests={tests}
    />
  );
}