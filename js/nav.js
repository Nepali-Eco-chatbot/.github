// =========================================================
// nav.js — mobile navigation toggle
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!navToggle || !navLinks) return;

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
});
  

/* =========================================================
   nav.js — Smart Scroll Direction & Hover Reveal
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  let lastScrollY = window.scrollY;
  let isHoveringTop = false;

  // 1. Track Scroll Direction (Desktop only)
  window.addEventListener("scroll", () => {
    // Skip if on mobile viewports
    if (window.innerWidth <= 981) return;

    const currentScrollY = window.scrollY;

    // If scrolling down and past the header height, hide the navbar
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      navbar.classList.add("nav-hidden");
    } 
    // If scrolling up, show the navbar again
    else if (currentScrollY < lastScrollY) {
      navbar.classList.remove("nav-hidden");
    }

    lastScrollY = currentScrollY;
  });

  // 2. Hover Reveal at the Top Edge
  // If the user scrolls down (hiding the bar) but moves their mouse to the top, force it to show.
  window.addEventListener("mousemove", (e) => {
    if (window.innerWidth <= 981) return;

    // Trigger zone: top 30 pixels of the screen window
    if (e.clientY <= 30) {
      navbar.classList.remove("nav-hidden");
    }
  });
});