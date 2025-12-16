## ⏱️ Challenge: Regional Evacuation Center (Map of Queues)

In the Global Cooling emergency, each region has an evacuation center. Citizens line up in the order they arrive, and evacuations happen strictly first-come, first-served.

We'll use:
- A **Map** to track all regions
- Each region's evacuees stored in a **Queue** (proper Queue class implementation)

### 🎯 Requirements

Implement the following methods:

- `arrive(region, name)` → add the person to that region's queue
- `evacuate(region)` → remove and return the first person from that region's queue, or null if none
- `nextInLine(region)` → peek at the next person to be evacuated without removing them
- `isEmpty(region)` → return true if that region's queue is empty

### 🔄 Data Structure Strategy

**Map + Queue Pattern:**
1. **Queue Class**: Proper FIFO implementation with:
   - `enqueue(item)` to add at the back
   - `dequeue()` to remove from front (returns null if empty)
   - `peek()` to look at front without removing (returns null if empty)
   - `isEmpty()` to check if empty
2. **Map**: Key = region name, Value = Queue instance

### 📊 Algorithm Steps

1. **Queue Implementation**: Use the  Queue class
2. **EvacuationCenter**:
   - Use Map to store region → Queue mappings
   - Create new Queue instances for new regions
3. **Operations**:
   - `arrive()`: Get or create region's queue, then enqueue person
   - `evacuate()`: Dequeue from region's queue, return null if empty
   - `nextInLine()`: Peek at region's queue front
   - `isEmpty()`: Check if region's queue is empty

### 💡 Why This Works
- **Map**: O(1) lookup for any region
- **Queue Class**: Clean abstraction with proper FIFO semantics
- **Encapsulation**: Queue operations are clearly defined
- **Scalable**: Can handle any number of regions

### 🧪 Example Walkthrough
```javascript
const evac = new EvacuationCenter();
evac.arrive("North", "Alice");
evac.arrive("North", "Bob");
evac.arrive("South", "Carlos");

evac.nextInLine("North");   // "Alice"
evac.evacuate("North");     // "Alice"
evac.evacuate("North");     // "Bob"
evac.evacuate("North");     // null (empty queue)
evac.isEmpty("South");      // false
```

**Implementation Notes**
- A complete `Queue` class is provided for you to use
- Focus on implementing the `EvacuationCenter` class using the Queue
- Use `Map` for region tracking with Queue instances as values
- Handle edge cases: non-existent regions, empty queues

🔓 **Use the provided Queue class to implement EvacuationCenter below:**