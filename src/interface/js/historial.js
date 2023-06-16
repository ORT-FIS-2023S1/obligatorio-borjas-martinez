const historialOrdenes = [
  {
    precio: 200,
    titulo: 'Pasta Primavera',
    fecha: '2023-06-10',
  },
  {
    precio: 150,
    titulo: 'Hamburguesa de lentejas',
    fecha: '2023-06-13',
  },
  {
    precio: 200,
    titulo: 'Pizza de vegetales',
    fecha: '2023-06-14',
  },
  {
    precio: 50,
    titulo: 'Café',
    fecha: '2023-06-10',
  },
  {
    precio: 60,
    titulo: 'Jugo de naranja',
    fecha: '2023-06-11',
  },
  {
    precio: 80,
    titulo: 'Croissant',
    fecha: '2023-06-12',
  },
];

function createHistorialHtml() {
  const historialOrdenesContainer =
  document.querySelector('#historial-compras');
  historialOrdenesContainer.innerHTML = '';

  historialOrdenes.forEach((orden) => {
    const ordenContainer = document.createElement('div');
    ordenContainer.classList.add('orden', 'card', 'bg-primary-light', 'mb-3');

    const ordenBody = document.createElement('div');
    ordenBody.classList.add('card-body', 'd-flex', 'flex-column');

    const ordenPrecioFecha = document.createElement('div');
    ordenPrecioFecha.classList.add('d-flex', 'justify-content-between');

    const ordenPrecio = document.createElement('div');
    ordenPrecio.classList.add('orden-precio');
    ordenPrecio.textContent = `-$${orden.precio}`;

    const ordenFecha = document.createElement('p');
    ordenFecha.classList.add('orden-fecha', 'm-0');
    ordenFecha.textContent = `${orden.fecha}`;

    const ordenTitulo = document.createElement('p');
    ordenTitulo.classList.add('orden-titulo', 'm-0');
    ordenTitulo.textContent = orden.titulo;

    ordenPrecioFecha.appendChild(ordenPrecio);
    ordenPrecioFecha.appendChild(ordenFecha);
    ordenBody.appendChild(ordenPrecioFecha);
    ordenBody.appendChild(ordenTitulo);

    ordenContainer.appendChild(ordenBody);
    historialOrdenesContainer.appendChild(ordenContainer);
  });
}

document.addEventListener('DOMContentLoaded', createHistorialHtml);


