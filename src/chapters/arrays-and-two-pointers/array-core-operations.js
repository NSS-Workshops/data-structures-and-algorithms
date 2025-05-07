export const arrayCoreOperationsChapter = {
  id: 'array-core-operations',
  title: 'Core Operations: Add, Remove, Update, Access',
  sectionId: 'arrays-and-two-pointers',
  previousChapterId: 'arrays-intro',
  content: `## Core Array Operations

Arrays support several fundamental operations that form the basis of array manipulation. Understanding these operations and their performance characteristics is essential for effective array usage.

TBD

## Access by Index

Accessing elements by their index is one of the most basic and efficient array operations.

- **Syntax**: \`array[index]\`
- **Time Complexity**: O(1) - constant time
- **Description**: Directly retrieves the element at the specified position
- **Example**:
\`\`\`javascript
const fruits = ['apple', 'banana', 'cherry'];
const secondFruit = fruits[1]; // 'banana'
\`\`\`

TBD

## Update Elements

Modifying existing elements in an array is straightforward and efficient.

- **Syntax**: \`array[index] = newValue\`
- **Time Complexity**: O(1) - constant time
- **Description**: Replaces the value at the specified index
- **Example**:
\`\`\`javascript
const numbers = [10, 20, 30];
numbers[1] = 25; // numbers is now [10, 25, 30]
\`\`\`

TBD

## Add Elements

Adding elements can be done at the beginning, end, or middle of an array.

### Add to End (Push)
- **Syntax**: \`array.push(element)\`
- **Time Complexity**: O(1) - amortized constant time
- **Example**:
\`\`\`javascript
const colors = ['red', 'green'];
colors.push('blue'); // colors is now ['red', 'green', 'blue']
\`\`\`

### Add to Beginning (Unshift)
- **Syntax**: \`array.unshift(element)\`
- **Time Complexity**: O(n) - linear time
- **Example**:
\`\`\`javascript
const numbers = [2, 3];
numbers.unshift(1); // numbers is now [1, 2, 3]
\`\`\`

### Add to Middle (Splice)
- **Syntax**: \`array.splice(index, 0, element)\`
- **Time Complexity**: O(n) - linear time
- **Example**:
\`\`\`javascript
const letters = ['a', 'c'];
letters.splice(1, 0, 'b'); // letters is now ['a', 'b', 'c']
\`\`\`

TBD

## Remove Elements

Removing elements can also be done from the beginning, end, or middle of an array.

### Remove from End (Pop)
- **Syntax**: \`array.pop()\`
- **Time Complexity**: O(1) - constant time
- **Example**:
\`\`\`javascript
const stack = [1, 2, 3];
const last = stack.pop(); // stack is now [1, 2], last is 3
\`\`\`

### Remove from Beginning (Shift)
- **Syntax**: \`array.shift()\`
- **Time Complexity**: O(n) - linear time
- **Example**:
\`\`\`javascript
const queue = [1, 2, 3];
const first = queue.shift(); // queue is now [2, 3], first is 1
\`\`\`

### Remove from Middle (Splice)
- **Syntax**: \`array.splice(index, count)\`
- **Time Complexity**: O(n) - linear time
- **Example**:
\`\`\`javascript
const items = ['a', 'b', 'c', 'd'];
items.splice(1, 2); // items is now ['a', 'd']
\`\`\`

TBD

## Finding Elements

Locating elements in an array is another common operation.

### Find by Value (indexOf)
- **Syntax**: \`array.indexOf(element)\`
- **Time Complexity**: O(n) - linear time
- **Example**:
\`\`\`javascript
const fruits = ['apple', 'banana', 'cherry'];
const index = fruits.indexOf('banana'); // index is 1
\`\`\`

### Find by Condition (find)
- **Syntax**: \`array.find(callback)\`
- **Time Complexity**: O(n) - linear time
- **Example**:
\`\`\`javascript
const users = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}];
const user = users.find(u => u.age > 28); // {name: 'Bob', age: 30}
\`\`\`

TBD`,
  exercise: null
};