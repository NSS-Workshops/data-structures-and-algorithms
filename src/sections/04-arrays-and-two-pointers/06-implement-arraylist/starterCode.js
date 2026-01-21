// ==============================
// Exercise: Complete Alex's Dynamic Int32Array Implementation
// ==============================
// Your task: Implement the missing methods in Alex's Dynamic Int32Array class
// This will be used for high-performance audio processing!

class DynamicInt32Array {
    
    constructor(initialCapacity = 8) {
        // DO NOT CHANGE ANY CODE HERE!
        this._data = new Int32Array(initialCapacity);
        this._size = 0;
        this._capacity = initialCapacity;
    }
    
    // ==============================
    // BASIC PROPERTIES - IMPLEMENT THESE
    // ==============================
    
    size() {
        // Return the current number of elements
        // Hint: Use the _size property
    }
    
    isEmpty() {
        // Return true if the array has no elements
        // Hint: Check if _size is 0
    }
    
    capacity() {
        // Return the current capacity of the backing Int32Array
        // Hint: Use the _capacity property
    }
    
    // ==============================
    // ACCESS METHODS - IMPLEMENT THESE
    // ==============================
    
    get(index) {
        // Return the element at the given index
        // Hint: Check bounds first, then return _data[index]
        // Throw error if index is out of bounds
    }
    
    set(index, value) {
        // Set the element at the given index
        // Hint: Check bounds, convert value to int32, store old value, set new value, return old value
        // Use: const intValue = Math.floor(value) | 0; to convert to int32
        // Throw error if index is out of bounds
    }
    
    // ==============================
    // RESIZING METHODS - IMPLEMENT THESE
    // ==============================
    
    _resize(newCapacity) {
        // Resize the backing Int32Array to newCapacity
        // Hint: Create new Int32Array, copy elements, update _data and _capacity
        const oldData = this._data;
        this._data = new Int32Array(newCapacity);
        this._capacity = newCapacity;
        
        // Copy existing elements to new array
        for (let i = 0; i < this._size; i++) {
            this._data[i] = oldData[i];
        }
    }
    
    _ensureCapacity() {
        // Double the capacity if the array is full
        // Hint: Check if _size >= _capacity, then call _resize with double capacity
    }
    
    // ==============================
    // ADDITION METHODS - IMPLEMENT THESE
    // ==============================
    
    append(value) {
        // Add integer value to the end of the array
        // Hint: Ensure capacity, convert to int32, add element, increment size
        // Use: const intValue = Math.floor(value) | 0; to convert to int32
        // Return the index where element was added
    }
    
    // ==============================
    // REMOVAL METHODS - IMPLEMENT THESE
    // ==============================
    
    removeAt(index) {
        // Remove and return element at the given index
        // Hint: Check bounds, store element, shift elements left, decrement size
        // Clear the last position with 0
        // Throw error if index is out of bounds
    }
    
    // ==============================
    // UTILITY METHODS - IMPLEMENT THESE
    // ==============================
    
    clear() {
        // Remove all elements and reset to initial state
        // Hint: Create new Int32Array with capacity 8, reset _size and _capacity
    }
    
    // Iterator support (already implemented for you)
    *[Symbol.iterator]() {
        for (let i = 0; i < this._size; i++) {
            yield this._data[i];
        }
    }
}