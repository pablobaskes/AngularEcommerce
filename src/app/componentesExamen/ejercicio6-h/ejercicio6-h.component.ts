import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-ejercicio6-h',
  templateUrl: './ejercicio6-h.component.html',
  styleUrls: ['./ejercicio6-h.component.css']
})
export class Ejercicio6HComponent implements OnInit {
  @Input() pedidos : Pedido[] = []
  numPedidos: number
  @Output() itenEmitter : EventEmitter<number>
  constructor() {
    this.itenEmitter = new EventEmitter()
   }

  ngOnInit(): void {
  }
  mandar(){
    this.numPedidos = this.pedidos.length
    console.log(this.numPedidos)
    this.itenEmitter.emit(this.numPedidos)
  }
}
