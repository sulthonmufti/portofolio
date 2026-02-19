// ===== SKILL RINGS =====
const skillObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const pct = parseInt(e.target.dataset.skill);
        const circumference = 2 * Math.PI * 35; // r=35
        const offset = circumference - (pct / 100) * circumference;
        e.target.querySelector(".skill-ring-fill").style.strokeDashoffset =
          offset;
        skillObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.3 },
);

document.querySelectorAll(".skill-item").forEach((el) => skillObs.observe(el));
