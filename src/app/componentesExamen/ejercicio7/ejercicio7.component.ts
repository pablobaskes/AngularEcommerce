import { Component, Input, OnInit } from '@angular/core';
import { Vino } from 'src/app/models/vino';

@Component({
  selector: 'app-ejercicio7',
  templateUrl: './ejercicio7.component.html',
  styleUrls: ['./ejercicio7.component.css']
})
export class Ejercicio7Component implements OnInit {
  @Input() vinos : Vino[]
  
  constructor() { }

  ngOnInit(): void {
    
  }

}

