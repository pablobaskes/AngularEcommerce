import { Component, SimpleChanges } from '@angular/core';
import { Usuario } from './models/usuario';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  nombre : string
  pass : string
  constructor(){
   this.nombre = ''
   this.pass = ''
  }
  ngOnInit(): void {
   
    
  }
  
}
