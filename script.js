document.getElementById("surpriseButton").addEventListener("click", function () {
  const surpriseMessage = document.getElementById("surpriseMessage");
  const backgroundMusic = document.getElementById("backgroundMusic");

  surpriseMessage.classList.toggle("hidden");

  // Play the music if it is not already playing
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }
});

window.onload = function () {
  const backgroundMusic = document.getElementById("backgroundMusic");
  // Check if the audio context is allowed to autoplay
  backgroundMusic.play().catch(function () {
    // Autoplay was prevented, show a message to the user
    console.log("Autoplay was prevented, click to play music");
  });
};
