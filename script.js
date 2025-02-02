// Array of uplifting messages
const messages = [
    "Good morning, superstar! 🌟 Just a little reminder that you’re capable of amazing things today. Go shine!",
    "Hey you! Yes, YOU! The world is better because you’re in it. Have a fabulous day!",
    "Rise and shine, beautiful soul! 🌞 Today is your canvas—paint it with joy and laughter!",
    "Sending you a virtual hug and a big smile! 😊 You’ve got this, and I believe in you!",
    "Hello, sunshine! ☀️ Just wanted to say you’re doing an incredible job, and today is going to be amazing!",
    "Good morning, my ray of sunshine! 🌻 Keep spreading your light—it makes the world brighter!",
    "Hey there, amazing human! 🌈 Today is full of possibilities, and you’re going to rock it!",
    "Just a little note to say you’re appreciated, loved, and absolutely wonderful. Have a magical day!",
    "Good morning, sunshine! 🌞 Remember, even the smallest steps forward are progress. You’re doing great!",
    "Hey you! 🌟 Today is a gift, and you’re the bow on top. Make it count and enjoy every moment!",
    "Sending you a burst of positivity and good vibes! ✨ You’re unstoppable, and today is yours to conquer!",
    "Hello, beautiful! 🌷 Just a reminder that you’re stronger than you think and more loved than you know.",
    "Good morning, sunshine! 🌞 Your smile is contagious, so go out there and spread it everywhere!",
    "Hey, you amazing person! 🌟 Today is your day to shine, so go out there and make it unforgettable!",
    "Sending you a big dose of happiness and a sprinkle of joy! 🌈 You deserve all the good things today!"
  ];
  
  // Get elements
  const messageElement = document.querySelector('p');
  const confettiButton = document.getElementById('confettiButton');
  const confettiCanvas = document.getElementById('confetti');
  
  // Function to change the message
  function changeMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageElement.textContent = messages[randomIndex];
  }
  
  // Function to trigger confetti
  function triggerConfetti() {
    const confettiSettings = { target: confettiCanvas, max: 200, size: 1.5, animate: true };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  
    setTimeout(() => {
      confetti.clear();
    }, 5000); // Stop confetti after 5 seconds
  }
  
  // Add event listener to the button
  confettiButton.addEventListener('click', () => {
    changeMessage();
    triggerConfetti();
  });