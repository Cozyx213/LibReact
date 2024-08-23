function getTime(time:any) {
  const timeString = time;

  // Parse the timestamp and create a Date object
  const pastDate:any = new Date(timeString);

  // Get the current time as a Date object
  const currentDate:any = new Date();

  // Calculate the difference in milliseconds
  const timeElapsed = currentDate - pastDate;

  // Convert milliseconds to seconds
  const secondsElapsed = timeElapsed / 1000;

  var mins = secondsElapsed / 60;
  var hours = mins / 60;
  var days = hours / 24;

  if (days >= 1) {
    if (days >= 2) {
      return Math.floor(days) + " days ago";
    }
    return Math.floor(days) + " day ago";
  } else if (hours >= 1) {
    if (hours >= 2) {
      return Math.floor(hours) + " hours ago";
    }
    return Math.floor(hours) + " hour ago";
  } else if (mins >= 1) {
    if (mins >= 2) {
      return Math.floor(mins) + " minutes ago";
    }
    return Math.floor(mins) + " minute ago";
  } else {
    return Math.floor(secondsElapsed) + " seconds ago";
  }
}
export default getTime;