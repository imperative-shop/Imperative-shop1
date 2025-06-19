let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

function showCart() {
  const cartItems = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");
  let total = 0;
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    cartItems.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
    total += item.price;
  });

  totalEl.innerText = total;
}

function simulatePayment() {
  alert("Payment successful! Thank you!");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}
