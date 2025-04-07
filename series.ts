export class Serie {
  id: number;
  nombre: string;
  canal: string;
  temporadas: number

  constructor(id: number, nombre: string, canal: string, temporadas: number) {
    this.id = id;
    this.nombre = nombre;
    this.canal = canal;
    this.temporadas = temporadas
  }
}
