function formatDate(timestamp) {
// calculate the date
let date = new Date(timestamp);
let hours = date.getHours();
    if (hours < 10){
        hours = `0${hours}`;
    }
let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[date.getDay()];
    if (hours < 12){
        return `${day} ${hours}:${minutes} AM`;
    } else {
        return `${day} ${hours}:${minutes} PM`;
    }
    
}

function displayTemperature(response) {
    let tempeartureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");

    fahrenheitTemperature = response.data.main.temp;

    tempeartureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt*1000);
    iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute(
        "alt", 
        response.data.weather[0].description);
}
function search(city) {
let apiKey = "ce7559a40e1096d539e469e7e924e165";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
}

function displayCelciusTemp(event) {
    event.preventDefault();
    let celciusTemp = (fahrenheitTemperature - 32) * 5/9;
    fahrenheitLink.classList.remove("active");
    celciusLink.classList.add("active");
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celciusTemp);
}

function displayFahrenheitTemp(event) {
    event.preventDefault();
    fahrenheitLink.classList.add("active");
    celciusLink.classList.remove("active");
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

let fahrenheitTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", displayCelciusTemp);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

search("Denver");