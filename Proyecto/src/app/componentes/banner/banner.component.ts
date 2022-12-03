import { Component } from '@angular/core';
import { ServicioService } from 'src/app/sevicios/servicio.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
data:any;
constructor(private datosPortfolio:ServicioService) { }
ngOnInit(): void {
  this.datosPortfolio.getDatos().subscribe(data =>{
  this.data = data;        
  
});
}
}
