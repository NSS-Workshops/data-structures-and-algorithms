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