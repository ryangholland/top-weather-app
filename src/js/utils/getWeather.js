async function getWeather(city) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=BALEELJDVK2MUZUM6KDNHG5BZ`
  );
  const weatherData = await response.json();
  console.log(weatherData);
}

export default getWeather;
