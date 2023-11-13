import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { BooksService } from './books.service';
import { MatSelectChange } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-book.nuevo',
  templateUrl:'book-nuevo.component.html'
})

export class BookNuevoComponent{
  selectAutor!: string;
  @ViewChild(MatDatepicker)
  picker!: MatDatepicker<Date>;
  selectAutorTexto!: string;
  fechaPublicacion!: string;

  constructor(private bookService: BooksService, private dialogRef: MatDialog){}

  selected(event: MatSelectChange){
    this.selectAutorTexto = (event.source.selected as MatOption).viewValue;
  }

  guardarLibro(form: NgForm){
    if (form.valid){
      this.bookService.guardarLibro({
        libroId: 1,
        descripcion:form.value.descripcion,
        titulo: form.value.titulo,
        autor: this.selectAutorTexto,
        precio: form.value.precio,
        fechaPublicacion: new Date(this.fechaPublicacion)
      });
      this.dialogRef.closeAll();

    }

  }
}
