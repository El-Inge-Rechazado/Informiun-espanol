export default class Trabajo{
    constructor(titulo,descripcion ,solicitante, carrera, turno, fechainicio, fechafinal){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.solicitante = solicitante;
        this.carrera = carrera;
        this.turno = turno;
        this.fechainicio = fechainicio;
        this.fechafinal = fechafinal;
        
    }




    getTitulo(){
        return this.titulo;
    }


    getDescripcion(){
        return this.descripcion;
    }

    getSolicitante(){
        return this.solicitante;
    }
    getCarrera(){
        this.carrera;
    }

    getTurno(){
        this.turno;
    }
    getFechaI(){
        this.fechainicio;
    }
    getFechaI(){
        this.fechafinal;
    }
}//Cierra clase