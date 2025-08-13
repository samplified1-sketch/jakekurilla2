// Intro animation fade out (slower)
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("intro").style.opacity = 0;
    setTimeout(() => {
      document.getElementById("intro").style.display = "none";
    }, 3000); // Matches slower fade
  }, 2500);
});

// Live clock
function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();
