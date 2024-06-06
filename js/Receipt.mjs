import { makeColorString, getLocalStorage } from "./utils.js";

function createReceiptTemplate(ringList) {
return `
    <h2 class = "receipt-title">Receipt</h2>
    ${renderRingListReceiptHTML(ringList)}
    <h3 class = "total-title"> Total Price: $${calculateTotalPrice(ringList)}</h3>
`
}

function renderRingListReceiptHTML(ringList) {
    console.log(ringList)
    let ringHtml = ``;
    for(let ring of ringList) {
        ringHtml += `
        <div class = "ring-receipt-container">
            <p>${makeColorString(ring)}</p>
            <p>$${ring.price}</p>
        </div>
        `
    }
    return ringHtml
}

function calculateTotalPrice(ringList) {
    let totalPrice = 0.00;
    for(let ring of ringList){
        totalPrice += ring.price;
    }
    return totalPrice
}

export class Reciept {
    constructor(parentElement, key){
        this.parentElement = parentElement;
        this.key = key;
        this.getRings();
    }

    getRings() {
        console.log(this.key)
        this.rings = getLocalStorage(this.key)
        console.log(this.rings)
    }

    renderReceipt() {
        console.log(this.rings)
        this.parentElement.innerHTML = createReceiptTemplate(this.rings);
    }
}