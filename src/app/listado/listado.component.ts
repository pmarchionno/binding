import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  lista : any[] = [
    {nombre: 'Pablo', estado: 'Activo'},
    {nombre: 'Angélica', estado: 'Activo'},
    {nombre: 'Pedro', estado: 'Inactivo'},
    
  ]
}
