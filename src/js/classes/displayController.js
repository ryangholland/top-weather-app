import getNextHours from "../utils/getNextHours";
import convertTo12Hour from "../utils/convertTo12Hour";
import getNextDays from "../utils/getNextDays";
import formatLocation from "../utils/formatLocation";
import WeatherIcon from "./weatherIcon";
import fahrenheitToCelsius from "../utils/fahrenheitToCelsius";

class DisplayController {
  render(weatherData, scale) {
    const weatherContentDiv = document.getElementById("weather-content");
    weatherContentDiv.classList.remove("d-none");

    const city = document.getElementById("city");
    const conditions = document.getElementById("conditions");
    const currentTemp = document.getElementById("current-temp");
    const lowTemp = document.getElementById("low-temp");
    const highTemp = document.getElementById("high-temp");
    const description = document.getElementById("description");

    city.textContent = formatLocation(weatherData.resolvedAddress);
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
    hourOneTemp.textContent = Math.round(
      weatherData.days[0].hours[currentHour + 1].temp
    );
    hourTwoTemp.textContent = Math.round(
      weatherData.days[0].hours[currentHour + 2].temp
    );
    hourThreeTemp.textContent = Math.round(
      weatherData.days[0].hours[currentHour + 3].temp
    );
    hourFourTemp.textContent = Math.round(
      weatherData.days[0].hours[currentHour + 4].temp
    );
    hourFiveTemp.textContent = Math.round(
      weatherData.days[0].hours[currentHour + 5].temp
    );

    const nextHoursConditions = document.querySelectorAll(
      "[data-conditions-hour]"
    );
    nextHoursConditions.forEach((hour) => {
      const hourNumber = hour.getAttribute("data-conditions-hour");
      const conditions =
        weatherData.days[0].hours[Number(currentHour) + Number(hourNumber)]
          .conditions;
      hour.src = WeatherIcon.getIcon(conditions);
    });

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
    rainChance.textContent = Math.round(
      weatherData.currentConditions.precipprob
    );
    humidity.textContent = weatherData.currentConditions.humidity;
    wind.textContent = weatherData.currentConditions.windspeed;
    feelsLike.textContent = Math.round(weatherData.currentConditions.feelslike);
    precipitation.textContent = weatherData.currentConditions.precip;
    pressure.textContent = weatherData.currentConditions.pressure;
    visibility.textContent = weatherData.currentConditions.visibility;
    uvIndex.textContent = weatherData.currentConditions.uvindex;

    // 7-Day Forecast
    const nextDays = getNextDays();
    const dayElements = document.querySelectorAll("[data-day]");
    dayElements.forEach((element) => {
      const dayNumber = element.getAttribute("data-day");
      element.textContent = nextDays[dayNumber];
    });
    const rainElements = document.querySelectorAll("[data-rain]");
    rainElements.forEach((element) => {
      const dayNumber = element.getAttribute("data-rain");
      element.textContent = `${Math.round(
        weatherData.days[dayNumber].precipprob
      )}%`;
    });
    const lowElements = document.querySelectorAll("[data-low]");
    lowElements.forEach((element) => {
      const dayNumber = element.getAttribute("data-low");
      element.textContent = Math.round(weatherData.days[dayNumber].tempmin);
    });
    const highElements = document.querySelectorAll("[data-high]");
    highElements.forEach((element) => {
      const dayNumber = element.getAttribute("data-high");
      element.textContent = Math.round(weatherData.days[dayNumber].tempmax);
    });

    const nextDaysConditions = document.querySelectorAll(
      "[data-conditions-day]"
    );
    nextDaysConditions.forEach((day) => {
      const dayNumber = day.getAttribute("data-conditions-day");
      const conditions = weatherData.days[dayNumber].conditions;
      day.src = WeatherIcon.getIcon(conditions);
    });

    if (scale === "c") this.changeDegreesToCelsius();
  }

  changeScaleDisplay(scale) {
    const fDeg = document.getElementById("f-deg");
    const cDeg = document.getElementById("c-deg");

    if (scale === "f") {
      fDeg.classList.add("fw-bold");
      cDeg.classList.remove("fw-bold");
    } else {
      fDeg.classList.remove("fw-bold");
      cDeg.classList.add("fw-bold");
    }
  }

  changeDegreesToCelsius() {
    const degreeElements = document.querySelectorAll("[data-deg");

    degreeElements.forEach((element) => {
      let degree = +element.textContent;
      element.textContent = Math.round(fahrenheitToCelsius(degree));
    });
  }

  showSpinner() {
    const spinnerDiv = document.getElementById("spinner");
    spinnerDiv.classList.remove("d-none");
  }

  hideSpinner() {
    const spinnerDiv = document.getElementById("spinner");
    spinnerDiv.classList.add("d-none");
  }

  showError(error) {
    const weatherContentDiv = document.getElementById("weather-content");
    const errorDiv = document.getElementById("error-div");
    const errorMsg = document.getElementById("error-msg");

    weatherContentDiv.classList.add("d-none");
    errorDiv.classList.remove("d-none");
    errorMsg.textContent = error;
  }

  hideError() {
    const errorDiv = document.getElementById("error-div");
    const errorMsg = document.getElementById("error-msg");

    errorMsg.textContent = "";
    errorDiv.classList.add("d-none");
  }
}

export default DisplayController;
