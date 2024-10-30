function clearError() {
  const errorDiv = document.getElementById("error-div");
  const errorMsg = document.getElementById("error-msg");
  errorDiv.classList.add("d-none");
  errorMsg.textContent = "";
}

export default clearError;
