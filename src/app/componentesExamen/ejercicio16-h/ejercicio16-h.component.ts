import { Component, Input, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-ejercicio16-h',
  templateUrl: './ejercicio16-h.component.html',
  styleUrls: ['./ejercicio16-h.component.css']
})
export class Ejercicio16HComponent implements OnInit {
  @Input() pedidosIds : string[]
  nombres : string[]
  constructor() { }

  ngOnInit(): void {
  
  }

  mostrar(){
    console.log(this.pedidosIds)
  }

}
