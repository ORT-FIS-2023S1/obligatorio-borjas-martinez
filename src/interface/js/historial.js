import Plato from '../../domain/plato.js';

const historialOrdenes = [
  {
    Plato: new Plato('Vegetariano', 'Pasta Primavera',
        'Pasta saludable', '200', 'https://picsum.photos/200'),
  },
  {
    Plato: new Plato('Regular', 'Hamburguesa de lentejas',
        'Hamburguesa saludable', '150', 'https://picsum.photos/200'),
  },
  {
    Plato: new Plato('Regular', 'Milanesa de pechuga premium',
        'Milanesa al pan de pollo', '400', 'https://picsum.photos/200'),
  },
];

function createHistorialHtml() {
  const historialOrdenesContainer =
  document.querySelector('#historial-compras');
  historialOrdenesContainer.innerHTML = '';

  historialOrdenes.forEach((orden) => {
    const plato = orden.Plato;
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

    ordenPrecioFecha.appendChild(ordenPrecio);
    ordenPrecioFecha.appendChild(ordenFecha);
    ordenBody.appendChild(ordenPrecioFecha);
    ordenBody.appendChild(ordenTitulo);

    ordenContainer.appendChild(ordenBody);
    historialOrdenesContainer.appendChild(ordenContainer);
  });
}

document.addEventListener('DOMContentLoaded', createHistorialHtml);


