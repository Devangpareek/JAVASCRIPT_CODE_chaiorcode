// Immediately Invoked Function Expressions (IIFE)

/*  if we want to run any function immediately in that case we use iffe function 

>> some time global variable polute the function so to protect our function from that polution we use iffie function
 */

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// parameter pass in iife 
// unnamed iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')