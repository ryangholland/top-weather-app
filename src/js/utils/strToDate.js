function strToDate(timeString) {
  const now = new Date();

  const [hour, minute, second] = timeString.split(":").map(Number);

  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hour,
    minute,
    second
  );
}

export default strToDate;
