document.getElementById("surpriseButton").addEventListener("click", function () {
  const surpriseMessage = document.getElementById("surpriseMessage");
  surpriseMessage.classList.toggle("hidden");
});

window.onload = function () {
  const backgroundMusic = document.getElementById("backgroundMusic");
  // Check if the audio context is allowed to autoplay
  backgroundMusic.play().catch(function () {
    // Autoplay was prevented, show a message to the user
    console.log("Autoplay was prevented, click to play music");
  });

  // Add an event listener to play the music on first user interaction if autoplay was prevented
  document.body.addEventListener(
    "click",
    function () {
      if (backgroundMusic.paused) {
        backgroundMusic.play();
      }
    },
    { once: true }
  );
};
