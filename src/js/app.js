import WeatherApp from "./classes/weatherApp";

function init() {
  const weatherApp = new WeatherApp();

  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    weatherApp.getData(searchInput.value);
    searchInput.value = "";
  });

  const scaleBtn = document.getElementById("scale-btn");
  scaleBtn.addEventListener("click", () => {
    weatherApp.changeScale();
  });
}

export default init;
