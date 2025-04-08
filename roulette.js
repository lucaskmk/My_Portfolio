document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const rouletteInner = document.getElementById('rouletteInner');
  const items = document.querySelectorAll('.roulette-item');
  const description = document.getElementById('rouletteDescription');
  const rouletteContainer = document.querySelector('.roulette');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const projectWidget = document.getElementById('projectWidget');

  // Sample project data with multiple projects per language and URLs
  const projects = {
    python: [
      {
        "title": "Aulas",
        "description": "Aulas e anotacoes com varios exercicios",
        "url": "https://github.com/lucaskmk/Python"
      },
      {
        "title": "Filtro_cores",
        "description": "Interactive color filter that simplifies obtaining high/low values in the HSV, BGR, or RGB scales for precise image segmentation.",
        "url": "https://github.com/lucaskmk/Filtro_cores"
      },
      {
        "title": "Batalha Naval",
        "description": "Battleship game where the player competes against the computer in strategic ocean battles.",
        "url": "https://github.com/lucaskmk/EP2"
      },
      {
        "title": "PyGame",
        "description": "A Pygame project inspired by the classic Donkey Kong, where Mario dodges barrels and climbs. Embark on a nostalgic journey to the top.",
        "url": "https://github.com/lucaskmk/PyGame-DKarcade"
      }
    ],
    web: [
      {
        title: "Enhanced Get-it Note Manager",
        description: "This project upgrades the Get-it system by integrating a refined CSS style, transitioning data storage from a text file to a SQLite database, and adding new functionalities for editing and deleting notes. Building on previous handouts and challenges, it delivers a more robust and visually appealing note-taking application",
        url: "https://github.com/insper-tecnologias-web/projeto-1a-lucaskmk"
      },
      {
        title: "Django-Based Notes Platform",
        description: "This project transforms the original note-taking application into a fully dynamic, web-based platform built with Django. It replaces the previous SQLite storage with a robust PostgreSQL database running in a Docker container. The application features complete CRUD functionality for notes, including creation, editing, deletion, and listing, while implementing advanced database relationships—many-to-many for tagging and many-to-one for organizing notes. Styled with custom CSS and rendered through Django templates, the platform is designed for efficient data management and public deployment.",
        url: "https://github.com/insper-tecnologias-web/projeto-1b-lucaskmk"
      },
      {
        title: "Frontend-react-app de programar treinos na academia",
        description: "solução tecnológica que permita aos alunos praticar programação e lógica entre as aulas. site interativo em React , com a possibilidade de um backend em FastAPI",
        url: "https://github.com/desagil-2024-2/frontend-1"
      },
      {
        title: "CalmU",
        description: "Projeto modelo de aplicativo para crises de ansiedade com ex e forum",
        url: "https://github.com/lucaskmk/Equipe6TurmaB_CalmU"
      },
      {
        title: "Projeto Informar",
        description: "solução tecnológica que permita aos alunos praticar programação e lógica entre as aulas. site interativo em React , com a possibilidade de um backend em FastAPI",
        url: "https://github.com/lucaskmk/Grupo2-InsperCode"
      },
    ],
    java: [
      {
        title: "backend",
        description: "backend para um projeto em react",
        url: "https://github.com/desagil-2024-2/backend-1"
      },
    ],
    csharp: [
      {
        title: "To-Do-List-Manager",
        description: "allows users to add, view, and delete tasks. You can later extend it with features like saving tasks to a file or implementing a basic GUI using Windows Forms.",
        url: "https://github.com/lucaskmk/To-Do-List-Manager"
      },
      {
        title: "Simple File Organizer",
        description: "sorts files in a directory into subfolders based on their file type. This can introduce you to file I/O operations and working with the System.IO namespace.",
        url: "https://github.com/lucaskmk/Simple-File-Organizer"
      },
    ],
    default: {
      title: "No Project Selected",
      description: "Click a language to view a sample project.",
      url: null
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

  // Function to update project widget with all projects as tiles
  function updateProjectWidget(language) {
    projectWidget.innerHTML = '';
    if (language === 'default') {
      const title = document.createElement('h2');
      title.textContent = projects.default.title;
      const desc = document.createElement('p');
      desc.textContent = projects.default.description;
      projectWidget.appendChild(title);
      projectWidget.appendChild(desc);
    } else {
      const projectList = projects[language];
      projectList.forEach(project => {
        const projectTile = document.createElement('div');
        projectTile.className = 'project-tile';
        const link = document.createElement('a');
        link.href = project.url;
        link.target = '_blank';
        const title = document.createElement('h3');
        title.textContent = project.title;
        const desc = document.createElement('p');
        desc.textContent = project.description;
        link.appendChild(title);
        link.appendChild(desc);
        projectTile.appendChild(link);
        projectWidget.appendChild(projectTile);
      });
    }
  }

  // Function to get front-facing language
  function getFrontLanguage() {
    let normalizedRotation = (currentRotation % 360 + 360) % 360;
    // Invert the rotation to find the front-facing item
    const effectiveRotation = (360 - normalizedRotation) % 360;
    // Map the rotation to a slot (0 to 3)
    const slot = Math.round(effectiveRotation / angleIncrement) % totalItems;
    const frontLanguage = items[slot].dataset.language;
    console.log(`Current Rotation: ${currentRotation}, Normalized: ${normalizedRotation}, Effective: ${effectiveRotation}, Slot: ${slot}, Language: ${frontLanguage}`);
    return frontLanguage;
  }

  // Function to update description based on front-facing item
  function updateDescription() {
    const frontLanguage = getFrontLanguage();
    const frontItem = Array.from(items).find(item => item.dataset.language === frontLanguage);
    const img = frontItem.querySelector('img');
    description.textContent = img.dataset.description;
  }

  // Arrow button functionality
  prevBtn.addEventListener('click', () => {
    currentRotation += angleIncrement;
    rotationVelocity = 0;
    updateRoulette();
    updateDescription();
    if (widgetActive) updateProjectWidget(getFrontLanguage());
  });

  nextBtn.addEventListener('click', () => {
    currentRotation -= angleIncrement;
    rotationVelocity = 0;
    updateRoulette();
    updateDescription();
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
    const sensitivity = 0.4;
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
      } else {
        updateDescription();
        if (widgetActive) {
          updateProjectWidget(getFrontLanguage());
        }
      }
    }
    requestAnimationFrame(animateSnap);
  }

  // Click behavior for language items
  items.forEach(item => {
    item.addEventListener('click', () => {
      const language = item.dataset.language;
      if (!widgetActive || getFrontLanguage() !== language) {
        widgetActive = true;
        updateProjectWidget(language);
      } else {
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
  updateDescription();
});