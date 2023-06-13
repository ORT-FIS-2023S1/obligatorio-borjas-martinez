const menuSemanal = [
  {
    dia: 'Lunes',
    platos: [
      {
        tipo: 'Regular',
        plato: 'Spaghetti Bolognese',
        descripcion: 'Deliciosa pasta con salsa bolognesa casera',
        precio: 200,
        imagen: 'https://picsum.photos/200',
      },
      {
        tipo: 'Vegetariano',
        plato: 'Pasta Primavera',
        descripcion: 'Pasta con vegetales frescos de temporada',
        precio: 200,
        imagen: 'https://picsum.photos/200',
      },
    ],
  },
  {
    dia: 'Martes',
    platos: [
      {
        tipo: 'Regular',
        plato: 'Pollo a la parrilla',
        descripcion: 'Jugoso pollo a la parrilla con verduras',
        precio: 200,
        imagen: 'https://picsum.photos/200',
      },
      {
        tipo: 'Vegetariano',
        plato: 'Tofu a la parrilla',
        descripcion: 'Tofu marinado a la parrilla con vegetales',
        precio: 200,
        imagen: 'https://picsum.photos/200',
      },
    ],
  },
  {
    dia: 'Miércoles',
    platos: [
      {
        tipo: 'Regular',
        plato: 'Ensalada César',
        descripcion: 'Fresca ensalada con pollo, lechuga y aderezo César',
        precio: 200,
        imagen: 'https://picsum.photos/200',
      },
      {
        tipo: 'Vegetariano',
        plato: 'Ensalada Mediterránea',
        descripcion: 'Ensalada con queso feta, aceitunas y vegetales frescos',
        precio: 200,
        imagen: 'https://picsum.photos/200',
      },
    ],
  },
  {
    dia: 'Jueves',
    platos: [
      {
        tipo: 'Regular',
        plato: 'Pescado a la plancha',
        descripcion: 'Filete de pescado fresco a la plancha con guarnición',
        precio: 180,
        imagen: 'https://picsum.photos/200',
      },
      {
        tipo: 'Vegetariano',
        plato: 'Hamburguesa de lentejas',
        descripcion: 'Hamburguesa vegetariana de lentejas con ensalada',
        precio: 150,
        imagen: 'https://picsum.photos/200',
      },
    ],
  },
  {
    dia: 'Viernes',
    platos: [
      {
        tipo: 'Regular',
        plato: 'Filete de ternera',
        descripcion: 'Jugoso filete de ternera a la parrilla con papas fritas',
        precio: 190,
        imagen: 'https://picsum.photos/200',
      },
      {
        tipo: 'Vegetariano',
        plato: 'Pizza de vegetales',
        descripcion: 'Pizza vegetariana con variedad de vegetales frescos',
        precio: 200,
        imagen: 'https://picsum.photos/200',
      },
    ],
  },
];

function menuDelDia(dia, tipo) {
  const menu = menuSemanal.find((menu) => menu.dia === dia);
  const plato = menu.platos.find((plato) => plato.tipo === tipo);
  return plato;
}

function createHtmlMenu(plato) {
  const html = `
    <div class="card bg-primary-light justify-content-end">
      <div class="card-body d-flex flex-row">
        <img src="${plato.imagen}" alt="${plato.plato}" 
        style="height: 200px; width: 200px;" class="card-img-left">
        <div class="d-flex flex-column flex-grow-1">
          <div class="card-header">
            <h3 class="card-title mx-3">${plato.plato}</h3>
          </div>
          <div class="card-text mx-3">
            ${plato.descripcion}
          </div>
          <div class="d-flex justify-content-end mt-auto me-4">
            <div class="align-self-end">
              Precio: $${plato.precio}
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer d-flex justify-content-end">
        <button type="button" class="btn bg-primary-light text-right me-4">
          <span class="primary-color icon-section">
            <i class="material-icons">shopping_cart</i>
          </span>
          Agregar al carrito
        </button>
      </div>
    </div>
  `;
  return html;
}


function getDayName(additionalDays) {
  if (additionalDays < 0 || additionalDays >= 5) {
    return;
  }
  const date = new Date();
  date.setDate(date.getDate() + additionalDays);
  const day = date.getDay();
  const dayName = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  return dayName[day];
}


function getMenuDay(dayOffset, containerId, tipo) {
  const day = getDayName(dayOffset);
  const menuContainer = document.querySelector(`#${containerId}`);
  const plato = menuDelDia(day, tipo);
  const htmlMenu = createHtmlMenu(plato);
  menuContainer.innerHTML = htmlMenu;
}

function getDay(dayOffset, containerId) {
  const day = getDayName(dayOffset);
  if (!day) {
    return;
  }
  const menuContainer = document.querySelector(`#${containerId}`);
  menuContainer.innerHTML = day;
}

document.addEventListener('DOMContentLoaded', function() {
  getMenuDay(0, 'menu_regular_day1', 'Regular');
  getMenuDay(0, 'menu_vegetariano_day1', 'Vegetariano');

  getMenuDay(1, 'menu_regular_day2', 'Regular');
  getMenuDay(1, 'menu_vegetariano_day2', 'Vegetariano');

  getDay(2, 'day3');
  getMenuDay(2, 'menu_regular_day3', 'Regular');
  getMenuDay(2, 'menu_vegetariano_day3', 'Vegetariano');

  getDay(3, 'day4');
  getMenuDay(3, 'menu_regular_day4', 'Regular');
  getMenuDay(3, 'menu_vegetariano_day4', 'Vegetariano');

  getDay(4, 'day5');
  getMenuDay(4, 'menu_regular_day5', 'Regular');
  getMenuDay(4, 'menu_vegetariano_day5', 'Vegetariano');
});

