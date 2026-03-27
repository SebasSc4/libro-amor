const pages = document.querySelectorAll(".page");
const audio = document.getElementById("musica");

let currentPage = 0;
let musicStarted = false;

// 👉 iniciar audio SOLO una vez y con interacción real
function startMusic() {
  if (!musicStarted) {
    audio.play().then(() => {
      musicStarted = true;
    }).catch(() => {});
  }
}

// siguiente
function nextPage() {
  startMusic();

  if (currentPage < pages.length) {
    pages[currentPage].classList.add("flipped");
    currentPage++;
  }
}

// anterior
function prevPage() {

  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].classList.remove("flipped");
  }
}
