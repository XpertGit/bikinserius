// assets/js/main.js
// ==================
// Main interaksi dasar BikinSerius 🚀

console.log("🚀 BikinSerius aktif");

// Smooth scroll untuk semua anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Future interaction placeholder
// Misal: form validation, dark mode toggle, dst