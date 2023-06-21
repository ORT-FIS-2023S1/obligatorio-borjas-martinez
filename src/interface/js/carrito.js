import {carrito, alumno, tutor, comedor, ordenes, resumen} from './data.js';
import Orden from '../../domain/orden.js';
import {actualizarReservas} from './reservas.js';
import {createHistorialHtml} from './historial.js';

import * as bootstrap from 'bootstrap';

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
                      <div class=" text-center">
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
                  <button type="button" class="btn bg-primary-light" 
                    data-bs-toggle="modal" 
                    data-bs-target="#editBtn-${menuDay}-${j}"
                    data-dia="${menuDay}"data-indice="${j}"  
                    data-titulo="${menuPlato[j].plato.getTitulo()}" 
                    data-indice="${j}" 
                    id="btn-delete-menu-${menuDay}-${j}">
                      
                    <span class="primary-color icon-section">
                      <i class="material-icons">delete</i>
                    </span>
                      Eliminar
                  </button>
                </div>
              </div>
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
              <p class="modal-title fs-4" id="editBtnLabel">
                Seguro que quiere eliminar el menu?
              </p>
              <button type="button" class="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close">
              </button>
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
    <button type="button" class="btn bg-primary-light" id="reaizar-pedido">
      <span class="primary-color icon-section">
        <i class="material-icons">done</i>
      </span>
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
// Funcion para eliminar un plato del carrito
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

// Funcion para calcular el total del carrito
function calcularTotal(platos) {
  let total = 0;
  for (let i = 0; i < platos.length; i += 1) {
    total += platos[i].getPrecio();
  }
  return total;
}


function mostrarNotificacion() {
  const htmlNotificacion = `
  <div id="myToastEl" 
      class="toast align-items-center position-absolute  top-0 end-0 m-3
      text-white bg-primary border-0" 
      role="alert" aria-live="assertive" aria-atomic="true">
    <div class="d-flex">
      <div class="toast-body">
        Pedido Realizado con exito
      </div>
      <button type="button" 
        class="btn-close btn-close-white me-2 
        m-auto" data-bs-dismiss="toast" 
        aria-label="Close">
      </button>
    </div>
  </div>
  `;
  sectionCarrito.innerHTML = htmlNotificacion;
  const myToastEl = document.getElementById('myToastEl');
  const myToast = bootstrap.Toast.getOrCreateInstance(myToastEl);
  myToast.show();
};

// Funcion para realizar el pedido
function realizarPedido() {
  if (carrito.length > 0) {
    // Cada orden contiene un unico dia pero puede tener varios platos
    // si el plato tiene cantidad > 1 se agrega dos veces el plato a la orden
    // pero nunca se agrega la cantidad
    for (let i = 0; i < carrito.length; i += 1) {
      for (let j = 0; j < carrito[i].platos.length; j += 1) {
        const orden = new Orden();
        const plato = [];
        orden.setDia(dias[carrito[i].dia]);
        // Si la cantidad es mayor a 1, se agrega todas las veces
        for (let k = 0; k < carrito[i].platos[j].cant; k += 1) {
          plato.push(carrito[i].platos[j].plato);
        }
        orden.setPlatos(plato);
        orden.setTotal(calcularTotal(plato));
        orden.setMetodoPago('Efectivo');
        orden.setComedor(comedor.getColegio());
        orden.setAlumno(alumno);
        orden.setTutor(tutor);
        // Agregar la orden al array de ordenes
        ordenes.push(orden);
      }
    }
    resumen.setOrdenes(ordenes);
    resumen.setTotalGastos(ordenes[0].getTotal());
    // Vaciar el carrito con un pop hasta que este vacio
    while (carrito.length > 0) {
      carrito.pop();
    }
    // Mostrar el carrito
    mostrarCarrito();
    // Mostrar el mensaje de pedido realizado
    // mostrarMensaje('Pedido realizado con exito', 'success');
    // Mostar en historial de pedidos
    actualizarReservas();
    // Mostrar las reservas
    createHistorialHtml();
  }
  mostrarNotificacion();
}

export {mostrarCarrito};
