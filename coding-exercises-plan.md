# JavaScript Coding Exercises Plan: Data Structures & Algorithms Modules 4-10

## 📋 **Project Overview**
Creating 2 JavaScript coding exercises for each module (Modules 4-10), following the established mock interview format with:
- Standard introductory text for mock interview setup
- Problem description with follow-up questions
- Starter code with helpful comments
- Complete solution implementation
- Comprehensive test cases covering edge cases
- Proper integration with the existing TestResult system

## **Module-by-Module Exercise Plan**

### **Module 4: Linked Lists & Pointer Manipulation**
**Learning Focus**: Node-based traversal, pointer manipulation, linked list operations

#### **Exercise 1: Reverse Linked List** (Hash: a719142c)
- **Problem**: Reverse a singly linked list iteratively
- **Skills**: Pointer manipulation, iterative traversal
- **Complexity**: O(n) time, O(1) space
- **Edge Cases**: Empty list, single node, multiple nodes
- **Follow-up**: How would you do this recursively? What are the tradeoffs?

#### **Exercise 2: Find Middle Node** (Hash: 1c8056a9)
- **Problem**: Find the middle node using two-pointer technique (tortoise and hare)
- **Skills**: Two-pointer technique, linked list traversal
- **Complexity**: O(n) time, O(1) space
- **Edge Cases**: Odd/even length lists, single node, empty list
- **Follow-up**: How would you find the node at 1/3 position?

### **Module 5: Stacks & Queues**
**Learning Focus**: LIFO/FIFO principles, stack/queue operations

#### **Exercise 1: Valid Parentheses** (Hash: a5ef04f0)
- **Problem**: Check if parentheses are balanced using stack
- **Skills**: Stack operations, string processing
- **Complexity**: O(n) time, O(n) space
- **Edge Cases**: Empty string, unmatched brackets, nested brackets
- **Follow-up**: How would you handle different types of brackets?

#### **Exercise 2: Implement Queue using Two Stacks** (Hash: a90586a1)
- **Problem**: Build queue functionality using only stack operations
- **Skills**: Stack-to-queue conversion, operation optimization
- **Complexity**: Amortized O(1) for enqueue/dequeue
- **Edge Cases**: Empty queue, single element, multiple operations
- **Follow-up**: What are the time complexities of each operation?

### **Module 6: Maps & Sets**
**Learning Focus**: Hash-based lookups, uniqueness management

#### **Exercise 1: Character Frequency Count** (Hash: 9dacc692)
- **Problem**: Count frequency of each character in a string using Map
- **Skills**: Hash table operations, frequency counting
- **Complexity**: O(n) time, O(k) space where k is unique characters
- **Edge Cases**: Empty string, single character, all same characters
- **Follow-up**: How would you find the most/least frequent character?

#### **Exercise 2: First Unique Character** (Hash: cc07fff4)
- **Problem**: Find first non-repeating character using Map/Set
- **Skills**: Frequency counting, set operations
- **Complexity**: O(n) time, O(1) space (limited alphabet)
- **Edge Cases**: All unique, all duplicates, empty string
- **Follow-up**: How would you solve this with only one pass?

### **Module 7: Sliding Window Technique**
**Learning Focus**: Window optimization, subarray problems

#### **Exercise 1: Maximum Sum Subarray of Size K** (Hash: 6fd72967)
- **Problem**: Find maximum sum of contiguous subarray of size k
- **Skills**: Fixed-size sliding window, sum maintenance
- **Complexity**: O(n) time, O(1) space
- **Edge Cases**: k > array length, negative numbers, k = 1
- **Follow-up**: How does this compare to brute force approach?

#### **Exercise 2: Longest Substring Without Repeating Characters** (Hash: e49003dd)
- **Problem**: Find length of longest substring with unique characters
- **Skills**: Variable-size sliding window, character tracking
- **Complexity**: O(n) time, O(min(m,n)) space
- **Edge Cases**: Empty string, all unique, all same character
- **Follow-up**: How would you return the actual substring?

### **Module 8: Sorting & Binary Search**
**Learning Focus**: Sorted data manipulation, search optimization

#### **Exercise 1: Binary Search** (Hash: 9cb73255)
- **Problem**: Find target in sorted array using binary search
- **Skills**: Binary search implementation, bounds checking
- **Complexity**: O(log n) time, O(1) space
- **Edge Cases**: Target not found, single element, duplicates
- **Follow-up**: How would you find first/last occurrence of target?

