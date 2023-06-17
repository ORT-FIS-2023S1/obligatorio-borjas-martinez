class Comedor {
  constructor(nombre, direccion, telefono, carta, colegio, ordenes, alumnos) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    // Arreglo
    this.carta = carta;
    this.colegio = colegio;
    // Arreglo
    this.ordenes = ordenes;
    // Arreglo
    this.alumnos = alumnos;
  }

  getNombre() {
    return this.nombre;
  }
  setNombre(nombre) {
    this.nombre = nombre;
  }

  getDireccion() {
    return this.direccion;
  }
  setDireccion(direccion) {
    this.direccion = direccion;
  }

  getTelefono() {
    return this.telefono;
  }
  setTelefono(telefono) {
    this.telefono = telefono;
  }

  getCarta() {
    return this.carta;
  }
  setCarta(carta) {
    this.carta = carta;
  }

  getColegio() {
    return this.colegio;
  }
  setColegio(colegio) {
    this.colegio = colegio;
  }

  getOrdenes() {
    return this.ordenes;
  }
  setOrdenes(ordenes) {
    this.ordenes = ordenes;
  }

  getAlumnos() {
    return this.alumnos;
  }
  setAlumnos(alumnos) {
    this.alumnos = alumnos;
  }

  agregarAlumno(alumno) {
    this.getAlumnos.push(alumno);
  }

  agreagarMenu(menu) {
    this.getCarta.push(menu);
  }
}

export default Comedor;
