// Definición de la clase Serie
class Serie {
    constructor(id, nombre, canal, temporadas, descripcion, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
        this.descripcion = descripcion || "No hay descripción disponible para esta serie.";
        this.imagen = imagen || "/api/placeholder/800/400";
    }
}