#### **Exercise 2: Sort Colors (Dutch Flag)** (Hash: 72eee61a)
- **Problem**: Sort array of 0s, 1s, 2s in-place
- **Skills**: Three-pointer technique, in-place sorting
- **Complexity**: O(n) time, O(1) space
- **Edge Cases**: All same color, already sorted, reverse sorted
- **Follow-up**: How would this extend to k colors?

### **Module 9: Combining Patterns & Tradeoff Analysis**
**Learning Focus**: Pattern integration, multi-technique solutions

#### **Exercise 1: Group Anagrams** (Hash: 9b8a8427)
- **Problem**: Group strings that are anagrams using Map
- **Skills**: String sorting, hash grouping, pattern recognition
- **Complexity**: O(n * k log k) time where k is max string length
- **Edge Cases**: Empty strings, single characters, no anagrams
- **Follow-up**: What are alternative approaches to detect anagrams?

#### **Exercise 2: Top K Frequent Elements** (Hash: d796e8a8)
- **Problem**: Find k most frequent elements using Map + sorting
- **Skills**: Frequency counting, sorting, heap concepts
- **Complexity**: O(n log n) time, O(n) space
- **Edge Cases**: k = n, all same frequency, k = 1
- **Follow-up**: How could you optimize this with a heap?

### **Module 10: Interview Readiness & Recap**
**Learning Focus**: End-to-end problem solving, comprehensive algorithm review

#### **Exercise 1: Merge Two Sorted Lists** (Hash: ecd7c83d)
- **Problem**: Merge two sorted linked lists into one sorted list
- **Skills**: Linked list manipulation, merging algorithms, pointer management
- **Complexity**: O(n + m) time, O(1) space
- **Edge Cases**: Empty lists, different lengths, duplicate values
- **Follow-up**: How would you merge k sorted lists?

#### **Exercise 2: Best Time to Buy and Sell Stock** (Hash: a2a37823)
- **Problem**: Find maximum profit from buying and selling stock once
- **Skills**: Array traversal, optimization, tracking min/max values
- **Complexity**: O(n) time, O(1) space
- **Edge Cases**: Decreasing prices, single day, all same price
- **Follow-up**: What if you could make multiple transactions?

## **Implementation Standards**

### **File Structure**
Each exercise will follow the pattern:
- File names match the hash IDs from the reference table
- Export format: `codeExcerciseOneChapter` and `codeExcerciseTwoChapter`
- Integration with existing TestResult system

### **Code Quality Standards**
- **Starter Code**: Clear comments explaining requirements and approach hints
- **Solutions**: Well-commented with complexity analysis
- **Tests**: Minimum 3 test cases covering basic functionality, edge cases, and error handling
- **Follow-up Questions**: Time/space complexity, optimization opportunities, variant problems

### **Testing Strategy**
- **Basic Functionality**: Core algorithm correctness
- **Edge Cases**: Empty inputs, single elements, boundary conditions
- **Error Handling**: Invalid inputs, runtime errors
- **Performance**: Implicit testing through complexity requirements

## **Exercise Summary Table**

| Module | Exercise 1 | Exercise 2 |
|--------|------------|------------|
| 4 - Linked Lists | Reverse Linked List | Find Middle Node |
| 5 - Stacks & Queues | Valid Parentheses | Queue using Two Stacks |
| 6 - Maps & Sets | Character Frequency Count | First Unique Character |
| 7 - Sliding Window | Max Sum Subarray K | Longest Unique Substring |
| 8 - Sorting & Binary Search | Binary Search | Sort Colors |
| 9 - Combining Patterns | Group Anagrams | Top K Frequent Elements |
| 10 - Interview Readiness | Merge Two Sorted Lists | Best Time Buy/Sell Stock |

## **Deliverables**
1. **14 JavaScript exercise files** (2 per module × 7 modules)
2. **Comprehensive test suites** for each exercise
3. **Integration verification** with existing project structure

## **Success Criteria**
- ✅ All exercises align with module learning objectives
- ✅ Mock interview format maintained consistently
- ✅ Progressive difficulty from Module 4 to Module 10
- ✅ Comprehensive test coverage with meaningful edge cases
- ✅ Solutions demonstrate best practices and optimal complexity
- ✅ Clear problem statements with appropriate follow-up questions