let audio = new Audio(
  "../resource/Page Flip Sound Effect No copyrhgt ...sound effect LNC.mp3"
);

let trigerButton = document.querySelector(".triggerButton");

trigerButton.addEventListener("click", function () {
  audio.play();
});
