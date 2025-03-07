// Drum Sounds
const soundMapping = {
    w: "sounds/tom-1.mp3",
    a: "sounds/tom-2.mp3",
    s: "sounds/tom-3.mp3",
    d: "sounds/tom-4.mp3",
    j: "sounds/snare.mp3",
    k: "sounds/crash.mp3",
    l: "sounds/kick-bass.mp3"
  };
  
  // Event Listener for Button Clicks
  document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", function () {
      playSound(this.textContent.toLowerCase());
    });
  });
  
  // Event Listener for Key Presses
  document.addEventListener("keydown", function (event) {
    playSound(event.key.toLowerCase());
  });
  
  // Play Sound and Display
  function playSound(key) {
    const soundFile = soundMapping[key];
    if (soundFile) {
      const audio = new Audio(soundFile);
      audio.play();
  
      // Display sound name
      const soundDisplay = document.getElementById("sound-display");
      soundDisplay.textContent = `Playing: ${key.toUpperCase()} sound 🎶`;
      soundDisplay.classList.add("active");
  
      setTimeout(() => soundDisplay.classList.remove("active"), 1000);
    }
  }
  
  // About and Contact Buttons
  const footerDisplay = document.getElementById("footer-display");
  
  document.getElementById("about-btn").addEventListener("click", function () {
    footerDisplay.textContent = "Created by Vaibhav Bhagwat";
  });
  
  document.getElementById("contact-btn").addEventListener("click", function () {
    footerDisplay.textContent = "Contact: 9028939644, Nagpur, MH.";
  });
  