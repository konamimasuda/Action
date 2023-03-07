document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const headerWork = document.getElementById("header-work");
    // const main = document.getElementById("main-work");
    const ST = window.pageYOffset;
    const headerHeight = headerWork.offsetHeight;
    console.log(ST);

    //header show/hide

    if (window.matchMedia("(max-width: 767px)").matches) {
      if (ST >= 120) {
        headerWork.classList.add("resizeHeader-sp");
      } else {
        headerWork.classList.remove("resizeHeader-sp");
      }
    } else if (
      window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches
    ) {
      if (ST >= 200) {
        headerWork.classList.add("resizeHeader-tb");
      } else {
        headerWork.classList.remove("resizeHeader-tb");
      }
    } else {
      if (ST >= 300) {
        headerWork.classList.add("resizeHeader-pc");
      } else {
        headerWork.classList.remove("resizeHeader-pc");
      }
    }
  });
});
