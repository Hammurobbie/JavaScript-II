// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];



  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"


  // getLength passes the length of the array into the callback.

  // last passes the last item of the array into the callback.

  // sumNums adds two numbers (x, y) and passes the result to the callback.

  // multiplyNums multiplies two numbers and passes the result to the callback.

  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.


function getLength(arr, cb) {
  return cb(arr.length);
}

const test3 = getLength(items, item => `The array is ${item} items long!`);
  console.log(test3); 

function last(arr, cb) {
  return cb(arr[arr.length-1]);
}

const test4 = last(items, item => `I love my ${item}!`);
  console.log(test4); 

function sumNums(x, y, cb) {
  return cb(x + y);
}

const test5 = sumNums(5, 6, item => `The sum of the two numbers is ${item}!`)
  console.log(test5);

function multiplyNums(x, y, cb) {
  return cb(x * y);
}

const test6 = multiplyNums(7, 8, item => `The product of the two numbers is ${item}!`)
  console.log(test6);

function contains(item, list, cb) {
  if (list.includes(item)) {
    return cb(true);
  } else return cb(false);
}

const test7 = contains('yo-yo', items, item => `${item}!`)
  console.log(test7);



/* STRETCH PROBLEM */

const items2 = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Gum', 'Notebook'];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let dupFree = array.filter((item, index) => array.indexOf(item) === index);
  return cb(dupFree);
}

const test8 = removeDuplicates(items2, item => `${item}`)

console.log(test8);