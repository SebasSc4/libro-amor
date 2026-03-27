const pages = document.querySelectorAll(".page");
const audio = document.getElementById("musica");

let currentPage = 0;
let musicStarted = false;

document.addEventListener("click", () => {

  // 🔊 iniciar música SOLO una vez
  if (!musicStarted) {
    audio.play().catch(() => {});
    musicStarted = true;
  }

  // 📖 pasar página
  if (currentPage < pages.length) {
    pages[currentPage].classList.add("flipped");
    currentPage++;
  }
});
