import { Component } from '@angular/core';
import { ServicioService } from 'src/app/sevicios/servicio.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  dataEdu :any;
  constructor(private datosPortfolio:ServicioService) { }
  ngOnInit(): void {
    this.datosPortfolio.getDatos().subscribe(data =>{
    this.dataEdu = data.educacion;        
    
  });
  }
}
