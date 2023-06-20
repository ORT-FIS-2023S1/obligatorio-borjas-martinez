/* eslint-disable max-len */
import Plato from '../plato';

describe('Plato', () => {
  let plato;

  beforeEach(() => {
    plato = new Plato('', '', '', 0, '');
  });

  test('Debería obtener el tipo correctamente', () => {
    const tipo = 'Vegetariano';
    plato.setTipo(tipo);
    expect(plato.getTipo()).toEqual(tipo);
  });

  test('Debería establecer y obtener el título correctamente', () => {
    const titulo = 'Ensalada César';
    plato.setTitulo(titulo);

    expect(plato.getTitulo()).toEqual(titulo);
  });

  test('Debería establecer y obtener la descripción correctamente', () => {
    const descripcion = 'Deliciosa ensalada con pollo, lechuga, crutones y aderezo';
    plato.setDescripcion(descripcion);

    expect(plato.getDescripcion()).toEqual(descripcion);
  });

  test('Debería establecer y obtener el precio correctamente', () => {
    const precio = 300;
    plato.setPrecio(precio);

    expect(plato.getPrecio()).toEqual(precio);
  });

  test('Debería establecer y obtener la imagen correctamente', () => {
    const imagen = 'imagen.jpg';
    plato.setImagen(imagen);
    expect(plato.getImagen()).toEqual(imagen);
  });
});
