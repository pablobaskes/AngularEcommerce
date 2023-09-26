import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioServiceService } from "../../services/usuario-service.service";
@Component({
  selector: 'app-ejercicio4-p',
  templateUrl: './ejercicio4-p.component.html',
  styleUrls: ['./ejercicio4-p.component.css']
})
export class Ejercicio4PComponent implements OnInit {
  nombre : string
  idUserLoged : string
  userId : string
  users : Usuario[]
  userLoged : Usuario[]
  passLog : string
  constructor(private userServ : UsuarioServiceService) { 
    this.passLog = ''
  }

  ngOnInit(): void {
    this.userServ.getUsuarios().subscribe(res =>{
      this.users = res
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
  userLogado(){
    this.obtenerId()
    this.userLoged = this.users.filter(user =>{
      return user._id == this.userId
    })
    this.idUserLoged = this.userLoged[0]._id
     this.nombre = this.userLoged[0].nombre
    console.log(this.userLoged[0].nombre)
  }
  recibir(passLog : string){
    this.passLog = passLog
    console.log(passLog)
  }
  
}
