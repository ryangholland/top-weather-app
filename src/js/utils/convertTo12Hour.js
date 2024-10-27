function convertTo12Hour(time24) {
  let [hour, minute, second] = time24.split(":").map(Number); // Split time and convert to numbers

  const period = hour >= 12 ? "PM" : "AM"; // Determine AM or PM
  hour = hour % 12 || 12; // Convert hour to 12-hour format; `0` becomes `12`

  return `${hour}:${minute.toString().padStart(2, "0")} ${period}`;
}

export default convertTo12Hour;
