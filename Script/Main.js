import Solicitud from "./Solicitud.js";
import SistemaRecomendacion from "./SistemaRecomendacion.js";

document.addEventListener('DOMContentLoaded', () => {
    const solicitud = new Solicitud();
    const sistemaRecomendacion = new SistemaRecomendacion(solicitud);

    // Obtener referencia al contenedor de tarjetas
    const tarjetasContainer = document.getElementById('tarjetasTrabajosContainer');

    // Simular trabajos jugados (puedes adaptar esto según tus necesidades)
    const trabajosJugados = [];

    // Simular selecciones de filtros (puedes adaptar esto según tus necesidades)
    const carreraSeleccionada = "--- Carrera ---";
    const turnoSeleccionado = "--- Turno ---";

    // Obtener recomendaciones
    const recomendaciones = sistemaRecomendacion.recomendacion(trabajosJugados, carreraSeleccionada, turnoSeleccionado);

    // Renderizar las tarjetas en el contenedor
    recomendaciones.forEach(trabajo => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta-trabajo');
        tarjeta.innerHTML = `
            <h2>${trabajo.titulo}</h2>
            <p>${trabajo.descripcion}</p>
            <p>Solicitante: ${trabajo.solicitante}</p>
            <p>Carrera: ${trabajo.carrera}</p>
            <p>Turno: ${trabajo.turno}</p>
            <p>Fecha de Inicio: ${trabajo.fechainicio}</p>
            <p>Fecha Final: ${trabajo.fechafinal}</p>
        `;
        tarjetasContainer.appendChild(tarjeta);
    });
});
