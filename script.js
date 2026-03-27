const pages = document.querySelectorAll(".page");
let currentPage = 0;

function nextPage() {
  if (currentPage < pages.length) {
    pages[currentPage].classList.add("flipped");
    currentPage++;
  }
}
