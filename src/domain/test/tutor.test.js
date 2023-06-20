/* eslint-disable max-len */
import Tutor from '../tutor';

describe('Tutor', () => {
  let tutor;

  beforeEach(() => {
    tutor = new Tutor('', '', '', '', '', [], 0);
  });

  test('Debería obtener el nombre correctamente', () => {
    const nombre = 'Juan';
    tutor.setNombre(nombre);
    expect(tutor.getNombre()).toEqual(nombre);
  });

  test('Debería establecer y obtener el apellido correctamente', () => {
    const apellido = 'Pérez';
    tutor.setApellido(apellido);
    expect(tutor.getApellido()).toEqual(apellido);
  });

  test('Debería establecer y obtener el teléfono correctamente', () => {
    const telefono = '099876543';
    tutor.setTelefono(telefono);
    expect(tutor.getTelefono()).toEqual(telefono);
  });

  test('Debería establecer y obtener la dirección correctamente', () => {
    const direccion = 'Mercedes 1234';
    tutor.setDireccion(direccion);
    expect(tutor.getDireccion()).toEqual(direccion);
  });

  test('Debería establecer y obtener el alumno correctamente', () => {
    const alumno = 'María';
    tutor.setAlumno(alumno);
    expect(tutor.getAlumno()).toEqual(alumno);
  });

  test('Debería obtener las órdenes correctamente', () => {
    const ordenes = ['Orden 1', 'Orden 2'];
    tutor.setOrdenes(ordenes);
    expect(tutor.getOrdenes()).toEqual(ordenes);
  });

  test('Debería establecer y obtener el dinero correctamente', () => {
    const dinero = 900;
    tutor.setDinero(dinero);
    expect(tutor.getDinero()).toEqual(dinero);
  });
});
