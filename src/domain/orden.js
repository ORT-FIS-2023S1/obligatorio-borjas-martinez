export class Orden {
  constructor(plato, precio, metodoPago, fecha, comedor, alumno, tutor) {
    this.plato = plato;
    this.precio = precio;
    this.metodoPago = metodoPago;
    this.fecha = fecha;
    this.comedor = comedor;
    this.alumno = alumno;
    this.tutor = tutor;
  }

  getPlato() {
    return this.plato;
  }
  setPlato(plato) {
    this.plato = plato;
  }

  getPrecio() {
    return this.precio;
  }
  setPrecio(precio) {
    this.precio = precio;
  }

  getMetodoPago() {
    return this.metodoPago;
  }
  setMetodoPago(metodoPago) {
    this.metodoPago = metodoPago;
  }

  getFecha() {
    return this.fecha;
  }
  setFecha(fecha) {
    this.fecha = fecha;
  }

  getComedor() {
    return this.comedor;
  }
  setComedor(comedor) {
    this.comedor = comedor;
  }

  getAlumno() {
    return this.alumno;
  }
  setAlumno(alumno) {
    this.alumno = alumno;
  }

  getTutor() {
    return this.tutor;
  }
  setTutor(tutor) {
    this.tutor = tutor;
  }
}
