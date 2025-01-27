// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work? no. use Array.isArray
 * 
 * HINT: There is a method that can help with this.
 */
//I: an input value
//O: return true if the value is an array, false otherwise
function isArray(value) {
    // test if value is an array
    if (Array.isArray(value)){
        return true;
    } else {
        return false;
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise. This is using array.array, instanceof, typeof
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 * HINT: look up how to figure out if something is an instance of the Date object.
 * 
 */
//I: an input valie
function isObject(value) {
    //test if a value is an object intended as a collection
    //test if the value is an object but not null, but not an array and not a date
    return value !== null && typeof value === 'object' && !Array.isArray(value) && !(value instanceof Date);
 };

    
    
    
    // YOUR CODE ABOVE HERE //




/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
//I: input value
//O: return true if it is an array or object, false otherwise
function isCollection(value) {
    // Check if the value is an Array or a non-null object
    return Array.isArray(value) || 
           (typeof value === 'object' && value !== null && !(value instanceof Date));
}

    
    
    
    // YOUR CODE ABOVE HERE //


/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    if (Array.isArray(value)) {
        return "array";
    }
    if (value === null) {
        return "null";
    }
    if (value instanceof Date) {
        return "date";
    }
    return typeof value;
}
 
    
    
    
    
    // YOUR CODE ABOVE HERE //


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}