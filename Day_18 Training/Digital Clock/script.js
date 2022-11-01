var hrs = document.getElementById("hr");
var mms = document.getElementById("mm");
var sss = document.getElementById("ss");
var ampm = document.getElementById("ampm");
function updateClock() {
  console.log();
  let h = new Date().getHours();
  console.log("h: " + h);
  let m = new Date().getMinutes();
  console.log("m: "+m);
  let s = new Date().getSeconds();
  console.log("s: "+s);
  if (h > 12) {
    ampm = "PM";
    h -= 12;
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  hrs.innerHTML = h;
  mms.innerHTML = m;
  sss.innerHTML = s;
  ampm.innerHTML = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
