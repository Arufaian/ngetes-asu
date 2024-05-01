let audio = new Audio("../resource/klek.mp3");

let trigerButton = document.querySelector(".triggerButton");

trigerButton.addEventListener("click", function () {
  audio.play();
});
