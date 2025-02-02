// Array of uplifting messages
const messages = [
    "Hiii Good morning, 🌞 Just a little reminder that you’re capable of amazing things today. Go shine!",
    "Psst OA ba? Yes, OO! Sana ayos ka lang today! Have a great day!",
    "Rise and shine, pretty riri!🌞 Today is your day, sayo ang araw na to GO! GO! GO!",
    "Sending you a positive vibes. 😊 Good luck! You’ve got this, and I believe in you!",
    "Hello, sunshine! ☀️ Just wanted to say you’re doing an incredible job, and today is going to be amazing!",
    "Good morning mæm nurse, 🌻 Keep spreading your light—it makes the world a better place",
    "Hey there, I can't believe I did this. ✨ Anyways have a great day ahead, Fighting",
    "Just a little note to say you’re appreciated, loved, and absolutely wonderful. Have a magical day!",
    "Good Afternoon, Check point lang po! Wala pa po kayong lisensya but you're driving me crazy!",
    "Hey you! 🌟 Today is a gift, and you’re the bow on top. Make it count and enjoy every moment!",
    "Sending you a burst of positivity and good vibes! ✨ Kaya mo yan miss little sanay na! btw d2 lng me!",
    "HAHAHAHA lagyan ko tubatu para +point. 🌷 Yun okay OA talaga hehe sana matapos mo to.",
    "Good evening na rin pala. I hope u had a great day get the rest you deserve!",
    "Hey, just letting u know na u can hmu whenever! 🌟 Dito lang ako sa gedli nagsesenti jkk.",
    "Sending you a big dose of happiness and a shot of peace! Wish u all the good things today!"
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
    const confettiSettings = { 
      target: 'confetti', // ID of the canvas element
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

  // Add 3 dancing cats (you can adjust the number)
  for (let i = 0; i < 3; i++) {
    const catImg = document.createElement('img');
    catImg.src = 'https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif'; // Dancing cat GIF
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

