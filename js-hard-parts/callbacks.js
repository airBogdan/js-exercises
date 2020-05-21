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
// console.log(alphabet); // should log 'abcd'

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

// console.log(reduce([1,2,3,5], reduceAdd, 0)); //should log 11

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
//
// console.log(intersection([1, 2, 3, 5, 10, 99], [7, 10, 22, 11, 44,5], [5, 1, 2, 10, 99]));
// should log: [5, 10]

// Challenge 8
// Construct a function 'union' that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce!
function union(...arrays) {
    return reduce(arrays, addToArray, arrays[0]);
}

function addToArray(unionArray, newArray) {
    for (let el of newArray) {
        if (unionArray.indexOf(el) === -1) unionArray.push(el)
    }
    return unionArray;
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
// Construct a function 'objOfMatches' that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.
function objOfMatches(array1, array2, cb) {
    let obj = {};
    for (const [i, val] of array1.entries()) {
        if (cb(val, array2, i)) obj[val] = array2[i];
    }
    return obj;
}

function checkUpperCase(el, arr2, index) {
    return el.toUpperCase() === arr2[index]
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], checkUpperCase));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10/h3> Construct a function 'multiMap' that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values.
// The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.
function multiMap(arrVals, arrCallbacks) {
    let obj = {};
    for (let val of arrVals) {
        obj[val] = [];
        for (let cb of arrCallbacks) {
            obj[val].push(cb(val))
        }
    }
    return obj;
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
// Construct a function 'objectFilter' that accepts an object as the first parameter and a callback function as the second parameter. objectFilter will return a new object. The new object will contain only the properties from the input object such that the property's value is equal to the property's key passed into the callback.
function objectFilter(obj, cb) {
    let entries = Object.entries(obj);
    for (let [lower, upper] of entries) {
        if (upper !== cb(lower)) delete obj[lower];
    }
    return obj;
}
const cities = {London: 'LONDON', LA: 'Los Angeles', Paris: 'PARIS'};
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}


// Challenge 12
// Create a function 'majority' that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.
function majority(array, cb) {
    let oddCounter = 0;
    for (let val of array) {
        if (cb(val)) oddCounter++;
    }
    return array.length/2 < oddCounter;
}
function isOdd(num) { return num % 2 === 1; }

// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

