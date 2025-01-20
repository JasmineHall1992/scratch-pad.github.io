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
    //use the split method to turn the input string into an array
    const splitString = input.split(" ");
    //use the reverse method to reverse the newly created array
    const reversedArray = splitString.reverse();
    //use the join method to join all the elements of the array back into a string
    const joinedArray = reversedArray.join(" ");
    //return the new reversed string
    return joinedArray;
    // YOUR CODE GOES ABOVE HERE //
};




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}