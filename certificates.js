document.addEventListener("DOMContentLoaded", function () {
  const certificateItems = document.querySelectorAll(".certificate-item");

  function checkVisibility() {
    const windowHeight = window.innerHeight;
    const isMobile = window.innerWidth <= 767; // Mobile if screen width is 767px or less
    const threshold = isMobile ? windowHeight * 1.4 : windowHeight * 0.8; // More lenient on mobile

    certificateItems.forEach((item) => {
      const rect = item.getBoundingClientRect();

      // Check if the item is in the viewport with the appropriate threshold
      if (rect.top <= threshold && rect.bottom >= 0) {
        item.classList.add("visible");
      } else {
        item.classList.remove("visible");
      }
    });
  }

  // Force the first 2 certificates to be visible on page load
  certificateItems.forEach((item, index) => {
    if (index < 2) { // First 2 items
      item.classList.add("visible");
    }
  });

  // Initial check on page load
  checkVisibility();

  // Check on scroll
  window.addEventListener("scroll", checkVisibility);

  // Recheck visibility on resize (e.g., orientation change on mobile)
  window.addEventListener("resize", checkVisibility);
});