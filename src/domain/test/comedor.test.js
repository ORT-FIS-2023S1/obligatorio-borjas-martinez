/* eslint-disable max-len */
import Comedor from '../comedor';

/* Jest Cheatsheet https://github.com/sapegin/jest-cheat-sheet */

// Pruebas unitarias de la clase Comedor
describe('Comedor', () => {
  // Prueba unitaria del constructor
  // nombre, direccion, telefono, menuSemanal, colegio, ordenes, alumnos
  describe('constructor', () => {
    const comedor = new Comedor(
        'Comedor Colegio 1',
        'Mercedes esq. Cuareim',
        '091987654',
        [],
        'Colegio 1',
        [],
        [],
    );

    test('Deberia devolver el valor correcto para Nombre', () => {
      expect(comedor.nombre).toBe('Comedor Colegio 1');
    });
    test('Deberia devolver el valor correcto para Direccion', () => {
      expect(comedor.direccion).toBe('Mercedes esq. Cuareim');
    });
    test('Deberia devolver el valor correcto para Telefono', () => {
      expect(comedor.telefono).toBe('091987654');
    });
    test('Deberia devolver el valor correcto para Menu Semanal', () => {
      expect(comedor.menuSemanal).toEqual([]);
    });
    test('Deberia devolver el valor correcto para Colegio', () => {
      expect(comedor.colegio).toBe('Colegio 1');
    });
    test('Deberia devolver el valor correcto para Ordenes', () => {
      expect(comedor.ordenes).toEqual([]);
    });
    test('Deberia devolver el valor correcto para Alumnos', () => {
      expect(comedor.alumnos).toEqual([]);
    });
  });

  // Pruebas unitarias de los getter
  describe('Getter', () => {
    const comedor = new Comedor(
        'Comedor Colegio 2',
        'Cuareim esq. Mercedes',
        '099111456',
        [],
        'Colegio 2',
        [],
        [],
    );
    test('Deberia devolver el valor correcto para Nombre', () => {
      expect(comedor.getNombre()).toBe('Comedor Colegio 2');
    });
    test('Deberia devolver el valor correcto para Direccion', () => {
      expect(comedor.getDireccion()).toBe('Cuareim esq. Mercedes');
    });
    test('Deberia devolver el valor correcto para Telefono', () => {
      expect(comedor.getTelefono()).toBe('099111456');
    });
    test('Deberia devolver el valor correcto para Menu Semanal', () => {
      expect(comedor.getMenuSemanal()).toEqual([]);
    });
    test('Deberia devolver el valor correcto para Colegio', () => {
      expect(comedor.getColegio()).toBe('Colegio 2');
    });
    test('Deberia devolver el valor correcto para Ordenes', () => {
      expect(comedor.getOrdenes()).toEqual([]);
    });
    test('Deberia devolver el valor correcto para Alumnos', () => {
      expect(comedor.getAlumnos()).toEqual([]);
    });
  });

  // Pruenas unitarias de los setter
  describe('Setter', () => {
    const comedor = new Comedor();
    comedor.setNombre('Comedor Colegio 3');
    comedor.setDireccion('Mercedes esq. Cuareim 001');
    comedor.setTelefono('099222567');
    comedor.setMenuSemanal([]);
    comedor.setColegio('Colegio 3');
    comedor.setOrdenes([]);
    comedor.setAlumnos([]);

    test('Deberia devolver el valor correcto para Nombre', () => {
      expect(comedor.nombre).toBe('Comedor Colegio 3');
    });
    test('Deberia devolver el valor correcto para Direccion', () => {
      expect(comedor.direccion).toBe('Mercedes esq. Cuareim 001');
    });
    test('Deberia devolver el valor correcto para Telefono', () => {
      expect(comedor.telefono).toBe('099222567');
    });
    test('Deberia devolver el valor correcto para Menu Semanal', () => {
      expect(comedor.menuSemanal).toEqual([]);
    });
    test('Deberia devolver el valor correcto para Colegio', () => {
      expect(comedor.colegio).toBe('Colegio 3');
    });
    test('Deberia devolver el valor correcto para Ordenes', () => {
      expect(comedor.ordenes).toEqual([]);
    });
    test('Deberia devolver el valor correcto para Alumnos', () => {
      expect(comedor.alumnos).toEqual([]);
    });
  });
});
