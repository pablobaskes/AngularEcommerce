import { Component, Input, OnInit } from '@angular/core';
import { Vino } from 'src/app/models/vino';

@Component({
  selector: 'app-ejercicio14-h',
  templateUrl: './ejercicio14-h.component.html',
  styleUrls: ['./ejercicio14-h.component.css']
})
export class Ejercicio14HComponent implements OnInit {
  @Input() prod : Vino
  constructor() { }

  ngOnInit(): void {
  }

  mostrar(){
    console.log(this.prod.nombre)
  }

}
