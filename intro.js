document.addEventListener('DOMContentLoaded', () => {

  const username = localStorage.getItem('username');
  const greeting = document.getElementById('greetings');

  if (username && greeting) {
      greeting.textContent = `Hi, ${username}!`;
  }

  const envelope = document.getElementById('envelope');
  const seal = document.getElementById('seal');

  if (seal && envelope) {
    seal.addEventListener('click', () => {
      envelope.classList.add('open');

      setTimeout(() => {
        window.location.href = 'invitationcard.html';
      }, 600); 
    });
  }

});

const audio = document.getElementById("backgroundMusic");
if (audio) {
  audio.muted = false;
  audio.play().catch(() => {});
}
