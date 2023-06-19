import {carrito} from './data.js';

// carrito = [ {dia: string, platos: [ {plato: plato, cant: num } ]} ]
// carrito = [ {Lunes, [ {spaggeti, 2}, {hamburguesa , 3} ]} ]

function createHtmlCarrito() {
  console.log('creandoHTML');
  let html = '';
  for (let i = 0; i < carrito.length; i++) {
    const menuDay = carrito[i].dia;
    const menuPlato = carrito[i].platos;
    html += `<h1 class="text-start mt-3">${menuDay}</h1>`;
    for (let j = 0; j < menuPlato.length; j++) {
      html +=
        `<div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-2">
              <img src="${menuPlato[j].plato.getImagen()}" 
                class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${menuPlato[j].plato.getTitulo()}</h5>
                <p class="card-text">${menuPlato[j].plato.getDescripcion()}</p>
                <div class="d-flex justify-content-between">
                  <span class="fs-2">
                    $ ${menuPlato[j].plato.getPrecio()}
                  </span>
                  <div class="d-flex justify-content-end">
                    <!-- Button trigger modal -->
                    <div class="rounded-2 p-2 bg-primary-light me-2">
                        <div class="primary-color text-center">
                            <span>Cantidad</span>
                        </div>
                        <div class="d-flex flex-wrap">
                          <button 
                          type="button"
                          id="removeCant-${i}-${j}"
                          class="btn py-1 px-2 mx-2 btn-success bg-primary">
                          <i class="material-icons fs-6">remove</i>
                          </button>
                          <span id="cantPlatos-${i}-${j}" >
                            ${menuPlato[j].cant}
                          </span>
                          <button 
                          type="button"
                            id="addCant-${i}-${j}"
                          class="btn py-1 px-2 mx-2 btn-success bg-primary">
                          <i class="material-icons fs-6">add</i>
                          </button>
                        </div>   
                    </div>
                    <button type="button" class="btn bg-danger" 
                      data-bs-toggle="modal" 
                      data-bs-target="#editBtn-${menuDay}-${j}"
                      data-dia="${menuDay}"data-indice="${j}"  
                      data-titulo="${menuPlato[j].plato.getTitulo()}" 
                      data-indice="${j}" 
                      id="btn-delete-menu-${menuDay}-${j}">
                        <span class="icon-section">
                            <i class="material-icons">delete</i>
                        </span>
                        Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="toast-container position-fixed end-0 p-3">
        <div id="liveToast" 
            class="toast" 
            role="alert" 
            aria-live="assertive" 
            aria-atomic="true">
          <div class="toast-header">
            <strong class="me-auto">Comedor Virtual</strong>
            <small>11 mins ago</small>
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

      <!-- Modal -->
<div class="modal fade" 
  id="editBtn-${menuDay}-${j}" 
  tabindex="-1" aria-labelledby="editBtnLabel" 
  aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title" id="editBtnLabel">
          Seguro que quiere eliminar el menu?
        </h2>
        <button type="button" class="btn-close" 
          data-bs-dismiss="modal" 
          aria-label="Close">
        </button>
      </div>
      <div class="modal-body">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-dark" 
          data-bs-dismiss="modal">
            Cerrar
        </button>
        <button type="button" 
          class="btn bg-primary-light" 
          data-bs-dismiss="modal"
          id="eliminarMenu-${i}-${j}"
          data-menu="${i}" data-plato="${j}" >
            Eliminar
        </button>
      </div>
    </div>
  </div>
</div>
      `;
    }
  }
  return html;
}
const sectionCarrito = document.querySelector('#carrito');
function mostrarCarrito() {
  sectionCarrito.innerHTML = createHtmlCarrito();

  const btnAgregarCant = document.querySelectorAll('[id^="addCant"]');
  const btnQuitarCant = document.querySelectorAll('[id^="removeCant"]');

  btnAgregarCant.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const menuId = e.target.id.split('-');
      const posMenu = menuId[1];
      const posPlato = menuId[2];
      carrito[posMenu].platos[posPlato].cant += 1;
      const cantPlatosActualizado = carrito[posMenu].platos[posPlato].cant;
      const cantPlatosSpan = document.querySelectorAll('[id^="cantPlatos"]');
      cantPlatosSpan.forEach((span) => {
        if (span.id === `cantPlatos-${posMenu}-${posPlato}`) {
          span.textContent = cantPlatosActualizado;
        }
      });
    });
  });
  btnQuitarCant.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const menuId = e.target.id.split('-');
      const posMenu = menuId[1];
      const posPlato = menuId[2];
      if (carrito[posMenu].platos[posPlato].cant > 0) {
        carrito[posMenu].platos[posPlato].cant -= 1;
      }
      const cantPlatosActualizado = carrito[posMenu].platos[posPlato].cant;
      const cantPlatosSpan = document.querySelectorAll('[id^="cantPlatos"]');
      cantPlatosSpan.forEach((span) => {
        if (span.id === `cantPlatos-${posMenu}-${posPlato}`) {
          span.textContent = cantPlatosActualizado;
        }
      });
    });
  });

  const btnEliminarModal = document.querySelectorAll('[id^="eliminarMenu"]');
  eliminarPlato(btnEliminarModal);
}

function eliminarPlato(btnElimModales) {
  btnElimModales.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const menuId = e.target.id.split('-');
      const posMenu = menuId[1];
      const posPlato = menuId[2];
      carrito[posMenu].platos.splice(posPlato, 1);
      sectionCarrito.innerHTML = createHtmlCarrito();
    });
  });
}

export {mostrarCarrito};
