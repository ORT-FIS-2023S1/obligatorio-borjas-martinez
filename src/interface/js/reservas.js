import Reserva from '../../domain/reserva.js';
import {resumen} from './data.js';
import {reservas} from './data.js';

const dias = {
  Lunes: 0,
  Martes: 1,
  Miercoles: 2,
  Jueves: 3,
  Viernes: 4,
};

function agregarOrdenes() {
  const historialOrdenes = resumen.getOrdenes();
  historialOrdenes.forEach((orden) => {
    // Quiero recorrey las ordenes para agregar las reservas
    // Si el plato ya esta en el array reservas, sumo la cantidad
    // Si no esta, lo agrego al array reservas
    orden.getPlatos().forEach((plato)=>{
      const dia = dias[orden.getDia()];
      const reserva = new Reserva(
          plato,
          orden.getDia(),
          orden.getComedor(),
          1,
      );
      if (reservas[dia][orden.getDia()].length === 0) {
        reservas[dia][orden.getDia()].push(reserva);
      } else {
        let existe = false;
        for (let i = 0; i < reservas[dia][orden.getDia()].length; i++) {
          if (reservas[dia][orden.getDia()][i].getPlatos().getTitulo() ===
          reserva.getPlatos().getTitulo()) {
            reservas[dia][orden.getDia()][i].setCantidad(
                reservas[dia][orden.getDia()][i].getCantidad() +
                reserva.getCantidad(),
            );
            existe = true;
          }
        }
        if (!existe) {
          reservas[dia][orden.getDia()].push(reserva);
        }
      }
    });
  });
}

// Tengo todas las reservas en el array reservas
// Funcion donde recorro el array reservas y muestro las reservas
function createHtmlReservas() {
  agregarOrdenes();
  let html = '';

  reservas.forEach((dia) => {
    const nombreDia = Object.keys(dia)[0];
    const platos = dia[nombreDia];

    html += `<h1 class="text-start mt-3">${nombreDia}</h1>`;

    platos.forEach((plato) => {
      const tituloPlato = plato.platos.titulo;
      const cantidad = plato.cantidad;
      const imagenPlato = plato.platos.imagen;

      html += `
        <div class="card mb-3 bg-primary-light">
          <div class="row g-0">
            <div class="col-md-2">
              <img src="${imagenPlato}" 
              class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-10">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p class="card-text fs-4">${tituloPlato}</p>
                  <p class="card-text fs-5">Cantidad: ${cantidad}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  });
  return html;
}

// Funcion que se llama desde el carrito para actualizar las reservas
function actualizarReservas() {
  document.querySelector('#ver-reservas-semanal')
      .innerHTML = createHtmlReservas();
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#ver-reservas-semanal')
      .innerHTML = createHtmlReservas();
});

export {actualizarReservas};
