// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const rouletteInner = document.getElementById('rouletteInner');
    const items = document.querySelectorAll('.roulette-item');
    const description = document.getElementById('rouletteDescription');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
  
    // Calculate angles and initialize rotation
    const totalItems = items.length;
    const angleIncrement = 360 / totalItems;
    let currentRotation = 0;
  
    // Position each item around the circle
    items.forEach((item, index) => {
      const angle = index * angleIncrement;
      item.style.transform = `rotateY(${angle}deg) translateZ(150px)`;
    });
  
    // Function to update the roulette rotation
    function updateRoulette() {
      rouletteInner.style.transform = `translate(-50%, -50%) rotateY(${currentRotation}deg)`;
    }
  
    // Navigate to the previous language
    prevBtn.addEventListener('click', () => {
      currentRotation += angleIncrement;
      updateRoulette();
    });
  
    // Navigate to the next language
    nextBtn.addEventListener('click', () => {
      currentRotation -= angleIncrement;
      updateRoulette();
    });
  
    // Update description on hover
    items.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const img = item.querySelector('img');
        description.textContent = img.dataset.description;
      });
      item.addEventListener('mouseleave', () => {
        description.textContent = 'Hover over the logo to see details.';
      });
    });
  });