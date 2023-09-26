import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-ej6-h',
  templateUrl: './ej6-h.component.html',
  styleUrls: ['./ej6-h.component.css']
})
export class Ej6HComponent implements OnInit {
  @Input() compras : Pedido[]
  @Output() itemEmitter : EventEmitter<number>
  numCompras : number
  constructor() {
    this.itemEmitter = new EventEmitter()
   }

  ngOnInit(): void {
    
  }
  mandar(){
    this.itemEmitter.emit(this.compras.length)
  }
}
