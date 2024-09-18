import Trabajo from "./Trabajo.js";
import Solicitud from "./Solicitud.js";

export default class SistemaRecomendacion {

    constructor(solicitud) {
        this.solicitud = solicitud;
    }

    recomendacion(trabajosJugados, carrera, turno) {
        const recomendaciones = [];

        for (const trabajo of this.solicitud.getTrabajo()) {
            const auxCarrera = trabajo.getCarrera();
            const auxTitulo = trabajo.getTitulo();
            const auxTurno = trabajo.getTurno();

            if (
                (carrera === "--- Carrera ---" || auxCarrera.toLowerCase() === carrera.toLowerCase()) &&
                (turno === "--- Turno ---" || auxTurno.toLowerCase() === turno.toLowerCase()) &&
                !trabajosJugados.includes(auxTitulo)
            ) {
                recomendaciones.push({
                    titulo: auxTitulo,
                    descripcion: trabajo.getDescripcion(),
                    solicitante: trabajo.getSolicitante(),
                    carrera: auxCarrera,
                    turno: auxTurno,
                    fechainicio: trabajo.getFechaI(),
                    fechafinal: trabajo.getFechaF(),
                });
            }
        }
        return recomendaciones;
    }
}
