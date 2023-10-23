import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { SeguridadService } from '../../seguridad/seguridad.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-lista',
  templateUrl: './menu-lista.component.html',
  styleUrls: ['./menu-lista.component.css']
})
export class MenuListaComponent implements OnInit, OnDestroy {
  @Output() menuToogle = new EventEmitter<void>();

  estadoUsuario: Boolean;
  usuarioSubscription: Subscription;

  constructor(private seguridadService: SeguridadService) { }

  ngOnInit(): void {
    this.usuarioSubscription = this.seguridadService.seguridadCambio.subscribe( status =>{
      this.estadoUsuario = status;
    });
  }

  onCerrarMenu(){
    this.menuToogle.emit();
  }

  terminarSesionMenu(){
    this.onCerrarMenu();
    this.seguridadService.salirSesion();
  }

  ngOnDestroy(){
    this.usuarioSubscription.unsubscribe();
  }

}
