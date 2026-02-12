
<iframe width="700" height="350" src="https://www.youtube.com/embed/-gjxg6Pln50?si=WSzmcHxyi1KmJuuR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Two Pointers — Book Lengths Add Up

Maya is organizing a shelf of books sorted by **number of pages** (smallest to largest).  
A student asks:

> “Can you find two books whose page counts add up to exactly 500 pages?”

Maya could try every pair… but that would take too long.

Instead, she uses **two bookmarks**:

- One at the **shortest book** (`left`)
- One at the **longest book** (`right`)

If the total pages are:
- **Too small?** Move `left` right (choose a longer book).
- **Too big?** Move `right` left (choose a shorter book).
- **Exactly 500?** Found the pair!

Because the books are sorted by length, she never wastes time rechecking combinations.

---

## The Code

```js
function findBooksByPageCount(pages, target) {
  let left = 0;
  let right = pages.length - 1;

  while (left < right) {
    const sum = pages[left] + pages[right];

    if (sum === target) return [left, right];
    if (sum < target) left++;   // need more pages
    else right--;               // need fewer pages
  }

  return null;
}

// Example (sorted page counts)
const bookPages = [120, 150, 180, 200, 220, 250, 300];

console.log(findBooksByPageCount(bookPages, 500));
// 200 + 300 = 500 → returns [3, 6]
```

## Why This Works

Because the list is sorted, moving pointers inward removes impossible options.

Brute force: O(n²)

Two pointers: O(n)

Space: O(1)

One pass. No nested loops. Efficient and clean.