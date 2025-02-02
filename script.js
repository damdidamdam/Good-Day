// Initialize the app
function initializeApp() {
  // Clear the "appDestroyed" flag on every app start
  localStorage.removeItem('appDestroyed');

  // Get elements
  const messageElement = document.querySelector('p');
  const confettiButton = document.getElementById('confettiButton');
  const confettiCanvas = document.getElementById('confetti');
  const catContainer = document.getElementById('catContainer');

  // Messages array (add your messages here)
  const messages = [
    "🎉 Hooray! 🎉",
    "🎊 Party Time! 🎊",
    "🎈 Let's Celebrate! 🎈"
  ];

  // Function to change the message
  function changeMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageElement.textContent = messages[randomIndex];
  }

  // Function to trigger confetti
  function triggerConfetti() {
    const confettiSettings = { 
      target: confettiCanvas.id, // Use the canvas element's ID
      max: 200, 
      size: 1.5, 
      animate: true, 
      colors: [[255, 111, 97], [255, 214, 165], [255, 175, 75]] // Custom colors
    };
    
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  
    // Stop confetti after 5 seconds
    setTimeout(() => {
      confetti.clear();
    }, 5000);
  }

  // Function to show dancing cats
  function showDancingCats() {
    // Clear previous cats
    catContainer.innerHTML = '';

    // Adjust number of cats based on screen size
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const numCats = isMobile ? 2 : 3; // Fewer cats on mobile

    for (let i = 0; i < numCats; i++) {
      const catImg = document.createElement('img');
      catImg.src = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJ6ZmMyY3plbW13eHhud2VjOHF1bWF4dmZzbjA5NGdiZXBrM3NnayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SGAh7OmkAtJHQvtzb8/giphy.gif';
      catImg.alt = 'Dancing Cat';
      catContainer.appendChild(catImg);
    }

    // Remove cats after 5 seconds
    setTimeout(() => {
      catContainer.innerHTML = '';
    }, 5000);
  }

  // Add event listener to the button
  confettiButton.addEventListener('click', () => {
    changeMessage();
    triggerConfetti();
    showDancingCats();
  });
}

// Start the app
initializeApp();
