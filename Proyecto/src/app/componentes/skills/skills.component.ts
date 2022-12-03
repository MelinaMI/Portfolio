import { Component } from '@angular/core';
import { ServicioService } from 'src/app/sevicios/servicio.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  dataSkills: any;
  
  constructor(private datosPortfolio:ServicioService) { }

  ngOnInit(): void {
    this.datosPortfolio.getDatos().subscribe(data =>{
    this.dataSkills = data.skills;        
    
  });
  }
}
