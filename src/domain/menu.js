export class Menu {
  constructor(platos, categoria, fecha, comedor) {
    this.platos = platos;
    this.categoria = categoria;
    this.fecha = fecha;
    this.comedor = comedor;
  }

  getPlatos() {
    return this.platos;
  }
  setPlatos(platos) {
    this.platos = platos;
  }

  getCategoria() {
    return this.categoria;
  }
  setCategoria(categoria) {
    this.categoria = categoria;
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

  agregarPlato(plato) {
    this.getPlatos.push(plato);
  }
  eliminarPlato(plato) {
    const index = this.getPlatos.indexOf(plato);
    if ( index !== -1) {
      this.getMenu.splice(index, 1);
    } else {
      throw new Error({message: 'El plato no se encuentra en el menu'});
    }
  }

  obtenerPlato(plato) {
    return this.getPlatos.indexOf(plato);
  }

  editarPlato(plato, indice) {
    const {opcion, precio, fecha, stock, restricciones} = plato;
    this.getPlatos[indice] = {
      opcion: opcion,
      precio: precio,
      fecha: fecha,
      stock: stock,
      restricciones: restricciones,
    };
  }
}


