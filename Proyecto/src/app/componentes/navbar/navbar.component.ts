import { Component } from '@angular/core';
import { ServicioService } from 'src/app/sevicios/servicio.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  dataNav: any;
  iconNav: any;
  constructor(private datosPortfolio:ServicioService) { }
  ngOnInit(): void {
    this.datosPortfolio.getDatos().subscribe(data =>{
    this.dataNav = data.redes;        
    this.iconNav = data;
  });
  }
}
