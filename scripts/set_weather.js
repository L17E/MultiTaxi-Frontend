const weather_icon = document.querySelector(".weather__icon");
function setWeatherIcon(url) {
  weather_icon.src = url;
}

const weather_temperature = document.querySelector(".weather__temperature");
function setWeatherTemperature(temperature) {
  weather_temperature.textContent = temperature + "° C";
}

const weather_type = document.querySelector(".weather__type");
function setWeatherType(type) {
  weather_type.textContent = type
}

function getCity() {
  if (navigator.geolocation) {
    return "City"; /* Backend */
  } else {
    return "Moscow";
  }
}

setWeatherIcon("content/temp/weather.png");
setWeatherTemperature("+4");
setWeatherType("Туманно");
