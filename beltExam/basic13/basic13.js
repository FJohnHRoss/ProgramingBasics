// 1

function Print1To255() {
  for (var i = 1; i < 256; i++) {
    console.log(i)
  }
}
Print1To255()


// 2

function PrintOdds1To255() {
  for (var i = 1; i < 256; i++) {
    if (i % 2) {
      console.log(i)
    }
  }
}
PrintOdds1To255()


// 3

var sum = 0
function PrintIntsAndSum0To255() {
  for (var i = 0; i < 256; i++) {
    console.log(i)
    sum += i;
    console.log(sum)
  }
}
PrintIntsAndSum0To255()

// 4

function PrintArrayVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}
PrintArrayVals([1,2,3,4])

// 5

function PrintMaxOfArray(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length - 1; i++)
    if(arr[i] > max) {
      max = arr[i];
    }
    console.log(max)
}
PrintMaxOfArray([1,5,4,2])

// 6

function PrintAverageOfArray(arr) {
  var avg = 0;
  for (var i = 0; i < arr.length; i++) {
    avg = avg + arr[i]
  }
  console.log(avg / arr.length)
}
PrintAverageOfArray([1,2,3,4])

// 7

function ReturnOddsArray1To255(arr) {
  for (var i = 1; i < 256; i++) {
    if (i % 2) {
      arr.push(i)
    }
  }
  console.log(arr)
}
ReturnOddsArray1To255([])

// 8

function SquareArrayVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i]
  }
  console.log(arr)
}
SquareArrayVals([5, 10, 1, 20])

// 9

function ReturnArrayCountGreaterThanY(arr, y) {
  for (var i = 0; i < arr.length; i++) {
    if (y < arr[i]) {
      console.log(arr[i])
    }
  }
}
ReturnArrayCountGreaterThanY([-1, 6, 7, 0])

//  10

function ZeroOutArrayNegativeVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0
    }
  }
  console.log(arr)
}
ZeroOutArrayNegativeVals([-1, 6, -100, 2])
