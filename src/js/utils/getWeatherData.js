import displayWeatherData from "../ui/displayWeatherData";
import isZip from "./isZip";

async function getWeather(searchInput) {
  const location = await getLocation(searchInput);
  console.log(location)
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=BALEELJDVK2MUZUM6KDNHG5BZ`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
  displayWeatherData(weatherData);
}

async function getLocation(searchInput) {
  if (isZip(searchInput)) {
    const response = await fetch(`http://api.zippopotam.us/us/${searchInput}`);
    const zipInfo = await response.json();
    console.log(`${zipInfo.places[0]["place name"]}, ${zipInfo.places[0]["state abbreviation"]}`);
    return `${zipInfo.places[0]["place name"]}, ${zipInfo.places[0]["state abbreviation"]}`;
  } else {
    return searchInput;
  }
}

export default getWeather;
