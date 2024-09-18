import Trabajo from './Trabajo.js';

export default class Solicitud{
        constructor(){
            this.Trabajo = [];
            
        this.Trabajo.push(new Trabajo("Proyecto Final","Necesito a un Inge de sistemas...","Joel Armando","Electronica","Vespertino","22-11-2023","23-11-2023"));
        this.Trabajo.push(new Trabajo("Desarrollo de Aplicación Móvil", "Se busca desarrollador con experiencia en iOS y Android.", "Laura Gómez", "Informática", "Matutino", "15-12-2023", "20-12-2023"));
        this.Trabajo.push(new Trabajo("Diseño de Circuito Electrónico", "Buscamos ingeniero electrónico con habilidades en diseño de circuitos.", "Carlos Rodríguez", "Electrónica", "Vespertino", "10-12-2023", "15-12-2023"));
        this.Trabajo.push(new Trabajo("Investigación en Nanotecnología", "Estamos buscando un investigador para proyecto en nanotecnología.", "Ana Martínez", "Ciencias", "Nocturno", "05-12-2023", "10-12-2023"));
        this.Trabajo.push(new Trabajo("Desarrollo Sostenible", "Buscamos profesionales comprometidos con el medio ambiente.", "Ricardo Sánchez", "Ambiental", "Vespertino", "01-12-2023", "05-12-2023"));
        this.Trabajo.push(new Trabajo("Análisis Financiero", "Se busca analista financiero con experiencia en mercados internacionales.", "María Torres", "Finanzas", "Matutino", "25-11-2023", "30-11-2023"));

        }

        getTrabajo(){
            return this.Trabajo;
        }

}