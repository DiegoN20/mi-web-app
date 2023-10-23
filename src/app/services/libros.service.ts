import { Subject } from "rxjs";

export class LibrosService {

  librosSubject = new Subject();

  private libros = [
    'Libro de Diego',
    'Libro de Aritmetica',
    'El Grafico Revista',
  ];

  agregarLibro(libroNombre: string) {
    this.libros.push(libroNombre);
    this.librosSubject.next(true);
  }

  eliminarLibro(libroNombre: string){
    this.libros = this.libros.filter(x => x !== libroNombre);
    this.librosSubject.next(true);
  }

  obtenerLibros() {
    return [...this.libros];
  }
}
