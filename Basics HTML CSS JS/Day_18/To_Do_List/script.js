function mylist() {
  var div = document.createElement("div2");
  div.className = "storageData";
  var mytxt = document.getElementById("content").value;
  var text = document.createTextNode(mytxt);
  div.appendChild(text);
  if (mytxt != "") {
    document.getElementById("Shown").appendChild(div);
  } else {
    alert("Field is Empty");
  }
  var list = document.getElementsByTagName("div2");
  for (var i = 0; i < list.length; i++) {
    var span = document.createElement("span");
    span.className = "close";
    var close = document.createTextNode("X");
    span.appendChild(close);
    list[i].appendChild(span);
  }
  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var d = this.parentElement;
      d.style.display = "none";
    };
  }
  clears();
}

clears = () => {
  var message = document.getElementById("content");
  message.value = "";
};
