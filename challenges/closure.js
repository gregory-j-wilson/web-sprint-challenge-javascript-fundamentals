// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation:    Because the nature of closure is that functions can reach outside themselves to access variables, thus nestedFunction can reach outside itself to get the const internal variable.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

let counter = 0;

function summation(number) {

  for(var i = 1; i <= number; i++){
    counter += i;
  }
  return counter;

}

console.log(summation(4));
