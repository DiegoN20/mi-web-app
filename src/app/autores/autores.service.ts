import { Injectable } from "@angular/core";
import { Autor } from "./autor.model";

@Injectable({
  providedIn: 'root'
})

export class AutoresService{

  private autoresLista: Autor[] = [
    {autorId: 1, nombre: 'Vaxi', apellido: 'Drex', gradoAcademico: 'Ingeniero de software'},
    {autorId: 2, nombre: 'Lorenzo', apellido: 'Ramirez', gradoAcademico: 'Matematicas'},
    {autorId: 3, nombre: 'Juan', apellido: 'Alvarez', gradoAcademico: 'Ciencias de la computacion'},
    {autorId: 4, nombre: 'Roberto', apellido: 'Arcila', gradoAcademico: 'Ingenieria de sistemas'}
  ];

  obtenerAutores(){
    return this.autoresLista.slice();
  }
}
