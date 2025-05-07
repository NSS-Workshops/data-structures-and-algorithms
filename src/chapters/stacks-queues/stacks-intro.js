export const stacksIntroChapter = {
  id: 'stacks-intro',
  title: 'Introduction to Stacks',
  sectionId: 'stacks-queues',
  previousChapterId: null,
  content: `## Introduction to Stacks

A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. This means that the last element added to the stack is the first one to be removed.

TBD

## The Stack Concept

Think of a stack like a pile of plates:
- You can only add or remove plates from the top of the pile
- The last plate placed on top is the first one you can remove
- To access plates in the middle or bottom, you must first remove all plates above them

\`\`\`
    ┌───────┐
    │   D   │ ← Top (most recently added)
    ├───────┤
    │   C   │
    ├───────┤
    │   B   │
    ├───────┤
    │   A   │ ← Bottom (first added)
    └───────┘
\`\`\`

TBD

## Core Stack Operations

A stack supports the following primary operations:

### push(element)
- Adds an element to the top of the stack
- Time Complexity: O(1)

### pop()
- Removes and returns the top element from the stack
- Time Complexity: O(1)
- Throws an error or returns a special value if the stack is empty

### peek() or top()
- Returns the top element without removing it
- Time Complexity: O(1)
- Throws an error or returns a special value if the stack is empty

### isEmpty()
- Checks if the stack is empty
- Time Complexity: O(1)

### size()
- Returns the number of elements in the stack
- Time Complexity: O(1)

TBD

## Real-World Applications of Stacks

Stacks are used in numerous applications:

### 1. Function Call Management
- The call stack keeps track of function calls in programming languages
- When a function is called, it's pushed onto the stack
- When a function returns, it's popped from the stack

### 2. Expression Evaluation
- Stacks are used to evaluate arithmetic expressions (infix, postfix, prefix)
- Operator precedence and parentheses can be handled efficiently

### 3. Undo Functionality
- Applications use stacks to implement undo/redo features
- Each action is pushed onto a stack, and can be undone by popping

### 4. Browser History
- The back button in web browsers uses a stack to track visited pages
- Each new page is pushed onto the stack
- Going back pops the current page off the stack

### 5. Syntax Parsing
- Compilers and interpreters use stacks for parsing expressions
- Matching opening and closing symbols (parentheses, brackets, braces)

TBD

## Stack Implementation Approaches

Stacks can be implemented using different underlying data structures:

### Array-Based Implementation
- Uses an array to store elements
- Maintains a top index pointing to the most recently added element
- Simple and memory-efficient for fixed-size stacks
- May require resizing for dynamic stacks

### Linked List-Based Implementation
- Uses a linked list (typically singly linked) to store elements
- New elements are added to the head of the list
- More flexible for dynamic sizing
- Slightly higher memory overhead due to pointers

TBD`,
  exercise: null
};