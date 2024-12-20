function getNextHours(currentHour) {
  const hourValues = [
    "12 AM",
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM",
  ];

  const nextFiveHours = [];

  for (let i = currentHour + 1; i < currentHour + 6; i++) {
    const key = i < 24 ? i : i - 24;
    nextFiveHours.push(hourValues[key]);
  }

  return nextFiveHours;
}

export default getNextHours;
