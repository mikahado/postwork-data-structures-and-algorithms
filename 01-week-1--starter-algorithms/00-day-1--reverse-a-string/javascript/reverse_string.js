const reverseString = (str) => {

//  practice

}





// function reverseString(str) {

//   // SOLUTION 1

//   // ans = ""

//   // for (let i = str.length - 1; i >= 0; i--) {
//   //   ans += str[i]
//   // }

//   // return ans

//   // SOLUTION 2

//   return str.split("").reverse().join("")

// }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
