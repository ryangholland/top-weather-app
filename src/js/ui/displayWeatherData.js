/*
    City: weatherData.address
    Conditions: weatherData.currentConditions.conditions
    Current Temp: weatherData.currentConditions.temp
    Low: weatherData.days.0.tempmin
    High: weatherData.days.0.tempmax


*/

import getNextHours from "../utils/getNextHours";

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
  currentTemp.textContent = weatherData.currentConditions.temp;
  lowTemp.textContent = weatherData.days[0].tempmin;
  highTemp.textContent = weatherData.days[0].tempmax;
  description.textContent = weatherData.description;

  // Next 5 Hours
  // Refactor this code w/ data IDs and forEach
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
  nowTemp.textContent = weatherData.currentConditions.temp;
  hourOneTemp.textContent = weatherData.days[0].hours[currentHour + 1].temp;
  hourTwoTemp.textContent = weatherData.days[0].hours[currentHour + 2].temp;
  hourThreeTemp.textContent = weatherData.days[0].hours[currentHour + 3].temp;
  hourFourTemp.textContent = weatherData.days[0].hours[currentHour + 4].temp;
  hourFiveTemp.textContent = weatherData.days[0].hours[currentHour + 5].temp;
}

export default displayWeatherData;
