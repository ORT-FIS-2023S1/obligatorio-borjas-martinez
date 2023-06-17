import Tutor from '../../domain/tutor.js';
import Comedor from '../../domain/comedor.js';
import Resumen from '../../domain/resumen.js';
import Orden from '../../domain/orden.js';
import Plato from '../../domain/plato.js';
import Menu from '../../domain/menu.js';

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

const menuLunes = new Menu(1, [platoRegLunes, platoVegLunes]);
const menuMartes = new Menu(2, [platoRegMartes, platoVegMartes]);
const menuMiercoles = new Menu(3, [platoRegMiercoles, platoVegMiercoles]);
const menuJueves = new Menu(4, [platoRegJueves, platoVegJueves]);
const menuViernes = new Menu(5, [platoRegViernes, platoVegViernes]);

const menuSemanal = [
  menuLunes,
  menuMartes,
  menuMiercoles,
  menuJueves,
  menuViernes,
];

const orden1 = new Orden(
    [platoVegMartes],
    platoVegMartes.getPrecio(),
    'efectivo',
    '20/5/2023',
    comedor.getNombre(),
    alumno,
    tutor.getNombre(),
);

const ordenes = [orden1];

export {alumno, tutor, comedor, resumen, menuSemanal, ordenes};
