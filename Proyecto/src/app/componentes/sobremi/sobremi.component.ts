import { Component } from '@angular/core';
import { ServicioService } from 'src/app/sevicios/servicio.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent {
  dataSobreMi: any;
  constructor(private datosPortfolio:ServicioService) { }

  ngOnInit(): void {
    this.datosPortfolio.getDatos().subscribe(data =>{
    this.dataSobreMi = data;        
    
  });
  }
}
