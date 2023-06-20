/* eslint-disable max-len */
import Menu from '../menu';
import Plato from '../plato';

/* Jest Cheatsheet https://github.com/sapegin/jest-cheat-sheet */

describe('Menu', () => {
  let menu;
  beforeEach(() => {
    menu = new Menu('Miercoles', [new Plato('Regular', 'Hamburguesa', 'Hamburguesa de carne fresca', 250, '')]);
  });

  describe('Getter', () => {
    test('Deberia devolver el valor correcto para Nombre', () => {
      expect(menu.getDia()).toBe('Miercoles');
    });
    test('Deberia devolver el valor correcto para platos', () => {
      expect(menu.getPlatos()).toEqual([{tipo: 'Regular', titulo: 'Hamburguesa', descripcion: 'Hamburguesa de carne fresca', precio: 250, imagen: ''}]);
    });
  });

  describe('Setter', () => {
    test('Deberia establecer correctamente Dia', () => {
      menu.setDia('Lunes');
      expect(menu.getDia()).toBe('Lunes');
    });
    test('Deberia establecer correctamente Platos', () => {
      menu.setPlatos([new Plato('Vegetariano', 'Ensalada', 'Ensalada saludable', 100, '')]);
      expect(menu.getPlatos()).toEqual([{tipo: 'Vegetariano', titulo: 'Ensalada', descripcion: 'Ensalada saludable', precio: 100, imagen: ''}]);
    });
  });

  describe('addPlato', () => {
    test('Deberia agregar un plato correctamente', () => {
      const nuevoPlato = new Plato('Regular', 'Milanesa', 'De lomo', 300, 'mila.png');
      menu.addPlato({nuevoPlato});
      expect(menu.getPlatos()).toEqual([{tipo: 'Regular', titulo: 'Hamburguesa', descripcion: 'Hamburguesa de carne fresca', precio: 250, imagen: ''}, {nuevoPlato}]);
    });
  });

  describe('deletePlato', () => {
    test('Deberia eliminar un plato correctamente', () => {
      menu.deletePlato({tipo: 'Vegetariano', titulo: 'Ensalada', descripcion: 'Ensalada saludable', precio: 100, imagen: ''});
      expect(menu.getPlatos()).toEqual([{tipo: 'Regular', titulo: 'Hamburguesa', descripcion: 'Hamburguesa de carne fresca', precio: 250, imagen: ''}]);
    });
  });
});
