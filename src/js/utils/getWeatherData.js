import displayWeatherData from "../ui/displayWeatherData";
import showSpinner from "../ui/showSpinner";
import hideSpinner from "../ui/hideSpinner";
import isZip from "./isZip";
import handleError from "../ui/handleError";
import clearError from "../ui/clearError";

async function getWeatherData(searchInput, scale) {
  clearError();
  showSpinner();

  const location = await getLocation(searchInput);
  if (location) {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=BALEELJDVK2MUZUM6KDNHG5BZ`,
        { mode: "cors" }
      );
      const weatherData = await response.json();
      console.log(weatherData);
      displayWeatherData(weatherData, scale);
      hideSpinner();
    } catch (error) {
      console.log(error);
      handleError("Error: Unable to obtain weather data");
    }
  }
}

async function getLocation(searchInput) {
  if (isZip(searchInput)) {
    try {
      const response = await fetch(
        `http://api.zippopotam.us/us/${searchInput}`
      );
      const zipInfo = await response.json();
      return `${zipInfo.places[0]["place name"]}, ${zipInfo.places[0]["state abbreviation"]}`;
    } catch (error) {
      console.log(error);
      handleError("Error: Invalid ZIP code");
    }
  } else {
    return searchInput;
  }
}

export default getWeatherData;
