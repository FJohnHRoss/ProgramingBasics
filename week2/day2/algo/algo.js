// EVENS AND ODDS!

// Create a function that accepts an array of numbers. Every time that array
// has 3 odd values in a row, print "That's odd!" Every time the array has 3 even values
// in a row, print "Even more so!"

// Only print the messages when it's 3 in a row. If there are 5 consecutive odd
// values, for example, it should only print the message one time. If there are 7 consecutive
// even values, it should print the message two times.

// EXAMPLES:
// ------------------------------------
// [1,3,5,8,8,8]
// OUTPUT:
// That's Odd
// Even more so!

// ------------------------------------
// [1,2,3,4,5,6,7,8]
// OUTPUT:

// ------------------------------------
// [2,2,1,1,6,6,5,5,5]
// OUTPUT:
// That's odd!

// ------------------------------------
// [1,1,1,3,3]
// OUTPUT:
// That's odd!

// ------------------------------------
// [1,1,1,3,3,3]
// OUTPUT:
// That's odd!
// That's odd!

var evens = 0
var odds = 0
function evenOdds(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evens++
      odds = 0
      if (evens == 3) {
        console.log("even more so!")
      }
    }
    else {
      odds++
      evens = 0
      if (odds == 3) {
        console.log("that's odd")
        odds = 0
      }
    }
  }
}
var test = [1,1,1,3,3,3]
evenOdds(test)