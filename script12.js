//enable sound?
document.getElementById("breakTimePlus").addEventListener("click",addOneMinuteBreak);
document.getElementById("breakTimeMinus").addEventListener("click",subtractOneMinuteBreak);

document.getElementById("minutesPlus").addEventListener("click",addOneMinuteTimer);
document.getElementById("minutesMinus").addEventListener("click",subtrackOneMinuteTimer);

document.getElementById("secondsPlus").addEventListener("click",addOneSecondTimer);
document.getElementById("secondsMinus").addEventListener("click",subtrackOneSecondTimer);

document.getElementById("startButton").addEventListener("click",everySecond);
document.getElementById("pauseButton").addEventListener("click",pauseTimer);
document.getElementById("clearButton").addEventListener("click",clearEverything);

function clearEverything() {
  // alert("clicked on clear");
  window.location.reload();
}

function pauseTimer() {
  clearInterval(stop);
}

// src: ['sound.mp3']
//
// var sound = new Howl({
//   src: ['bird.wav']
// });
//
// sound.play();

function addOneMinuteBreak() {
  var breakTimeLength = document.getElementById("breakTimeLength");
  var temp = parseInt(breakTimeLength.textContent);
  breakTimeLength.textContent = temp += 1;
}

function subtractOneMinuteBreak() {
  var breakTimeLength = document.getElementById("breakTimeLength");
  var temp = parseInt(breakTimeLength.textContent);
  // if (temp == 0) {
  //   alert("cant go less than 0");
  // }
  // else {
  //   breakTimeLength.textContent = temp -= 1;
  // }

  //don't want negative time
  if (temp > 0) {
    breakTimeLength.textContent = temp -= 1;
  }
}

function addOneMinuteTimer() {
  let timerMinutesLength = document.getElementById("timerMinutes");
  let temp2 = parseInt(timerMinutesLength.textContent);

  //now for Tomato part
  let tomatoMinutesLength = document.getElementById("tomatoMinutes");

  //don't want it to go above 59. Work on that case later. It will work for 58 to 59.
  let anotherTemp;
  if(temp2 < 59) {
    anotherTemp = temp2 + 1;
    // timerMinutesLength.textContent = temp2 += 1;
    // tomatoMinutesLength.textContent = temp2 += 1;
    timerMinutesLength.textContent = anotherTemp;
    tomatoMinutesLength.textContent = anotherTemp;
  }
}

function subtrackOneMinuteTimer() {
  let timerMinutesLength = document.getElementById("timerMinutes");
  let temp2 = parseInt(timerMinutesLength.textContent);

  //now for Tomato part
  let tomatoMinutesLength = document.getElementById("tomatoMinutes");
  let anotherTemp;

    // if (temp2 == 0) {
    //   alert("cant go less than 0");
    // }
    //
    // else {
    //   anotherTemp = temp2 - 1;
    //   timerMinutesLength.textContent = anotherTemp;
    //   tomatoMinutesLength.textContent = anotherTemp;
    // }

    //don't want negative time
    if (temp2 > 0) {
      anotherTemp = temp2 - 1;
      timerMinutesLength.textContent = anotherTemp;
      tomatoMinutesLength.textContent = anotherTemp;
    }
}

function addOneSecondTimer() {
  let timerSecondsLength = document.getElementById("timerSeconds");
  let temp2 = parseInt(timerSecondsLength.textContent);

  //now for Tomato part
  let tomatoSecondsLength = document.getElementById("tomatoSeconds");
  let anotherTemp;

  //don't want it to go above 59. Work on that case later. It will work for 58 to 59.
  if(temp2 < 59) {
    anotherTemp = temp2 + 1;
    // timerSecondsLength.textContent = temp2 += 1;
    timerSecondsLength.textContent = anotherTemp;
    tomatoSecondsLength.textContent = anotherTemp;
  }
}

function subtrackOneSecondTimer() {
  let timerSecondsLength = document.getElementById("timerSeconds");
  let temp2 = parseInt(timerSecondsLength.textContent);

  //now for Tomato part
  let tomatoSecondsLength = document.getElementById("tomatoSeconds");
  let anotherTemp;

  // if (temp2 == 0) {
  //   alert("cant go less than 0");
  // }
  // else {
  //   anotherTemp = temp2 -1;
  //   timerSecondsLength.textContent = anotherTemp;
  //   tomatoSecondsLength.textContent = anotherTemp;
  // }

  //don't want negative time
  if (temp2 > 0) {
    anotherTemp = temp2 - 1;
    timerSecondsLength.textContent = anotherTemp;
    tomatoSecondsLength.textContent = anotherTemp;
  }

}

//this function will be called every second
//to be able to stop this, need access to the variable returned from setVariable
//so make it global
var stop;

function everySecond () {
  stop = setInterval(countDown, 1000);
}

var switchZZ = false;

function countDown() {
  //disable start button after first click to prevent cascading effect of making it faster by 1 more time per second
  let timerStartButton = document.getElementById("startButton");
  timerStartButton.disabled = true;

  let justSeconds = document.getElementById("timerSeconds");
  let tempSeconds = parseInt(justSeconds.textContent);
  let justMinutes = document.getElementById("timerMinutes");
  let tempMinutes = parseInt(justMinutes.textContent);

  //now for Tomato part
  let tomatoSecondsLength = document.getElementById("tomatoSeconds");
  let tomatoMinutesLength = document.getElementById("tomatoMinutes");
  let anotherTemp;

  // console.log("more than 1 minute and less than or equal to 0 seconds");
  if (tempSeconds == 0 && tempMinutes > 0 && !switchZZ) {
    justSeconds.textContent = 0;
    tomatoSecondsLength.textContent = 0;
    // tempMinutes -= 1;
    anotherTemp = tempMinutes - 1;
    justMinutes.textContent = anotherTemp;
    tomatoMinutesLength.textContent = anotherTemp;
    switchZZ = true;
  }

  //end if timer is over
  //have to go at 1 seconds to prevent it going to -1 seconds for some reason
  if (tempSeconds == 1 && tempMinutes == 0 && !switchZZ) {
    clearInterval(stop);
    alert("timer is done");
    //re-enable start button
    timerStartButton.disabled = false;
  }

  if(switchZZ == true) {
    justSeconds.textContent = 59;
    tomatoSecondsLength.textContent = 59;
    switchZZ = false;
  }

  //tempSeconds is not 0
  else {
    anotherTemp = tempSeconds - 1;
    // justSeconds.textContent = tempSeconds -= 1;
    tomatoSecondsLength.textContent = anotherTemp;
    justSeconds.textContent = anotherTemp;
    console.log("seconds left is ", tempSeconds);
  }
}

// function test ()  {
//   console.log("test line");
//   return "Hi";
// }
//
// setInterval(test, 1000);
