import { cargarSociosJSON, obtenerArraySocios, } from '../model/sociosModel.js';
const contenedorEscribirSocios = document.getElementById('contenedorPintarSocios');
function pintarListaSocios() {
    contenedorEscribirSocios.innerHTML = '';
    cargarSociosJSON().then(() => {
        const arraySocios = obtenerArraySocios();
        for (const socio of arraySocios) {
            const nuevoParrafo = document.createElement('p');
            nuevoParrafo.textContent = `Socio número ${socio.id}: ${socio.nombre} ${socio.apellido}`;
            contenedorEscribirSocios.appendChild(nuevoParrafo);
        }
    });
}
function limpiarFormulario() {
    document.getElementById('fnombre').value = '';
    document.getElementById('fapellido').value = '';
}
export { pintarListaSocios, limpiarFormulario, };