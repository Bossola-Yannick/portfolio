const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);

  if (window.scrollY > 240) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-100px";
  }
});
