// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  let copyArr = arr.slice();
  if (copyArr.length <= 1) {
    return copyArr
  }
  // Divide the array in half
  let left = copyArr.splice(0, 1);
  let right = copyArr;
  let unmerged = [left, right];
  // Recursively sort the left half
  // Recursively sort the right half
  for (let i = 0; i < unmerged.length; i++) {
    let maxIndex = 0;
    for (let j = 1; j < unmerged[i].length; j++) {
      if (unmerged[i][j] > unmerged[i][maxIndex]) maxIndex = j;
    }
    const maxValue = unmerged[i][maxIndex];
    unmerged[i].splice(maxIndex, 1);

    unmerged[i] = mergeSort(unmerged[i]);

    unmerged[i].push(maxValue);
  }

  // Merge the halves together and return
  return merge(unmerged[0], unmerged[1]);
}





// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
  let merged = []

  // Point to the first value of each array

  // While there are still values in each array...
  while (arrA.length || arrB.length) {

    // Compare the first values of each array
    let smaller = Math.min(arrA[0], arrB[0])
    if (arrA[0] === undefined) smaller = arrB[0];
    if (arrB[0] === undefined) smaller = arrA[0];

    // Add the smaller value to the return array
    merged.push(smaller);
    // Move the pointer to the next value in that array
    if (smaller === arrA[0]) {
      arrA.shift();
    } else {
      arrB.shift();
    }
  }
  // Return the return array
  return merged;

}
arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];

console.log(mergeSort(arr));

module.exports = [merge, mergeSort];

