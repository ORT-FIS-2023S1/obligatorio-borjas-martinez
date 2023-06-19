import Reserva from '../../domain/reserva.js';
import {resumen} from './data.js';
import {reservas} from './data.js';

const historialOrdenes = resumen.getOrdenes();

const dias = {
  Lunes: 0,
  Martes: 1,
  Miercoles: 2,
  Jueves: 3,
  Viernes: 4,
};

historialOrdenes.forEach((orden) => {
  const dia = orden.getDia();
  const numeroDia = dias[dia];
  const platos = orden.getPlatos();
  const comedor = orden.getComedor();

  platos.forEach((plato) => {
    // Bandera para indicar si el plato ya existe en la reserva
    let platoExistente = false;

    for (let k = 0; k < reservas[numeroDia][dia].length; k++) {
      const reserva = reservas[numeroDia][dia][k];
      const platoReserva = reserva.platos.titulo;

      if (platoReserva === plato.titulo) {
        reserva.setCantidad(reserva.getCantidad() + 1);
        platoExistente = true; // El plato ya existe en la reserva
        break; // No es necesario seguir recorriendo las reservas
      }
    }

    if (!platoExistente) {
      const reserva = new Reserva(
          plato,
          dia,
          comedor,
          1,
      );
      reservas[numeroDia][dia].push(reserva);
    }
  });
});


// Tengo todas las reservas en el array reservas
// Funcion donde recorro el array reservas y muestro las reservas
function createHtmlReservas() {
  let html = '';
  // Recorrer por días
  for (let i = 0; i < reservas.length; i++) {
    // Obtiene el objeto del día (por ejemplo, Lunes, Martes, etc.)
    const dia = reservas[i];
    // Obtiene el nombre del día de la semana (Lunes, Martes, etc.)
    const diaSemana = Object.keys(dia)[0];

    // Agrego el día al html
    html += `<h1 class="text-start mt-3">${diaSemana}</h1>`;

    // Obtiene el array de platos del día
    const platos = dia[diaSemana];

    // Recorrer por platos
    for (let j = 0; j < platos.length; j++) {
      const plato = platos[j];
      const tituloPlato = plato.platos.titulo;

      // Agrego el plato al html
      html +=
        `<div class="card mb-3 bg-primary-light">
          <div class="row g-0">
            <div class="col-md-2">
              <img src="${plato.platos.imagen}"
                class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-10">
              <div class="card-body">

              <div class="d-flex justify-content-between">
              <p class="card-text fs-4">${tituloPlato}</p>
              <p class="card-text fs-5">Cantidad: ${plato.cantidad}</p>
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

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#ver-reservas-semanal')
      .innerHTML = createHtmlReservas();
});
