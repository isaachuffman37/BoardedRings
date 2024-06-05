import { LocalData } from "./LocalData.mjs";
import { createStringLiteralForRingCards, getTopThreeRings, renderHeaderAndFooter, addRingToCart, findRingById, renderRingWithTemplate } from "./utils.js";

//createStringLiteralForRingCards()
const ringDataObject = new LocalData("rings.json", "home");
const ringData = await ringDataObject.getData();
const ringList = ringData.rings;
const topRingsElement = document.querySelector(".top-rings");
const topThreeRings = getTopThreeRings(ringList);
console.log(topThreeRings)
console.log(ringData.rings[0].quantitySold);
renderHeaderAndFooter("home");
renderRingWithTemplate("home", createStringLiteralForRingCards, topRingsElement, topThreeRings);
let buttons = document.querySelectorAll(".add-to-cart")

for(let button of buttons){
    button.addEventListener("click", addRingToLocalStorageHandler)
}

async function addRingToLocalStorageHandler(e) {
    console.log(e);
    const ring = await findRingById(e.target.dataset.id, ringList);
    console.log(ring);
    addRingToCart(ring);
}

