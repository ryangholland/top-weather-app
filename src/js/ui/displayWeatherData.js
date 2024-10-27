import getNextHours from "../utils/getNextHours";
import convertTo12Hour from "../utils/convertTo12Hour";

function displayWeatherData(weatherData) {
  // Basic Today Info
  const city = document.getElementById("city");
  const conditions = document.getElementById("conditions");
  const currentTemp = document.getElementById("current-temp");
  const lowTemp = document.getElementById("low-temp");
  const highTemp = document.getElementById("high-temp");
  const description = document.getElementById("description");

  city.textContent = weatherData.address;
  conditions.textContent = weatherData.currentConditions.conditions;
  currentTemp.textContent = Math.round(weatherData.currentConditions.temp);
  lowTemp.textContent = Math.round(weatherData.days[0].tempmin);
  highTemp.textContent = Math.round(weatherData.days[0].tempmax);
  description.textContent = weatherData.description;

  // Next 5 Hours
  const currentHour = new Date().getHours();
  const nextHours = getNextHours(currentHour);
  const hourOne = document.getElementById("hour-1");
  const hourTwo = document.getElementById("hour-2");
  const hourThree = document.getElementById("hour-3");
  const hourFour = document.getElementById("hour-4");
  const hourFive = document.getElementById("hour-5");
  const nowTemp = document.getElementById("now-temp");
  const hourOneTemp = document.getElementById("hour-1-temp");
  const hourTwoTemp = document.getElementById("hour-2-temp");
  const hourThreeTemp = document.getElementById("hour-3-temp");
  const hourFourTemp = document.getElementById("hour-4-temp");
  const hourFiveTemp = document.getElementById("hour-5-temp");

  hourOne.textContent = nextHours[0];
  hourTwo.textContent = nextHours[1];
  hourThree.textContent = nextHours[2];
  hourFour.textContent = nextHours[3];
  hourFive.textContent = nextHours[4];
  nowTemp.textContent = Math.round(weatherData.currentConditions.temp);
  hourOneTemp.textContent = Math.round(weatherData.days[0].hours[currentHour + 1].temp);
  hourTwoTemp.textContent = Math.round(weatherData.days[0].hours[currentHour + 2].temp);
  hourThreeTemp.textContent = Math.round(weatherData.days[0].hours[currentHour + 3].temp);
  hourFourTemp.textContent = Math.round(weatherData.days[0].hours[currentHour + 4].temp);
  hourFiveTemp.textContent = Math.round(weatherData.days[0].hours[currentHour + 5].temp);

  // Detailed Current Info
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");
  const rainChance = document.getElementById("rain-chance");
  const humidity = document.getElementById("humidity");
  const wind = document.getElementById("wind");
  const feelsLike = document.getElementById("feels-like");
  const precipitation = document.getElementById("precipitation");
  const pressure = document.getElementById("pressure");
  const visibility = document.getElementById("visibility");
  const uvIndex = document.getElementById("uv-index");

  sunrise.textContent = convertTo12Hour(weatherData.days[0].sunrise);
  sunset.textContent = convertTo12Hour(weatherData.days[0].sunset);
  rainChance.textContent = Math.round(weatherData.currentConditions.precipprob);
  humidity.textContent = weatherData.currentConditions.humidity;
  wind.textContent = weatherData.currentConditions.windspeed;
  feelsLike.textContent = Math.round(weatherData.currentConditions.feelslike);
  precipitation.textContent = weatherData.currentConditions.precip;
  pressure.textContent = weatherData.currentConditions.pressure;
  visibility.textContent = weatherData.currentConditions.visibility;
  uvIndex.textContent = weatherData.currentConditions.uvindex;
}

export default displayWeatherData;
