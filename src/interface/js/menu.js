// Endpoint para obtener el menú del día del backend
const menuEnpoint = 'http://localhost:5000/api/menu';

// Función para obtener el menú del día
async function getMenu() {
  // metodo GET para obtener el menú del día
  const response = await fetch(menuEnpoint, {
    method: 'GET',
  });
  // Si la respuesta es exitosa
  if (response.ok) {
    // Se obtiene el menú del día en formato JSON
    const menu = await response.json();
    // Se retorna el menú del día
    return menu;
  }
}

// Función para editar un plato del menú del día
async function editPlate(plate) {
  // metodo PUT para editar un plato del menú del día
  const response = await fetch(`${menuEnpoint}/${plate.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(plate),
  });
  // Si la respuesta es exitosa
  if (response.ok) {
    // Se obtiene el menú del día en formato JSON
    const menu = await response.json();
    // Se retorna el menú del día
    return menu;
  }
}

// Función para borrar un plato del menú del día
async function deletePlate(plateId) {
  // metodo DELETE para borrar un plato del menú del día
  const response = await fetch(`${menuEnpoint}/${plateId}`, { 
    method: 'DELETE',
  });
  // Si la respuesta es exitosa
  if (response.ok) {
    // Se obtiene el menú del día en formato JSON
    const menu = await response.json();
    // Se retorna el menú del día
    return menu;
  }
}

// Función para crear un plato en el menú del día
async function createPlate(plate) {
  // metodo POST para crear un plato en el menú del día
  const response = await fetch(menuEnpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(plate),
  });
  // Si la respuesta es exitosa
  if (response.ok) {
    // Se obtiene el menú del día en formato JSON
    const menu = await response.json();
    // Se retorna el menú del día
    return menu;
  }
}

// Función para obtener el dia actual
function getCurrentDay() {
  const today = new Date();
  const dayNumber = today.getDay();
  const dayName = getDayName(dayNumber);
  return dayName;
}

// Función para obtener el menú del día
function getPlateOfDay(dayName) {
  const menu = getMenu();
  menu.then((menu) => {
    const plateOfDay = menu.find((plate) => plate.dia === dayName);
    return plateOfDay;
  });
}

// Función html para mostrar el menú del día
function showPlateOfDay(plateOfDay) {
  plateOfDay.then((plate) => {
    const plateOfDayHtml = `
    <div class="card">
      <img src="${plate.imagen}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${plate.plato}</h5>
        <p class="card-text">${plate.descripcion}</p>
        <p class="card-text">Precio: ${plate.precio}</p>
      </div>
    </div>
    `;

    const plateOfDayContainer = document.getElementById('plateOfDay');
    plateOfDayContainer.innerHTML = plateOfDayHtml;
  });
}

// Función para obtener el nombre del día de la semana
function getDayName(additionalDays) {
  if (additionalDays < 0 || additionalDays > 4) {
    return;
  }
  const date = new Date();
  date.setDate(date.getDate() + additionalDays);
  const day = date.getDay();
  const dayName = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  return dayName[day];
}

// Función html para mostrar todo el menú de la semana
function showMenu() {
  const day = getCurrentDay();
  // Obtener el numero del día de la semana
  const dayNumber = dayNumber(day);
  // Recorrer el menú de la semana desde el día actual
  for (let i = dayNumber; i < 5; i++) {
    // Obtener el nombre del día de la semana
    const dayName = getDayName(i);
    // Obtener el menú del día
    const plateOfDay = getPlateOfDay(dayName);
    // Mostrar el menú del día
    showPlateOfDay(plateOfDay);
  }
}

// Inner html para mostrar el menú del día
document.getElementById('menu_semanal').innerHTML = showMenu();
