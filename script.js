
const timeElement = document.querySelector('[data-testid="profile-time"]');


function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  timeElement.textContent = `Current time: ${timeString}`;
}


updateTime();
setInterval(updateTime, 1000);
