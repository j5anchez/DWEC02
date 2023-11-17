import { agregarSocio, obtenerUltimoID, } from '../model/sociosModel.js';
import { limpiarFormulario, pintarListaSocios, } from '../view/sociosView.js';

function capturarDatosSocio() {
  const nombre = document.getElementById('fnombre').value;
  const apellido = document.getElementById('fapellido').value;
  const nuevoSocio = {
    id: obtenerUltimoID() + 1,
    nombre: nombre,
    apellido: apellido,
  };
  agregarSocio(nuevoSocio);
  limpiarFormulario();
}
document.getElementById('butAniadirSocio').addEventListener('click', function () {
  capturarDatosSocio();
});
document.getElementById('butPintarSocios').addEventListener('click', function () {
  pintarListaSocios();
});
export {
  capturarDatosSocio,
};
