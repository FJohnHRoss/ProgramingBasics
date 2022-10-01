var arr = ["rock", "paper", "sissors"];


function shuffle(arr) {
  var currentIndex = arr.length, randomIndex; // setting currentIndex to arr.length and randomIndex
  while (currentIndex != 0) { // if current index is not equal to 0 the following code will run
    randomIndex = Math.floor(Math.random() * currentIndex); // dont know exactly whats happening here
    currentIndex--; 
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]; // dont know exactly whats happening here
  }
}
shuffle(arr); // this shuffles the array
console.log(arr[0]) // this is logging the first string within the array because its a rock paper sissors game