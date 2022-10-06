// =================== ORIGINAL ATTEMPT =========================

// function finishHomework(time, ampm) {
//   if (ampm == "am") {
//     if (time < 10) {
//       console.log("latte")
//     }
//   else if (time > 10) {
// console.log("hot chocolate")
//     }
//   }
//   else {
// if (time < 4 || time < 12) {
//   return ("hot chocolate")
// }
// else if (time > 4 && time < 10) {
//   return ("ice cream")
// }
// else {
//   console.log("sleep")
//     }
//   }
// }
// finishHomework(1 , 2)


//  ================ DETERMAINING IF ITS AM OR PM ===================

function amOrPm(ampm, time, day) {
  if (ampm == "am") {
    finishHomeworkAm(ampm, time, day);
  } else {
    finishHomeworkPm(ampm, time, day);
  }
}


//  ================= AM FUNCTION ===================

function finishHomeworkAm(time) {
  if (time < 10) {
    console.log("latte")
  } else {
    console.log("hot chocolate")
  }
}


//  ==================== PM FUNCTION ================

function finishHomeworkPm(time, day) {
  if (time < 4) {
    console.log("hot chocolate")
  }
  if (time > 3 && time < 6) {
    if (time % 2 == 0) {
      randomizeArray(["hot chocolate", "tea", "cake"]);
    } else {
      randomizeArray(["ice cream", "cookies", "hot chocolate"]);
    }
  }
  else if (time >= 4 && time < 10) {
    if (day == "Wednesday") {
      console.log("strawberry ice cream")
    } else {
      console.log("vanilla ice cream")
    }
  } else {
    console.log("sleep")
  }
}

// ================= RANDOMIZE ARRAY =====================

function randomizeArray(arr) {
  var randomItem = arr[Math.floor(Math.random()*arr.length)];
  console.log(randomItem)
}


amOrPm("pm", 4, "Tuesday")