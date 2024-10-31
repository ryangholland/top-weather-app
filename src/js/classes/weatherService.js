class WeatherService {
  constructor() {
    this.apiKey = "BALEELJDVK2MUZUM6KDNHG5BZ";
    this.baseUrl =
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  }

  async fetchWeather(location) {
    const url = `${this.baseUrl}${location}?key=${this.apiKey}`;
    const reponse = await fetch(url, { mode: "cors" });
    const data = await reponse.json();
    console.log(data)
    return data;
  }
}

export default WeatherService;
