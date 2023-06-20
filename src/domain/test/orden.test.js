/* eslint-disable max-len */
// class Orden {
//   constructor(platos, total, metodoPago, dia, comedor, alumno, tutor) {
//     this.platos = platos;
//     this.total = total;
//     this.metodoPago = metodoPago;
//     this.dia = dia;
//     this.comedor = comedor;
//     this.alumno = alumno;
//     this.tutor = tutor;
//   }

//   getPlatos() {
//     return this.platos;
//   }
//   setPlatos(platos) {
//     this.platos = platos;
//   }

//   getTotal() {
//     return this.total;
//   }
//   setTotal(total) {
//     this.total = total;
//   }

//   getMetodoPago() {
//     return this.metodoPago;
//   }
//   setMetodoPago(metodoPago) {
//     this.metodoPago = metodoPago;
//   }

//   getDia() {
//     return this.dia;
//   }
//   setDia(dia) {
//     this.dia = dia;
//   }

//   getComedor() {
//     return this.comedor;
//   }
//   setComedor(comedor) {
//     this.comedor = comedor;
//   }

//   getAlumno() {
//     return this.alumno;
//   }
//   setAlumno(alumno) {
//     this.alumno = alumno;
//   }

//   getTutor() {
//     return this.tutor;
//   }
//   setTutor(tutor) {
//     this.tutor = tutor;
//   }
// }

// export default Orden;


import Orden from '../orden';
import Plato from '../plato';

describe('Orden', () => {
  let orden;
  beforeEach(() => {
    orden = new Orden([], 0, '', '', '', '', '');
  });

  describe( 'Getters', () => {
    test('Debería establecer y obtener los platos correctamente', () => {
      const platos = [[new Plato('Regular', 'Hamburguesa', 'Hamburguesa de carne fresca', 250, '')]];
      orden.setPlatos(platos);
      expect(orden.getPlatos()).toEqual(platos);
    });

    test('Debería establecer y obtener el total correctamente', () => {
      const total = 100;
      orden.setTotal(total);
      expect(orden.getTotal()).toEqual(total);
    });

    test('Debería establecer y obtener el método de pago correctamente', () => {
      const metodoPago = 'Tarjeta de crédito';
      orden.setMetodoPago(metodoPago);
      expect(orden.getMetodoPago()).toEqual(metodoPago);
    });

    test('Debería establecer y obtener el día correctamente', () => {
      const dia = 'Lunes';
      orden.setDia(dia);
      expect(orden.getDia()).toEqual(dia);
    });

    test('Debería establecer y obtener el comedor correctamente', () => {
      const comedor = 'Comedor A';
      orden.setComedor(comedor);
      expect(orden.getComedor()).toEqual(comedor);
    });

    test('Debería establecer y obtener el alumno correctamente', () => {
      const alumno = 'Juan';
      orden.setAlumno(alumno);
      expect(orden.getAlumno()).toEqual(alumno);
    });

    test('Debería establecer y obtener el tutor correctamente', () => {
      const tutor = 'María';
      orden.setTutor(tutor);
      expect(orden.getTutor()).toEqual(tutor);
    });
  });
});
