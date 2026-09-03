const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const volumeSlider = document.getElementById('volumeSlider');
const statusDisplay = document.getElementById('status');

playBtn.addEventListener('click', () => {
    audio.play();
    statusDisplay.textContent = 'Now playing...';
});

pauseBtn.addEventListener('click', () => {
    audio.pause();
    statusDisplay.textContent = 'Paused.';
});

volumeSlider.addEventListener('input', (event) => {
    // event.target.value is the slider value (0 to 1)
    audio.volume = event.target.value;
});

// Optional: Update status when music ends
audio.addEventListener('ended', () => {
    statusDisplay.textContent = 'Song finished.';
});