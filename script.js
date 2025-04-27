// Theme Toggle Code (already present)
const toggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  themeIcon.textContent = body.classList.contains("dark-mode") ? "🌞" : "🌙";
});

// Preloader code
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

// Lazy Load Sections
const lazySections = document.querySelectorAll(".lazy-section");

const sectionObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

lazySections.forEach((section) => {
  sectionObserver.observe(section);
});
