function selectionSortRecursive(arr) {

  // base case
  if (arr.length === 0) {
    return []
  }
  
  const min = Math.min(...arr)
  const minIndex = arr.indexOf(min)
  arr.splice(minIndex, 1)

  let sorted = selectionSortRecursive(arr)
  sorted.unshift(min);
  return sorted
}




  // function selectionSort(arr) {
  //   const sorted = [];
  
  //   while (arr.length > 0) {
  //     const min = Math.min(...arr);
  //     const idx = arr.indexOf(min);
  
  //     sorted.push(min);
  //     arr.splice(idx, 1);
  //   }
  
  //   return sorted;
  // }




if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// make an empty array to store the ordered array. 
// while loop, that stores the minimum number, pushes it into ordered array, removes it from original array, then recusrively calls it. 
// And a written explanation of your solution
