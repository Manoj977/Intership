var hrs = document.getElementById("hours");
var mms = document.getElementById("minutes");
var sss = document.getElementById("seconds");
var mss = document.getElementById("milliseconds");
var meridiem = document.getElementById("meridiem");
meridiem.innerHTML = "AM";
var currenttime = new Date();

let currentTime = () => {
  var hour = currenttime.getHours();
  var minute = currenttime.getMinutes();
  var second = new Date().getSeconds();
  if (hour >= 12) {
    meridiem.innerHTML = "PM";
  }
  if (hour > 12) {
    hour -= 12;
  }
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  hrs.innerHTML = hour;
  mms.innerHTML = minute;
  sss.innerHTML = second;
  setTimeout(() => {
    currentTime(), 1000;
  });
};
function millisec() {
  var milliseconds = new Date().getMilliseconds();
  mss.innerHTML = milliseconds;
  setTimeout(() => {
    millisec(), 1;
  });
  console.log(mss);
}
currentTime();
millisec();
