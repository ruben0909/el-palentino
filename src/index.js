import { initMenuToggle, markCurrentNavigationLink } from "./js/nav.js";
import { mountDevelopmentBanner } from "./js/dev-banner.js";

function initAnimations() {
  const elements = document.querySelectorAll(".card-item, .dish-card, .gallery-grid img, h2, h3, .featured-image");
  
  if (!("IntersectionObserver" in window)) {
    // Fallback if not supported
    elements.forEach(el => el.style.opacity = "1");
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeInUp");
        entry.target.style.opacity = "1";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.style.opacity = "0";
    observer.observe(el);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mountDevelopmentBanner();
  initMenuToggle();
  markCurrentNavigationLink();
  initAnimations();
});
