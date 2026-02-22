document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    const intro = document.getElementById('intro');
    if (username && intro) {
        intro.textContent = `Hi, ${username}!`;
    }
    const backToIntroBtn = document.getElementById('backToIntroBtn');
    if (backToIntroBtn) {
        backToIntroBtn.addEventListener('click', function() {
            window.location.href = 'intro.html';
        });
    }
});

const debutDate = new Date("Mar 14, 2026 12:00:00").getTime();

setInterval(() => {

  const now = new Date().getTime();
  const distance = debutDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}, 1000);

