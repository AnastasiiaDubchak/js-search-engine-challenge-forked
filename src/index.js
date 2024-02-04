function currentTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let current = `${temperature}`;
  let showTemperature = document.querySelector(".current-temperature");
  let cityElement = document.querySelector("#current-city");
  let descriptionElement = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind-speed");


  cityElement.innerHTML = response.data.city;
  showTemperature.innerHTML = current;
  descriptionElement.innerHTML = response.data.condition.description;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
}

//function refreshWeather(response) {
  //let temperatureElement = document.querySelector("#temperature");
 // let temperature = response.data.temperature.current;
  //let cityElement = document.querySelector("#city");
 // let descriptionElement = document.querySelector("#description");
  //let humidityElement = document.querySelector("#humidity");
  //let windSpeedElement = document.querySelector("#wind-speed");
  //let timeElement = document.querySelector("#time");
  //let date = new Date(response.data.time * 1000);
  //let iconElement = document.querySelector("#icon");

  //cityElement.innerHTML = response.data.city;
  //timeElement.innerHTML = formatDate(date);
  //descriptionElement.innerHTML = response.data.condition.description;
  //humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  //windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  //temperatureElement.innerHTML = Math.round(temperature);
  //iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;

  //getForecast(response.data.city);
//}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;

  let city = searchInputElement.value;
  let key = "d5oftba2b8dd71c9f0845c003da63bc7";
  let apiKey = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
  axios.get(apiKey).then(currentTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
