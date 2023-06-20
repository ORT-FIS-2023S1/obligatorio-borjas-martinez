/* eslint-disable max-len */
import Resumen from '../resumen';

describe('Resumen', () => {
  let resumen;

  beforeEach(() => {
    resumen = new Resumen([], 0, '', '');
  });

  test('Debería obtener las órdenes correctamente', () => {
    const ordenes = ['Orden 1'];
    resumen.setOrdenes(ordenes);
    expect(resumen.getOrdenes()).toEqual(ordenes);
  });

  test('Debería establecer y obtener el total de gastos correctamente', () => {
    const totalGastos = 1500;
    resumen.setTotalGastos(totalGastos);
    expect(resumen.getTotalGastos()).toEqual(totalGastos);
  });

  test('Debería establecer y obtener el alumno correctamente', () => {
    const alumno = 'Juan';
    resumen.setAlumno(alumno);
    expect(resumen.getAlumno()).toEqual(alumno);
  });

  test('Debería establecer y obtener el tutor correctamente', () => {
    const tutor = 'María';
    resumen.setTutor(tutor);
    expect(resumen.getTutor()).toEqual(tutor);
  });
});
