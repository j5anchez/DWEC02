
let arraySocios = [];
function cargarSociosJSON() {
  let path = '../data/datosSocios.json';
  let request = new Request(path, {
    headers: new Headers({
      'Content-Type': 'text/json',
    }),
    method: 'GET',
  });
  return fetch(request).then(response => response.json());
}
(async () => {
  await aniadirSociosInicialesArray();
})();
function aniadirSociosInicialesArray() {
  return cargarSociosJSON().then(data => {
    console.log('JSON cargado:', data);
    arraySocios = data;
  });
}
function obtenerArraySocios() {
  return arraySocios;
}
function agregarSocio(socio) {
  arraySocios.push(socio);
}
function obtenerUltimoID() {
  if (arraySocios.length === 0) {
    return 1;
  } else {
    return arraySocios[arraySocios.length - 1].id;
  }
}
export { aniadirSociosInicialesArray, cargarSociosJSON, obtenerArraySocios, agregarSocio, obtenerUltimoID, };
