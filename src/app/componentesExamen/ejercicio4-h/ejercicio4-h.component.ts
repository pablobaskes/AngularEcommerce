import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioServiceService } from "../../services/usuario-service.service";
@Component({
  selector: 'app-ejercicio4-h',
  templateUrl: './ejercicio4-h.component.html',
  styleUrls: ['./ejercicio4-h.component.css']
})
export class Ejercicio4HComponent implements OnInit {
  userLoged : Usuario
  userId : string
  users : Usuario[]
  usersLoged : Usuario[]
  @Input() idUserLoged : string
  @Output() itemEmitter = new EventEmitter<string>()
  constructor(private userServ : UsuarioServiceService) {
    
   }

  ngOnInit(): void {
    this.obtenerId()
    this.userServ.getUsuarios().subscribe(res =>{
    this.users = res
      this.usersLoged = this.users.filter(user =>{
        return user._id == this.userId
      })
      console.log(this.usersLoged)
    })
  }
  obtenerId(){
    let userId = localStorage.getItem('userId');
    if (userId) {
      this.userId = userId  
    } else {
      console.error("No se encuentra el item en el localstorage");
    } 
  }
  pasarPass(){
    this.userLoged = this.usersLoged[0]
    this.itemEmitter.emit(this.userLoged.pass)
  }
}
