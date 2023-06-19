import Plato from '../../domain/plato.js';
import {menuSemanal} from './data.js';

// Función para armar el html del menu semanal
function createHtmlMenuSemanal(menuSemanal) {
  let html = '';
  html += `
  <!-- Botón para agregar un nuevo plato -->
  <div class="d-flex justify-content-end">
  <button type="button" class="btn bg-primary-light" 
    data-bs-toggle="modal" data-bs-target="#addBtn">
    <span class="primary-color icon-section">
        <i class="material-icons">add</i>
    </span>  
    Agregar un nuevo plato
  </button>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="addBtn" tabindex="-1" 
    aria-labelledby="addBtnLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <p class="card-text fs-4 modal-title" id="addBtnLabel">
          Agregar plato</p>
          <button type="button" class="btn-close" 
            data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- Formulario -->
         <form>
            <div class="mb-3">
              <label for="dia-agregar" class="form-label">
                Dia de la semana
              </label>
              <select class="form-select" aria-label="Default
                 select example" id="dia-agregar">
                <option value="Lunes">Lunes</option>
                <option value="Martes">Martes</option>
                <option value="Miercoles">Miercoles</option>
                <option value="Jueves">Jueves</option>
                <option value="Viernes">Viernes</option>
              </select>

              <label for="nombre-agregar" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="nombre-agregar" >
              
              <label for="descripcion-agregar" class="form-label">
                Descripción
              </label>
              <input type="text" class="form-control" id="descripcion-agregar">

              <label for="precio-agregar" class="form-label">Precio</label>
              <input type="text" class="form-control" id="precio-agregar">

              <label for="tipo-agregar" class="form-label">Tipo</label>
              <select class="form-select" aria-label="Default
                select example" id="tipo-agregar">
                <option value="Reguar">Reguar</option>
                <option value="Vegetariano">Vegetariano</option>
              </select>

              <label for="imagen-agregar" class="form-label">Imagen</label>
              <input type="text" class="form-control" id="imagen-agregar">
            </div>
          </form> 
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-dark" 
            data-bs-dismiss="modal">Cerrar</button>
          <button type="button" class="btn bg-primary-light" 
            data-bs-dismiss="modal" id="btn-agregar-plato">
              Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  </div>
`;
  for (let i = 0; i < 5; i++) {
    const menuDay = menuSemanal[i].getDia();
    const menuPlatos = menuSemanal[i].getPlatos();
    html += `<h1 class="text-start mt-3 menu-day">${menuDay}</h1>`;

    for (let j = 0; j < menuPlatos.length; j++) {
      html += `
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-2">
              <img src="${menuPlatos[j].getImagen()}" 
                class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-10">
              <div class="card-body py-3 px-4">
                <p class="card-text fs-4 card-title">
                ${menuPlatos[j].getTitulo()}</p>
                <div class="d-flex justify-content-between mb-0">
                  <p class="card-text description">
                  ${menuPlatos[j].getDescripcion()}</p>
                  <p class="card-text price fs-4">$
                  ${menuPlatos[j].getPrecio()}</p>
                </div>
                 
                <div class="d-flex">
                  <p class="card-text type fs-5">Tipo: 
                  ${menuPlatos[j].getTipo()}</p>
                  <div class="justify-content-end ms-auto">
                    <!-- Button trigger modal -->
                    <button type="button" class="btn bg-primary-light me-2"
                      data-bs-toggle="modal" 
                      data-bs-target="#editBtn-${menuDay}-${j}"
                      data-dia="${menuDay}" data-indice="${j}">
                        <span class="primary-color icon-section">
                            <i class="material-icons">edit</i>
                        </span>  
                        Editar
                    </button>
                    <button type="button" class="btn bg-primary-light" 
                      data-dia="${menuDay}"  
                      data-titulo="${menuPlatos[j].getTitulo()}" 
                      data-indice="${j}" 
                      id="btn-delete-menu-${menuDay}-${j}">
                        <span class="primary-color icon-section">
                            <i class="material-icons">delete</i>
                        </span>
                        Eliminar
                    </button>
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
                            <p class="card-text fs-4 modal-title" 
                            id="editBtnLabel">
                              ${menuPlatos[j].getTitulo()}
                            </p>
                            <button type="button" class="btn-close" 
                              data-bs-dismiss="modal" 
                              aria-label="Close">
                            </button>
                          </div>
                          <div class="modal-body">
                            <!-- Formulario -->
                              <form>
                                <div class="mb-3">
                                  <label for="nombre-${menuDay}-${j}" 
                                    class="form-label">
                                      Nombre
                                  </label>
                                  <input type="text" 
                                    class="form-control" 
                                    id="nombre-${menuDay}-${j}" 
                                    value="${menuPlatos[j].getTitulo()}">
                            
                                  <label for="descripcion-${menuDay}-${j}" 
                                    class="form-label">
                                      Descripción
                                  </label>
                                  <input type="text" 
                                    class="form-control" 
                                    id="descripcion-${menuDay}-${j}" 
                                    value="${menuPlatos[j].getDescripcion()}"
                                  >
                                  <label for="precio-${menuDay}-${j}" 
                                    class="form-label">
                                      Precio
                                  </label>
                                  <input type="text" 
                                    class="form-control" 
                                    id="precio-${menuDay}-${j}" 
                                    value="${menuPlatos[j].getPrecio()}"
                                  >
                                  <label for="tipo-${menuDay}-${j}" 
                                    class="form-label">
                                      Tipo
                                  </label>
                                  <input type="text" 
                                    class="form-control" 
                                    id="tipo-${menuDay}-${j}" 
                                    value="${menuPlatos[j].getTipo()}"
                                  >
                                  <label for="imagen-${menuDay}-${j}" 
                                    class="form-label">
                                      Imagen
                                  </label>
                                  <input type="text" 
                                    class="form-control" 
                                    id="imagen-${menuDay}-${j}" 
                                    value="${menuPlatos[j].getImagen()}"
                                  >
                                </div>
                              </form> 
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-dark" 
                              data-bs-dismiss="modal">
                                Cerrar
                            </button>
                            <button type="button" 
                              class="btn bg-primary-light" 
                              data-bs-dismiss="modal" 
                              id="btn-save-menu-${menuDay}-${j}" 
                              data-indice="${j}" data-dia="${menuDay}" 
                              data-titulo="${menuPlatos[j].getTitulo()}">
                                Guardar Cambios
                            </button>
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

// Funcion para actualizar el menu semanal
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
      `#descripcion-${dia}-${indice}`,
  ).value;
  const precio = document.querySelector(`#precio-${dia}-${indice}`).value;
  const tipo = document.querySelector(`#tipo-${dia}-${indice}`).value;
  const imagen = document.querySelector(`#imagen-${dia}-${indice}`).value;
  const menu = {titulo, descripcion, precio, tipo, imagen};
  return menu;
}

// Funcion para buscar el plato por dia y titulo
function findPlatoByDiaAndTitulo(dia, titulo) {
  const menu = menuSemanal.find((menu) => menu.getDia() === dia);
  const plato = menu.getPlatos().find((plato) => plato.getTitulo() === titulo);
  return plato;
}

function handleAgregarPlato() {
  // Lógica para abrir el modal y permitir al usuario agregar un nuevo plato
  const nombre = document.querySelector('#nombre-agregar').value;
  const descripcion = document.querySelector('#descripcion-agregar').value;
  const precio = document.querySelector('#precio-agregar').value;
  const tipo = document.querySelector('#tipo-agregar').value;
  const imagen = document.querySelector('#imagen-agregar').value;
  const plato = new Plato(tipo, nombre, descripcion, precio, imagen);
  const dia = document.querySelector('#dia-agregar').value;
  const menu = menuSemanal.find((menu) => menu.getDia() === dia);
  menu.addPlato(plato);

  // Agregar el plato al menu semanal correspondiente al dia
  document.querySelector('#editar-menu-semanal').innerHTML =
    createHtmlMenuSemanal(menuSemanal);
}

function handleSaveMenu(button) {
  const dia = button.dataset.dia;
  const indice = button.dataset.indice;
  const titulo = button.dataset.titulo;

  const menu = saveMenuSemanal(dia, indice);
  const plato = findPlatoByDiaAndTitulo(dia, titulo);
  updateMenuSemanal(menu, plato);

  document.querySelector('#editar-menu-semanal').innerHTML =
      createHtmlMenuSemanal(menuSemanal);
}

function handleDeleteMenu(button) {
  const dia = button.dataset.dia;
  const titulo = button.dataset.titulo;
  const menu = menuSemanal.find((menu) => menu.getDia() === dia);
  const plato = menu.getPlatos().find((plato) => plato.titulo === titulo);

  menu.deletePlato(plato);
  document.querySelector('#editar-menu-semanal').innerHTML =
    createHtmlMenuSemanal(menuSemanal);
}

document.addEventListener('DOMContentLoaded', () => {
  const sectionEditMenu = document.querySelector('#editar-menu-semanal');
  sectionEditMenu.innerHTML =
    createHtmlMenuSemanal(menuSemanal);

  // Escuchar el evento click en el documento
  sectionEditMenu.addEventListener('click', (event) => {
    // Si el click es en el botón de guardar
    event.preventDefault();
    const button = event.target;

    const id = button.id;
    if (id.startsWith('btn-save-menu-')) {
      handleSaveMenu(button);
    }
    if (id.startsWith('btn-agregar-plato')) {
      handleAgregarPlato();
    }
    if (id.startsWith('btn-delete-menu-')) {
      handleDeleteMenu(button);
    }
  });
});

