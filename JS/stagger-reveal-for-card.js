// ===== STAGGER REVEAL for cards =====
document.querySelectorAll(".portfolio-grid .card").forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.1}s`;
});
document.querySelectorAll(".edu-grid .edu-card").forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.15}s`;
});
