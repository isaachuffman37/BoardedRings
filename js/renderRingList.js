import { LocalData } from "./LocalData.mjs";
import { createStringLiteralForRingCards, getTopThreeRings, renderHeaderAndFooter, renderRingWithTemplate } from "./utils.js";

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

