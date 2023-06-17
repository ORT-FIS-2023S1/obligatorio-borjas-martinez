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

  getDia() {
    return this.dia;
  }
  setDia(dia) {
    this.dia = dia;
  }
}
export default Menu;
