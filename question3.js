// What will be console.logged here
// Hoisting

// question1
console.log(foo);
foo = 1;
// hoisting but foo is not defined, give an error

// question2
console.log(foo);
var foo = 2;
// var foo = 2; a cration of variable, but happens after console.log, output is undefined.
/**
 * because, it is exactly the same code here an above, this is how js interpret reads the code
 * var foo; // undefined because we didn't assigned any value
 * console.log(foo);
 * foo = 2;
 * var foo bubbles on the top then, for that reason output: undefined
 */

// question3
foo = 3;
console.log(foo);
var foo;
// output is 3

/**
 * because, it is exactly the same code here an above, this is how js interpret reads the code
 * var foo; 
   foo = 2;
 * console.log(foo);
 * var foo bubbles on the top then, for that reason output:2
 */

/**
 * ** const and let not bubbling at all.
 * const a = 1; it wont bubble anywhere
 */
