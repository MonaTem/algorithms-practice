/* Pseudo code
Binary search
Keep dividing array into halves until target is found (or not)
To calculate midpoint of the current half section instead of dividing start + end by 2
Divide end - start by 2 and add that value to start
This approach avoids possible overflow due to reaching the limit for a JS number,
which is very large.
*/
const binarySearch = (a, target) => {
  if (!a) return -1;
  let start = 0;
  let end = a.length - 1;
  while (start <= end) {
     let mid = Math.ceil(start + (end - start)/2);
  // let mid = start + ((end - start) >> 1)
    if (a[mid] > target) {
      end = mid - 1;
    } else if (a[mid] < target) {
           start = mid + 1;
           } else return mid;
  }
  return -1;
};


// Test cases
// Regular case: array of positive numbers, contains target
// binarySearch([1,2,4,7,9],2);
// Regular case: array of positive numbers, does not contain target
// binarySearch([1,2,4,7,9], 3);
// Regular case: array of positive numbers, target at end
// binarySearch([1,2,4,7,9], 9);
// Regular case: array of positive and negative numbers, // contains target
binarySearch([-77, -50, -2, -1, 5], -1);
// Regular case: array of positive and negative numbers,
// no target
// binarySearch([-1, 8],-8);
// Regular case: array of negative numbers, contains target
// binarySearch([-8, -6, -3], -6);
// Regular case: array of negative numbers, no target
// binarySearch([-88, -77, -44], -5);
// Base case: array of one positive number, contains target
// binarySearch([7],7);
// Base case: array of one positive number, no target
// binarySearch([77], 707);
// Base case: array of one negative number, contains target
// binarySearch([-88], -88);
// Base case: array of one negative number, no target
// binarySearch([-7889],-578);
// Base case: array of a zero, contains target
// binarySearch([0], 0);
// Base case: array of a zero, no target
// binarySearch([0], -88);
// Edge case: empty array
// binarySearch([]);
// Edge case: null
// binarySearch(null);
// Sanity check: pass in nothing
// binarySearch();
