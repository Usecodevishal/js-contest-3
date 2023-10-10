
function getTimer(){
  let getSeconds = document.getElementById("custom-seconds").value || 0;
  let getMinutes = document.getElementById("custom-minutes").value || 0;
  let getHours = document.getElementById("custom-hours").value || 0;

  
    setTimer(getSeconds, getMinutes, getHours);
  
}

  


function setTimer(sec, min, hr) {
  // let sec = document.getElementById("custom-seconds").value || 0;
  // let min = document.getElementById("custom-minutes").value || 0;
  // let hr = document.getElementById("custom-hours").value || 0;
  // let timerText ;
  
  // console.log(hr,min,sec);
  if (min > 60 || min < 0 || sec > 60 || sec < 0) {
    document.getElementById("custom-seconds").value = "";
    document.getElementById("custom-minutes").value = "";
    return ;
  }
  if (hr < 0) {
    document.getElementById("custom-hours").value = "";
  }
  if (sec >= 0 && sec <= 60 && min >= 0 && hr >= 0) {
     setIntervalForTimer(sec, min, hr)
    
  }
  


  document.getElementById("custom-seconds").value = "";
  document.getElementById("custom-minutes").value = "";
  document.getElementById("custom-hours").value = "";
}


function setIntervalForTimer(s, m, h){
  let displayTimer = document.getElementById("display-timers");

  let timeBox = document.createElement("div");
  timeBox.style.width = "50%;"


  let timerText = `${h}: ${m} :  ${s}`;

  

  let S = setInterval(function () {
    //    let date = new Date();
    //    console.log(date.toLocaleTimeString());
    
    // displayTimer.innerText = `${h}: ${m} :  ${s}`;




     timerText = `${h}: ${m} :  ${s}`;

    timeBox.innerText = timerText;


    


    
    if (s == 0 && m == 0 && h == 0) {
      clearInterval(S);
      timeBox.innerText = "";
    }

    if (s <= 0 && m > 0 && h > 0) {
      m--;
      s = 60;
    }
    if (s <= 0 && m > 0 && h == 0) {
      m--;
      s = 60;
    }

    if (m < 0 && h > 0) {
      h--;
      m = 59;
    }
    if (h > 0 && m == 0 && s == 0) {
      h--;
      m = 59;
      s = 59;
    }
    s--;
    // console.log(s);
  }, 1000);

  displayTimer.append(timeBox);
}