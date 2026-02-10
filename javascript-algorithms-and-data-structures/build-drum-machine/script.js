const drumPads = document.querySelectorAll(".drum-pad");

drumPads.forEach((btn) => {
  btn.addEventListener("click", () => {
    const audioElement = btn.querySelector(".clip");
    reproducirAudio(audioElement, btn.id);
  });
});

document.addEventListener("keydown", (e) => {
  const tecla = e.key.toUpperCase();
  const audioElement = document.getElementById(tecla);
  const padre = audioElement.parentElement;
    reproducirAudio(audioElement, padre.id);
})
const reproducirAudio = (audio, textoDisplay) => {
  audio.currentTime = 0;
  audio.play();
  document.getElementById("display").innerText = textoDisplay;
}
