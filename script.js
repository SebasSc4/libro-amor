const pages = document.querySelectorAll(".page");

let currentPage = 0;

document.addEventListener("click", () => {
  if (currentPage < pages.length) {
    pages[currentPage].classList.add("flipped");
    currentPage++;
  }
});
