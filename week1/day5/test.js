var arr = ["rock", "paper", "sissors"];


function shuffle(arr) {
  var currentIndex = arr.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }
}
shuffle(arr);
console.log(arr[0])