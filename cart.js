window.addEventListener('load', function() {
  viewCart();
});

function viewCart() {
  if (cart.length === 0) {
    console.log("Your cart is empty.");
  } else {
    console.log(`Cart: ${cart.join(', ')}`);
  }
}