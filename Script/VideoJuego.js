export default class VideoJuego{
    constructor(titulo, genero, foto, estrella){
        this.titulo = titulo;
        this.genero = genero;
        this.foto = foto;
        this.estrella = estrella;
        
    }

    getTitulo(){
        return this.titulo;
    }

    getGenero(){
        return this.genero;
    }
    getFoto(){
        return this.foto;
    }

    getEstrella(){
        return this.estrella;
    }
}//Cierra clase