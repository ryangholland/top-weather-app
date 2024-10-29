function hideSpinner() {
  const spinnerDiv = document.getElementById("spinner");
  const weatherContent = document.getElementById("weather-content");
  spinnerDiv.classList.add("d-none");
  weatherContent.classList.remove("d-none");
}

export default hideSpinner;
