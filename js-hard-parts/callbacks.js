// Challenge 1
// Create a function addTwo that accepts one input and adds 2 to it.
function addTwo(a) {
    return a+2;
}

// Challenge 2
// Create a function addS that accepts one input and adds an "s" to it.
function addS(a) {
    return a + "s";
}

// Challenge 3
// Create a function called 'map' that takes two inputs:
// - an array of numbers (a list of numbers)
// - a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
// Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
function map(array, cb) {
    return array.map(el => cb(el))
}
// console.log(map([1,2,3], addTwo));

// Challenge 4
// The function 'forEach' takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.
let alphabet = '';
let letters = ['a', 'b', 'c', 'd'];

function forEach(array, cb) {
   for (let el of array) {
       cb(el);
   }
}
function forEachCb(a) {
    alphabet+= a;
}
// forEach(letters, forEachCb);
// console.log(alphabet);

