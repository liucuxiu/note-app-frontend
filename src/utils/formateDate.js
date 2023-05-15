export function formatDate(dateString) {
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const date = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat('en-UK', options).format(date);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  return `${formattedDate} at ${formattedTime}`;
}

export function formatTime(dateString) {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  return `${formattedTime}`;
}

export function displayDate(dateString) {
  const date = new Date(dateString);

  const currentDate = new Date();
  const weekStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay());
  const weekEnd = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + (6 - currentDate.getDay()));

  if  (date.getDate() === currentDate.getDate()
    && date.getMonth() === currentDate.getMonth()
    && date.getFullYear() === currentDate.getFullYear()){
    return formatTime(dateString);
  }
  else if (date >= weekStart && date <= weekEnd) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[date.getDay()];
    return `${day}`;
  } else {
    const fullDate = date.toLocaleDateString('en-GB');
    return `${fullDate}`;
  }
}
