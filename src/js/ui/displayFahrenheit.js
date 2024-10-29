import { celsiusToFahrenheit } from "../utils/convertTemp";

function displayFahrenheit() {
  const degreeElements = document.querySelectorAll("[data-deg");
  
  degreeElements.forEach((element) => {
    let degree = +element.textContent;
    element.textContent = Math.round(celsiusToFahrenheit(degree));
  });
}

export default displayFahrenheit;
