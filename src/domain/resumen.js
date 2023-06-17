class Resumen {
  constructor(ordenes, totalGastos, alumno, tutor) {
    this.ordenes = ordenes;
    this.totalGastos = totalGastos;
    this.alumno = alumno;
    this.tutor = tutor;
  }

  getOrdenes() {
    return this.ordenes;
  }
  setOrdenes(ordenes) {
    this.ordenes = ordenes;
  }

  getTotalGastos() {
    return this.totalGastos;
  }
  setTotalGastos(totalGastos) {
    this.totalGastos = totalGastos;
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

export default Resumen;
