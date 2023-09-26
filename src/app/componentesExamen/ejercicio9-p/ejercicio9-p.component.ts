import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio9-p',
  templateUrl: './ejercicio9-p.component.html',
  styleUrls: ['./ejercicio9-p.component.css']
})
export class Ejercicio9PComponent implements OnInit {
  userId : string
  constructor() { 
    this.userId = ''
  }
  
  ngOnInit(): void {
    this.obtenerId()
    
  }
  obtenerId(){
    let userId = localStorage.getItem('userId');
    if (userId) {
      this.userId = userId  
    } else {
      console.error("No se encuentra el item en el localstorage");
    } 
  }
  recibir(mensaje : string){
    alert(mensaje)
  }
}
