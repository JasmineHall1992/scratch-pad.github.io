// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
//I: a function with an input base
//O: return a function that tests whether the value is greater than the base
//C: n/a
//E: n/a
function createGreaterThanFilter(base) {
    //create a callback function that takes the value
    return function (value) {
        return value > base;
    };
    
   
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 * 
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function (value) {
        return value < base;
    };
    
  
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
//I: a function that takes in startsWith with represens a single characters
//O: return a function that tests whether a given string starts with a character
//C: the function needs to be case insensitive
//E: n/a
function createStartsWithFilter(startsWith) {
    //convert startsWith to lowercase for case insensitive comparison
    const lowerCased = startsWith.toLowerCase();
    //return a function that tests a given string
    return function(str) {
        //convert the first character of the string to lowercase as well and compare the strings
        //use charAt to compare a specific character in the string
        return str.charAt(0).toLowerCase() === lowerCased;

    };
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //convert endsWith to lowerCase to make it case insensive
    const lowerCased2 = endsWith.toLowerCase();
    //convert an input string to lowerCase and compare to the endsWith character
    return function(str){
        return str.charAt(str.length - 1).toLowerCase() === lowerCased2;
    }; 
} 
    
    
    
    // YOUR CODE ABOVE HERE //


/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}




/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}