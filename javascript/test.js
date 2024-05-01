let audio = new Audio("../resource/klek.mp3");

let trigerButton = document.querySelector(".triggerButton");

trigerButton.addEventListener("click", function () {
  //   console.log(this.id);
  let name = this.id;
  playAudio(name);
});

function playAudio(name) {
  let audio = new Audio(`../resource/${name}.mp3`);
  audio.play();
}
