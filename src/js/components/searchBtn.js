import getWeather from "../utils/getWeather";

function loadSearchBtn() {
  const mainContainer = document.getElementById("main-container");

  const searchBtn = document.createElement("button");
  searchBtn.classList.add("btn");
  searchBtn.classList.add("btn-primary")
  searchBtn.textContent = "Get Weather"

  searchBtn.addEventListener("click", () => getWeather("Clearwater, FL"));

  mainContainer.append(searchBtn);
}

export default loadSearchBtn;
