class DynamicInt32Array {
    constructor(initialCapacity = 8) {
        this._data = new Int32Array(initialCapacity);
        this._size = 0;
        this._capacity = initialCapacity;
    }
    
    size() {
        return this._size;
    }
    
    isEmpty() {
        return this._size === 0;
    }
    
    capacity() {
        return this._capacity;
    }
    
    get(index) {
        if (index < 0 || index >= this._size) {
            throw new Error('Index ' + index + ' out of bounds. Valid range: 0 to ' + (this._size - 1));
        }
        return this._data[index];
    }
    
    set(index, value) {
        if (index < 0 || index >= this._size) {
            throw new Error('Index ' + index + ' out of bounds. Valid range: 0 to ' + (this._size - 1));
        }
        const intValue = Math.floor(value) | 0;
        const oldValue = this._data[index];
        this._data[index] = intValue;
        return oldValue;
    }
    
    _resize(newCapacity) {
        const oldData = this._data;
        this._data = new Int32Array(newCapacity);
        this._capacity = newCapacity;
        
        for (let i = 0; i < this._size; i++) {
            this._data[i] = oldData[i];
        }
    }
    
    _ensureCapacity() {
        if (this._size >= this._capacity) {
            const newCapacity = this._capacity * 2;
            this._resize(newCapacity);
        }
    }
    
    append(value) {
        this._ensureCapacity();
        const intValue = Math.floor(value) | 0;
        this._data[this._size] = intValue;
        this._size++;
        return this._size - 1;
    }
    
    removeAt(index) {
        if (index < 0 || index >= this._size) {
            throw new Error('Remove index ' + index + ' out of bounds. Valid range: 0 to ' + (this._size - 1));
        }
        
        const removedValue = this._data[index];
        
        for (let i = index; i < this._size - 1; i++) {
            this._data[i] = this._data[i + 1];
        }
        
        this._size--;
        this._data[this._size] = 0;
        
        return removedValue;
    }
    
    clear() {
        this._data = new Int32Array(8);
        this._size = 0;
        this._capacity = 8;
    }
    
    *[Symbol.iterator]() {
        for (let i = 0; i < this._size; i++) {
            yield this._data[i];
        }
    }
}