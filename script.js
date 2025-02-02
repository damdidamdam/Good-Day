// Confetti Effect
const confettiButton = document.getElementById('confettiButton');
const confettiCanvas = document.getElementById('confetti');

confettiButton.addEventListener('click', () => {
  const confettiSettings = { target: confettiCanvas, max: 200, size: 1.5, animate: true };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();

  setTimeout(() => {
    confetti.clear();
  }, 5000); // Stop confetti after 5 seconds
});