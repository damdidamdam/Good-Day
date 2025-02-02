// Check if the app is already destroyed
function isAppDestroyed() {
  return localStorage.getItem('appDestroyed') === 'true';
}

// Initialize the app
function initializeApp() {
  if (isAppDestroyed()) {
    // If destroyed, show the message and disable everything
    document.body.classList.add('destroyed');
    document.getElementById('selfDestructMessage').classList.add('show');
    destructMessage.innerHTML = `
      💥 App Permanently Destroyed 💥<br>
      <span class="contact-message">Sorry, contact dam to fix this.</span>
    `;
    return;
  }

// random shenanigans
const messages = [
    "Hiii Good Afternoon, ☁️ Just a little reminder that you’re capable of amazing things today. Go shine!",
    "Patulog na me kagabi naisip ko gawan kaya kita ng app? well this is a website next cguro app hiho",
    "Rise and shine, pretty riri!🌞 Today is your day, sayo ang araw na to ++ a crown 👑 GO!!",
    "Sending you a positive vibes. 😊 Good luck! You’ve got this, and I believe in you!",
    "Hello, sunshine! ☀️ Just wanted to say you’re doing an incredible job, and today is going to be amazing!",
    "Good morning mæm nurse, 🌻 Keep spreading YOUR LIGHT — it makes the world a better place",
    "Hey there, I can't believe I did this. ✨ Anyways have a great day ahead, Fighting",
    "Just a little note to say you’re appreciated, loved, and absolutely wonderful. Have a magical day!",
    "Check point lang po! Wala pa po kayong lisensya but you're driving me crazy parang sugar rush rude!",
    "Hey you! 🌟 Today is a gift, and you’re the bow on top. Make it count and enjoy every moment!",
    "Sending you a burst of positivity and good vibes! ✨ Kaya mo yan miss little sanay na! btw d2 lng me!",
    "HAHAHAHA lagyan ko tubatu para +point. 🌷 Yun lang okay! hehe sana matapos mo 'to.",
    "Good evening na rin pala. I hope u had a great day get the rest you deserve!",
    "Hey, just letting u know na u can hmu whenever! 🌟 Dito lang ako sa gedli see you over the moon.",
    "Administering u big doses of happiness and shots of peace! Wish u all the good things today!"
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

  /// Adjust number of cats based on screen size
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
  }, 2000);
}

  // Add event listener to the button
  confettiButton.addEventListener('click', () => {
    changeMessage();
    triggerConfetti();
    showDancingCats();
  }); }

  // Function to destroy the app permanently
function destroyApp() {
  // Save destruction state in localStorage
  localStorage.setItem('appDestroyed', 'true');
  
  const destructMessage = document.getElementById('selfDestructMessage');
  const destructText = destructMessage.querySelector('.destruct-text');
  const contactText = destructMessage.querySelector('.contact-message');
  
  destructText.textContent = '💥 Self-Destruct Activated 💥';
  contactText.textContent = 'Sorry, contact dam to fix this.';
  destructMessage.classList.add('show');
  
  // Disable interactions and hide the app
  document.body.classList.add('destroyed');
  document.querySelector('.container').style.display = 'none';
  
  // Optional: Clear confetti and cats
  document.getElementById('confetti').remove();
  document.getElementById('catContainer').remove();
}

// Add event listener to the destroy button
document.getElementById('destroyButton').addEventListener('click', destroyApp);

// Start the app
initializeApp();
