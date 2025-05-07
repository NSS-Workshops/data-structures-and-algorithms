export const arrayMethodsChapter = {
  id: 'array-methods',
  title: 'Array Methods: push, pop, shift, unshift, map, filter',
  sectionId: 'arrays-and-two-pointers',
  previousChapterId: 'array-tradeoffs',
  content: `## JavaScript Array Methods

JavaScript provides a rich set of built-in methods for array manipulation. These methods make array operations more concise, readable, and powerful.

TBD

## Modifying Arrays

### push() - Add to End
- **Syntax**: \`array.push(element1, ..., elementN)\`
- **Returns**: New length of the array
- **Mutates**: Yes
- **Time Complexity**: O(1) - amortized constant time
- **Example**:
\`\`\`javascript
const numbers = [1, 2];
numbers.push(3, 4); // numbers is now [1, 2, 3, 4]
\`\`\`

TBD

### pop() - Remove from End
- **Syntax**: \`array.pop()\`
- **Returns**: The removed element
- **Mutates**: Yes
- **Time Complexity**: O(1) - constant time
- **Example**:
\`\`\`javascript
const stack = [1, 2, 3];
const last = stack.pop(); // stack is now [1, 2], last is 3
\`\`\`

TBD

### shift() - Remove from Beginning
- **Syntax**: \`array.shift()\`
- **Returns**: The removed element
- **Mutates**: Yes
- **Time Complexity**: O(n) - linear time
- **Example**:
\`\`\`javascript
const queue = [1, 2, 3];
const first = queue.shift(); // queue is now [2, 3], first is 1
\`\`\`

TBD

### unshift() - Add to Beginning
- **Syntax**: \`array.unshift(element1, ..., elementN)\`
- **Returns**: New length of the array
- **Mutates**: Yes
- **Time Complexity**: O(n) - linear time
- **Example**:
\`\`\`javascript
const numbers = [3, 4];
numbers.unshift(1, 2); // numbers is now [1, 2, 3, 4]
\`\`\`

TBD

## Transforming Arrays

### map() - Transform Each Element
- **Syntax**: \`array.map(callback)\`
- **Returns**: New array with transformed elements
- **Mutates**: No
- **Time Complexity**: O(n) - linear time
- **Example**:
\`\`\`javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2); // [2, 4, 6]
\`\`\`

TBD

### filter() - Select Elements
- **Syntax**: \`array.filter(callback)\`
- **Returns**: New array with elements that pass the test
- **Mutates**: No
- **Time Complexity**: O(n) - linear time
- **Example**:
\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(x => x % 2 === 0); // [2, 4]
\`\`\`

TBD

## Additional Useful Methods

### forEach() - Iterate Over Elements
- **Syntax**: \`array.forEach(callback)\`
- **Returns**: undefined
- **Mutates**: No (but callback may mutate array)
- **Example**:
\`\`\`javascript
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => console.log(fruit));
\`\`\`

TBD

### reduce() - Accumulate Values
- **Syntax**: \`array.reduce(callback, initialValue)\`
- **Returns**: Single accumulated value
- **Mutates**: No
- **Example**:
\`\`\`javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 10
\`\`\`

TBD

### slice() - Extract Portion
- **Syntax**: \`array.slice(start, end)\`
- **Returns**: New array with extracted elements
- **Mutates**: No
- **Example**:
\`\`\`javascript
const fruits = ['apple', 'banana', 'cherry', 'date'];
const middle = fruits.slice(1, 3); // ['banana', 'cherry']
\`\`\`

TBD

### splice() - Change Contents
- **Syntax**: \`array.splice(start, deleteCount, item1, ..., itemN)\`
- **Returns**: Array containing deleted elements
- **Mutates**: Yes
- **Example**:
\`\`\`javascript
const months = ['Jan', 'March', 'April'];
months.splice(1, 0, 'Feb'); // months is now ['Jan', 'Feb', 'March', 'April']
\`\`\`

TBD

## Method Chaining

Many array methods return arrays, allowing for elegant method chaining:

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];
const result = numbers
  .filter(x => x % 2 === 0)
  .map(x => x * 10)
  .reduce((sum, x) => sum + x, 0);
// result is 60 (2*10 + 4*10)
\`\`\`

TBD`,
  exercise: null
};