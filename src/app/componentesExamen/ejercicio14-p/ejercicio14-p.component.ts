import { Component, Input, OnInit } from '@angular/core';
import { Vino } from 'src/app/models/vino';

@Component({
  selector: 'app-ejercicio14-p',
  templateUrl: './ejercicio14-p.component.html',
  styleUrls: ['./ejercicio14-p.component.css']
})
export class Ejercicio14PComponent implements OnInit {
  @Input() producto : Vino
  constructor() { }

  ngOnInit(): void {

  }
  mandar(){
    console.log(this.producto.nombre)
  }
}
