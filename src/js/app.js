import getWeatherData from "./utils/getWeatherData";

function init() {
  const testBtn = document.getElementById("test-btn");
  testBtn.addEventListener("click", () => {
    getWeatherData("Trinity, FL");
  });
}

export default init;
