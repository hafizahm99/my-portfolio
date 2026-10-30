// Display live date and time
function updateTime() {
    const timeElement = document.getElementById("date-time");
    const now = new Date();
    timeElement.textContent = now.toLocaleString();
}
updateTime();
setInterval(updateTime, 1000); // Updates time every second