function dice() {
  var diceNumber = Math.random() * 6 + 1;
  var final = Math.floor(diceNumber);
  return final;
}
let diceNvalue = (nValue) =>
  (document.getElementById("number").innerHTML = nValue);

var roll = document.getElementById("roll");
roll.onclick = () => {
  var nValue = dice();
  diceNvalue(nValue);
};
