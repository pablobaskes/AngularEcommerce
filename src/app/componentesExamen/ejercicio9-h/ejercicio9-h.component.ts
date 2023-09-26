import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioServiceService } from "../../services/usuario-service.service";
@Component({
  selector: 'app-ejercicio9-h',
  templateUrl: './ejercicio9-h.component.html',
  styleUrls: ['./ejercicio9-h.component.css']
})
export class Ejercicio9HComponent implements OnInit {
  @Input() iduser : string
  @Output() itemEmitter : EventEmitter<string>
  usuarios : Usuario[]
  constructor(private userService : UsuarioServiceService) { 
    this.itemEmitter = new EventEmitter()
  }
  
  ngOnInit(): void {
    
  }
  ejercicio10(){
    this.userService.getUsuarios().subscribe(res =>{
      this.usuarios = res
      this.usuarios.map(user => {
        alert(this.iduser +' '+user._id)
        if(user._id != this.iduser){
          this.userService.deleteUsuario(user._id)
        }     
      });
    })
    this.informar()
  }

  informar(){
    
    this.itemEmitter.emit("se han eliminado los usuarios")
  }

}
