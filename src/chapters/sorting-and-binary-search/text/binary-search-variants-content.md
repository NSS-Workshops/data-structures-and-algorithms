## Binary Search Variants

While the standard binary search algorithm finds any occurrence of a target value in a sorted array, many practical problems require variations of this algorithm. This chapter explores common binary search variants and their applications.

## Advanced Search Challenges at Groove Records

A month after implementing basic binary search, Sam's record store had become incredibly efficient. But success brought new challenges.

"Alex," Sam said during their weekly check-in, "I'm facing issues that my current search system can't handle. I sometimes have to restock records, so I need to know exactly where to insert it in my sorted collection. Yesterday, a customer wanted 'all copies of Dark Side of the Moon' - I have multiple copies in different conditions. And someone asked me to find albums similar in price to one they were looking at."

Maya overheard and smiled. "Sam, you're ready for binary search variants - specialized versions that solve these exact problems."

Alex was intrigued. "You mean there are different types of binary search for different situations?"

"Absolutely," Maya replied. "The basic binary search finds any occurrence of a target. But real-world applications often need to find the first occurrence when there are duplicates, or all the duplicates, or determine where something should be inserted. Let me show you."


## Finding the First Occurrence

"So, a standard binary search will keep looking until it finds any record that matches what we're looking for..." began Maya

"And isn't that what we need?" Interrupted Sam

"Well," Maya continued, patiently, "sometimes we want something more specific. What if we want to always pick the first, or leftmost, copy of an album in your collection? Then as soon as we find a copy, we note it and keep binary searching to the left, in case there's another one. Like this:"

```javascript
function findFirstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;
  
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    
    // If target is found, save the index but continue searching left
    if (arr[mid] === target) {
      result = mid;
      right = mid - 1; // Look in the left half
    }
    // If target is greater, search right half
    else if (arr[mid] < target) {
      left = mid + 1;
    }
    // If target is smaller, search left half
    else {
      right = mid - 1;
    }
  }
  
  return result;
}
```

## Finding All Copies: First to Last Occurrence

Sam's next challenge was finding all copies of an album. "I have three copies of 'Dark Side of the Moon' in different conditions, but my basic search just finds one of them randomly. Customers want to see all their options."

Alex chimed in to explain the approach: "To find all copies of an album, we just need to find the leftmost one, like Maya just said, then do that in the other direction to find the rightmost one. Then we can grab those and everything in between!"

```javascript
// Find the first copy of an album (leftmost occurrence)
function findFirstCopy(sortedCollection, targetTitle) {
  let left = 0;
  let right = sortedCollection.length - 1;
  let firstIndex = -1;
  
  console.log(`Looking for first copy of "${targetTitle}"...`);
  
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    const currentTitle = sortedCollection[mid].title;
    
    if (currentTitle === targetTitle) {
      firstIndex = mid;
      console.log(`  Found copy at position ${mid}, but checking for earlier copies...`);
      right = mid - 1; // Keep searching left for earlier copies
    } else if (currentTitle < targetTitle) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return firstIndex;
}

// Find the last copy of an album (rightmost occurrence)
function findLastCopy(sortedCollection, targetTitle) {
  let left = 0;
  let right = sortedCollection.length - 1;
  let lastIndex = -1;
  
  console.log(`Looking for last copy of "${targetTitle}"...`);
  
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    const currentTitle = sortedCollection[mid].title;
    
    if (currentTitle === targetTitle) {
      lastIndex = mid;
      console.log(`  Found copy at position ${mid}, but checking for later copies...`);
      left = mid + 1; // Keep searching right for later copies
    } else if (currentTitle < targetTitle) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return lastIndex;
}

// Get all copies of an album
function findAllCopies(sortedCollection, targetTitle) {
  const firstIndex = findFirstCopy(sortedCollection, targetTitle);
  
  if (firstIndex === -1) {
    console.log(`No copies of "${targetTitle}" found`);
    return [];
  }
  
  const lastIndex = findLastCopy(sortedCollection, targetTitle);
  const allCopies = sortedCollection.slice(firstIndex, lastIndex + 1);
  
  console.log(`Found ${allCopies.length} copies of "${targetTitle}"`);
  return allCopies;
}
```

"Perfect!" Sam exclaimed. "Now customers can see all their options and choose based on condition and price."

## Smart Inventory Management: Finding Insertion Points

