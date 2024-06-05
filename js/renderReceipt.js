import { Reciept } from "./Receipt.mjs";
import { renderHeaderAndFooter } from "./utils.js";

renderHeaderAndFooter();

const receiptElement = document.querySelector(".receipt-container");
const receipt = new Reciept(receiptElement, "ring-cart");
receipt.renderReceipt();
