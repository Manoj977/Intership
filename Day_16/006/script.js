var data = 0;
function assign() {
  document.getElementById("count").innerText = data;
}
function inc() {
  data += 1;
  assign();
}
function dec() {
  data -= 1;
  assign();
}
