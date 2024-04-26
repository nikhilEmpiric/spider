let hours = 0,
  minutes = 0,
  seconds = 0;

// Function to update the timer
function updateTimer() {
  // Increment the seconds
  seconds++;
  // Adjust minutes and seconds
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  // Format the time
  const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  // Update the timer display
  document.getElementById("timer").textContent = `Timer: ${formattedTime}`;
}

// Function to pad single digit numbers with leading zeros
function pad(num) {
  return num.toString().padStart(2, "0");
}

// Attach click event listener to the button
document.getElementById("accept").addEventListener("click", () => {
  // Start the timer
  const timerInterval = setInterval(() => {
    updateTimer();
  }, 1000);

  // Stop the timer after 1 hour (3600 seconds)
  setTimeout(() => {
    clearInterval(timerInterval);
    alert("Timer stopped after 1 hour!");
  }, 3600000); // 1 hour = 3600 seconds * 1000 (milliseconds)
});
