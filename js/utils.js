function makeColorString(ring){
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
        `
    }
    return `
        <img 
            src = "./images/${ring.imgSrc}"
            alt = "${ring.imgAlt}"
        />

        <p> ${makeColorString(ring)} </p>
        <p> ${ring.description}  </p> 
        <p> Price: $${ring.price} </p> 
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
    if(pageName == "home"){
        iconImgSrc = "./images/shopping-cart.png"
        logoImgSrc = "./images/logo.jpeg"
    } else {
        iconImgSrc = "../images/shopping-cart.png"
        logoImgSrc = "../images/logo.jpeg"
    }
    return `
    <div class = "header-container"> 
        <img src = ${logoImgSrc} alt = "comapny logo"></img>
        <a href = "../rings/index.html" ><p>Our Rings</p></a>
        <a href = "#" ><p>Contact Us</p></a>
    </div>
    <img src = ${iconImgSrc} alt = "cart icon"> </img>
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
