var users = document.getElementById("count").innerHTML;
var apifetch = (ev) => {
  ev.preventDefault();
  var name = document.getElementById("text").value;
  var email = document.getElementById("email").value;
  var feedback = document.getElementById("feedback").value;
  console.log(name, email, feedback, users);
  if (name != "" && email != "" && feedback != "") {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        feedback: feedback,
        users: ++users,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("values:" + JSON.stringify(json));
      });

    document.getElementById("count").innerHTML = users;
    alert("Registered SuccessFully");
    function clearfield() {
      document.getElementById("text").value = "";
      document.getElementById("email").value = "";
      document.getElementById("feedback").value = "";
    }
    clearfield();
  } else {
    alert("Enter the Field");
  }
};
