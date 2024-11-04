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
//I: string
//O: a reversed string
//C: create a loop with a stopping point
//E: concatenate strings with an operator
function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    // create an empty variable for the loop
    var reversed = "";
    // loop through the string, because it is backwards start at the last item in the string
    for (let i = input.length - 1; i >= 0; i--) {
      // access items in string using str[i] and add to variable;
      //concatenate strings using an operator (+)
      reversed + str [i];
    }
    // return new reversed string
      return reversed;

    //console log with new function
    console.log(reverseString('Jasmine'));//'enimsaJ'
    
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
  module.exports.split = split
  module.exports.join = join
}