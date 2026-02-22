const input = document.getElementById('username');
        const label = document.querySelector('label[for="username"]');
        const submitBtn = document.getElementById('submitBtn');

        input.addEventListener('input', function() {
            if (this.value) {
                label.classList.add('filled');
            } else {
                label.classList.remove('filled');
            }
        });
        submitBtn.addEventListener('click', function() {
            if (input.value.trim() === '') {
                alert('please fill up the name');
            } else {
                enableAudio();
                localStorage.setItem('username', input.value.trim());
                window.location.href = 'intro.html';
            }
        });let audioEnabled = false;

const enableAudio = () => {
  if (!audioEnabled) {
    audioEnabled = true;
    const audio = document.getElementById("backgroundMusic");
    if (audio) {
      audio.muted = false;
      audio.play().catch(() => {});
    }
  }
};

document.addEventListener('click', enableAudio, { once: true });


