import {resumen} from './data.js';

const historialOrdenes = resumen.getOrdenes();

function createHistorialHtml() {
  const historialOrdenesContainer =
  document.querySelector('#historial-compras');
  historialOrdenesContainer.innerHTML = '';

  historialOrdenes.forEach((orden) => {
    orden.getPlatos().forEach((plato)=>{
      const ordenContainer = document.createElement('div');
      ordenContainer.classList.add('orden', 'card', 'bg-primary-light', 'mb-3');

      const ordenBody = document.createElement('div');
      ordenBody.classList.add('card-body', 'd-flex', 'flex-column');

      const ordenPrecioFecha = document.createElement('div');
      ordenPrecioFecha.classList.add('d-flex', 'justify-content-between');

      const ordenPrecio = document.createElement('div');
      ordenPrecio.classList.add('orden-precio');
      ordenPrecio.textContent = `$${plato.getPrecio()}`;

      const ordenFecha = document.createElement('p');
      ordenFecha.classList.add('orden-fecha', 'm-0');
      ordenFecha.textContent = `${plato.getDescripcion()}`;

      const ordenTitulo = document.createElement('p');
      ordenTitulo.classList.add('orden-titulo', 'm-0');
      ordenTitulo.textContent = plato.getTitulo();

      ordenBody.appendChild(ordenTitulo);
      ordenContainer.appendChild(ordenBody);
      ordenPrecioFecha.appendChild(ordenFecha);
      ordenPrecioFecha.appendChild(ordenPrecio);
      ordenBody.appendChild(ordenPrecioFecha);

      historialOrdenesContainer.appendChild(ordenContainer);
    });
  });
}

document.addEventListener('DOMContentLoaded', createHistorialHtml);


