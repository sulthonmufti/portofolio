// ===== BURGER MENU =====
document.getElementById("navBurger").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("open");
});
document.querySelectorAll(".nav-menu a").forEach((a) =>
  a.addEventListener("click", () => {
    document.getElementById("navMenu").classList.remove("open");
  }),
);

// ===== SCROLL TO TOP =====
document.getElementById("scrollTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== YEAR =====
document.getElementById("year").textContent = new Date().getFullYear();
