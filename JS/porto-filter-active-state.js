// ===== PORTFOLIO FILTER ACTIVE STATE =====
document.querySelectorAll(".portfolio-filters a").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelectorAll(".portfolio-filters a")
      .forEach((b) => b.classList.remove("current"));
    btn.classList.add("current");
  });
});
