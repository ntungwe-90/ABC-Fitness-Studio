// Subscribe button alert
function subscribeMessage() {
  alert("Thank you for subscribing.");
}

// ---------- ADD TO CART (sessionStorage) ----------
function addToCart(itemName) {
  let cart = sessionStorage.getItem("cart");

  if (cart == null) {
    cart = [];
  } else {
    cart = JSON.parse(cart);
  }

  cart.push(itemName);

  sessionStorage.setItem("cart", JSON.stringify(cart));

  alert("Item added to the cart.");
}

// ---------- VIEW CART ----------
function viewCart() {
  let cart = JSON.parse(sessionStorage.getItem("cart"));

  if (!cart || cart.length === 0) {
    alert("Your cart is empty.");
  } else {
    alert("Items in cart:\n" + cart.join("\n"));
  }
}

// ---------- CLEAR CART ----------
function clearCart() {
  sessionStorage.clear();
  alert("Cart cleared.");
}

// ---------- PROCESS ORDER ----------
function processOrder() {
  sessionStorage.clear();
  alert("Thank you for your order.");
}

// ---------- SAVE FORM DATA (localStorage) ----------
function submitMessage() {
  let name = document.querySelector('input[placeholder="Your Name"]').value;
  let email = document.querySelector('input[placeholder="Your Email"]').value;
  let message = document.querySelector("textarea").value;

  localStorage.setItem("customerName", name);
  localStorage.setItem("customerEmail", email);
  localStorage.setItem("customerMessage", message);

  alert("Thank you for your message.");
}
