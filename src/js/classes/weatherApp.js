import DisplayController from "./displayController";
import WeatherService from "./weatherService";
import ZipService from "./zipService";
import isZip from "../utils/isZip";

class WeatherApp {
  constructor() {
    this.weatherService = new WeatherService();
    this.zipService = new ZipService();
    this.displayController = new DisplayController();
    this.weatherData = {};
    this.scale = "f";
  }

  async getData(searchInput) {
    const location = isZip(searchInput)
      ? await this.zipService.getLocation(searchInput)
      : searchInput;

    if (location) {
      try {
        this.weatherData = await this.weatherService.fetchWeather(location);
        this.displayController.render(this.weatherData, this.scale);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
  }

  changeScale() {
    this.scale = this.scale === "f" ? "c" : "f";
    this.displayController.changeScaleDisplay(this.scale);

    if (this.weatherData.address) {
      this.displayController.render(this.weatherData, this.scale);
    }
  }
}

export default WeatherApp;
