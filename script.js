let pages = document.querySelectorAll(".page");
let current = 0;

const music = document.getElementById("bgMusic");
let started = false;

function nextPage() {

  if (!started) {
    music.play().catch(() => {});
    started = true;
  }

  if (current < pages.length - 1) {
    pages[current].classList.add("flip");
    pages[current].classList.remove("active");

    current++;

    pages[current].classList.add("active");
  }
}