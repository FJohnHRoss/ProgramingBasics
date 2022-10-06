function remainingCake(cake, people) {
  if (cake % people < 3 && cake % people != 0) {
    console.log("You have some left overs")
  }
  else if (cake % people == 0) {
    console.log("No leftovers for you!" )
  }
  else {
    console.log("Hold a party!")
  }
}
remainingCake(10, 18)