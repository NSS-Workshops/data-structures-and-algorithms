import picture1 from "./images/Picture1.png";
import picture2 from "./images/Picture2.png";

export const arraysIntroChapter = {
  id: 'arrays-intro',
  title: 'Introduction to Arrays',
  sectionId: 'arrays-and-two-pointers',
  previousChapterId: 'arrays-two-pointers-learning-objectives',
  content: `## Introduction to Arrays

Arrays are one of the most fundamental data structures in computer science. They store elements of the same type in contiguous memory locations, allowing for efficient access and manipulation of data.

## Array Characteristics

- **Ordered collection**: Elements are stored in a specific order
- **Indexed access**: Elements can be accessed directly using their position (index)
- **Fixed size** (in some languages): Once created, the size cannot be changed
- **Homogeneous elements** (in some languages): All elements must be of the same type
- **Contiguous memory**: Elements are stored in adjacent memory locations

## Arrays in JavaScript

In JavaScript, arrays are dynamic and flexible:

- They can grow or shrink in size
- They can store elements of different types
- They are implemented as objects with special behaviors
- Indices are converted to strings and used as property names
- They provide numerous built-in methods for manipulation

## Common Array Use Cases

Arrays are versatile data structures used in many scenarios:

- Storing collections of related items (e.g., list of users)
- Implementing other data structures (stacks, queues)
- Representing matrices and grids
- Buffering data (e.g., reading file chunks)
- Managing sequential operations
- Storing and processing tabular data

## Arrays vs Other Data Structures

Understanding when to use arrays versus other data structures is important:

| Data Structure | Strengths | Weaknesses |
|----------------|-----------|------------|
| Arrays | Fast access by index, simple to use | Slow insertions/deletions in the middle |
| Linked Lists | Fast insertions/deletions | Slow random access |
| Hash Tables | Fast lookups by key | No inherent ordering |
| Trees | Hierarchical data, ordered operations | More complex implementation |


---
Introduction to Arrays
---

## JavaScript Arrays

At this point, we feel pretty familiar with arrays. They're useful ways of storing information in one variable. They provide quick and efficient access to elements with indexes.

Let's say we work in a coffee shop and we want to keep track of the orders in an array. In JavaScript, arrays are dynamic by default, meaning they can grow and shrink as needed. This makes them perfect for storing coffee orders without worrying about predefined sizes.

JavaScript arrays allow us to keep track of elements, access elements by index, *and* have a flexible length. We can create an array for our coffee orders like this:

\`\`\`javascript
let coffeeOrders = [];
\`\`\`

And store orders like "large Frappuccino".

### JavaScript Array Methods

JavaScript arrays come with many built-in methods that make working with them convenient. If a new element is added, the array automatically grows to accommodate it. This ensures we always have enough space for new elements without wasting memory.

To initialize an array, we can use several approaches:

\`\`\`javascript
let coffeeOrders = []; // Empty array
let coffeeOrders = new Array(); // Alternative syntax
let coffeeOrders = ["order1", "order2"]; // With initial values
\`\`\`

We will review some commonly used array methods below. You can find more information in the [MDN Array documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

### push() method

We can add new elements to our array using the \`push()\` method. The \`push()\` method adds an element to the end of the array.

For our coffee orders example, it makes the most sense to add orders to the end of the list:

\`\`\`javascript
coffeeOrders.push("small coffee");
\`\`\`

### splice() method for insertion

Let's say a customer comes up to our counter. She says she's waited for 10 minutes and her order hasn't come out yet (oh no!). We want to add her order higher up in the list to ensure she gets it sooner. We can use the \`splice()\` method:

\`\`\`javascript
coffeeOrders.splice(5, 0, "large latte");
\`\`\`

This adds her order, large latte, at index 5. The first parameter is the index, the second is how many elements to remove (0 in this case), and the third is the element to insert.

When we insert a value by index, the elements in the array have to move around a bit. For example, if we insert a value at index 5, the elements that are currently at index 5 and above are shifted to the right to make space for the new value we're inserting. This means the value that was at index 5 is moved to index 6, and the value that was at index 6 is moved to index 7, and so on... The new value is then inserted at index 5. Adding an element at a given index therefore has a runtime of \`O(n)\` because the worst case is we insert a value at index 0 and have to shift all \`n\` elements.

### Accessing elements by index

We can access elements in our array using bracket notation. This method functions by giving an index and returning the element stored at that index:

\`\`\`javascript
coffeeOrders[5];
\`\`\`

This returns the element stored in index 5, which we know is "large latte".

> **NOTE:** Arrays start at index \`0\` just like in other programming languages.

When we get a value, we're giving the index, which tells the code exactly where to look in memory. Just like accessing any array element by index, this has a runtime of \`O(1)\`. It doesn't matter how many elements are in the array, it always takes a constant time to retrieve the value.

### splice() method for removal

We can remove elements from our array using the \`splice()\` method. To remove an element, we give the method an index and specify how many elements to remove. Let's say we made a mistake on someone's order and want to remove the order from our list:

\`\`\`javascript
coffeeOrders.splice(10, 1);
\`\`\`

This removes 1 element at index 10 from the array and returns an array containing the removed element(s).

When we remove a value by index, there are a few steps we need to take. If we remove the value at index 10, that value is first removed. Then, all the values at index 11 and beyond (12, 13, etc.) are shifted to the left to fill in the gap left by the removed index. This means that the indexes for these values also changes. The value that previously had an index of 11 has an index of 10... etc. Just like adding an element by index, removing an element has a runtime of \`O(n)\`. At worst, we delete the value at index 0 and have to shift all \`n\` elements to the left to fill in the gap.

### Iterating over the Array

You can iterate over all the elements in an array and perform an operation on each element. To do this, it's useful to know the \`length\` property. The \`length\` property returns the current number of elements in the array. It's very useful when iterating over an array.

Let's say we want to print all the orders currently in our array. We can do this like the following:

\`\`\`javascript
for (let i = 0; i < coffeeOrders.length; i++) {
    console.log(coffeeOrders[i]);
}
\`\`\`

The above code iterates through and prints out all the elements in the array.

We can also use JavaScript's "for...of" loop:

\`\`\`javascript
for (let order of coffeeOrders) {
    console.log(order);
}
\`\`\`

## Conclusion

In this lesson, we discussed JavaScript arrays, which are data structures that keep track of elements, access elements by index, *and* have a flexible length. We learned about the \`push()\`, \`splice()\`, and bracket notation for accessing elements. We also saw how to iterate over arrays. Using our newfound knowledge about Big O, we also discussed the runtime complexity for these methods.


---
Using Arrays to Maintain an Ordered Collection of Objects
---

In this example we will look into a coffee shop example, where the orders for different type of coffee are coming in a specific sequence. We will see how we can use arrays to maintain the sequence of orders and make sure that the order that came in first is also the one that gets processed first.

To build the solution we will use two classes:

- An \`Order\` class, which will keep the information on the type of the coffee and table number
- A \`CoffeeShop\` class, which will keep the array of all orders, the methods to add a new order, and a method to process all the pending orders in the order that they were received.

\`\`\`javascript
class Order {
  constructor(type, table) {
    this.table = table;
    this.type = type;
  }

  serve() {
    console.log(\`Serving \${this.type} to table \${this.table}\`);
  }
}
\`\`\`

\`\`\`javascript
class CoffeeShop {
  constructor() {
    // Create new array to store orders
    this.orders = [];
  }

  takeOrder(type, table) {
    const order = new Order(type, table);
    this.orders.push(order);
  }

  processOrders() {
    for (let i = 0; i < this.orders.length; i++) {
      this.orders[i].serve();
    }
    // Now that we've served them, remove all Orders from the array.
    this.orders = [];
  }
}
\`\`\`

The important things to notice here are:

- When we take an order, it gets added to the end of the array: \`push()\` always adds the element to the end of the array
- When orders are processed, they are processed from the first received order to the last, keeping the original sequence unchanged.

Let's now see the \`CoffeeShop\` in action!

\`\`\`javascript
// Create a new coffee shop
const shop = new CoffeeShop();

shop.takeOrder("Cappuccino", 2);
shop.takeOrder("Frappe", 1);
shop.takeOrder("Espresso", 1);
shop.takeOrder("Frappe", 5);
shop.takeOrder("Cappuccino", 6);
shop.takeOrder("Frappe", 3);
shop.takeOrder("Espresso", 3);

shop.processOrders();
\`\`\`

The output produced by running the code:

\`\`\`text
Serving Cappuccino to table 2
Serving Frappe to table 1
Serving Espresso to table 1
Serving Frappe to table 5
Serving Cappuccino to table 6
Serving Frappe to table 3
Serving Espresso to table 3
\`\`\`

As we can see, the output produced matches what we wanted. The orders are processed in the sequence of arrival.

---
Array Runtime Complexity
---

In this section we're going to explore the runtime complexity of the most important JavaScript array operations in relation to number of elements present in the array. So the number of elements in the array will be our "N" in our Big-O notation.

## Accessing values by index

- JavaScript arrays are implemented as objects with numeric keys, but modern JavaScript engines optimize them to behave like traditional arrays for performance.
- The property of JavaScript arrays is that accessing an element by index runs in constant time O(1) regardless of the number of elements "N". By providing the index, you are telling the code exactly where to look in memory.
- Since JavaScript arrays are optimized for index-based access, accessing the value by index is achieved in constant time O(1), regardless of the number of elements "N" in the array.

## Insert or remove value by index

Both insertion and removal of a value by its index in JavaScript arrays run in linear time O(N), where N is the number of elements in the array. Let's see why!

### Insert value by index

Let's start with the following array:

\`\`\`javascript
let list = [11, 99, 0, 5, 14, 89, 23, 7, 1, 10];
\`\`\`

What happens if we now decide to insert the value of 55 at index 3?

\`\`\`javascript
list.splice(3, 0, 55);
\`\`\`

Two things will need to happen:

- All the values starting from index 3 will be shifted to the right to make space for the value we're inserting.
- New value is going to be inserted at index 3

Here's how that is going to look:

<img width=700 src="${picture1}"/>
[Inserting an element into an Array]

This shifting of values is exactly the reason why insertion of a value at a specific index runs in linear time O(N). In worst case we'll need to shift N values (inserting the value at the start), in best case we won't need to shift any value (insert the value at the end). On average we will still need to do N/2 shifts per insertion operation, and as we learned in previous lesson, N/2 operations = O(N), since we drop the constant scaling factor.

### Remove value by index

Starting from the same array as we did for insertion:

\`\`\`javascript
let list = [11, 99, 0, 5, 14, 89, 23, 7, 1, 10];
\`\`\`

But this time we'll remove the value 23 at index 6:

\`\`\`javascript
list.splice(6, 1);
\`\`\`

The result of this change is going to be similar to what we observed for insertion:

- The value at index 6 will be removed
- All other values are going to be shifted to the left

Here's how the removal is going to look:

<img width=700 src="${picture2}"/>
[Removing an element from an Array]

Similar to the insertion, the shifting of elements to the left is the reason why deletion runs in linear time. In the worst case, we will need to shift N-1 elements to the left (when we remove the first element from the array). In the best case we won't need to shift any elements (removing the last element from the array). On average we will still need to shift the same number of elements as we did for insertion (N/2). This means that the deletion is also going to run in linear time in relation to number of elements N, O(N).
  
`,
  exercise: null
};