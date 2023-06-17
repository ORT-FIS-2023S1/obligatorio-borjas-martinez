class Orden {
  constructor(platos, total, metodoPago, fecha, comedor, alumno, tutor) {
    this.platos = platos;
    this.total = total;
    this.metodoPago = metodoPago;
    this.fecha = fecha;
    this.comedor = comedor;
    this.alumno = alumno;
    this.tutor = tutor;
  }

  getPlatos() {
    return this.platos;
  }
  setPlatos(platos) {
    this.platos = platos;
  }

  getTotal() {
    return this.total;
  }
  setTotal(total) {
    this.total = total;
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

export default Orden;
