// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

//I: input string
//O: Return the length
//C: none
//E: none


function length(string) {
    // YOUR CODE BELOW HERE //
  //return the strings length (use.length)
    return string.length
}
    // YOUR CODE ABOVE HERE //


/**
 * Given an input String, return a new String forced to lowercase.
 */
//I: give an input string
//O: return a new string forced to lowercase
//C: n/a
//E: n/a
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
   //return a new string
        return string.toLowerCase();
}
    //declare a variable
    const word = "HELLO!";
    //console log with the new variable and the function
    console.log(tolowerCase(word));
    // YOUR CODE ABOVE HERE //




/**
 * Given an input String, return a new String forced to uppercase.
 */

//I: input a string
//O: new string forced to uppercase
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    //return parameter with action
    return string.toUppercase();
}
// declare a new variable
    const newWord = "goodbye";
//console log new variable with function
    console.log(toUpperCase(newWord));
    // YOUR CODE ABOVE HERE //

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
//I: input a string
//O: return a new string
//C: lowercase must be enforced (action in return)
//E: string must have a dash case (action in return)
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
        //return string with both replace and lowercase action
       return string.replace(/\s+/g,'-').toLowerCase();
}
     //declare variable
     const myString = "Hello coders!"
     //console log with new variable
        console.log(toDashCase(myString));
    // YOUR CODE ABOVE HERE //


/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
//I: input string and a single character
//O: return true is string begins with character; false otherwise
//C: n/a
//E: function is case insensitive, so make all the same case
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
        //return value with both string and character lower case, also check if string begins with character
    return string.toLowerCase().beginsWith(char.toLowerCase());
}
     //console log
    console.log(beginsWith("Coders","c"));//This will log true
    // YOUR CODE ABOVE HERE //


/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
//I: input string and single character
//O: return true if string ends with a character, false otherwise
//C: n/a
//E: function is case insensitive
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
     // return parameter with action (making lower case), make sure string ends with character as well
     return string.toLowerCase().endsWith(char.toLowerCase());
}
     //console log function with parameter
     console.log(endsWith('Jasmine','e'))//This will log true
    // YOUR CODE ABOVE HERE //


/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
//I: input two strings
//O: return two strings concatenated as one
//C: n/a
//E: n/a
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //return a concatenation of two strings using a plus operator
    return stringOne + stringTwo;
}
 //console log a concatenated string using the function name
    console.log(concat('Homework', 'sucks!'));
    // YOUR CODE ABOVE HERE //


/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */

//I: input any number of strings
//O: return all strings joined
//C: none
//E: n/a
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // all the arguments (parameters) are stored with an array called args
    var args = Array.from(arguments);
     //return with action (join)
     return args.join();
}
//console log with function name and parameters
    console.log(join("Jasmine","is","beautiful!"));//
    // YOUR CODE ABOVE HERE //Jasmine is beautiful!


/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
//I:input two strings
//O: return the longest of the string
//C: none
//E: n/a
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //comparing the length of two different strings (if statement?)
    if (stringOne.length > stringTwo.length) {
        return stringOne;
    } else {
        return stringTwo;
    }

    }
    // YOUR CODE ABOVE HERE //


/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // return string using a js method which compares two strings to see which one comes first
    return stringOne.localeCompare(stringTwo);
}
//console log with two strings
console.log(sortAscending("surfing","running"));//
    // YOUR CODE ABOVE HERE //



/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //return strings with (locale compare action)
    return stringOne.localeCompare(stringTwo);
}
   //console log with function name and strings
  console.log(sortDescending("Jasmine","Luke"));//output -1 (Jasmine is before Luke)

    // YOUR CODE ABOVE HERE //



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}