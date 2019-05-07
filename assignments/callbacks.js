// Create a higher order function and invoke the callback function to test your work.
//  You have been provided an example of a problem and a solution to see how this works with our items array.
// Study both the problem and the solution to figure out the rest of the problems.



/*

  //Given this problem:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation
  firstItem(items, function(first) {
    console.log(first)
  });

*/
const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function getLength(arr, cb) {
//  getLength passes the length of the array into the callback.
  cb("Array Length is " + arr.length);
};
getLength(items, console.log);



function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb("Last item is " + arr[arr.length-1]);
}
last(items, console.log);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x+y);
}
sumNums(5,5, console.log);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x*y);
}
multiplyNums(5,2, console.log);

// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
  cb(list.includes(item))
}
contains('Gum', items, console.log);

/* STRETCH PROBLEM */

// removeDuplicates removes all duplicate values from the given array.
// Pass the duplicate free array to the callback function.
// Do not mutate the original array.
function removeDuplicates(array, cb) {
let newArray = array.filter( item => item);
  cb(newArray)
}
