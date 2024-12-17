var hr = 0;
var Min = 0;
var Sec = 0;
var Count = 0;

var timer = false;

function start() {
  timer = true;
  stopwatch();
}

function stop() {
  timer = false;
}

function reset() {
  timer = false;
  var hr = 0;
  var Min = 0;
  var Sec = 0;
  var Count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("Min").innerHTML = "00";
  document.getElementById("Sec").innerHTML = "00";
  document.getElementById("Count").innerHTML = "00";
}

function stopwatch() {
  if (timer == true) {
    Count = Count + 1;

    if (Count == 100) {
      Sec = Sec + 1;
      Count = 0;
    }

    if (Sec == 60) {
      Min = Min + 1;
      Sec = 0;
    }
    if (Min == 60) {
      hr = hr + 1;
      Min = 0;
      Sec = 0;
    }
    var hrString = hr;
var MinString = Min;
var SecString = Sec;
var CountString = Count;

if(hr<10)
    {
    hrString = "0" + hrString;
}

if(Min<10)
    {
    MinString = "0" + MinString;
}

if(Sec<10)
    {
    SecString = "0" + SecString;
}

if(Count<10)
    {
    CountString = "0" + CountString;
}


    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("Min").innerHTML = MinString;
    document.getElementById("Sec").innerHTML = SecString;
    document.getElementById("Count").innerHTML = CountString;

    setTimeout("stopwatch()", 10); //stop the millisecond
  }
}
