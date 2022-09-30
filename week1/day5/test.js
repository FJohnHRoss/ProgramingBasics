var arr = [0,1,1];


function shuffle(arr) {
  
  let currentIndex = arr.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex], arr[currentIndex]];
  }
  for (var i = 0; i < 10; i++) {
    if (arr[i] == 0) {
      console.log("table");
    }
    if (arr[i] == 1) {
      console.log("chair")
    }
    if (arr[i] == 2) {
      console.log("dogs")
    }
  }
}
shuffle(arr);