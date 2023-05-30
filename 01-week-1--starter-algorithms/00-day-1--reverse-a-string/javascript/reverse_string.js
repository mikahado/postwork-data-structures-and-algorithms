function reverseString(str) {
  // type your code here

    // Convert the string into an array of characters
    let charArray = str.split('');

    // Reverse the order of elements in the array
    let reversedArray = charArray.reverse();
  
    // Join the elements of the array back into a string
    let reversedStr = reversedArray.join('');
  
    // Return the reversed string
    return reversedStr;

}

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
