// Basic 13

//1

// function print1To255() {
//   for (var i = 1; i <= 255; i++) {
//     console.log(i)
//   }
// }
// print1To255()

// 2

// function printOdds1To255() {
//   for (var i = 1; i <= 255; i++) {
//     if (i % 2) {
//       console.log(i)
//     }
//   }
// }
// printOdds1To255()

// 3

function printIntsAndSum0To255() {
  var sum = 0
  var i = 0
  while(i <= 255) {
    console.log(i)
    sum =+ i;
    console.log(sum)
    i++
  }
}
printIntsAndSum0To255()

// 4

// function printArrayVals(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//   }
// }
// printArrayVals([1,2,3,4])

// 5

// function printMaxOfArray(arr) {
//   var max = arr[0];
//   for (var i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i]
//     }
//   }
//   console.log(max)
// }
// printMaxOfArray([-1,-2,-7,-1])

// 6

// function printAverageOfArray(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i]
//   }
//   var avg = sum / arr.length
//   console.log(avg)
// }
// printAverageOfArray([1,2,3,4])