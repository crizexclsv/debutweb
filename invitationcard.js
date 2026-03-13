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

const debutDate = new Date("Mar 26, 2026 12:00:00").getTime();

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


const cards = document.querySelectorAll('.namecontainer');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-id');
    alert(`You clicked on card ${id}!`);
  });
});

// Fullscreen map image
document.addEventListener('DOMContentLoaded', () => {
  const mapImg = document.getElementById('map-img');
  if (mapImg) {
    mapImg.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.className = 'fullscreen-modal';
      const img = document.createElement('img');
      img.src = mapImg.src;
      img.className = 'fullscreen-img';
      modal.appendChild(img);
      document.body.appendChild(modal);
      modal.addEventListener('click', () => modal.remove());
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') modal.remove();
      }, {once: true});
    });
  }
});
