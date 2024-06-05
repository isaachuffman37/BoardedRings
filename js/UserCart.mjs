import { getLocalStorage, createStringLiteralForCartRings, renderRingWithTemplate,  } from "./utils.js";
// function cartRingTemplate(ring) {
//     return `
//     <div>
//         <img 
//             src= "
//     </div>
//     `
// }


export class UserCart {
    constructor(key, parentElement) {
        this.key = key;
        this.parentElement = parentElement;
        this.getRings();
    }

    getRings() {
        this.rings = getLocalStorage(this.key)
    }

    empty() {
        this.parentElement.innerHTML = '<h3> No rings added to the cart at this time. </h3>';
    }

    renderCartRings() {
        if (this.rings == null || this.rings == []){
            this.empty();
        } else{
            renderRingWithTemplate("",createStringLiteralForCartRings, this.parentElement, this.rings);
        }   
    }
}