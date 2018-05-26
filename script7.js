//enable sound?

document.getElementById("breakTimePlus").addEventListener("click",addOneMinuteBreak);
document.getElementById("breakTimeMinus").addEventListener("click",subtractOneMinuteBreak);

document.getElementById("minutesPlus").addEventListener("click",addOneMinuteTimer);
document.getElementById("minutesMinus").addEventListener("click",subtrackOneMinuteTimer);

document.getElementById("secondsPlus").addEventListener("click",addOneSecondTimer);
document.getElementById("secondsMinus").addEventListener("click",subtrackOneSecondTimer);


// src: ['sound.mp3']

var sound = new Howl({
  src: ['bird.wav']
});

sound.play();




function addOneMinuteBreak() {
  var breakTimeLength = document.getElementById("breakTimeLength");
  var temp = parseInt(breakTimeLength.textContent);
  breakTimeLength.textContent = temp += 1;
}

function subtractOneMinuteBreak() {
  var breakTimeLength = document.getElementById("breakTimeLength");
  var temp = parseInt(breakTimeLength.textContent);
  if (temp == 0) {
    alert("cant go less than 0");
  }
  else {
    breakTimeLength.textContent = temp -= 1;
  }
}

function addOneMinuteTimer() {
  let timerMinutesLength = document.getElementById("timerMinutes");
  let temp2 = parseInt(timerMinutesLength.textContent);
  timerMinutesLength.textContent = temp2 += 1;
}

function subtrackOneMinuteTimer() {
  let timerMinutesLength = document.getElementById("timerMinutes");
  let temp2 = parseInt(timerMinutesLength.textContent);

    if (temp2 == 0) {
      alert("cant go less than 0");
    }
    else {
      timerMinutesLength.textContent = temp2 -= 1;
    }
}

function addOneSecondTimer() {
  let timerSecondsLength = document.getElementById("timerSeconds");
  let temp2 = parseInt(timerSecondsLength.textContent);
  //don't want it to go above 59. Work on that case later. It will work for 58 to 59.
  if(temp2 < 59) {
    timerSecondsLength.textContent = temp2 += 1;
  }
}

function subtrackOneSecondTimer() {
  let timerSecondsLength = document.getElementById("timerSeconds");
  let temp2 = parseInt(timerSecondsLength.textContent);

  if (temp2 == 0) {
    alert("cant go less than 0");
  }
  else {
  timerSecondsLength.textContent = temp2 -= 1;
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
  let justSeconds = document.getElementById("timerSeconds");
  let tempSeconds = parseInt(justSeconds.textContent);
  let justMinutes = document.getElementById("timerMinutes");
  let tempMinutes = parseInt(justMinutes.textContent);

  // console.log("more than 1 minute and less than or equal to 0 seconds");
  if (tempSeconds == 0 && tempMinutes > 0 && !switchZZ) {
    justSeconds.textContent = 0;
    tempMinutes -= 1;
    justMinutes.textContent = tempMinutes;
    switchZZ = true;
  }

  //end if timer is over
  //have to go at 1 seconds to prevent it going to -1 seconds for some reason
  if (tempSeconds == 1 && tempMinutes == 0 && !switchZZ) {
    clearInterval(stop);
    alert("timer is done");
  }

  if(switchZZ == true) {
    justSeconds.textContent = 59;
    switchZZ = false;
  }

  //tempSeconds is not 0
  else {
    justSeconds.textContent = tempSeconds -= 1;
    console.log("seconds left is ", tempSeconds);
  }

}

document.getElementById("startButton").addEventListener("click",everySecond);



// function test ()  {
//   console.log("test line");
//   return "Hi";
// }
//
// setInterval(test, 1000);
