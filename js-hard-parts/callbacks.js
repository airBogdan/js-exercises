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
function addToAlphabet(letter) {
    alphabet+= letter;
}
// forEach(letters, addToAlphabet);
// console.log(alphabet);

// Challenge 6
// The function 'reduce' takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
function reduce(array, cb, initialVal) {
    for (let el of array) {
        initialVal = cb(initialVal, el);
    }
    return initialVal;
}

function reduceAdd(initialVal, newVal) {
    return initialVal + newVal;
}

// console.log(reduce([1,2,3,5], reduceAdd, 0));

// Challenge 7
// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!
function intersection(...arrays) {
    return reduce(arrays, compareArrays, arrays[0]);
}
function compareArrays(commonElementsArray, newArr) {
    let result = [];
    for (let el of newArr) {
        if (commonElementsArray.indexOf(el) > -1) result.push(el)
    }
    return result;
}

// console.log(intersection([1, 2, 3, 5, 10, 99], [7, 10, 22, 11, 44,5], [5, 1, 2, 10, 99]));

// Challenge 8
// Construct a function union that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce!
