document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const rouletteInner = document.getElementById('rouletteInner');
    const items = document.querySelectorAll('.roulette-item');
    const description = document.getElementById('rouletteDescription');
    const rouletteContainer = document.querySelector('.roulette');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
  
    // Calculate angles and initialize rotation
    const totalItems = items.length;
    const angleIncrement = 360 / totalItems;
    let currentRotation = 0;
    let isDragging = false;
    let previousX = 0;
    let rotationVelocity = 0;
  
    // Position each item around the circle
    items.forEach((item, index) => {
      const angle = index * angleIncrement;
      item.style.transform = `rotateY(${angle}deg) translateZ(150px)`;
    });
  
    // Function to update the roulette rotation
    function updateRoulette() {
      rouletteInner.style.transform = `translate(-50%, -50%) rotateY(${currentRotation}deg)`;
    }
  
    // Arrow button functionality
    prevBtn.addEventListener('click', () => {
      currentRotation += angleIncrement;
      rotationVelocity = 0; // Reset velocity on manual click
      updateRoulette();
    });
  
    nextBtn.addEventListener('click', () => {
      currentRotation -= angleIncrement;
      rotationVelocity = 0; // Reset velocity on manual click
      updateRoulette();
    });
  
    // Start dragging anywhere in the roulette container
    rouletteContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      previousX = e.clientX;
      rotationVelocity = 0; // Reset velocity when starting a new drag
      e.preventDefault(); // Prevent text selection
    });
  
    // Dragging movement
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
  
      const currentX = e.clientX;
      const deltaX = currentX - previousX;
      const sensitivity = 0.4; // Precise control
      currentRotation += deltaX * sensitivity; // Drag direction fixed
      rotationVelocity = deltaX * sensitivity; // Store velocity for momentum
      previousX = currentX;
  
      updateRoulette();
    });
  
    // Stop dragging
    document.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        applyMomentum();
      }
    });
  
    // Optional: Stop dragging if mouse leaves window
    document.addEventListener('mouseleave', () => {
      if (isDragging) {
        isDragging = false;
        applyMomentum();
      }
    });
  
    // Apply momentum effect and snap to nearest logo
    function applyMomentum() {
      let decay = 0.95; // How quickly the spin slows down
      function animate() {
        if (Math.abs(rotationVelocity) < 0.1) {
          // When velocity is low, snap to the nearest logo
          snapToNearestLogo();
          return;
        }
        currentRotation += rotationVelocity;
        rotationVelocity *= decay;
        updateRoulette();
        requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);
    }
  
    // Snap to the nearest logo position
    function snapToNearestLogo() {
      // Normalize currentRotation to 0-360 range
      let normalizedRotation = currentRotation % 360;
      if (normalizedRotation < 0) normalizedRotation += 360;
  
      // Find the nearest multiple of angleIncrement (0°, 120°, 240°)
      const nearestSlot = Math.round(normalizedRotation / angleIncrement) * angleIncrement;
      
      // Adjust currentRotation to align with the nearest slot
      const fullRotations = Math.floor(currentRotation / 360) * 360;
      const targetRotation = fullRotations + nearestSlot;
  
      // Smoothly animate to the target rotation
      smoothSnap(targetRotation);
    }
  
    // Smoothly animate to the snapped position
    function smoothSnap(targetRotation) {
      const duration = 500; // Animation duration in ms
      const startRotation = currentRotation;
      const startTime = performance.now();
  
      function animateSnap(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // 0 to 1
        const easeProgress = 1 - Math.pow(1 - progress, 4); // Ease-out effect
  
        currentRotation = startRotation + (targetRotation - startRotation) * easeProgress;
        updateRoulette();
  
        if (progress < 1) {
          requestAnimationFrame(animateSnap);
        }
      }
  
      requestAnimationFrame(animateSnap);
    }
  
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