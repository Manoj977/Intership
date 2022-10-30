var arr = [2, 5, 7];
document.getElementById("given_array").innerHTML =arr;
var rev = [];
for (var i = arr.length - 1; i >= 0; i--) {
  rev.push(arr[i]);
}
document.getElementById("reversed_array").innerHTML =rev;