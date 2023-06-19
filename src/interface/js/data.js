import Tutor from '../../domain/tutor.js';
import Comedor from '../../domain/comedor.js';
import Resumen from '../../domain/resumen.js';
import Orden from '../../domain/orden.js';
import Plato from '../../domain/plato.js';
import Menu from '../../domain/menu.js';
import Reserva from '../../domain/reserva.js';

const alumno = 'Mariana Perez';

const tutor = new Tutor(
    'Juan',
    'Perez',
    '099123456',
    'Cuareim esq. Mercedes',
    alumno,
    [],
    1000,
);

const comedor = new Comedor(
    'Comedor Colegio 1',
    'Mercedes esq. Cuareim',
    '091987654',
    [],
    'Colegio 1',
    [],
    [],
);

const resumen = new Resumen(
    [],
    [],
    alumno,
    tutor,
);


const platoRegLunes = new Plato(
    'Regular',
    'Spaghetti Bolognese',
    'Deliciosa pasta con salsa bolognesa casera',
    200,
    'https://picsum.photos/200',
);
const platoVegLunes = new Plato(
    'Vegetariano',
    'Pasta Primavera',
    'Pasta con vegetales frescos de temporada',
    200,
    'https://picsum.photos/200',
);

const platoRegMartes = new Plato(
    'Regular',
    'Pollo a la parrilla',
    'Jugoso pollo a la parrilla con verduras',
    200,
    'https://picsum.photos/200',
);

const platoVegMartes = new Plato(
    'Vegetariano',
    'Tofu a la parrilla',
    'Tofu marinado a la parrilla con vegetales',
    200,
    'https://picsum.photos/200',
);

const platoRegMiercoles = new Plato(
    'Regular',
    'Ensalada César',
    'Fresca ensalada con pollo, lechuga y aderezo César',
    200,
    'https://picsum.photos/200',
);

const platoVegMiercoles = new Plato(
    'Vegetariano',
    'Ensalada Mediterránea',
    'Ensalada con queso feta, aceitunas y vegetales frescos',
    200,
    'https://picsum.photos/200',
);

const platoRegJueves = new Plato(
    'Regular',
    'Pescado a la plancha',
    'Filete de pescado fresco a la plancha con guarnición',
    180,
    'https://picsum.photos/200',
);

const platoVegJueves = new Plato(
    'Vegetariano',
    'Tofu a la plancha',
    'Tofu marinado a la plancha con guarnición',
    180,
    'https://picsum.photos/200',
);


const platoRegViernes = new Plato(
    'Regular',
    'Hamburguesa',
    'Hamburguesa de carne con queso, lechuga y tomate',
    200,
    'https://picsum.photos/200',
);

const platoVegViernes = new Plato(
    'Vegetariano',
    'Hamburguesa de lentejas',
    'Hamburguesa de lentejas con lechuga y tomate',
    200,
    'https://picsum.photos/200',
);

const menuLunes = new Menu('Lunes', [platoRegLunes, platoVegLunes]);
const menuMartes = new Menu('Martes', [platoRegMartes, platoVegMartes]);
const menuMiercoles = new Menu('Miercoles', [platoRegMiercoles,
  platoVegMiercoles]);
const menuJueves = new Menu('Jueves', [platoRegJueves, platoVegJueves]);
const menuViernes = new Menu('Viernes', [platoRegViernes, platoVegViernes]);

const menuSemanal = [
  menuLunes,
  menuMartes,
  menuMiercoles,
  menuJueves,
  menuViernes,
];
const ordenes = [];
const orden1 = new Orden(
    [platoVegMartes, platoRegMartes],
    platoVegMartes.getPrecio(),
    'efectivo',
    'Martes',
    comedor.getNombre(),
    alumno,
    tutor.getNombre(),
);
ordenes.push(orden1);
const orden2 = new Orden(
    [platoVegJueves],
    platoVegJueves.getPrecio(),
    'efectivo',
    'Jueves',
    comedor.getNombre(),
    alumno,
    tutor.getNombre(),
);
ordenes.push(orden2);
resumen.setOrdenes(ordenes);
resumen.setTotalGastos(ordenes[0].getTotal());

const reservas = [
  {Lunes: []},
  {Martes: []},
  {Miercoles: []},
  {Jueves: []},
  {Viernes: []},
];

// Reserva: platos, diaSemana, comedor, cantidad
const reserva1 = new Reserva(
    platoRegLunes,
    'Lunes',
    comedor.getNombre(),
    3,
);
reservas[0].Lunes.push(reserva1);
const reserva2 = new Reserva(
    platoVegLunes,
    'Lunes',
    comedor.getNombre(),
    7,
);
reservas[0].Lunes.push(reserva2);
const reserva3 = new Reserva(
    platoVegMartes,
    'Martes',
    comedor.getNombre(),
    5,
);
reservas[1].Martes.push(reserva3);
const reserva4 = new Reserva(
    platoRegMartes,
    'Martes',
    comedor.getNombre(),
    2,
);
reservas[1].Martes.push(reserva4);
const reserva5 = new Reserva(
    platoRegMiercoles,
    'Miercoles',
    comedor.getNombre(),
    1,
);
reservas[2].Miercoles.push(reserva5);
const reserva6 = new Reserva(
    platoVegMiercoles,
    'Miercoles',
    comedor.getNombre(),
    3,
);
reservas[2].Miercoles.push(reserva6);
const reserva7 = new Reserva(
    platoRegJueves,
    'Jueves',
    comedor.getNombre(),
    1,
);
reservas[3].Jueves.push(reserva7);
const reserva8 = new Reserva(
    platoVegJueves,
    'Jueves',
    comedor.getNombre(),
    0,
);
reservas[3].Jueves.push(reserva8);
const reserva9 = new Reserva(
    platoRegViernes,
    'Viernes',
    comedor.getNombre(),
    1,
);
reservas[4].Viernes.push(reserva9);
const reserva10 = new Reserva(
    platoVegViernes,
    'Viernes',
    comedor.getNombre(),
    0,
);
reservas[4].Viernes.push(reserva10);

export {alumno, tutor, comedor, resumen, menuSemanal, ordenes, reservas};
