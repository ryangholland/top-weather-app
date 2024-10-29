import getWeatherData from "./utils/getWeatherData";
import changeScale from "./ui/changeScale";

function init() {
  let currentScale = "f";

  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getWeatherData(searchInput.value, currentScale);
    searchInput.value = "";
  });

  const scaleBtn = document.getElementById("scale-btn");
  scaleBtn.addEventListener("click", () => {
    currentScale = changeScale(currentScale);
  })
}

export default init;
