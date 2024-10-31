function isNight(sunriseTime, sunsetTime, checkTime = new Date()) {
  if (typeof checkTime === "number") {
    const now = new Date();
    checkTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      checkTime
    );
  }

  const [sunriseHour, sunriseMinute, sunriseSecond] = sunriseTime
    .split(":")
    .map(Number);
  const sunrise = new Date(
    checkTime.getFullYear(),
    checkTime.getMonth(),
    checkTime.getDate(),
    sunriseHour,
    sunriseMinute,
    sunriseSecond
  );

  const [sunsetHour, sunsetMinute, sunsetSecond] = sunsetTime
    .split(":")
    .map(Number);
  const sunset = new Date(
    checkTime.getFullYear(),
    checkTime.getMonth(),
    checkTime.getDate(),
    sunsetHour,
    sunsetMinute,
    sunsetSecond
  );

  return checkTime < sunrise || checkTime >= sunset;
}

export default isNight;
