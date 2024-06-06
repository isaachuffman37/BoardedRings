import { Reciept } from "./Receipt.mjs";
import { renderHeaderAndFooter } from "./utils.js";

renderHeaderAndFooter();


const thanksButton = document.querySelector(".buy-button");
const receiptElement = document.querySelector(".receipt-container");
const receipt = new Reciept(receiptElement, "ring-cart");
receipt.renderReceipt();
thanksButton.addEventListener('click', () => {
    window.location.href = '../thanks/thanks.html'; // Replace with your desired URL
});
