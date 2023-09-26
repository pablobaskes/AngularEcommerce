import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioServiceService } from "../../services/usuario-service.service";
@Component({
  selector: 'app-ej4-p',
  templateUrl: './ej4-p.component.html',
  styleUrls: ['./ej4-p.component.css']
})
export class Ej4PComponent implements OnInit {
  userId : string
  users : Usuario[]
  logedUserNom : string
  pass : string
  constructor(private userSrv : UsuarioServiceService) { 
    this.logedUserNom = ''
    this.pass = ''
   }

  ngOnInit(): void {
    this.obtenerId()
    this.buscarUserLoged()
  }
  obtenerId(){
    let userId = localStorage.getItem('userId');
    if (userId) {
      this.userId = userId  
    } else {
      console.error("No se encuentra el item en el localstorage");
    } 
  }
  buscarUserLoged(){
    this.userSrv.getUsuarios().subscribe(res =>{
      this.users = res
      
      let loged
      loged = this.users.find(user =>{
        return user._id == this.userId
      })
      console.log(loged)
      if(loged){
        this.logedUserNom = loged.nombre
      }
    })
  }
  recibir(pass : string){
    this.pass = pass
  }
}
