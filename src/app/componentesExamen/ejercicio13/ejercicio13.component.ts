import { Component, Input, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-ejercicio13',
  templateUrl: './ejercicio13.component.html',
  styleUrls: ['./ejercicio13.component.css']
})
export class Ejercicio13Component implements OnInit {
  @Input() pedidos : Pedido[]
  numRiojas: number
  numRiberas : number
  constructor() { }

  ngOnInit(): void {
  }
  ejercicio13(){
    this.numRiberas = 0
    this.numRiojas = 0
    this.pedidos.forEach(pedido => {
      pedido.pedido.forEach(vino => {
        if(vino.denominacion == 'Ribera'){
          this.numRiberas++
        }else{
          this.numRiojas++
        }
      });
    });
    alert('El numero de Riberas es '+this.numRiberas)
    alert('El numero de Riojas es '+this.numRiojas)
  }
}