Sam thought for a moment and asked, "Is there a way we could use something like this to help me add records to the collection in order? Then I could keep things organized without having to re-sort all the time."

Maya explained the strategy: "Yes. That's called finding an insertion point. It's like binary search, but instead of looking for an exact match, we're looking for the position where the new item should go. Like this:

```javascript
// Find where a new album should be inserted to maintain sorted order
function findInsertionPoint(sortedCollection, newAlbumTitle) {
  let left = 0;
  let right = sortedCollection.length;
  
  console.log(`Finding insertion point for "${newAlbumTitle}"...`);
  
  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    const currentTitle = sortedCollection[mid].title;
    
    console.log(`  Checking position ${mid}: "${currentTitle}"`);
    
    if (currentTitle < newAlbumTitle) {
      console.log(`    "${newAlbumTitle}" comes after "${currentTitle}" - searching right`);
      left = mid + 1;
    } else {
      console.log(`    "${newAlbumTitle}" comes before "${currentTitle}" - searching left`);
      right = mid;
    }
  }
  
  console.log(`"${newAlbumTitle}" should be inserted at position ${left}`);
  return left;
}

//inserting a new album using this function
const newAlbum = {
  title: "Graceland",
  artist: "Paul Simon",
  releaseYear: 1986,
  price: 22.99,
  condition: "very good"
};

const insertionPoint = findInsertionPoint(vinylCollection, newAlbum.title);
sortedCollection.splice(insertionPoint, 0, newAlbum);
```

"This is fantastic!" Sam said. "Now I can add new inventory without messing up my sorted collection, and I know exactly where everything belongs."

## Finding Albums in a Price Range

A few days later, Alex came to check how things were going. "Very well!" Said Sam, "And I've got another question. What if a customer wants to find albums in a certain price range?"

Alex thought for a moment. "Well, you'd have to have your records sorted by price, of course. After that, I suppose we could use the same approach as we did to locate an insertion point. We just find where the minimum and maximum price points are, then grab all the records in between them."

```
// Find albums within a price range around a target
function findAlbumsInPriceRange(collectionSortedByPrice, minPrice, maxPrice) {
  
  const startIndex = findInsertionPoint(collectionSortedByPrice, { price: minPrice });
  const endIndex = findInsertionPoint(collectionSortedByPrice, { price: maxPrice + 0.01 });
  
  const albumsInRange = collectionSortedByPrice.slice(startIndex, endIndex);
  
  return albumsInRange;
}
```

## The Price is Right: Highest Price Within a Limit

"Hey Sam. I've got one customer, he's a real vinyl junkie. He just shows up with whatever change he could scrounge and just wants the most expensive record he can afford."

Alex shook his head. "Well, he might want to get some help with that. And we might need some help with this algorithm. Maya?"

Maya looked up from the Duke Ellington record she was admiring. "Hmmmm... since we're not sure we can find one with that exact price, we can use the same two pointer approach. If they converge on a match, we can select that. If we don't, we just pick the one that ends up to the left of where they converge."

```javascript
// Find the album closest in price to a target price
function findHighestPriceMatch(collectionSortedByPrice, maxPrice) {

  // Handle edge cases
  if (collectionSortedByPrice.length === 0) return null;
  
  if (maxPrice <= collectionSortedByPrice[0].price) {
    return null;
  }
  
  if (maxPrice >= collectionSortedByPrice[collectionSortedByPrice.length - 1].price) {
    return collectionSortedByPrice[collectionSortedByPrice.length - 1];
  }
  
  let left = 0;
  let right = collectionSortedByPrice.length - 1;
  
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    const currentPrice = collectionSortedByPrice[mid].price;
    
    // Found exact match
    if (currentPrice === maxPrice) {
      return collectionSortedByPrice[mid];
    }
    
    if (currentPrice < maxPrice) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  //the right pointer just crossed past the left, so grab what it is pointing to
  const leftAlbum = collectionSortedByPrice[right];
  return leftAlbum;
}
```

Maya continued, "...incidentally, if you wanted to find the record that's closest to the price you provided (higher or lower) then you also look at the album just to the right of the location found and compare the price difference for each of them, then pick the one that's closer to the specified price."

"I don't see how that would be practically helpful for my store," said Sam.

"Maybe not," replied Maya, "But I know that's useful in a lot of other situations, so I thought I'd mention it for some reason."

