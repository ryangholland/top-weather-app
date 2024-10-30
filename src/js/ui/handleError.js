import hideSpinner from "./hideSpinner";

function handleError(error) {
  const weatherContent = document.getElementById("weather-content");
  const errorDiv = document.getElementById("error-div");
  const errorMsg = document.getElementById("error-msg");

  hideSpinner();
  weatherContent.classList.add("d-none");
  errorDiv.classList.remove("d-none");
  errorMsg.textContent = error;
}

export default handleError;
