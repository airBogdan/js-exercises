// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.


// the idea is that I start multiplying the 2 numbers starting from the highest numbers (obviously) and i will explain by example
// for 3 digit numbers, I wont multiply all values for a from 999 to 100 with each value of b (999-100)
// what I will do instead is, i will decrease the numbers to multiply by 10% of the whole numbers to be multiplied, for ex 999 to 900 multiply with 999, then 998...till 900 = first 10%
// then, 800 to 899 multiply with 999 down to 800
function largestPalindrome (n) {
    let a, min, max, tenPercent, result, eureka = false
    min = Math.pow(10, n-1)
    max = a = Math.pow(10, n)-1
    tenPercent = Math.floor(max / 10)
    // console.log(max-tenPercent)

    let arr
    while (a >= min) {

        for (let i = a; i >= a-tenPercent; i--) {
            for (let j = max; j >= a-tenPercent; j--) {

                result = i * j
                arr = result.toString().split('')
                if (arr.length % 2 === 0) {
                    let x = arr.splice(0, arr.length/2).join('')
                    if (x === arr.reverse().join('')) { //first half digits equal the last reversed digits
                        eureka = true
                        return {result: result, first: i, second: j}
                    }
                }

                else {
                    let x = arr.splice(0, arr.length/2).join('')
                    arr = arr.splice(1)  // remove the middle element which now is the first one, after the splice
                    if (x === arr.reverse().join('')) {
                        eureka = true
                        return {result: result, first: i, second: j}
                    }
                }
            }
        }
        a = a - tenPercent - 1
    }
    if (eureka === false) return 'No paliondrome result'
}

console.log(largestPalindrome(3))
