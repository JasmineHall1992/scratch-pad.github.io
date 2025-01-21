// #!/usr/bin/env node

'use strict';

const { sortedIndexOf } = require("lodash");

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
/**
 * 
 I: input a string 
 O: return the length of the input string
 C: n/a
 E: n/a 
 */
function length(string) {
    // return the length of the input string
    return string.length;
    // YOUR CODE ABOVE HERE //
};



/**
 * Given an input String, return a new String forced to lowercase.
 */
//**
//I: input a string
//O: output a new string that is forced to lowercase
//C: must only be lowercase
//E: n/a
function toLowerCase(string) {
    // convert the input string to lowercase and return it
    return string.toLowerCase();
   

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
//I: input a string
//O: return a new string forced to uppercase
//C: must be uppercased
//E: n/a
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    //return a new string that has been forced uppercase
    return string.toUpperCase();



    // YOUR CODE ABOVE HERE //
}

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
//O: return it dash cased
//C: n/a
//E: n/a
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    //convert string to lowerCase
    const lowerCased = string.toLowerCase();
    //convert string to dash case
    const newString = lowerCased.replace(/\s+/g, '-');
    //return converted string
    return newString;
    // YOUR CODE ABOVE HERE //
}

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

//I: an input string and a single character
//O: return true if the string begins with a character
//C: the function is insensitive
function beginsWith(string, char) {
    // Convert both the string and char to lowercase to ensure case insensitivity
    string = string.toLowerCase();
    char = char.toLowerCase();

    // Use the startsWith method to check if the string begins with the character
    return string.startsWith(char);
}


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
//I: a string and a single character
//O: true if the string enfds with a character, false if not
//C: this is case insensitive
//E:
function endsWith(string, char) {
    // change both the string and character to lowercase to make case insensitive
    string = string.toLowerCase();
    char = char.toLowerCase();
    //return the string if it ends with a character
    return string.endsWith(char);
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
//I: two input strings
//O: the strings concatenated into one
//C: n/a
//E: n/a
function concat(stringOne, stringTwo) {
    // use the + operator to concatenate the two
    return stringOne + stringTwo;

    // YOUR CODE ABOVE HERE //
}

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
//I: any number of strings
//O: return them all joined together
function join(stringOne, stringTwo) {
//this pulls out all the arguments passed to it and stores them in an array
    var args = Array.from(arguments);
//return the array joined together
    return args.join('');

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
//I: two strings
//O: reutn the longest of the two
//tip: compare a property of the string
function longest(stringOne, stringTwo) {
    //use an if statement to compare the two
    if (stringOne.length > stringTwo.length) {
        return stringOne;
    } else {
        return stringTwo;
    }
}


    // YOUR CODE ABOVE HERE //


/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //




    // YOUR CODE ABOVE HERE //
}


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