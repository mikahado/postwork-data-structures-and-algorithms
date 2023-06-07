const findShortestString = (arr) => {
    // practice
    // let shortest = arr[0]
    // arr.map(str => {
    //   if (str.length < shortest.length) {
    //   shortest = str
    //   }
    // })
    // return shortest

    return arr.reduce((string, shortest) => shortest.length < string.length ? shortest : string  )
    
    // create new array for smallest string 
    // iterate over all arrays
    // if length of [0] is smaller than length of [1], push value to new array

}

// function findShortestString(arr) {
//   // type your code here
// }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE

  

}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
