import {menuSemanal, carrito} from './data.js';
import {mostrarCarrito} from './carrito.js';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// Asigno un numero a cada dia de la semana siendo lunes el 0
const dias = {
  Lunes: 0,
  Martes: 1,
  Miercoles: 2,
  Jueves: 3,
  Viernes: 4,
};

document.addEventListener('DOMContentLoaded', () => {
  const selectMenu = document.querySelector('#menu-semanal');
  selectMenu.innerHTML = createHtmlMenuSemanal();

  // Escuchar cualquier click dentro del menu semanal
  selectMenu.addEventListener('click', (e) => {
    const btn = e.target;
    const btnId = btn.id;
    if (btnId.includes('agregarPlato')) {
      const menuACargar = {...menuSemanal};
      const titulo = btn.dataset.plato;
      const dia = dias[btn.dataset.dia];
      const plato = menuACargar[dia].getPlatos().find((plato) => {
        return plato.getTitulo() === titulo;
      });
      agregarAlCarrito(dia, plato);
    }
  });
});

// Funcion para actualizar menu from edit menu
function actualizarMenuSemanal() {
  const selectMenu = document.querySelector('#menu-semanal');
  selectMenu.innerHTML = createHtmlMenuSemanal();
}

// Función para armar el html del menu semanal
function createHtmlMenuSemanal() {
  let html = '';
  const currentDay = 0;
  for (let i = currentDay; i < 5; i++) {
    const menuDay = menuSemanal[i].getDia();
    const menuPlatos = menuSemanal[i].getPlatos();
    html += `<h1 class="text-start mt-3">${menuDay}</h1>`;
    for (let j = 0; j < menuPlatos.length; j++) {
      html +=
        `<div class="card mb-2">
          <div class="row g-0">
            <div class="col-md-2">
              <img src="${menuPlatos[j].getImagen()}" 
                class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-10">
              <div class="card-body">
                <p class="card-title fs-4">${menuPlatos[j].getTitulo()}</p>
                <p class="card-text">${menuPlatos[j].getDescripcion()}</p>
                <div class="d-flex justify-content-between">
                  <span class="fs-2">
                    $ ${menuPlatos[j].getPrecio()}
                  </span>
                  <button id="agregarPlato-${i}-${j}"
                    data-plato="${menuPlatos[j].getTitulo()}"
                    data-dia="${menuDay}"
                      type="button" 
                      class="btn bg-primary-light">
                        <span class="primary-color icon-section">
                          <i class="material-icons">shopping_cart</i>
                        </span>
                        Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="toast-container position-fixed top-0 end-0 p-3">
          <div id="liveToast" 
              class="toast bg-primary-light" 
              role="alert" 
              aria-live="assertive" 
              aria-atomic="true">
            <div class="toast-header">
              <strong class="me-auto">Comedor Virtual</strong>
              <button type="button"
                class="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close">
              </button>
            </div>
            <div class="toast-body">
              Menu agregado correctamente
            </div>
          </div>
      </div>
      `;
    }
  }
  return html;
}

function mostrarNotificacion() {
  const toastLiveExample = document.getElementById('liveToast');
  const toastBoot = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastBoot.show();
};

function agregarAlCarrito(dia, plato) {
  if (carrito.length === 0) {
    carrito.push({dia: dia, platos: [{plato, cant: 1}]});
  } else {
    let estaDia = false;
    let estaPlato = false;
    let posMenu = 0;
    let posPlato = 0;
    carrito.forEach((menuExistente, indexMenu) => {
      if (dia === menuExistente.dia) {
        estaDia = true;
        posMenu = indexMenu;
        menuExistente.platos.forEach((platoExistente, indexPlato) => {
          if (platoExistente.plato.getTitulo() === plato.getTitulo()) {
            estaPlato = true;
            posPlato = indexPlato;
          }
          if (!estaPlato && indexPlato === menuExistente.platos.length - 1) {
            menuExistente.platos.push({plato, cant: 1});
          }
        });
      }
      if (!estaDia && indexMenu === carrito.length - 1) {
        carrito.push({dia: dia, platos: [{plato, cant: 1}]});
      }
    });
    if (estaDia && estaPlato) {
      carrito[posMenu].platos[posPlato].cant += 1;
    }
  }
  mostrarNotificacion();
  mostrarCarrito();
};

export {actualizarMenuSemanal, agregarAlCarrito};
