function getNextDays() {
  const daysOfWeek = [];
  const options = { weekday: "long" }; // Options to get the full day name

  for (let i = 1; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i); // Increment date by i days
    const dayName = date.toLocaleDateString("en-US", options);
    daysOfWeek.push(dayName);
  }

  return daysOfWeek;
}

export default getNextDays;
