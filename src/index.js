function formatDate(date) {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = days[now.getDay()];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let month = months[now.getMonth()];
  let numberDate = now.getDate();

  let timeToday = document.querySelector(`#timeToday`);

  timeToday.innerHTML = ` ${day}, ${month} ${numberDate}, ${hours}:${minutes}`;
}
formatDate();

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#cityInput");
  console.log(searchInput);
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${searchInput.value}`;
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#cityInput");
  let searchCity = `${cityInput.value}`;
  let apiKey = "470b2457f49a129b497496a403990894";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(retrieveWeatherData);
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", searchCity);

function retrieveWeatherData(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  console.log(Math.round(response.data.main.temp));
  let searchCityTemperature = document.querySelector("#temperature");
  searchCityTemperature.innerHTML = temperature;

  let humidity = response.data.main.humidity;
  console.log(response.data.main.humidity);
  let retrieveHumidity = document.querySelector("#humidity");
  retrieveHumidity.innerHTML = humidity;

  let windSpeed = Math.round(response.data.wind.speed);
  console.log(Math.round(response.data.wind.speed));
  let retrieveWindSpeed = document.querySelector("#windspeed");
  retrieveWindSpeed.innerHTML = windSpeed;
}
