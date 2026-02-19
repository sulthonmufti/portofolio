// ===== INTERSECTION OBSERVER (reveal + skills + timeline) =====
const revealObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        revealObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
);

document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));
document
  .querySelectorAll(".timeline-item")
  .forEach((el) => revealObs.observe(el));
