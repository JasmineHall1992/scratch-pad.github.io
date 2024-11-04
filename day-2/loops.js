// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //loop over the array
  for (var i= 0; i < array.length; i++) {
    //this [i] will print each value in the array
    console.log(array[i]);
  }  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //loop backwards over the array, start at the last value, end at the 0 index, minus 1
  for (var i = array.length - 1; i >= 0; i--) {
    // this [i] will print each value in the array
    console.log(array[i]);
 }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
//I: an input Object
//O: return an array containing all the keys of the Object
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //return the keys in the object, use parameter as argument
  return Object.keys(object);
}
  // YOUR CODE ABOVE HERE //

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */

//I: an input Object, loop over the object, use for in loop since the keys are IN the object
//O: print the objects keys using console.log???

function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //loop through
  for (var key in object) {
    //print each key to the console
    console.log(key);
  } 
}
  
  
  
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, return an Array containing the Object's values.
 */
// I: an input object
// O: an array containing the objects values
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //return the array with dot notation with object as an argument
  return Object.array(object);
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
//I: input object, loop over the object
//O: print objects values using console log
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // loop over object (use for in loop)
  for (var key in object) {
    //print each value in the object by accessing the key
    console.log(object[key]);
  }
}  
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
//I: input object
//O: return the number of key value pairs within the object (for in loop)
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  for (var key in Object) {
    return object.key(object);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}