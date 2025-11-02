// Navigation Click Events for Product Overlay
document.addEventListener("DOMContentLoaded", () => {
  const productLinks = document.querySelectorAll(".overlay h3");

  productLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const productName = e.target.textContent.trim();

      if (productName === "AI Smart Rotavator") {
        window.location.href = "ai-smart-rotavator.html";
      } else if (productName === "Hand Rotavator") {
        window.location.href = "hand-rotavator.html";
      }
    });
  });
});
// Simple mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileNav = document.getElementById("mobileNav");

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("hidden");
    });
  }
});
// ✅ Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});



