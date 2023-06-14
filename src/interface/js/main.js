// Ocultar todas las secciones excepto la sección "home" al cargar la página
document.querySelectorAll('section:not(#home)').forEach((section) => {
  section.style.display = 'none';
});

// Función para realizar el desplazamiento a la sección correspondiente
function scrollToSection(event) {
  event.preventDefault();

  // Obtener el elemento <a> más cercano
  // const targetLink = event.target.closest('a');
  const targetLink = event.target.getAttribute('section');

  if (!targetLink) {
    return;
  }

  // Obtener el ID de la sección a la que se desea ir
  const targetId = targetLink.getAttribute('href');
  if (!targetId) {
    return;
  }

  // Obtener la sección visible actualmente
  const visibleSection =
  document.querySelector('section:not([style*="display: none"])');

  // Si la sección visible actualmente es la misma que la sección
  // a la que se desea ir no hacer nada
  if (visibleSection &&
    visibleSection.getAttribute('id') === targetId.slice(1)) {
    return;
  }

  // Ocultar todas las secciones excepto la sección correspondiente
  document.querySelectorAll('section:not(' + targetId + ')')
      .forEach((section) => {
        section.style.display = 'none';
      });

  // Mostrar la sección correspondiente
  const targetSection = document.querySelector(targetId);

  if (targetSection) {
    // Si targetSection no es null
    const visibleSection =
    document.querySelector('section:not([style*="display: none"])');

    if (visibleSection && visibleSection !== targetSection) {
      // Si visibleSection no es null y es diferente de targetSection
      visibleSection.style.display = 'none';
    }

    targetSection.style.display = 'block';
  }
}

// Obtener todos los elementos de navegación del navbar
const navItems = document.querySelectorAll('.section');

// Agregar un controlador de eventos de clic a cada elemento de navegación
navItems.forEach((navItem) => {
  navItem.addEventListener('click', scrollToSection);
});
