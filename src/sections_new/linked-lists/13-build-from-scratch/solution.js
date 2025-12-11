/*
Building a Linked List from Scratch

Complete implementation with all phases:
*/

// Phase 1: Node factory function
function createNode(data) {
  return {
    data: data,
    next: null
  };
}

// Phase 2: LinkedList factory function
function createLinkedList() {
  let head = null;
  let size = 0;

  return {
    // Phase 3: Add to head
    addToHead(data) {
      const newNode = createNode(data);
      newNode.next = head;
      head = newNode;
      size++;
    },

    // Phase 4: Add to tail
    addToTail(data) {
      const newNode = createNode(data);
      
      if (!head) {
        head = newNode;
      } else {
        let current = head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      size++;
    },

    // Phase 5: Remove from head
    removeFromHead() {
      if (!head) {
        return null;
      }
      
      const removedData = head.data;
      head = head.next;
      size--;
      return removedData;
    },

    // Phase 6: Remove from tail
    removeFromTail() {
      if (!head) {
        return null;
      }
      
      if (!head.next) {
        const removedData = head.data;
        head = null;
        size--;
        return removedData;
      }
      
      let current = head;
      while (current.next.next) {
        current = current.next;
      }
      
      const removedData = current.next.data;
      current.next = null;
      size--;
      return removedData;
    },

    // Phase 7: Check if contains value
    contains(data) {
      let current = head;
      while (current) {
        if (current.data === data) {
          return true;
        }
        current = current.next;
      }
      return false;
    },

    // Phase 8: Find index of value
    indexOf(data) {
      let current = head;
      let index = 0;
      
      while (current) {
        if (current.data === data) {
          return index;
        }
        current = current.next;
        index++;
      }
      return -1;
    },

    // Phase 9: Remove at index
    removeAt(index) {
      if (index < 0 || index >= size) {
        return null;
      }
      
      if (index === 0) {
        return this.removeFromHead();
      }
      
      let current = head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      
      const removedData = current.next.data;
      current.next = current.next.next;
      size--;
      return removedData;
    },

    // Phase 10: Insert at index
    insertAt(index, data) {
      if (index < 0 || index > size) {
        return false;
      }
      
      if (index === 0) {
        this.addToHead(data);
        return true;
      }
      
      if (index === size) {
        this.addToTail(data);
        return true;
      }
      
      const newNode = createNode(data);
      let current = head;
      
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      
      newNode.next = current.next;
      current.next = newNode;
      size++;
      return true;
    },

    // Helper method to get size
    getSize() {
      return size;
    },

    // Helper method to check if empty
    isEmpty() {
      return size === 0;
    },

    // Phase 11: Get Big O notations for all methods
    getBigONotations() {
      return {
        addToHead: "O(1)",
        addToTail: "O(n)",
        removeFromHead: "O(1)",
        removeFromTail: "O(n)",
        contains: "O(n)",
        indexOf: "O(n)",
        removeAt: "O(n)",
        insertAt: "O(n)",
        getSize: "O(1)",
        isEmpty: "O(1)"
      };
    }
  };
}