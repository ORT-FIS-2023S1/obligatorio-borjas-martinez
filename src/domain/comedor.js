class Comedor {
  constructor(nombre, direccion, telefono, menuSemanal,
      colegio, ordenes, alumnos) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    // Arreglo
    this.menuSemanal = menuSemanal;
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

  getMenuSemanal() {
    return this.menuSemanal;
  }
  setMenuSemanal(menuSemanal) {
    this.menuSemanal = menuSemanal;
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
