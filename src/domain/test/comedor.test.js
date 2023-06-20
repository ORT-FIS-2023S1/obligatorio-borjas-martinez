import Comedor from '../comedor';

describe('Comedor', () => {
  let comedor;

  beforeEach(() => {
    comedor = new Comedor('', '', '', [], '', [], []);
  });

  test('Debería obtener el nombre correctamente', () => {
    const nombre = 'Comedor Goes';
    comedor.setNombre(nombre);
    expect(comedor.getNombre()).toEqual(nombre);
  });

  test('Debería establecer y obtener la dirección correctamente', () => {
    const direccion = 'Amezaga';
    comedor.setDireccion(direccion);
    expect(comedor.getDireccion()).toEqual(direccion);
  });

  test('Debería establecer y obtener el teléfono correctamente', () => {
    const telefono = '092345678';
    comedor.setTelefono(telefono);
    expect(comedor.getTelefono()).toEqual(telefono);
  });

  test('Debería obtener el menú semanal correctamente', () => {
    const menuSemanal = ['Lunes: Hamburguesa', 'Martes: Pizza'];
    comedor.setMenuSemanal(menuSemanal);
    expect(comedor.getMenuSemanal()).toEqual(menuSemanal);
  });

  test('Debería establecer y obtener el colegio correctamente', () => {
    const colegio = 'Colegio 2';
    comedor.setColegio(colegio);
    expect(comedor.getColegio()).toEqual(colegio);
  });

  test('Debería obtener las órdenes correctamente', () => {
    const ordenes = ['Orden 1', 'Orden 2'];
    comedor.setOrdenes(ordenes);
    expect(comedor.getOrdenes()).toEqual(ordenes);
  });

  test('Debería obtener los alumnos correctamente', () => {
    const alumnos = ['Alumno 1', 'Alumno 2'];
    comedor.setAlumnos(alumnos);
    expect(comedor.getAlumnos()).toEqual(alumnos);
  });
});
