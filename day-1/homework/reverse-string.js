// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */
/*
//*
I: input a string, this is represented by "input"
O: return the string reversed
C: n/a
E: n/a
*/

function reverseString(input) {
  // Initialize an empty string to collect the reversed result
  let reversed = "";

  // Loop through the input string from the last character to the first
  for (let i = input.length - 1; i >= 0; i--) {
    // Access each character and add it to the reversed string
    reversed += input[i];
  }

  // Return the reversed string
  return reversed;
}

// Example usage
console.log(reverseString('hello'));  // => 'olleh'
console.log(reverseString('world'));  // => 'dlrow'




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}