const pages = document.querySelectorAll(".page");
const audio = document.getElementById("musica");

let currentPage = 0;
let musicStarted = false;

// siguiente
function nextPage() {

  if (!musicStarted) {
    audio.play().catch(() => {});
    musicStarted = true;
  }

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
