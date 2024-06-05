export function makeColorString(ring){
    let ringColors = "";
    ring.colors.forEach((element, index) => {
        if(index != ring.colors.length - 1) {
            ringColors += element + "/";
        } else {
            ringColors += element;
        }
        
    });
    return ringColors;
}

export function createStringLiteralForRingCards(ring, pageName = ""){
    if (pageName != "home"){
        return `
        <img 
            src = "../images/${ring.imgSrc}"
            alt = "${ring.imgAlt}"
        />

        <p> ${makeColorString(ring)} </p>
        <p> ${ring.description}  </p> 
        <p> Price: $${ring.price} </p> 
        <button class = "add-to-cart" data-id = ${ring.id}>Add to Cart</button><br>
        `
    }
    return `
        <div class = "ring-card-div">
            <img 
                src = "./images/${ring.imgSrc}"
                alt = "${ring.imgAlt}"
            />

            <p> ${makeColorString(ring)} </p>
            <p> ${ring.description}  </p> 
            <p> Price: $${ring.price} </p> 
            <button class ="add-to-cart" data-id = ${ring.id}>Add to Cart</button>
        </div>
        `
    
}

export function createStringLiteralForCartRings(ring){
    return `
        <div class = "ring-container">
            <img 
                src = "../images/${ring.imgSrc}"
                alt = "${ring.imgAlt}"
            />

            <p> ${makeColorString(ring)} </p> 
            <p> Price: $${ring.price}  </p> 
        </div>
    `
}

export function getTopThreeRings(ringList){
    const topThreeRings = [];
    for (let ring of ringList) {
        if(topThreeRings.length < 3){
            topThreeRings.push(ring);
        } else {
            let minIndex = 0;
            for (let i = 1; i < 3; i++){
                if(topThreeRings[i].quantitySold < topThreeRings[minIndex].quantitySold ){
                    minIndex = i;
                }
            }

            if(ring.quantitySold > topThreeRings[minIndex]) {
                topThreeRings[minIndex] = ring;
            }
        }
    }
    return topThreeRings;
}

export function renderRingWithTemplate(pageName = "", ringTemplateFn, parentElement, ringList, position = "afterbegin", clear = false){
    parentElement.innerHTML = "";
    if(clear === true) parentElement.innerHtml = "";
    ringList.map((ring)=> {
        const ringCard = ringTemplateFn(ring, pageName);
        parentElement.insertAdjacentHTML(position, ringCard);
    })
}

export function sortByMostPopular(ringList) {
    const sortedList = ringList.sort((a, b) => a.quantitySold - b.quantitySold);
    return sortedList
}

export function sortByPriceHighToLow(ringList) {
    const sortedList = ringList.sort((a, b) => a.price - b.price);
    return sortedList
}

export function sortByPriceLowToHigh(ringList) {
    const sortedList = ringList.sort((a, b) => b.price - a.price);
    return sortedList
}

export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  // save data to local storage
export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function renderHeaderAndFooter(pageName = "") {
    let headerElement = document.querySelector(".dynamic-header");
    let footerElement = document.querySelector(".dynamic-footer");
    headerElement.innerHTML = headerContent(pageName);
    footerElement.innerHTML = footerContent(pageName);
}

function headerContent(pageName) {
    let iconImgSrc = "";
    let logoImgSrc = "";
    let homeRef = "";
    let cartRef = "";
    let ringsRef = "";
    if(pageName == "home"){
        iconImgSrc = "./images/shopping-cart.png";
        logoImgSrc = "./images/logo.jpeg";
        homeRef = "./index.html";
        cartRef = "./cart/index.html"
        ringsRef = "./rings/index.html"
    } else {
        iconImgSrc = "../images/shopping-cart.png";
        logoImgSrc = "../images/logo.jpeg";
        homeRef = "../index.html";
        cartRef = "../cart/index.html"
        ringsRef = "../rings/index.html"
    }
    return `
    <div class = "header-container"> 
        <a href= "${homeRef}"><img src = ${logoImgSrc} alt = "comapny logo"></img>
        <a href= "${ringsRef}" ><p>Our Rings</p></a>
        <a href= "#" ><p>Contact Us</p></a>
    </div>
    <a href= "${cartRef}"><img src = ${iconImgSrc} alt = "cart icon"></img></a>
    `
}

function footerContent() {
    return `
    <div class = "contact-info">
        <p>Email: boarded.rings@example.com</p>
        <p>Phone: (555)-555-1234 </p>
        <p>Instagram: @boardedRings</p>
    </div>

    <div class = "copyright">
    </div>
    `
}


export function addRingToCart(ring) {
    let userCartList = getLocalStorage("ring-cart");
    if (userCartList == null) {
        userCartList = [];
        userCartList.push(ring);
    } else {
        userCartList.push(ring);
    }

    setLocalStorage("ring-cart", userCartList);
}

export async function findRingById(id, rings) {
    return rings.find((item) => item.id === id);
}
