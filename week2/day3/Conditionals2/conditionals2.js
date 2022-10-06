// =================== ORIGINAL ATTEMPT =========================

// function finishHomework(time, ampm) {
//   if (ampm = 1) {
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

function finishHomeworkAm(ampm, time, day) {
  if (time < 10) {
    console.log("latte")
  } else {
    console.log("hot chocolate")
  }
}


//  ==================== PM FUNCTION ================

function finishHomeworkPm(ampm, time, day) {
  if (time < 4) {
    console.log("hot chocolate")
  }
  if (time > 3 && time < 6) {
    if (time % 2 == 0) {
      evenHour(ampm, time, day);
    } else {
      oddHour(ampm, time, day);
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

// ================= EVEN HOUR =====================

function evenHour(ampm, time, day) {
  var arrEven = ["ice cream", "cookies", "hot chocolate"]
  var randomItem = arrEven[Math.floor(Math.random()*arrEven.length)];
  console.log(randomItem)
}


//   ================= ODD HOUR ===================

function oddHour(ampm, time, day) {
  var arrOdd = ["hot chocolate", "tea", "cake"]
  var randomItem = arrOdd[Math.floor(Math.random()*arrOdd.length)];
  console.log(randomItem)
}


amOrPm("pm", 4, "Tuesday")