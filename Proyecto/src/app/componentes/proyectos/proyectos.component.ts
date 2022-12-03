import { Component } from '@angular/core';
import { ServicioService } from 'src/app/sevicios/servicio.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  dataProy: any;
constructor(private datosPortfolio:ServicioService) { }
ngOnInit(): void {
  this.datosPortfolio.getDatos().subscribe(data =>{
  this.dataProy = data.proyectos;        
  
});
}
}
