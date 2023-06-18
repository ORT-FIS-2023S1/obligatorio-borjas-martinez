import Plato from "../../domain/plato.js";
import Menu from "../../domain/menu.js";

import { menuSemanal } from "./data.js";

// Función para armar el html del menu semanal
function createHtmlMenuSemanal(menuSemanal) {
  let html = "";
  for (let i = 0; i < 5; i++) {
    const menuDay = menuSemanal[i].getDia();
    const menuPlatos = menuSemanal[i].getPlatos();
    html += `<h1 class="text-start mt-3">${menuDay}</h1>`;

    for (let j = 0; j < menuPlatos.length; j++) {
      html += `<div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-2">
              <img src="${menuPlatos[j].getImagen()}" 
                class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h2 class="card-title">${menuPlatos[j].getTitulo()}</h2>
                <p class="card-text">${menuPlatos[j].getDescripcion()}</p>
                <div class="d-flex justify-content-between">
                  <span class="fs-2">
                    $ ${menuPlatos[j].getPrecio()}
                  </span>
                 
                  <!-- Button trigger modal -->
                  <button type="button" class="btn bg-primary-light" data-bs-toggle="modal" data-bs-target="#editBtn-${menuDay}-${j}" data-dia="${menuDay}" data-indice="${j}">
                    <span class="primary-color icon-section">
                        <i class="material-icons">edit</i>
                    </span>  
                    Editar
                  </button>

                  <!-- Modal -->
                  <div class="modal fade" id="editBtn-${menuDay}-${j}" tabindex="-1" aria-labelledby="editBtnLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h2 class="modal-title" id="editBtnLabel">${menuPlatos[
                            j
                          ].getTitulo()}</h2>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <!-- Formulario -->
                         <form>
                            <div class="mb-3">
                            
                              <label for="nombre-${menuDay}-${j}" class="form-label">Nombre</label>
                              <input type="text" class="form-control" id="nombre-${menuDay}-${j}" value="${menuPlatos[
        j
      ].getTitulo()}">
                              
                              <label for="descripcion-${menuDay}-${j}" class="form-label">Descripción</label>
                              <input type="text" class="form-control" id="descripcion-${menuDay}-${j}" value="${menuPlatos[
        j
      ].getDescripcion()}">

                              <label for="precio-${menuDay}-${j}" class="form-label">Precio</label>
                              <input type="text" class="form-control" id="precio-${menuDay}-${j}" value="${menuPlatos[
        j
      ].getPrecio()}">

                              <label for="tipo-${menuDay}-${j}" class="form-label">Tipo</label>
                              <input type="text" class="form-control" id="tipo-${menuDay}-${j}" value="${menuPlatos[
        j
      ].getTipo()}">

                              <label for="imagen-${menuDay}-${j}" class="form-label">Imagen</label>
                              <input type="text" class="form-control" id="imagen-${menuDay}-${j}" value="${menuPlatos[
        j
      ].getImagen()}">
                            </div>
                          </form> 
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Cerrar</button>
                          <button type="button" class="btn bg-primary-light" data-bs-dismiss="modal" id="save-menu-${menuDay}-${j}" data-indice="${j}" data-dia="${menuDay}" data-titulo="${menuPlatos[
        j
      ].getTitulo()}">Guardar Cambios</button>
                        </div>
                      </div>
                    </div>
                  </div>
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

//Funcion para actualizar el menu semanal
function updateMenuSemanal(menu, plato) {
  plato.setTitulo(menu.titulo);
  plato.setDescripcion(menu.descripcion);
  plato.setPrecio(menu.precio);
  plato.setTipo(menu.tipo);
  plato.setImagen(menu.imagen);
}

// Función para guardar los cambios en el menu semanal
function saveMenuSemanal(dia, indice) {
  const titulo = document.querySelector(`#nombre-${dia}-${indice}`).value;
  const descripcion = document.querySelector(
    `#descripcion-${dia}-${indice}`
  ).value;
  const precio = document.querySelector(`#precio-${dia}-${indice}`).value;
  const tipo = document.querySelector(`#tipo-${dia}-${indice}`).value;
  const imagen = document.querySelector(`#imagen-${dia}-${indice}`).value;
  const menu = { titulo, descripcion, precio, tipo, imagen };
  return menu;
}

// Funcion para buscar el plato por dia y titulo
function findPlatoByDiaAndTitulo(dia, titulo) {
  const menu = menuSemanal.find((menu) => menu.getDia() === dia);
  const plato = menu.getPlatos().find((plato) => plato.getTitulo() === titulo);
  return plato;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#editar-menu-semanal").innerHTML =
    createHtmlMenuSemanal(menuSemanal);

  document
    .querySelector("#editar-menu-semanal")
    .addEventListener("click", handleSaveMenu);
});

function handleSaveMenu(event) {
  // Si el click es en el botón de guardar
  event.preventDefault();
  const button = event.target;
  const id = button.id;
  if (id.startsWith("save-menu-")) {
    const button = event.target;
    const dia = button.dataset.dia;
    const indice = button.dataset.indice;
    const titulo = button.dataset.titulo;

    const menu = saveMenuSemanal(dia, indice);

    // Actualizar el menu semanal
    const plato = findPlatoByDiaAndTitulo(dia, titulo);
    updateMenuSemanal(menu, plato);

    // actualizar el html
    document.querySelector("#editar-menu-semanal").innerHTML =
      createHtmlMenuSemanal(menuSemanal);
  }
}
