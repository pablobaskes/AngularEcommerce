import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ejercicio8-h',
  templateUrl: './ejercicio8-h.component.html',
  styleUrls: ['./ejercicio8-h.component.css']
})
export class Ejercicio8HComponent implements OnInit {
  @Input() numCompras : number
  @Output() itemEmitter : EventEmitter<string>
  constructor() { 
    this.itemEmitter = new EventEmitter()
  }

  ngOnInit(): void {
    
  }
  informarAlPadre(){
    if(this.numCompras>0){
      this.itemEmitter.emit("El usuario ha hecho alguna compra")
    }else{
      this.itemEmitter.emit("El usuario no ha comprado nunca")
    }
    
  }

}
