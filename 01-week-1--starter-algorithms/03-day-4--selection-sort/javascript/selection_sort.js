// Sort an Array of numbers using selection sort. The selection sort algorithm
// sorts an array by repeatedly finding the minimum element (lowest value) in the
// input Array, and then putting it at the correct location in the sorted Array.

// ```js
// Input: [3, -1, 5, 2]
// Output: [-1, 2, 3, 5]
// ```

function selectionSort(arr) {
  
  let sorted = []

  while (arr.length > 0) {
    min = Math.min(...arr)
    inx = arr.indexOf(min)

    sorted.push(min)
    arr.splice(inx, 1)
  }

  return sorted
    
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    selectionSort([2, 1]);
    selectionSort(longInput);
  }

  const avgTime = (Date.now() - startTime) / 2000;

  console.log("avgTIME", avgTime);


}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
