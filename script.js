// Intro animation fade out every other letter
window.addEventListener("load", () => {
  setTimeout(() => {
    const letters = document.querySelectorAll(".intro-text span");
    letters.forEach((letter, index) => {
      // Fade every other letter first
      const delay = (index % 2 === 0 ? index : index + letters.length) * 100;
      setTimeout(() => {
        letter.style.opacity = 0;
      }, delay);
    });

    // Hide the intro after all fades complete
    setTimeout(() => {
      document.getElementById("intro").style.display = "none";
    }, letters.length * 200 + 500);
  }, 2500);
});

// Live clock
function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();
