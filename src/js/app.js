import getWeatherData from "./utils/getWeatherData";

function init() {
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getWeatherData(searchInput.value);
    searchInput.value = "";
  });
}

export default init;
