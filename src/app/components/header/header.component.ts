import { Component, OnInit } from '@angular/core';
import { BuscadorService } from "../../services/buscador.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cad : string
  denominacion : string
  constructor(private buscadorService : BuscadorService, private router : Router) { 
    this.cad = ''
  }

  ngOnInit(): void {
  }
  updateData(){
    this.buscadorService.updateCad(this.cad)
  }

  updateRioja(){
    this.denominacion = 'Rioja'
    this.buscadorService.updateDeno(this.denominacion)
  }
  updateRibera(){
    this.denominacion = 'Ribera'
    this.buscadorService.updateDeno(this.denominacion)
  }
  navegar(){
    this.router.navigate(['/compras'])
  }
  logout(){
    localStorage.clear()
    sessionStorage.clear()
    this.router.navigate(['/'])
  }
}
