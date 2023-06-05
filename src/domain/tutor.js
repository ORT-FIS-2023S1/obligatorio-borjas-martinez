export class Tutor {
  constructor(nombre, apellido, telefono, direccion, alumno, ordenes,
      billeteraVirtual) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.direccion = direccion;
    this.alumno = alumno;
    this.ordenes = ordenes;
    this.billeteraVirtual = billeteraVirtual;
  }

  getNombre() {
    return this.nombre;
  }
  setNombre(nombre) {
    this.nombre = nombre;
  }

  getApellido() {
    return this.apellido;
  }
  setApellido(apellido) {
    this.apellido = apellido;
  }

  getTelefono() {
    return this.telefono;
  }
  setTelefono(telefono) {
    this.telefono = telefono;
  }

  getDireccion() {
    return this.direccion;
  }
  setDireccion(direccion) {
    this.direccion = direccion;
  }

  getAlumno() {
    return this.alumno;
  }
  setAlumno(alumno) {
    this.alumno = alumno;
  }

  getOrdenes() {
    return this.ordenes;
  }
  setOrdenes(ordenes) {
    this.ordenes = ordenes;
  }

  getBilleteraVirtual() {
    return this.ordenes;
  }
  setBilleteraVirtual(billeteraVirtual) {
    this.billeteraVirtual = billeteraVirtual;
  }
}
