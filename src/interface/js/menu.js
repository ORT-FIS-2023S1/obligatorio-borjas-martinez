import {menuSemanal, carrito} from './data.js';
import {mostrarCarrito} from './carrito.js';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#menu-semanal').innerHTML = createHtmlMenuSemanal();
  const btnAgrAlCarrito = document.querySelectorAll('[id^="agregarPlato"]');
  btnAgrAlCarrito.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.id.split('-');
      const menu = id[1];
      const plato = id[2];
      agregarAlCarrito(menuSemanal[menu], menuSemanal[menu].getPlatos()[plato]);
    });
  });
});


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
        `<div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-2">
              <img src="${menuPlatos[j].getImagen()}" 
                class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${menuPlatos[j].getTitulo()}</h5>
                <p class="card-text">${menuPlatos[j].getDescripcion()}</p>
                <div class="d-flex justify-content-between">
                  <span class="fs-2">
                    $ ${menuPlatos[j].getPrecio()}
                  </span>
                  <button id="agregarPlato-${i}-${j}"
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
        <div class="toast-container position-fixed top-0 p-3">
        <div id="liveToast" 
            class="toast" 
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

function agregarAlCarrito(menu, plato) {
  if (carrito.length === 0) {
    carrito.push({dia: menu.getDia(), platos: [{plato, cant: 1}]});
  } else {
    let estaDia = false;
    let estaPlato = false;
    let posMenu = 0;
    let posPlato = 0;
    carrito.forEach((menuExistente, indexMenu) => {
      if (menu.getDia() === menuExistente.dia) {
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
        carrito.push({dia: menu.getDia(), platos: [{plato, cant: 1}]});
      }
    });
    if (estaDia && estaPlato) {
      carrito[posMenu].platos[posPlato].cant += 1;
    }
  }
  mostrarNotificacion();
  mostrarCarrito();
};
