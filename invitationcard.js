//Greet with name from input name
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


//Countdown to Birthday
const debutDate = new Date("Mar 26, 2026 24:00:00").getTime();

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














document.addEventListener('DOMContentLoaded', () => {
    const imageFrames = document.querySelectorAll('.image-frame');
    const preview = document.getElementById('preview');
    const previewImg = document.getElementById('preview-img');

    // Open preview on click
    imageFrames.forEach(frame => {
        frame.addEventListener('click', () => {
            const img = frame.querySelector('img');
            previewImg.src = img.src;
            preview.style.display = 'flex';
        });
    });

    // Close preview on click outside
    preview.addEventListener('click', () => {
        preview.style.display = 'none';
        previewImg.src = '';
    });

    // Close preview on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            preview.style.display = 'none';
            previewImg.src = '';
        }
    });
});




















// Autoplay music inside DOM ready
document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById("backgroundMusic");
  if (audio) {
    audio.volume = 0.5;
    audio.play().catch(e => console.error('Audio play failed:', e));
  }
});