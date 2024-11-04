// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
//I: count from the number 1-100 (this is a for loop[array]) it starts at 1 and ends at 100
//O: prints fizz, print buzz, print fizzbuzz, this is a conditional (if statement)
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //for loop that starts at 1 and stops at 100
    for (var i = 1; i <= 100; i++) {
        //check to see if the number is a multiple of three and five by dividing loop by 3 and 5 with no remainder
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        //if it is a multiple of 3 print fizz, divide i by 3 with 0 remainder
        } else if (i % 3 ===0) {
            console.log("Fizz"); 
        //if it is a multiple of 5 print buzz, divide i by 5 with 0 remainder
        } else if (i % 5 === 0); {
            console.log ("Buzz");
        //anything else just print whatever number is in the loop that is not divisible by 3 or 5
         } else {
            console.log(i);
         }
        }
}


    // YOUR CODE GOES ABOVE HERE //






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}