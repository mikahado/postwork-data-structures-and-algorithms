function fibonacci(num) {
  // practice

  if (num < 2) {
    return num
  }

  let twoVal = [0, 1]
  
  for (let i = 0; i < num -1; i++) {
      let sum = twoVal[0] + twoVal[1]
      twoVal = [twoVal[1], sum]
  }
  
  return twoVal[1]
  
}



// function fibonacci(num) {
//   // type your code here

//   if (num < 2) {
//     return num
//   }

//   let lastTwo = [0, 1];

//   for (let i = 0; i < num - 1; ++i) {
//     const sum = lastTwo[0] + lastTwo[1]
//     lastTwo = [lastTwo[1], sum]
//   }
  
//   return lastTwo[1]
  
// }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// fib is when a previous number is added to the current number to get the next number
// first we check to see if the number is less than two. if that's the case there is no fibonacci at all, and we will return 0 or 1
// next we initialize with an array of the first two digits of fib which are 0 and 1. these will function as the 'current' or latest-two digest as we add to the array and iterate. 
// we begin a loop at 0, and set its limit to the value of num, minus 1. why minus 1? because 
