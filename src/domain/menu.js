class Menu {
  constructor(dia, platos) {
    this.platos = platos;
    this.dia = dia;
  }

  getPlatos() {
    return this.platos;
  }
  setPlatos(platos) {
    this.platos = platos;
  }
  addPlato(plato) {
    this.platos.push(plato);
  }
  getDia() {
    return this.dia;
  }
  setDia(dia) {
    this.dia = dia;
  }
}
export default Menu;
