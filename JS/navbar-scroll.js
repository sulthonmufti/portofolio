// ===== NAVBAR SCROLL =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
  document
    .getElementById("scrollTop")
    .classList.toggle("visible", window.scrollY > 400);
});
