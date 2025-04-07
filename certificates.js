document.addEventListener("DOMContentLoaded", function () {
    const certificateItems = document.querySelectorAll(".certificate-item");
  
    function checkVisibility() {
      certificateItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        // Check if the item is in the viewport
        if (rect.top <= windowHeight * 0.9 && rect.bottom >= 0) {
          item.classList.add("visible");
        } else {
          // Remove the visible class when the item is out of the viewport
          item.classList.remove("visible");
        }
      });
    }
  
    // Initial check on page load
    checkVisibility();
  
    // Check on scroll
    window.addEventListener("scroll", checkVisibility);
  });