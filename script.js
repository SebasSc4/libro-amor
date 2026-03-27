const pages = document.querySelectorAll(".page");
let currentPage = 0;
let musicaIniciada = false;

function nextPage() {

  // 🔥 iniciar música SOLO una vez
  if (!musicaIniciada) {
    const audio = document.getElementById("musica");
    audio.play().catch(e => console.log("Audio bloqueado:", e));
    musicaIniciada = true;
  }

  if (currentPage < pages.length) {
    pages[currentPage].classList.add("flipped");
    currentPage++;
  }
}
