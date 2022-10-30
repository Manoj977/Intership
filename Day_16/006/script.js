var data = 0;
function assign() {
  document.getElementById("count").innerText = data;
}
function inc() {
  data = data + 1;
  assign();
}
function dec() {
  data = data - 1;
  assign();
}
