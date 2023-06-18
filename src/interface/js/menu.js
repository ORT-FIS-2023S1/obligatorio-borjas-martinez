import Plato from '../../domain/plato.js';
import Menu from '../../domain/menu.js';

import { menuSemanal } from "./data.js";

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#menu-semanal').innerHTML = createHtmlMenuSemanal();
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
                  <button type="button" class="btn bg-primary-light">
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
      `;
    }
  }
  return html;
}

