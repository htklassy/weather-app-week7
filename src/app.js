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
    return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
    console.log(response.data.main.temp);
    let tempeartureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    tempeartureElement.innerHTML = Math.round(response.data.main.temp);
    console.log(response.data.name);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt*1000);
}


let apiKey = "ce7559a40e1096d539e469e7e924e165";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);