function showSpinner() {
  const spinnerDiv = document.getElementById("spinner");
  const weatherContent = document.getElementById("weather-content");
  spinnerDiv.classList.remove("d-none");
  weatherContent.classList.add("d-none");
}

export default showSpinner;
