function findFirstDuplicate(arr) {
//   practice

let uniques = new Set()

for (const val of arr) {
  if (uniques.has(val)){
    return val
  }
  uniques.add(arr[val])
}

return -1

}

















// function findFirstDuplicate(arr) {

//   const seen = {};

//   for (const i of arr) {
//     if (seen[i]) {
//       return i
//     }
//     seen[i] = true
//   }
//   return -1

  // BELOW SORTS THE ARRAY FIRST, THEN FINDS THE FIRST DUPLICATE, BUT DOES NOT PASS FINAL TEST

//   const sortedArr = arr.slice().sort();

// for (let i = 0; i < sortedArr.length - 1; i++) {
//   if (sortedArr[i] === sortedArr[i + 1]) {
//     return sortedArr[i];
//   }
// }

// return -1;

// }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

