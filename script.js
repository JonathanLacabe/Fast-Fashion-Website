let cart = JSON.parse(localStorage.getItem('cart')) || [];

window.onload = function() {
  if (!cart) { }
}

/**
 * {
 *  Name: 
 *  Price:
 *  Quantity: 
 * }
 *
 *
 *
 * 
 */
function setCart(toAdd) {
  cart.push(toAdd);
  updateCart();
}

function updateCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(name, price, article, imagePath) {
  let found = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i][0] === name && cart[i][2] === article) {
      cart[i][4]++;
      updateCart();
      found = true;
      break;
    }
  }
  if (!found) {
    setCart([name, price, article, imagePath, 1]);
  }
  //console.log(`${name} ${article} added to cart with price $${price}.`);
  console.log("Current cart:");
  for (let i = 0; i < cart.length; i++) {
    console.log(`${cart[i][0]} ${cart[i][1]} ${cart[i][2]} ${cart[i][3]} ${cart[i][4]}`);
  }
  console.log("");
}

if (document.URL.includes("shop")) {
  window.addEventListener('DOMContentLoaded',
    function() {
      document.getElementById("0").addEventListener("click", () => {
        addToCart("Wool", 6.13, "cap", "./assets/products/hats/woolhat.png");
      });
      document.getElementById("1").addEventListener("click", () => {
        addToCart("Cotton", 3.87, "cap", "./assets/products/hats/cottonhat.png");
      });
      document.getElementById("2").addEventListener("click", () => {
        addToCart("Polyester", 3.01, "cap", "./assets/products/hats/polyesterhat.png");
      });
      document.getElementById("3").addEventListener("click", () => {
        addToCart("Nylon", 3.94, "cap", "./assets/products/hats/nylonhat.png");
      });
      document.getElementById("4").addEventListener("click", () => {
        addToCart("Rayon", 4.23, "cap", "./assets/products/hats/rayonhat.png");
      });
      document.getElementById("5").addEventListener("click", () => {
        addToCart("Fur", 19.71, "cap", "./assets/products/hats/furhat.png");
      });
      document.getElementById("6").addEventListener("click", () => {
        addToCart("Silk", 25.22, "cap", "./assets/products/hats/silkhat.png");
      });
      document.getElementById("7").addEventListener("click", () => {
        addToCart("Leather", 30.35, "cap", "./assets/products/hats/leatherhat.png");
      });
      document.getElementById("8").addEventListener("click", () => {
        addToCart("Wool", 12.13, "shirt", "./assets/products/shirts/wool.png");
      });
      document.getElementById("9").addEventListener("click", () => {
        addToCart("Cotton", 5.87, "shirt", "./assets/products/shirts/cotton.png");
      });
      document.getElementById("10").addEventListener("click", () => {
        addToCart("Polyester", 6.01, "shirt", "./assets/products/shirts/polyester.png");
      });
      document.getElementById("11").addEventListener("click", () => {
        addToCart("Nylon", 5.94, "shirt", "./assets/products/shirts/nylon.png");
      });
      document.getElementById("12").addEventListener("click", () => {
        addToCart("Rayon", 8.23, "shirt", "./assets/products/shirts/rayon.png");
      });
      document.getElementById("13").addEventListener("click", () => {
        addToCart("Silk", 55.22, "shirt", "./assets/products/shirts/silk.png");
      });
      document.getElementById("14").addEventListener("click", () => {
        addToCart("Fur", 39.71, "coat", "./assets/products/coats/fur.png");
      });
      document.getElementById("15").addEventListener("click", () => {
        addToCart("Leather", 80.35, "coat", "./assets/products/coats/leather.png");
      });
    });
}

if (document.URL.includes("cart")) {
  window.addEventListener('DOMContentLoaded', () => {
    if (cart.length === 0) {
      console.log("Your cart is empty.");
    } else {
      console.log(`Cart: ${cart.join(', ')}`);
    }
  });
}