## Searching in Rotated Sorted Array

"...and speaking of techniques that wouldn't be at all helpful in a record shop, have you considered rotated arrays?"

"No," Replied Sam, "I think I have to go and..."

"Well, A rotated sorted array is a sorted array that has been rotated at some pivot point. For example, \`[4, 5, 6, 7, 0, 1, 2]\` is a rotated version of \`[0, 1, 2, 4, 5, 6, 7]\`.

"How would my collection of records get, uh, rotated?"

"Never mind that. The trick with rotated sorted arrays is that one half is always properly sorted. We first determine which half is sorted by comparing the endpoints. Then we check if our target is within the sorted half's range. If it is, we continue the binary search there; otherwise, we search the other half. This maintains the O(log n) efficiency... even with the rotation!"

```javascript
function searchInRotatedArray(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    
    // Found the target
    if (arr[mid] === target) {
      return arr[mid];
    }
    
    // Check if left half is sorted
    if (arr[left] <= arr[mid]) {
      // Check if target is in the left half
      if (arr[left] <= target && target < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // Right half is sorted
    else {
      // Check if target is in the right half
      if (arr[mid] < target && target <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  
  return null;
}

// 7 1 1 1 1 1 1 2
// Example
const rotatedArray = [4, 5, 6, 7, 0, 1, 2];
console.log(searchInRotatedArray(rotatedArray, 0)); // Output: 4
console.log(searchInRotatedArray(rotatedArray, 3)); // Output: -1
```

## Binary Search on Answer Space

Sometimes, binary search can be applied to the answer space rather than the input array. This is useful for optimization problems where you can check if a solution is valid.

### Example: Find the minimum size subarray with sum >= target

Maya explained this advanced concept: "Binary search on answer space is a powerful technique where instead of searching through data, we search through possible answers. Here, we're not searching through the array elements, but through possible subarray lengths (1 to array length). For each potential length, we check if it's possible to find a subarray of that length with the required sum. This transforms an optimization problem into a series of yes/no questions that binary search can handle."

```javascript
function minSubArrayLen(target, nums) {
  let left = 1; // Minimum possible length
  let right = nums.length; // Maximum possible length
  let result = 0;
  
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    
    if (isValidSubarraySize(nums, mid, target)) {
      // Found a valid size, try to find a smaller one
      result = mid;
      right = mid - 1;
    } else {
      // Current size is too small, try a larger one
      left = mid + 1;
    }
  }
  
  return result;
}

// Check if there's a subarray of size 'size' with sum >= target
function isValidSubarraySize(nums, size, target) {
  let sum = 0;
  
  // Calculate sum of first 'size' elements
  for (let i = 0; i < size; i++) {
    sum += nums[i];
  }
  
  if (sum >= target) {
    return true;
  }
  
  // Slide the window
  for (let i = size; i < nums.length; i++) {
    sum = sum + nums[i] - nums[i - size];
    if (sum >= target) {
      return true;
    }
  }
  
  return false;
}
```

### Inventory Optimization

Maya went on to offer one more example: "We can use binary search on the answer space of possible prices. Instead of searching through data, we're searching through the range of possible prices to find the optimal one. For each price point, we calculate the projected profit and use that to guide our search toward the target profit level."

```javascript
// Find the optimal price point for maximum profit
function findOptimalPricePoint(salesData, targetProfit) {
  // Binary search on the "answer space" - what price gives target profit?
  let left = 5.00;   // Minimum price
  let right = 100.00; // Maximum price
  let bestPrice = -1;
  
  while (left <= right) {
    const mid = (left + right) / 2;
    const projectedProfit = calculateProfitAtPrice(salesData, mid);
    
    if (projectedProfit >= targetProfit) {
      bestPrice = mid;
      right = mid - 0.01; // Try to find a lower price that still meets target
    } else {
      left = mid + 0.01;
    }
  }
  
  return bestPrice;
}
```

## Tips for Binary Search Variants

1. **Identify the Search Space**: Clearly define what you're searching for (an element, a position, a value)
2. **Define the Condition**: What makes a mid-point the answer or guides the search direction?
3. **Handle Edge Cases**: Empty arrays, single elements, duplicates, etc.
4. **Avoid Off-by-One Errors**: Be careful with boundary conditions and index calculations
5. **Test with Examples**: Verify your algorithm with simple examples and edge cases
