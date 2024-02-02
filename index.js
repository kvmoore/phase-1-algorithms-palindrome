
// Rewrite the Problem in Your Own Words
// Write Your Own Test Cases
// Pseudocode
// Code
// Make It Clean and Readable
// Optimize

// Write a function isPalindrome that will receive one argument, a string. Your function should return true 
// if the string is a palindrome (that is, if it reads the same forwards and backwards, like "mom" or "racecar"), 
// and return false if it is not a palindrome.

// To keep things simple, your function only needs to deal with lowercase strings that are all letters (don't worry about spaces or special characters).

    function isPalindrome(string) {
      
      const cleanedString = string.replace(/[^a-z]/g, '').toLowerCase();
   
      return cleanedString === cleanedString.split('').reverse().join('');
   }
   
   console.log(isPalindrome('race car'));

//Test cases:

console.log('Expecting to return true')
console.log(isPalindrome('race car'))

/* 
Add your pseudocode here

Create a function that takes in a string
    only needs to deal with lowercase strings that are letters.
    Don't worry about spaces or special characters

if string is a palindrome it should return true and should return false is if it's not

*/

/*
  Add written explanation of your solution here

Function takes in a string and removes spaces special characters and converts it to lower case.
It then takes the original string and compares it to the reverse of the string using a split, reverse and join

*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
