import { Component, OnInit } from '@angular/core';
import { Vino } from 'src/app/models/vino';
import { CarritoService } from "../../services/carrito.service";
@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component implements OnInit {
  carrito : Vino[]
  nomsProducts :number[]
  constructor(private carritoServ : CarritoService) { 
    this.carrito = []
    this.nomsProducts = []
  }
  
  ngOnInit(): void {
    this.carritoServ.getPedido().subscribe(res =>{
      this.carrito = res
      this.nomsProducts = this.carrito.map(vino =>{
        return vino.precio * 2
      })
      
    })
  }

}
