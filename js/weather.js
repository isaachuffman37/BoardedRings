const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('.weather-icon');
const mainIconDiv = document.querySelector('.main-icon-div');
const weatherTitle = document.querySelector('.weather-title');
const weatherContainer = document.querySelector('.weather-container');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.47&lon=-110.76&units=imperial&appid=c7325e2828cc4975f54dc646010a14b2';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    let mainIcon = document.createElement('img');
    mainIcon.setAttribute('src', iconsrc);
    mainIcon.setAttribute('alt', desc);
    mainIcon.classList.add("weather-icon");
    mainIconDiv.appendChild(mainIcon);

    if( data.main.temp < 60.0){
        weatherTitle.textContent = "A little too cold to skate right now..."
        weatherContainer.classList.add("section-blue-animation")
    } else {
        weatherTitle.textContent = "Perfect temperature to skate now!"
        weatherContainer.classList.add("section-red-animation")
    }
}

apiFetch();