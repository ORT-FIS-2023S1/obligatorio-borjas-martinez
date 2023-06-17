import Plato from '../../domain/plato.js';
import Menu from '../../domain/menu.js';


// Menu semanal
const menuSemanal = [
  new Menu('Lunes', [
    new Plato(
        'Regular',
        'Spaghetti Bolognese',
        'Deliciosa pasta con salsa bolognesa casera',
        200,
        'https://picsum.photos/200',
    ),
    new Plato(
        'Vegetariano',
        'Pasta Primavera',
        'Pasta con vegetales frescos de temporada',
        200,
        'https://picsum.photos/200',
    ),
  ]),
  new Menu('Martes', [
    new Plato(
        'Regular',
        'Pollo a la parrilla',
        'Jugoso pollo a la parrilla con verduras',
        200,
        'https://picsum.photos/200',
    ),
    new Plato(
        'Vegetariano',
        'Tofu a la parrilla',
        'Tofu marinado a la parrilla con vegetales',
        200,
        'https://picsum.photos/200',
    ),
  ]),
  new Menu('Miércoles', [
    new Plato(
        'Regular',
        'Ensalada César',
        'Fresca ensalada con pollo, lechuga y aderezo César',
        200,
        'https://picsum.photos/200',
    ),
    new Plato(
        'Vegetariano',
        'Ensalada Mediterránea',
        'Ensalada con queso feta, aceitunas y vegetales frescos',
        200,
        'https://picsum.photos/200',
    ),
  ]),
  new Menu('Jueves', [
    new Plato(
        'Regular',
        'Pescado a la plancha',
        'Filete de pescado fresco a la plancha con guarnición',
        180,
        'https://picsum.photos/200',
    ),
    new Plato(
        'Vegetariano',
        'Tofu a la plancha',
        'Tofu marinado a la plancha con guarnición',
        180,
        'https://picsum.photos/200',
    ),
  ]),
  new Menu('Viernes', [
    new Plato(
        'Regular',
        'Hamburguesa',
        'Hamburguesa de carne con queso, lechuga y tomate',
        200,
        'https://picsum.photos/200',
    ),
    new Plato(
        'Vegetariano',
        'Hamburguesa de lentejas',
        'Hamburguesa de lentejas con lechuga y tomate',
        200,
        'https://picsum.photos/200',
    ),
  ]),
];

document.addEventListener('DOMContentLoaded', () => {
  console.log(menuSemanal);
});

// function getDayName(additionalDays) {
//   if (additionalDays < 0 || additionalDays >= 5) {
//     return;
//   }
//   const date = new Date();
//   date.setDate(date.getDate() + additionalDays);
//   const day = date.getDay();
//   const dayName = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
//   return dayName[day];
// }

// Función para armar el html del menu semanal
function createHtmlMenuSemanal() {
  let html = '';
  const currentDay = new Date().getDay();
  for (let i = currentDay; i < 5; i++) {
    const menuDay = menuSemanal[i].getDay();
    console.log(menuDay);
    const menuPlatos = menuSemanal[i].getPlatos();
    html += `
      <h1 class="text-center">${menuDay}</h1>
      <div class="card bg-primary-light justify-content-end">
        <div class="card-body d-flex flex-row">
          <img src="${menuPlatos[0].getImagen()}"
          alt="${menuPlatos[0].getPlato()}"
          style="height: 200px; width: 200px;" class="card-img-left">
          <div class="d-flex flex-column flex-grow-1">
            <div class="card-header">
            <h3 class="card-title mx-3">${menuPlatos[0].getPlato()}</h3>
            </div>
            <div class="card-body">
              <p class="card-text mx-3">${menuPlatos[0].getDescripcion()}</p>
            </div>
            <div class="card-footer">
              <div class="d-flex flex-row justify-content-between">
                <p class="card-text mx-3">${menuPlatos[0].getPrecio()} ARS</p>
                <button class="btn btn-primary">Pedir</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  return html;
}

document.querySelector('#menu-semanal').innerHTML = createHtmlMenuSemanal();
