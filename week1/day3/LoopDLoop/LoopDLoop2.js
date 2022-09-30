var candy = 0;
var speed = 5.5
var runnerSpeed = 5.6

if(runnerSpeed > speed){
  for(var miles = 1; miles <= 6; miles++){
    console.log(miles + " miles ran")
    if(candy >= 0 && miles % 2 === 0){
      candy = candy + 1
      console.log(candy + " candy dispensed")
    }
  }
}
else{
  for(var miles = 1; miles <= 6; miles++){
    console.log(miles + " miles ran")
  }
}

// We need a loop here because we have to repeat a process multiple times.
// the starting point of the loop is 0.
// the loop should stop at 3 because every 2 miles the runner gets a candy so I cut it in half.
// it will know when to stop because of "candy <= 3;" and "miles <= 2;".
// I have both of my loops increasing by + 1 because of how I have candy setup. If I would have it += 2 it would print 0, 2, 4... 
// we need the following variables, candy, miles