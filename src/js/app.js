import getWeatherData from "./utils/getWeatherData";

function init() {
  // const testBtn = document.getElementById("test-btn");
  // testBtn.addEventListener("click", () => {
  //   getWeatherData("34655");
  // });

  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getWeatherData(searchInput.value);
    searchInput.value = "";
  })


}

export default init;
