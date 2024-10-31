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
    const currentHour = new Date().getHours() + 6; // Testing night mode
    const nextHours = getNextHours(currentHour);

    const hourElements = document.querySelectorAll("[data-hour]");
    hourElements.forEach((element) => {
      const hourNumber = element.getAttribute("data-hour");
      element.textContent = nextHours[hourNumber];
    });

    const nowTemp = document.getElementById("now-temp");
    nowTemp.textContent = Math.round(weatherData.currentConditions.temp);

    const hourTempElements = document.querySelectorAll("[data-hour-temp]");
    hourTempElements.forEach((element) => {
      const hourNumber = element.getAttribute("data-hour-temp");
      let hour = Number(currentHour) + Number(hourNumber);

      if (hour < 24) {
        element.textContent = Math.round(weatherData.days[0].hours[hour].temp);
      } else {
        hour = hour - 24;
        element.textContent = Math.round(weatherData.days[1].hours[hour].temp);
      }
    });

    const nextHoursConditions = document.querySelectorAll(
      "[data-conditions-hour]"
    );
    nextHoursConditions.forEach((element) => {
      const hourNumber = element.getAttribute("data-conditions-hour");
      let conditions;
      let hour = Number(currentHour) + Number(hourNumber);
      if (hour < 24) {
        conditions = weatherData.days[0].hours[hour].conditions;
      } else {
        hour = hour - 24;
        conditions = weatherData.days[1].hours[hour].conditions;
      }

      element.src = WeatherIcon.getIcon(conditions);
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
    const degreeElements = document.querySelectorAll("[data-deg]");

    degreeElements.forEach((element) => {
      let degree = Number(element.textContent);
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
