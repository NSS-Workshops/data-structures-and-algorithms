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

"Never mind that. The trick with rotated sorted arrays is that one half is always properly sorted. We first determine which half is sorted by comparing the endpoints, then check if our target is within the sorted half's range. If it is, we search there; otherwise, we search the other half. This maintains the O(log n) efficiency... even with the rotation!"

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

<span style="color:green">Maya explained this advanced concept: "Binary search on answer space is a powerful technique where instead of searching through data, we search through possible answers. Here, we're not searching through the array elements, but through possible subarray lengths (1 to array length). For each potential length, we check if it's possible to find a subarray of that length with the required sum. This transforms an optimization problem into a series of yes/no questions that binary search can handle."</span>

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

<span style="color:red">
## Real-World Applications at Groove Records

As Sam mastered these binary search variants, he found creative applications throughout his business:

### Inventory Optimization

<span style="color:green">Maya explained the business application: "This uses binary search on the answer space of possible prices. Instead of searching through data, we're searching through the range of possible prices to find the optimal one. For each price point, we calculate the projected profit and use that to guide our search toward the target profit level."</span>

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

### Customer Preference Analysis

<span style="color:green">Maya noted: "This isn't traditional binary search, but it uses the concept of comparing elements with their neighbors to find 'peaks' - albums that are more popular than those around them. It's a linear scan that applies binary search thinking to identify local maxima in the popularity data."</span>

```javascript
// Find albums that are "peaks" in customer interest
function findPopularityPeaks(albumsByPopularity) {
  const peaks = [];
  
  for (let i = 0; i < albumsByPopularity.length; i++) {
    const current = albumsByPopularity[i];
    const left = i > 0 ? albumsByPopularity[i - 1] : null;
    const right = i < albumsByPopularity.length - 1 ? albumsByPopularity[i + 1] : null;
    
    // Check if current album is more popular than its neighbors
    if ((!left || current.popularity > left.popularity) &&
        (!right || current.popularity > right.popularity)) {
      peaks.push(current);
    }
  }
  
  return peaks;
}
```

### Dynamic Pricing

<span style="color:green">Maya explained the market positioning logic: "This uses our insertion point finder to determine where an album's price fits in the competitive landscape. By finding where the price would be inserted in a sorted list of competitor prices, we can determine if we're pricing competitively, too high, or too low relative to the market."</span>

```javascript
// Adjust prices based on demand using binary search principles
function findMarketPrice(album, competitorPrices) {
  // Find where this album's price should fit in the market
  const insertionPoint = findInsertionPoint(competitorPrices, album.price);
  
  // Position in market (0 = cheapest, 1 = most expensive)
  const marketPosition = insertionPoint / competitorPrices.length;
  
  if (marketPosition < 0.3) {
    return "Price competitively - you're in the low end";
  } else if (marketPosition > 0.7) {
    return "Consider lowering price - you're in the high end";
  } else {
    return "Price is well-positioned in the market";
  }
}
```

"These advanced search techniques have transformed my entire business," Sam reflected. "I can optimize pricing, manage inventory efficiently, and provide incredible customer service. Binary search variants aren't just about finding things - they're about making intelligent decisions with data."

Alex nodded enthusiastically. "And the best part is, all of these techniques build on the same fundamental principle - using the sorted nature of data to make smart eliminations and find answers efficiently."

Maya smiled proudly. "Sam, you've gone from manually searching through records to implementing sophisticated algorithms that rival what major retailers use. You've truly mastered the art of efficient search."
</span>

## Finding Peak Element

A peak element is an element that is greater than its neighbors. For an array with distinct elements, there is always at least one peak element.

```javascript
function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    
    // If mid is a decreasing part, peak is in the left half
    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    }
    // If mid is an increasing part, peak is in the right half
    else {
      left = mid + 1;
    }
  }
  
  // When left === right, we've found the peak
  return left;
}

// Example
const array = [1, 3, 4, 3, 5, 6, 4];
console.log(findPeakElement(array)); // Output: 5 (index of 6)
```

<span style="color:red">
## The Complete Search Solution

As their final session concluded, Sam's record store had become a model of algorithmic efficiency:

- **Basic binary search** for finding any album quickly
- **First/last occurrence search** for handling multiple copies
- **Insertion point finding** for maintaining sorted inventory
- **Closest match search** for customer recommendations
- **Range searches** for price and year-based browsing
- **Rotated array search** for handling reorganized sections

"I started with a chaotic pile of records and customers who couldn't find anything," Sam said, looking proudly at his organized, efficiently searchable collection. "Now I can answer any customer question in seconds, manage my inventory intelligently, and even optimize my pricing strategy."

Alex had learned that binary search variants weren't just academic exercises - they were practical tools that solved real business problems. "The key insight is that once you have sorted data, you can answer incredibly sophisticated questions efficiently by applying the right variant of binary search."

"Tomorrow," Maya said, "we'll explore how these search and sorting principles combine with other data structures to solve even more complex problems. But you've now mastered the fundamental techniques that power modern search systems."

Sam's record store had become a testament to the power of algorithmic thinking applied to real-world challenges. Every customer interaction was now fast, efficient, and satisfying - all thanks to the magic of binary search variants.
</span>

## Tips for Binary Search Variants

1. **Identify the Search Space**: Clearly define what you're searching for (an element, a position, a value)
2. **Define the Condition**: What makes a mid-point the answer or guides the search direction?
3. **Handle Edge Cases**: Empty arrays, single elements, duplicates, etc.
4. **Avoid Off-by-One Errors**: Be careful with boundary conditions and index calculations
5. **Test with Examples**: Verify your algorithm with simple examples and edge cases

TBD