# Lost weather monitors

The convoy's weather monitoring system has failed! Lost weather monitors are scattered across the frozen wasteland. Navigate through a 2D grid to collect these critical devices. Use a stack to keep track of monitors in the order you find them - this will help prioritize which ones to repair first.

## ⏱️ Challenge: Collect Weather Monitors with a Stack

### 🎯 The Problem
You're given a 2D grid with lost weather monitors (> 0) and empty areas (0).

You start from a given (row, col) position.

Follow the search moves (U, D, L, R).

Every time you find a monitor, push its serial number onto a stack.

At the end, return monitor serial numbers in the order you found them.

### 🗺️ 2D Array + Stack Strategy
This combines **2D array navigation** with **stack operations**:

1. **Start at given position** in the 2D grid
2. **Follow search commands** (U=up, D=down, L=left, R=right)
3. **Check each location** for monitors (values > 0)
4. **Push monitor serial numbers onto stack** as you find them
5. **Return stack contents** (in the order found for processing)

### 📊 Algorithm Steps
1. Initialize `stack = []` and current position `(row, col)`
2. For each move in the search pattern:
   - Update position based on direction (U/D/L/R)
   - Check bounds to ensure valid position
   - If current location has monitor (> 0), push serial number to stack
3. Return the stack (monitor serial numbers in the order found)

### 💡 Key Insights
- **2D navigation**: Update `row` and `col` based on direction
- **Bounds checking**: Ensure `0 <= row < rows` and `0 <= col < cols`
- **Stack operations**: `push()` to add monitor serial numbers
- **Movement mapping**: U=row-1, D=row+1, L=col-1, R=col+1

### 🧪 Example Walkthrough
```
grid = [
  [0, 105, 0],
  [203, 0, 307],
  [0, 402, 0]
]
startRow = 1, startCol = 0
moves = ['U', 'R', 'D', 'R']

Step by step:
- Start at (1,0): monitor serial=203, push 203 → stack=[203]
- Move U to (0,0): empty=0, no monitor → stack=[203]
- Move R to (0,1): monitor serial=105, push 105 → stack=[203,105]
- Move D to (1,1): empty=0, no monitor → stack=[203,105]
- Move R to (1,2): monitor serial=307, push 307 → stack=[203,105,307]

Result: [203,105,307] (monitors found in this order)
```

**Return Format**
- Array of monitor serial numbers: `[serial1, serial2, ...]` (in the order found)

**Constraints**
- Use **2D array indexing** and **stack operations**
- Handle **bounds checking** for invalid moves
- Time complexity: O(m) where m is number of moves
- Space complexity: O(t) where t is number of monitors found

🔓 **Uncomment the below code section in the editor 👉:**
- Implement `collectWeatherMonitors(grid, startRow, startCol, moves)` combining 2D arrays and stacks.