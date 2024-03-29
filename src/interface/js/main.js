import './carrito.js';
import './data.js';
import './editarMenu.js';
import './historial.js';
import './menu.js';
import './reservas.js';
import './platoDiaHome.js';

// Import our custom CSS
import '../scss/styles.scss';

// esperar a que cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
  // Ocultar todas las secciones excepto la sección "home" al cargar la página
  document.querySelectorAll('section:not(#home)').forEach((section) => {
    section.classList.add('d-none');
  });

  const sectionLists = document.querySelectorAll('.section');

  sectionLists.forEach((element) => {
    element.addEventListener('click', (e) => {
      showSection(e.target);
    });
  });

  const showSection = (e) => {
    const currentSectionId = e.getAttribute('href');

    sectionLists.forEach((element) => {
      const otherSectionId = element.getAttribute('href');
      if (currentSectionId === otherSectionId) {
        const currentSection = document.querySelector(currentSectionId);
        currentSection.classList.remove('d-none');
      } else {
        const otherSection = document.querySelector(otherSectionId);
        otherSection.classList.add('d-none');
      }
    });
  };
});
