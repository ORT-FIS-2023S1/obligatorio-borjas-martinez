import {carrito} from './data.js';
import Orden from '../../domain/orden.js';

// carrito = [ {dia: string, platos: [ {plato: plato, cant: num } ]} ]
// carrito = [ {Lunes, [ {spaggeti, 2}, {hamburguesa , 3} ]} ]

const dias = {
  0: 'Lunes',
  1: 'Martes',
  2: 'Miercoles',
  3: 'Jueves',
  4: 'Viernes',
};

function createHtmlCarrito() {
  // ordeno el carrito por dia
  carrito.sort((a, b) => {
    return a.dia - b.dia;
  });
  let html = '';
  for (let i = 0; i < carrito.length; i++) {
    // Obtengo el dia segun el indice en dias
    const menuDay = dias[carrito[i].dia];
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
            <div class="col-md-10">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <h5 class="card-title">${menuPlato[j].plato.getTitulo()}</h5>
                  <span class="fs-2">
                    $ ${menuPlato[j].plato.getPrecio()}
                  </span>
                </div>
                <p class="card-text">${menuPlato[j].plato.getDescripcion()}</p>
  
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
  // Boton para enviar el pedido
  html += `
  <div class="d-flex justify-content-end">
    <button type="button" class="btn btn-primary" id="reaizar-pedido">
      Realizar pedido
    </button>
  </div>
  `;
  return html;
}
const sectionCarrito = document.querySelector('#carrito');
function mostrarCarrito() {
  sectionCarrito.innerHTML = createHtmlCarrito();
}

document.addEventListener('DOMContentLoaded', () => {
  sectionCarrito.addEventListener('click', (e) => {
    const btn = e.target.id;
    if (btn.includes('eliminarMenu')) {
      eliminarPlato(btn);
    }
    if (btn.includes('addCant')) {
      aumentarCant(btn);
    }
    if (btn.includes('removeCant')) {
      disminuirCant(btn);
    }
    // Si el boton es el de realizar pedido
    if (btn === 'reaizar-pedido') {
      realizarPedido();
    }
  });
});

// Funcion para aumentar la cantidad de un plato
function aumentarCant(btnAgregarCant) {
  const menuId = btnAgregarCant.split('-');
  const posMenu = menuId[1];
  const posPlato = menuId[2];
  carrito[posMenu].platos[posPlato].cant += 1;
  mostrarCarrito();
}
// // Funcion para disminuir la cantidad de un plato
function disminuirCant(btnQuitarCant) {
  const menuId = btnQuitarCant.split('-');
  const posMenu = menuId[1];
  const posPlato = menuId[2];
  if (carrito[posMenu].platos[posPlato].cant > 0) {
    carrito[posMenu].platos[posPlato].cant -= 1;
  }
  mostrarCarrito();
}
function eliminarPlato(btnElimModales) {
  const menuId = btnElimModales.split('-');
  const posMenu = menuId[1];
  const posPlato = menuId[2];
  carrito[posMenu].platos.splice(posPlato, 1);
  // Si el menu queda vacio, lo elimino
  if (carrito[posMenu].platos.length === 0) {
    carrito.splice(posMenu, 1);
  }
  mostrarCarrito();
}

// Funcion para realizar el pedido
function realizarPedido() {
  if (carrito.length === 0) {
    //
  } else {
    // Crear el objeto orden
    const orden = new Orden();
    // Datos de la orden
    // this.platos = platos;
    // this.total = total;
    // this.metodoPago = metodoPago;
    // this.fecha = fecha;
    // this.comedor = comedor;
    // this.alumno = alumno;
    // this.tutor = tutor;

    // Agregar los menus al objeto orden
    for (let i = 0; i < carrito.length; i += 1) {
      const dia = dias[carrito[i].dia];
      // orden.console.log(dia);
      // console.log(carrito[i]);
    }
    // Agregar el objeto orden al arreglo de ordenes
    // ordenes.push(orden);
    // console.log(ordenes);
    // Limpiar el carrito
    carrito = [];
    // Mostrar el carrito
    mostrarCarrito();
  }
}


export {mostrarCarrito};
