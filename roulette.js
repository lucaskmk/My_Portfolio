document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const rouletteInner = document.getElementById('rouletteInner');
    const items = document.querySelectorAll('.roulette-item');
    const description = document.getElementById('rouletteDescription');
    const rouletteContainer = document.querySelector('.roulette');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const projectTitle = document.getElementById('projectTitle');
    const projectDescription = document.getElementById('projectDescription');
  
    // Sample project data with multiple projects per language and URLs
    const projects = {
      python: [
        {
          title: "Web Scraper",
          description: "A Python project using BeautifulSoup and Requests to scrape data from websites and save it to a CSV file.",
          url: "https://github.com/yourusername/web-scraper"
        },
        {
          title: "Task Scheduler",
          description: "A Python script using APScheduler to automate recurring tasks like sending emails or backups.",
          url: "https://github.com/yourusername/task-scheduler"
        },
        {
          title: "Data Analyzer",
          description: "A Python project with Pandas and Matplotlib to analyze and visualize CSV data.",
          url: "https://github.com/yourusername/data-analyzer"
        }
      ],
      java: [
        {
          title: "REST API Server",
          description: "A Java project using Spring Boot to create a RESTful API for managing a simple inventory system.",
          url: "https://github.com/yourusername/rest-api-server"
        },
        {
          title: "Chat Application",
          description: "A Java project using JavaFX and sockets for a simple client-server chat system.",
          url: "https://github.com/yourusername/chat-application"
        },
        {
          title: "File Converter",
          description: "A Java utility to convert files between formats like CSV to JSON.",
          url: "https://github.com/yourusername/file-converter"
        }
      ],
      csharp: [
        {
          title: "2D Platformer Game",
          description: "A C# project built with Unity to create a 2D platformer game with player movement and collectibles.",
          url: "https://github.com/yourusername/2d-platformer"
        },
        {
          title: "Desktop Notepad",
          description: "A C# WPF application for a lightweight text editor with save/load features.",
          url: "https://github.com/yourusername/desktop-notepad"
        },
        {
          title: "Weather App",
          description: "A C# project using .NET to fetch and display weather data from an API.",
          url: "https://github.com/yourusername/weather-app"
        }
      ],
      default: {
        title: "No Project Selected",
        description: "Click a language to view a sample project.",
        url: null // No link for default
      }
    };
  
    // Calculate angles and initialize rotation
    const totalItems = items.length;
    const angleIncrement = 360 / totalItems;
    let currentRotation = 0;
    let isDragging = false;
    let previousX = 0;
    let rotationVelocity = 0;
    let widgetActive = false;
  
    // Position each item around the circle
    items.forEach((item, index) => {
      const angle = index * angleIncrement;
      item.style.transform = `rotateY(${angle}deg) translateZ(150px)`;
    });
  
    // Function to update the roulette rotation
    function updateRoulette() {
      rouletteInner.style.transform = `translate(-50%, -50%) rotateY(${currentRotation}deg)`;
    }
  
    // Function to update project widget
    function updateProjectWidget(language) {
      if (language === 'default') {
        projectTitle.innerHTML = projects.default.title; // Plain text for default
        projectDescription.textContent = projects.default.description;
      } else {
        const projectList = projects[language];
        const randomIndex = Math.floor(Math.random() * projectList.length);
        const selectedProject = projectList[randomIndex];
        projectTitle.innerHTML = `<a href="${selectedProject.url}" target="_blank">${selectedProject.title}</a>`;
        projectDescription.textContent = selectedProject.description;
      }
    }
  
    // Function to get front-facing language
    function getFrontLanguage() {
      let normalizedRotation = currentRotation % 360;
      if (normalizedRotation < 0) normalizedRotation += 360;
      const nearestSlot = Math.round(normalizedRotation / angleIncrement) % totalItems;
      return items[nearestSlot].dataset.language;
    }
  
    // Arrow button functionality
    prevBtn.addEventListener('click', () => {
      currentRotation += angleIncrement;
      rotationVelocity = 0;
      updateRoulette();
      if (widgetActive) updateProjectWidget(getFrontLanguage());
    });
  
    nextBtn.addEventListener('click', () => {
      currentRotation -= angleIncrement;
      rotationVelocity = 0;
      updateRoulette();
      if (widgetActive) updateProjectWidget(getFrontLanguage());
    });
  
    // Start dragging
    rouletteContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      previousX = e.clientX;
      rotationVelocity = 0;
      e.preventDefault();
    });
  
    // Dragging movement
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const currentX = e.clientX;
      const deltaX = currentX - previousX;
      const sensitivity = 0.2;
      currentRotation += deltaX * sensitivity;
      rotationVelocity = deltaX * sensitivity;
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
  
    document.addEventListener('mouseleave', () => {
      if (isDragging) {
        isDragging = false;
        applyMomentum();
      }
    });
  
    // Apply momentum and snap to nearest logo
    function applyMomentum() {
      let decay = 0.95;
      function animate() {
        if (Math.abs(rotationVelocity) < 0.1) {
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
  
    function snapToNearestLogo() {
      let normalizedRotation = currentRotation % 360;
      if (normalizedRotation < 0) normalizedRotation += 360;
      const nearestSlot = Math.round(normalizedRotation / angleIncrement) * angleIncrement;
      const fullRotations = Math.floor(currentRotation / 360) * 360;
      const targetRotation = fullRotations + nearestSlot;
      smoothSnap(targetRotation);
    }
  
    function smoothSnap(targetRotation) {
      const duration = 500;
      const startRotation = currentRotation;
      const startTime = performance.now();
      function animateSnap(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        currentRotation = startRotation + (targetRotation - startRotation) * easeProgress;
        updateRoulette();
        if (progress < 1) {
          requestAnimationFrame(animateSnap);
        } else if (widgetActive) {
          updateProjectWidget(getFrontLanguage());
        }
      }
      requestAnimationFrame(animateSnap);
    }
  
    // Click behavior for language items
    items.forEach(item => {
      item.addEventListener('click', () => {
        const language = item.dataset.language;
        if (!widgetActive) {
          // First click: Show a random project for the clicked language
          widgetActive = true;
          updateProjectWidget(language);
        } else {
          // Second click: Reset to default
          widgetActive = false;
          updateProjectWidget('default');
        }
      });
  
      // Hover for description only
      item.addEventListener('mouseenter', () => {
        const img = item.querySelector('img');
        description.textContent = img.dataset.description;
      });
  
      item.addEventListener('mouseleave', () => {
        description.textContent = 'Hover over the logo to see details or spin to select.';
      });
    });
  
    // Initial state
    updateProjectWidget('default');
  });