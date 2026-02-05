// ==============================
// Exercise 1: Help Maya Add Multiple Orders
// ==============================
function addOrders(orderList) {
  // Add the three orders to Maya's list
  orderList.push("Flat White");
  orderList.push("Cold Brew");
  orderList.push("Double Espresso");
  // Return the updated array
  return orderList;
}

let mayasOrders = ["Latte", "Cappuccino"];
mayasOrders = addOrders(mayasOrders);
console.log("Maya's updated orders:", mayasOrders); // Should show all 5 orders

// ==============================
// Exercise 2: Handle Priority Orders During Rush
// ==============================
let rushQueue = ["Americano", "Latte", "Mocha", "Espresso"];
// Insert both VIP orders at the beginning
// Use splice to insert "VIP: Affogato" at index 0
rushQueue.splice(0, 0, "VIP: Affogato");
// Then insert "VIP: Cortado" at index 1
rushQueue.splice(1, 0, "VIP: Cortado");

console.log("Rush queue with VIP orders:", rushQueue);

// ==============================
// Exercise 3: Fix Multiple Order Mistakes
// ==============================
let mistakeOrders = ["Large Latter", "Cappuccino", "Wrong Order 1", "Wrong Order 2", "Espresso"];
// Fix the typo in the first order
mistakeOrders[0] = "Large Latte";
// Remove the two wrong orders (indices 2 and 3)
mistakeOrders.splice(2, 2);

console.log("Fixed orders:", mistakeOrders);

// ==============================
// Exercise 4: Create an Efficient Order Processing System
// ==============================
function processOrders(orders) {
  // Use a for...of loop or traditional for loop
  // Print each order with format: "Making order X of Y: [order name]"
  // X is current index + 1, Y is total length
  for (let i = 0; i < orders.length; i++) {
    const orderNumber = i + 1;
    const totalOrders = orders.length;
    const orderName = orders[i];
    console.log(`Making order ${orderNumber} of ${totalOrders}: ${orderName}`);
  }
}

let afternoonOrders = ["Cappuccino", "Iced Latte", "Americano", "Mocha"];
processOrders(afternoonOrders);