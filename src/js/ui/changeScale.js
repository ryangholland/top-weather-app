import displayCelsius from "./displayCelsius";
import displayFahrenheit from "./displayFahrenheit";

function changeScale(currentScale) {
  const fDeg = document.getElementById("f-deg");
  const cDeg = document.getElementById("c-deg");

  if (currentScale === "f") {
    currentScale = "c";
    fDeg.classList.remove("fw-bold");
    cDeg.classList.add("fw-bold");
    displayCelsius();
  } else {
    currentScale = "f";
    fDeg.classList.add("fw-bold");
    cDeg.classList.remove("fw-bold");
    displayFahrenheit();
  }

  return currentScale;
}

export default changeScale;
