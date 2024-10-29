import { fahrenheitToCelsius } from "../utils/convertTemp";

function displayCelsius() {
  const degreeElements = document.querySelectorAll("[data-deg");

  degreeElements.forEach((element) => {
    let degree = +element.textContent;
    element.textContent = Math.round(fahrenheitToCelsius(degree));
  });
}

export default displayCelsius;
