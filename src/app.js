function displayTemperature(response) {
    console.log(response.data.main.temp);
    let tempeartureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    tempeartureElement.innerHTML = Math.round(response.data.main.temp);
    console.log(response.data.name);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
}


let apiKey = "ce7559a40e1096d539e469e7e924e165";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);