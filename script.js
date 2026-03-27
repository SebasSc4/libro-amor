const pages = document.querySelectorAll(".page");
const audio = document.getElementById("musica");

let currentPage = 0;
let musicStarted = false;

function startMusic() {
  if (!musicStarted) {
    audio.play().then(() => {
      musicStarted = true;
    }).catch(() => {});
  }
}

function nextPage() {
  startMusic();

  if (currentPage < pages.length) {
    pages[currentPage].classList.add("flipped");
    currentPage++;
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].classList.remove("flipped");
  }
}
