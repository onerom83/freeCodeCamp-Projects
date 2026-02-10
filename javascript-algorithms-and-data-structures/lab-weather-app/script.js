const getWeatherButton = document.getElementById("get-weather-btn");
const cityWeather = document.getElementById("city-weather");
const cityName = document.getElementById("location");
const weatherIcon = document.getElementById("weather-icon");
const mainTemperature = document.getElementById("main-temperature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const weatherMain = document.getElementById("weather-main");
const selectCity = document.getElementById("select-city");

getWeatherButton.addEventListener("click", () => {
  const citySel = selectCity.value;
  if (!citySel) return;
  cityWeather.removeAttribute("hidden");
  showWeather(citySel);
});

async function getWeather(city) {
  try {
    let response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    if (data.error) {
      console.log(data.error);
      return null;
    }
    return data;

  } catch (error) {
    console.log(error);
    return null;
  }
}

async function showWeather(city) {
  let weatherCity = await getWeather(city);
  if (!weatherCity) return alert ("Something went wrong, please try again later");
  cityName.textContent = weatherCity["name"];
  weatherIcon.src = weatherCity["weather"][0].icon;

  mainTemperature.textContent = `${!weatherCity["main"]["temp"] ? "N/A" : weatherCity["main"]["temp"]} ºC`;
  feelsLike.textContent = `Feels like: ${!weatherCity["main"]["feels_like"] ? "N/A" : weatherCity["main"]["feels_like"]} ºC`;
  humidity.textContent = `Humidity: ${!weatherCity["main"]["humidity"] ? "N/A" : weatherCity["main"]["humidity"]} %`;
  wind.textContent = `Wind: ${!weatherCity["wind"]["speed"] ? "N/A" : weatherCity["wind"]["speed"]} m/s`;
  windGust.textContent = `Wind Gust: ${!weatherCity["wind"]["gust"] ? "N/A" : weatherCity["wind"]["gust"]} m/s`;
  weatherMain.textContent = `${!weatherCity["weather"][0].main ? "N/A" : weatherCity["weather"][0].main}`;
} 