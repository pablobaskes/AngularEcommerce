import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio19-h',
  templateUrl: './ejercicio19-h.component.html',
  styleUrls: ['./ejercicio19-h.component.css']
})
export class Ejercicio19HComponent implements OnInit {
  @Input() num : number
  constructor() { }

  ngOnInit(): void {
  }
  mostrar(){
    alert(this.num)
  }
}
