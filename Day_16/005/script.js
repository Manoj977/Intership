function BillingForm() {
  var productPrice = document.form.Product.value;
  var productQuantity = document.form.Quantity.value;
  var adding = productPrice * productQuantity;
  var total = (adding / 100) * 18 + adding;
  document.getElementById("Total").innerHTML = total;
}

function resete() {
  document.getElementById("Total").innerHTML = "";
}
