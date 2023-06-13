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
  document.querySelector('#historial-ordenes');
  historialOrdenesContainer.innerHTML = '';

  historialOrdenes.forEach((orden) => {
    const ordenContainer = document.createElement('div');
    ordenContainer.classList.add('orden');

    const ordenPrecio = document.createElement('p');
    ordenPrecio.classList.add('orden-precio');
    ordenPrecio.textContent = '$' + orden.precio;

    const ordenTitulo = document.createElement('p');
    ordenTitulo.classList.add('orden-titulo');
    ordenTitulo.textContent = orden.titulo;

    const ordenFecha = document.createElement('p');
    ordenFecha.classList.add('orden-fecha');
    ordenFecha.textContent = orden.fecha;

    ordenContainer.appendChild(ordenPrecio);
    ordenContainer.appendChild(ordenTitulo);
    ordenContainer.appendChild(ordenFecha);

    historialOrdenesContainer.appendChild(ordenContainer);
  });
}

document.addEventListener('DOMContentLoaded', createHistorialHtml);
