/* eslint-disable max-len */
import Reserva from '../reserva';
import Plato from '../plato';

describe('Reserva', () => {
  let reserva;

  beforeEach(() => {
    reserva = new Reserva([], '', '', 0);
  });

  test('Debería obtener los platos correctamente', () => {
    const platos = [[new Plato('Regular', 'Hamburguesa', 'Hamburguesa de carne fresca', 250, '')]];
    reserva.setPlatos(platos);
    expect(reserva.getPlatos()).toEqual(platos);
  });

  test('Debería establecer y obtener el día de la semana correctamente', () => {
    const diaSemana = 'Lunes';
    reserva.setDiaSemana(diaSemana);
    expect(reserva.getDiaSemana()).toEqual(diaSemana);
  });

  test('Debería establecer y obtener el comedor correctamente', () => {
    const comedor = 'Comedor Centro';
    reserva.setComedor(comedor);
    expect(reserva.getComedor()).toEqual(comedor);
  });

  test('Debería establecer y obtener la cantidad correctamente', () => {
    const cantidad = 2;
    reserva.setCantidad(cantidad);
    expect(reserva.getCantidad()).toEqual(cantidad);
  });
});
