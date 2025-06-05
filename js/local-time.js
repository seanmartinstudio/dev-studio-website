document.addEventListener('DOMContentLoaded', function () {
  function updateSantaMonicaTime() {
    const options = {
      timeZone: 'America/Los_Angeles',
      hour: 'numeric',
      minute: 'numeric',
      // second: 'numeric',
      hour12: true,
    };

    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const timeString = formatter.format(now);

    const timeElement = document.getElementById('local-time');
    if (timeElement) {
      timeElement.textContent = `Santa Monica, CA: ${timeString}`;
    }
  }

  updateSantaMonicaTime(); // initial time
  setInterval(updateSantaMonicaTime, 1000); // update every second
});
