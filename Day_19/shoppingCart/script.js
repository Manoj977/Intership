function ready() {
  /***Add to Cart**/
  var cart = document.getElementsByClassName("cart");
  for (var i = 0; i < cart.length; i++) {
    var addToCart = cart[i];
    console.log("addToCart.innerText: " + addToCart.innerText);
    addToCart.addEventListener("click", addToCartClicked);
  }
  /***No of Quantity***/
  var quantityInputs = document.getElementsByClassName("cartQuantityInput");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  /**Remove Cart Item***/
  var removeCartItemButtons = document.getElementsByClassName("button");
  console.log("removeCartItemButtons: " + removeCartItemButtons);
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }
}
/***Remove from Cart**/
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}
/****Changes in Quantity*****/
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

/***Add to Cart (return func)***/

function addToCartClicked(event) {
  var button = event.target;
  console.log("button: " + button);
  var shopItem = button.parentElement.parentElement;
  console.log("shopItem: " + shopItem);
  var title = shopItem.getElementsByClassName("title")[0].innerText;
  var price = shopItem.getElementsByClassName("price")[0].innerText;
  var imgSrc = shopItem.getElementsByClassName("imgSrc")[0].src;
  addItemToCart(title, price, imgSrc);
  console.log(title, price, imgSrc);
  updateCartTotal();
}

/***Add to Cart (arg pass)***/

function addItemToCart(title, price, imgSrc) {
      var cartRow = document.createElement("div");
      console.log("cartRow: " + cartRow);
      cartRow.classList.add("cartRow");
      console.log("cartRow New Class: " + cartRow.classList.add("cartRow"));
      var cartItems = document.getElementsByClassName("cartContent")[0];
      console.log("cartItems: " + cartItems);
      var cartItemNames = cartItems.getElementsByClassName("cartTitle");
      for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
          alert("Item was already in cart");
          return;
        }
      }
      /***Div Creation***/
      var cartRowContents = `
                  <div class="one_1">
                    <div class="cartImage">
                      <img class="cartImageSrc" src="${imgSrc}" alt="image" />
                    </div>
                    <div class="cartDesc">
                      <p class="cartTitle">${title}</p>
                    </div>
                </div>
                <div class="two_1">
                  <p class="cartPrice"> ${price}</p>
                </div>
                <div class="three_1">
                  <input
                    class="cartQuantityInput"
                    type="number"
                    id="quantiy"
                    value="1"
                  />
                  <button class="button" type="button">Remove</button>
                  </div>`;
      cartRow.innerHTML = cartRowContents;
      cartItems.append(cartRow);
      cartRow
        .getElementsByClassName("button")[0]
        .addEventListener("click", removeCartItem);
      cartRow
        .getElementsByClassName("cartQuantityInput")[0]
        .addEventListener("change", quantityChanged);
      updateCartTotal();
}
/****Update Cart value*****/
function updateCartTotal() {
  var cartItemcontainer = document.getElementsByClassName("cartContent")[0];
  var cartRows = cartItemcontainer.getElementsByClassName("cartRow");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cartPrice")[0];
    console.log("price: " + priceElement.innerText);
    var quantityElement =
      cartRow.getElementsByClassName("cartQuantityInput")[0];
    var price = parseFloat(priceElement.innerText.replace("₹", ""));
    console.log("tprice: " + price);
    var quantity = quantityElement.value;
    total += price * quantity;
  }
  total = Math.round(total);
  document.getElementsByClassName("totalPrice")[0].innerText = "₹ " + total;
}

ready();
