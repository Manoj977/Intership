var store = Array();
var index = 0;
values = () => {
  store[index] = document.getElementById("Text_area").value;
  alert("Element: " + store[index] + " Added at index " + index);
  index++;
  clear();
};

clear = () => (document.getElementById("Text_area").value = "");

calc = () => {
  var display = "";
  for (var i = 0; i < store.length; i++) {
    display += "Element " + i + " = " + store[i] + "<br/>";
  }
  return display;
};
show = () => (document.getElementById("Showresult").innerHTML = calc());
