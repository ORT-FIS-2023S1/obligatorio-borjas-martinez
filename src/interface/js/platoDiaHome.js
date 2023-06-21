import {menuSemanal} from './data.js';
import {agregarAlCarrito} from './menu.js';

// esperar a que cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
  // Selecciono el id "home-menu-dia"
  const homeMenuDia = document.querySelector('#home-menu-dia');
  // Creo el html del plato del dia
  homeMenuDia.innerHTML = createHtmlPlatoDelDia();

  // Cuando se hace click en el boton de agregar al carrito
  homeMenuDia.addEventListener('click', (e) => {
    const btn = e.target.id;

    if (btn.includes('agregar-plato-carrito-card')) {
      const dia = btn.dataset.dia;
      const plato = btn.dataset.plato;
      agregarAlCarrito(dia, plato);
    }
  });
});

// Funcion para tomar el nombre del dia de la semana
function getDayName() {
  const date = new Date();
  const day = date.getDay();
  const dayName =
    ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  if (day === 6 || day === 0) return dayName[1];
  return dayName[day];
}

// Funcion para tomar el plato del dia de menuSemanal
function getPlatoDelDia() {
  const dia = getDayName();
  const platoDelDia = menuSemanal.find((menu) => {
    return menu.getDia() === dia;
  });
  return platoDelDia;
}

// Funcion para crear el html del plato del dia
function createHtmlPlatoDelDia() {
  const platoDelDia = getPlatoDelDia();
  const html = `
      <div class="card my-3">
        <div class="card-header w-100 bg-primary">
          <h2 class="text-white">Menu del dia</p>
        </div>
        <img src="${platoDelDia.getPlatos()[0].getImagen()}" 
        class="card-img img-fluid w-100 m-1"
        style="max-width: 500px; justify-content: center;"
        alt="Imagen del plato del dia">
        <div class="card-body">
          <h5 class="card-title">${platoDelDia.getPlatos()[0].getTitulo()}</h5>
          <p class="card-text">
          ${platoDelDia.getPlatos()[0].getDescripcion()}</p>
          <p class="card-text fs-4">
          $${platoDelDia.getPlatos()[0].getPrecio()}</p>
        </div>
      </div>
    `;
  return html;
}
