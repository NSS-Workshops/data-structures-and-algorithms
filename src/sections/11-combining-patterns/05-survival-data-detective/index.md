## First Unsafe Ice: Early Warning via Binary Search

Survey drones have mapped the ice thickness along a critical escape route. The ice gets progressively thinner as you move forward - once it becomes unsafe, all subsequent sections are also unsafe. You need to find exactly where the danger begins.

## ⏱️ Challenge: findFirstBelowThreshold

### 🎯 The Problem
Survey drones record **ice thickness** along a corridor, producing a non-increasing safety profile: once the ice becomes unsafe, all later points are also unsafe. Given an array `thicknesses` (numbers) and a minimum safe thickness `minSafe`, return the **first index** where `thickness < minSafe`. If all sections are safe, return `-1`.

### 🔍 Binary Search Strategy
This is a classic **"find first occurrence"** problem with a monotonic property:
- **Safe zone**: `thickness >= minSafe` (false for our predicate)
- **Danger zone**: `thickness < minSafe` (true for our predicate)
- **Pattern**: [safe, safe, safe, **DANGER**, danger, danger...]

We're looking for the **first true** in this boolean sequence.

### 📊 Algorithm Steps (Lower Bound Binary Search)
1. Initialize `lo = 0`, `hi = length - 1`, `result = -1`
2. While `lo <= hi`:
   - Calculate `mid = lo + Math.floor((hi - lo) / 2)`
   - If `thicknesses[mid] < minSafe`:
     - This could be our answer, save it: `result = mid`
     - Look for an earlier occurrence: `hi = mid - 1`
   - Else (still safe):
     - Look further right: `lo = mid + 1`
3. Return `result`

### 💡 Key Insights
- **Monotonic Property**: Once unsafe, everything after is unsafe
- **Lower Bound**: We want the leftmost position where condition is true
- **Efficiency**: O(log n) vs O(n) linear search
- **Edge Cases**: All safe (return -1), all unsafe (return 0)

### 🧪 Example Walkthrough
```
thicknesses = [12, 11, 9, 9, 7, 7, 4, 2], minSafe = 8

Searching for first thickness < 8:

lo=0, hi=7, mid=3: thicknesses[3]=9 >= 8 (safe) → lo=4
lo=4, hi=7, mid=5: thicknesses[5]=7 < 8 (unsafe!) → result=5, hi=4
lo=4, hi=4, mid=4: thicknesses[4]=7 < 8 (unsafe!) → result=4, hi=3
lo=4, hi=3: lo > hi, stop

Result: 4 (first index where thickness < 8)
```

**Return Value**
- Index of first unsafe section, or `-1` if all are safe

**Constraints**
- Assume the predicate "unsafe" is **monotonic** (false…false, then true…true)
- Implement **binary search** (O(log n))
- Handle edge cases: empty array, all safe, all unsafe

🔓 **Uncomment the below code section in the editor 👉:**
- Implement `findFirstBelowThreshold(thicknesses: number[], minSafe: number)` using binary search.