import { UserCart } from "./UserCart.mjs";
import { renderHeaderAndFooter, clearCart } from "./utils.js";

renderHeaderAndFooter();
const cartRingsElement = document.querySelector(".cart-items");
const clearCartButton = document.querySelector(".clear-button");
clearCartButton.addEventListener("click", clearCart)

// console.log("hello")
let userCart = new UserCart("ring-cart", cartRingsElement)
userCart.renderCartRings();

console.log(userCart.rings)

