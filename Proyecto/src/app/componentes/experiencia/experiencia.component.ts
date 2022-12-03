import { Component } from '@angular/core';
import { ServicioService } from 'src/app/sevicios/servicio.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  dataExp: any;
  constructor(private datosPortfolio:ServicioService) { }
  ngOnInit(): void {
    this.datosPortfolio.getDatos().subscribe(data =>{
    this.dataExp = data.experiencias;        
    
  });
  }
}
